import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";

import SideBar_R_QuestionsParent from "./3_sideBar_R_QuestionsParent";
import PaginationQuestionsGUI from "../../../400_demos/10_demo_DMV_ClassC/0_features/pagination/paginationQuestionsGUI";

import data from "../../../400_demos/10_demo_DMV_ClassC/data/questions.json";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionNumber = () => {
	const [questionComponent, setQuestionComponent] = useState(null);
	const [chosenAnswerID, setChosenAnswerID] = useState(null);
	const [chosenAnswerIsCorrectOrIncorrect, setChosenAnswerIsCorrectOrIncorrect] = useState(null);
	const [previouslyCheckedID, setPreviouslyCheckedID] = useState(null);
	const [startGradingTest, setStartGradingTest] = useState(false);
	const [submitButtonIsActive, setSubmitButtonIsActive] = useState(false);

	const dispatch = useDispatch();
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);

	const gotoQuestion = useCallback(
		(questionNum) => {
			console.log("goto question", questionNum);
			dispatch(userReducerActions.sideBar_R_Questions_GoTo_QuestionNumber(questionNum));
		},
		[sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch]
	);

	const get_ChosenAnswerID = (id, correctOrIncorrect) => {
		setChosenAnswerID(id);
		setSubmitButtonIsActive(id > 0);
		setChosenAnswerIsCorrectOrIncorrect(correctOrIncorrect);
	};
	// Find if Test is Complete
	const [testIsComplete, setTestIsComplete] = useState(false);
	useEffect(() => {
		if (sideBar_R_QuestionTestResults_rdx) {
			setTestIsComplete(!!sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[36]);
		}
	}, [sideBar_R_QuestionTestResults_rdx]);

	// Render Question Component
	useEffect(() => {
		const questionData = data.questions.find(
			(question) => question.testNumber === sideBar_R_Questions_CurrentTestNumber_rdx && question.questionNumber === sideBar_R_Questions_CurrentQuestionNumber_rdx
		);
		const currentQuestionData_ifSubmitted =
			sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[sideBar_R_Questions_CurrentQuestionNumber_rdx] || null;

		if (questionData) {
			if (currentQuestionData_ifSubmitted) {
				setPreviouslyCheckedID(currentQuestionData_ifSubmitted[1]);
				setSubmitButtonIsActive(false);
				setStartGradingTest(false);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={currentQuestionData_ifSubmitted[1]}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={true}
						gotoQuestion={gotoQuestion}
					/>
				);
			} else if (!currentQuestionData_ifSubmitted && !chosenAnswerID) {
				setPreviouslyCheckedID(null);
				setSubmitButtonIsActive(false);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null} //-------------------diff
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={false} //---------------------diff
						gotoQuestion={gotoQuestion}
					/>
				);
			} else {
				setPreviouslyCheckedID(null);
				setSubmitButtonIsActive(true);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={startGradingTest}
						gotoQuestion={gotoQuestion}
					/>
				);
			}
		}
	}, [sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_Questions_CurrentQuestionNumber_rdx, startGradingTest, testIsComplete]);
	// Button Actions
	const cancelButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Landing());
	};
	const submitButtonAction = () => {
		dispatch(
			userReducerActions.updateQuestionResults({
				testNumber: sideBar_R_Questions_CurrentTestNumber_rdx,
				questionNumber: sideBar_R_Questions_CurrentQuestionNumber_rdx,
				answerData: [sideBar_R_Questions_CurrentQuestionNumber_rdx, chosenAnswerID, chosenAnswerIsCorrectOrIncorrect],
			})
		);
		setStartGradingTest(true);
	};
	const questionContentRef = useRef(null);
	const handleQuestionSideBarClick = () => {
		dispatch(userReducerActions.setActivePanel("questions"));
	};
	const gotoTestResults = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_TestResults());
	};
	return (
		<div className={classes.handbook_outerContainer2} ref={questionContentRef} onClick={handleQuestionSideBarClick}>
			<div className={classes.page_contentContainer}>
				{questionComponent}

				<div className={classes.bottomSection}>
					<div onClick={gotoTestResults} className={`${classes["viewTestResults"]} ${testIsComplete ? classes.testIsComplete : ""}`}>
						<p>View Test Results </p>
						<svg className={classes.arrowIconR} viewBox="0 0 24 24">
							<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
						</svg>
					</div>
					<div className={classes.buttonSection}>
						<button className={classes.button_formatCancel} onClick={cancelButtonAction} type="submit">
							Cancel
						</button>
						<button className={classes.button_formatSubmit} onClick={submitButtonAction} type="submit" disabled={!submitButtonIsActive}>
							Submit
						</button>
					</div>
				</div>
				<PaginationQuestionsGUI />
			</div>
		</div>
	);
};

export default SideBar_R_QuestionNumber;
