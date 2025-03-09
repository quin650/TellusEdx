import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../../a.reducers/auth_Reducers";
import classes from "./paginationGUI.module.css";

const PaginationQuestionsGUI = () => {
	const dispatch = useDispatch();

	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const dictionaryOfTestsAndWrongAnswers_rdx = useSelector(({ user }) => user.dictionaryOfTestsAndWrongAnswers_rdx);
	const sideBar_R_QuestionsIsFailed_rdx = useSelector(({ user }) => user.sideBar_R_QuestionsIsFailed_rdx);
	const sideBar_R_QuestionTestResultsFailed_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResultsFailed_rdx);

	const [latestSubmittedQuestion, setLatestSubmittedQuestion] = useState(0);
	const [latestSubmittedQuestion_Failed, setLatestSubmittedQuestion_Failed] = useState(0);

	const getLastSubmittedQuestionNumber = useCallback(() => {
		const testResultsForCurrentTest = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx];
		if (!testResultsForCurrentTest) {
			return 0;
		}
		const questionNumbers = Object.keys(testResultsForCurrentTest).map(Number);
		return questionNumbers.length > 0 ? Math.max(...questionNumbers) : 0;
	}, [sideBar_R_QuestionTestResults_rdx, sideBar_R_Questions_CurrentTestNumber_rdx]);

	const [nextIsActive, setNextIsActive] = useState(false);
	useEffect(() => {
		const latest = getLastSubmittedQuestionNumber();
		setLatestSubmittedQuestion(latest);
	}, [getLastSubmittedQuestionNumber, sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_QuestionTestResults_rdx]);

	const getLastSubmittedQuestionNumber_Failed = useCallback(() => {
		const testResultsForCurrentTest_Failed = sideBar_R_QuestionTestResultsFailed_rdx[sideBar_R_Questions_CurrentTestNumber_rdx];
		if (!testResultsForCurrentTest_Failed) {
			return 0;
		}
		const questionNumbers = Object.keys(testResultsForCurrentTest_Failed).map(Number);
		return questionNumbers.length > 0 ? Math.max(...questionNumbers) : 0;
	}, [sideBar_R_QuestionTestResultsFailed_rdx, sideBar_R_Questions_CurrentTestNumber_rdx]);

	useEffect(() => {
		const latest_Failed = getLastSubmittedQuestionNumber_Failed();
		setLatestSubmittedQuestion_Failed(latest_Failed);
	}, [getLastSubmittedQuestionNumber_Failed, sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_QuestionTestResultsFailed_rdx]);

	const [firstQuestionGotWrong_State, setFirstQuestionGotWrong_State] = useState();
	const [lastQuestionGotWrong_State, setLastQuestionGotWrong_State] = useState();
	//!Prev-Next Page
	const PrevQuestion = useCallback(() => {
		if (!sideBar_R_QuestionsIsFailed_rdx) {
			let newQuestionNum = sideBar_R_Questions_CurrentQuestionNumber_rdx - 1;
			if (newQuestionNum >= 1) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
				localStorage.setItem("currentQuestionNumber", newQuestionNum);
			}
		} else {
			let answersGotWrong = dictionaryOfTestsAndWrongAnswers_rdx[sideBar_R_Questions_CurrentTestNumber_rdx - 1];
			let currentIndex = answersGotWrong.findIndex((questionNum) => questionNum === sideBar_R_Questions_CurrentQuestionNumber_rdx - 1);
			let currentQuestion = answersGotWrong[currentIndex] + 1;
			let prevIndex = currentIndex - 1;
			let newQuestionNum = answersGotWrong[prevIndex] + 1;
			let firstQuestionGotWrong = answersGotWrong[0] + 1;
			setFirstQuestionGotWrong_State(firstQuestionGotWrong);
			//! fix ---------------------------------------------------------------------------------------------------------
			if (newQuestionNum >= firstQuestionGotWrong) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
				localStorage.setItem("currentQuestionNumber", newQuestionNum);
			}
			// console.log("answersGotWrong: ", answersGotWrong);
			// console.log("currentIndex:", currentIndex);
			// console.log("currentQuestion:", currentQuestion);
			// console.log("prevIndex:", prevIndex);
			// console.log("PrevQuestion:", newQuestionNum);
			// console.log("---------------------------------------------");
			// console.log("firstQuestionGotWrong:", firstQuestionGotWrong);
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch]);

	const NextQuestion = useCallback(() => {
		if (!sideBar_R_QuestionsIsFailed_rdx) {
			let newQuestionNum = sideBar_R_Questions_CurrentQuestionNumber_rdx + 1;
			if (newQuestionNum <= 36 && nextIsActive) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
				localStorage.setItem("currentQuestionNumber", newQuestionNum);
			}
		} else {
			let answersGotWrong = dictionaryOfTestsAndWrongAnswers_rdx[sideBar_R_Questions_CurrentTestNumber_rdx - 1];
			let currentIndex = answersGotWrong.findIndex((questionNum) => questionNum === sideBar_R_Questions_CurrentQuestionNumber_rdx - 1);
			let currentQuestion = answersGotWrong[currentIndex] + 1;
			let nextIndex = currentIndex + 1;
			let newQuestionNum = answersGotWrong[nextIndex] + 1;
			let lastQuestionGotWrong = answersGotWrong[answersGotWrong.length - 1] + 1;
			setLastQuestionGotWrong_State(lastQuestionGotWrong);
			//! fix ---------------------------------------------------------------------------------------------------------
			if (newQuestionNum <= lastQuestionGotWrong && nextIsActive) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(newQuestionNum));
				localStorage.setItem("currentQuestionNumber", newQuestionNum);
			}
			// console.log("answersGotWrong: ", answersGotWrong);
			// console.log("currentIndex:", currentIndex);
			// console.log("currentQuestion:", currentQuestion);
			// console.log("nextIndex:", nextIndex);
			// console.log("NextQuestion:", newQuestionNum);
			// console.log("---------------------------------------------");
			// console.log("lastQuestionGotWrong:", lastQuestionGotWrong);
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch, nextIsActive]);

	// Event listeners -- Left(Prev)-Right(Next)
	const activePanel = useSelector(({ user }) => user.activePanel);
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

	useEffect(() => {
		if (!sideBar_R_QuestionsIsFailed_rdx) {
			if (sideBar_R_Questions_CurrentQuestionNumber_rdx !== 36) {
				if (sideBar_R_Questions_CurrentQuestionNumber_rdx <= latestSubmittedQuestion) {
					setNextIsActive(true);
				} else {
					setNextIsActive(false);
				}
			} else if (sideBar_R_Questions_CurrentQuestionNumber_rdx === 36) {
				setNextIsActive(false);
			}
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, latestSubmittedQuestion]);

	useEffect(() => {
		if (sideBar_R_QuestionsIsFailed_rdx) {
			if (sideBar_R_Questions_CurrentQuestionNumber_rdx !== lastQuestionGotWrong_State) {
				if (sideBar_R_Questions_CurrentQuestionNumber_rdx <= latestSubmittedQuestion_Failed) {
					setNextIsActive(true);
				} else {
					setNextIsActive(false);
				}
			} else if (sideBar_R_Questions_CurrentQuestionNumber_rdx === lastQuestionGotWrong_State) {
				setNextIsActive(false);
			}
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx, latestSubmittedQuestion_Failed]);

	return (
		<div className={classes.paginationContainer}>
			<button
				id="prev"
				onClick={PrevQuestion}
				className={classes.paginationButtonL}
				disabled={
					!sideBar_R_QuestionsIsFailed_rdx
						? sideBar_R_Questions_CurrentQuestionNumber_rdx === 1
						: sideBar_R_Questions_CurrentQuestionNumber_rdx === firstQuestionGotWrong_State
				}
			>
				<svg
					className={`${classes["arrowIconL"]} ${
						!sideBar_R_QuestionsIsFailed_rdx && sideBar_R_Questions_CurrentQuestionNumber_rdx === 1
							? classes.isInactive
							: sideBar_R_Questions_CurrentQuestionNumber_rdx === firstQuestionGotWrong_State
							? classes.isInactive
							: ""
					}`}
					viewBox="0 0 24 24"
				>
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
