import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import classes from "./30_paginationGUI.module.css";

const PaginationQuestionsGUI = () => {
	const dispatch = useDispatch();
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx);
	const sideBar_R_Questions_wrongAnswers_num_rdx = useSelector(({ user }) => user.sideBar_R_Questions_wrongAnswers_num_rdx);
	const sideBar_R_Questions_retakeFailed_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_retakeFailed_isOpen_rdx);

	const [latestSubmittedQuestion, setLatestSubmittedQuestion] = useState(0);
	const [nextIsActive, setNextIsActive] = useState(false);
	const activePanel_rdx = useSelector(({ user }) => user.activePanel_rdx);

	//! Find and set latest submitted test/question number - for first attempted regular test (Helps find right-limit for pagination)
	//! Find and set latest submitted test/question number - for reattempted failed questions
	useEffect(() => {
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			const testResultsForCurrentTest = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx];
			if (!testResultsForCurrentTest) {
				return;
			}
			const questionNumbers = Object.keys(testResultsForCurrentTest).map(Number);
			setLatestSubmittedQuestion(questionNumbers.length > 0 ? Math.max(...questionNumbers) : 0);
		}
	}, [sideBar_R_QuestionTestResults_rdx, sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_Questions_CurrentQuestionNumber_rdx]);

	//! Prev-Next Page
	const PrevQuestion = useCallback(() => {
		let newQuestionNum;
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx && sideBar_R_Questions_CurrentQuestionNumber_rdx - 1 >= 1) {
			newQuestionNum = sideBar_R_Questions_CurrentQuestionNumber_rdx - 1;
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
		} else if (sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			let numOptions = sideBar_R_Questions_wrongAnswers_num_rdx[sideBar_R_Questions_CurrentTestNumber_rdx];
			const current_idx = numOptions.indexOf(sideBar_R_Questions_CurrentQuestionNumber_rdx);
			if (current_idx > 0) {
				newQuestionNum = numOptions[current_idx - 1];
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
			} else {
				if (current_idx === 0 && sideBar_R_Questions_CurrentTestNumber_rdx > 1) {
					numOptions = sideBar_R_Questions_wrongAnswers_num_rdx[sideBar_R_Questions_CurrentTestNumber_rdx - 1];
					newQuestionNum = numOptions[numOptions.length - 1];
					dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
				}
			}
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch, sideBar_R_Questions_retakeFailed_isOpen_rdx, sideBar_R_Questions_CurrentTestNumber_rdx]);

	const NextQuestion = useCallback(() => {
		let newQuestionNum;
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx && sideBar_R_Questions_CurrentQuestionNumber_rdx + 1 <= 36 && nextIsActive) {
			newQuestionNum = sideBar_R_Questions_CurrentQuestionNumber_rdx + 1;
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
		} else if (sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			let numOptions = sideBar_R_Questions_wrongAnswers_num_rdx[sideBar_R_Questions_CurrentTestNumber_rdx];
			const current_idx = numOptions.indexOf(sideBar_R_Questions_CurrentQuestionNumber_rdx);
			if (current_idx < 36) {
				newQuestionNum = numOptions[current_idx + 1];
			} else {
				if (current_idx === 36 && sideBar_R_Questions_CurrentTestNumber_rdx < 5) {
					numOptions = sideBar_R_Questions_wrongAnswers_num_rdx[sideBar_R_Questions_CurrentTestNumber_rdx + 1];
					newQuestionNum = numOptions[0];
				}
			}
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch, nextIsActive, sideBar_R_Questions_retakeFailed_isOpen_rdx]);

	//! Update pagination right-limits
	useEffect(() => {
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			if (sideBar_R_Questions_CurrentQuestionNumber_rdx !== 36) {
				if (sideBar_R_Questions_CurrentQuestionNumber_rdx <= latestSubmittedQuestion) {
					setNextIsActive(true);
				} else {
					setNextIsActive(false);
				}
			} else if (sideBar_R_Questions_CurrentQuestionNumber_rdx === 36) {
				setNextIsActive(false);
			}
		} else {
			if (sideBar_R_Questions_CurrentQuestionNumber_rdx < sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx) {
				setNextIsActive(true);
			} else {
				setNextIsActive(false);
			}
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, latestSubmittedQuestion, sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx]);

	//! Event Listeners
	const handleKeyDown = useCallback(
		(e) => {
			if (activePanel_rdx === "questions") {
				switch (e.key) {
					case "ArrowLeft":
						PrevQuestion();
						break;
					case "ArrowRight":
						if (nextIsActive) {
							NextQuestion();
						}
						break;
					default:
						break;
				}
			}
		},
		[PrevQuestion, NextQuestion, activePanel_rdx]
	);
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<div className={`${classes["paginationContainer"]} ${activePanel_rdx === "questions" ? classes.isActive : ""}`}>
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
