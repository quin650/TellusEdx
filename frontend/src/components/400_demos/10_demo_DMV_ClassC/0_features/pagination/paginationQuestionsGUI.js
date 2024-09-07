import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../../a.reducers/auth_Reducers";

import classes from "./paginationGUI.module.css";

const PaginationQuestionsGUI = ({ commenceCheckIfCorrect }) => {
	const dispatch = useDispatch();
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);
	const sideBar_R_QuestionSelectedPageNum_rdx = useSelector(({ user }) => user.sideBar_R_QuestionSelectedPageNum_rdx);

	//!Prev-Next Page
	const PrevQuestion = useCallback(() => {
		let newQuestionNum = sideBar_R_Questions_CurrentQuestionNumber_rdx - 1;
		if (newQuestionNum >= 1) {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
			dispatch(userReducerActions.sideBar_R_Questions_setSelectedQuestionNumber(newQuestionNum));
			localStorage.setItem("question", newQuestionNum);
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch]);
	const NextQuestion = useCallback(() => {
		let newQuestionNum = sideBar_R_Questions_CurrentQuestionNumber_rdx + 1;
		if (newQuestionNum <= 36) {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
			dispatch(userReducerActions.sideBar_R_Questions_setSelectedQuestionNumber(newQuestionNum));
			localStorage.setItem("question", newQuestionNum);
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch]);
	// Event listeners -- Left(Prev)-Right(Next)
	const handleKeyDown = useCallback(
		(e) => {
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
		},
		[PrevQuestion, NextQuestion]
	);
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	//Local Storage -Page#
	useEffect(() => {
		let localStorageQuestionNum = localStorage.getItem("question");
		if (localStorageQuestionNum) {
			const parsedQuestionNum = parseInt(localStorageQuestionNum, 10);
			if (sideBar_R_Questions_CurrentQuestionNumber_rdx !== parsedQuestionNum) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(parsedQuestionNum));
				dispatch(userReducerActions.sideBar_R_Questions_setSelectedQuestionNumber(parsedQuestionNum));
			}
		}
	}, []);

	return (
		<div className={classes.paginationContainer}>
			<button id="prev" onClick={PrevQuestion} className={classes.paginationButtonL} disabled={sideBar_R_QuestionSelectedPageNum_rdx === 1}>
				<svg className={`${classes["arrowIconL"]} ${sideBar_R_QuestionSelectedPageNum_rdx === 1 && classes.isInactive}`} viewBox="0 0 24 24">
					<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
				</svg>
			</button>
			<svg className={classes.lineSVG_L} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="0" x2="1" y2="40" />
			</svg>
			<button id="next" onClick={NextQuestion} className={classes.paginationButtonR} disabled={sideBar_R_QuestionSelectedPageNum_rdx === 36 || !commenceCheckIfCorrect}>
				<svg
					className={`${classes["arrowIconR"]} ${sideBar_R_QuestionSelectedPageNum_rdx === 36 || (!commenceCheckIfCorrect && classes.isInactive)}`}
					viewBox="0 0 24 24"
				>
					<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
				</svg>
			</button>
		</div>
	);
};

export default PaginationQuestionsGUI;
