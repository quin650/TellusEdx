import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../../a.reducers/auth_Reducers";
import classes from "./paginationGUI.module.css";

const PaginationQuestionsGUI = () => {
	const dispatch = useDispatch();
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_retakeFailed_isOpen_rdx = false;
	const [latestSubmittedQuestion, setLatestSubmittedQuestion] = useState(0);
	const [nextIsActive, setNextIsActive] = useState(false);
	const activePanel = useSelector(({ user }) => user.activePanel);

	const getLastSubmittedQuestionNumber = useCallback(() => {
		const testResultsForCurrentTest = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx];
		if (!testResultsForCurrentTest) {
			return 0;
		}
		const questionNumbers = Object.keys(testResultsForCurrentTest).map(Number);
		return questionNumbers.length > 0 ? Math.max(...questionNumbers) : 0;
	}, [sideBar_R_QuestionTestResults_rdx, sideBar_R_Questions_CurrentTestNumber_rdx]);

	useEffect(() => {
		const latest = getLastSubmittedQuestionNumber();
		setLatestSubmittedQuestion(latest);
	}, [getLastSubmittedQuestionNumber, sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_QuestionTestResults_rdx]);

	//!Prev-Next Page
	const PrevQuestion = useCallback(() => {
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			let newQuestionNum = sideBar_R_Questions_CurrentQuestionNumber_rdx - 1;
			if (newQuestionNum >= 1) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
				localStorage.setItem("currentQuestionNumber", newQuestionNum);
			}
		} else {
			// add logic for retake failed questions
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch]);
	const NextQuestion = useCallback(() => {
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			let newQuestionNum = sideBar_R_Questions_CurrentQuestionNumber_rdx + 1;
			if (newQuestionNum <= 36 && nextIsActive) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
				localStorage.setItem("currentQuestionNumber", newQuestionNum);
			}
		} else {
			// add logic for retake failed questions
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch, nextIsActive]);
	useEffect(() => {
		if (sideBar_R_Questions_CurrentQuestionNumber_rdx !== 36) {
			if (sideBar_R_Questions_CurrentQuestionNumber_rdx <= latestSubmittedQuestion) {
				setNextIsActive(true);
			} else {
				setNextIsActive(false);
			}
		} else if (sideBar_R_Questions_CurrentQuestionNumber_rdx === 36) {
			setNextIsActive(false);
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, latestSubmittedQuestion]);
	const handleKeyDown = useCallback(
		(e) => {
			if (activePanel === "questions") {
				switch (e.key) {
					case "ArrowLeft":
						PrevQuestion();
						break;
					case "ArrowRight":
						NextQuestion();
						break;
					default:
						break;
				}
			}
		},
		[PrevQuestion, NextQuestion, activePanel]
	);
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<div className={classes.paginationContainer}>
			<button id="prev" onClick={PrevQuestion} className={classes.paginationButtonL} disabled={sideBar_R_Questions_CurrentQuestionNumber_rdx === 1}>
				<svg className={`${classes["arrowIconL"]} ${sideBar_R_Questions_CurrentQuestionNumber_rdx === 1 ? classes.isInactive : ""}`} viewBox="0 0 24 24">
					<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
				</svg>
			</button>
			<svg className={classes.lineSVG_L} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="0" x2="1" y2="40" />
			</svg>
			<button id="next" onClick={NextQuestion} className={classes.paginationButtonR} disabled={!nextIsActive}>
				<svg className={`${classes["arrowIconR"]} ${!nextIsActive ? classes.isInactive : ""}`} viewBox="0 0 24 24">
					<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
				</svg>
			</button>
		</div>
	);
};

export default PaginationQuestionsGUI;
