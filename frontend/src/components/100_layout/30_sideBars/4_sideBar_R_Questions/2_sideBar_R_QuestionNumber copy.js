import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import SideBar_R_QuestionsParent from "./3_sideBar_R_QuestionsParent";
import PaginationQuestionsGUI from "../../../400_demos/10_demo_DMV_ClassC/0_features/pagination/paginationQuestionsGUI";
import data from "../../../400_demos/10_demo_DMV_ClassC/data/questions.json";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionNumber = () => {
	// State
	const [submitIsActive, setSubmitIsActive] = useState(false);
	const [commenceCheckIfCorrect, setCommenceCheckIfCorrect] = useState(false);
	const [questionComponent, setQuestionComponent] = useState(null);
	const [newQuestion, setNewQuestion] = useState(false);

	const dispatch = useDispatch();
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);

	useEffect(() => {
		const questionsSubmittedData = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[sideBar_R_Questions_CurrentQuestionNumber_rdx] || null;
		const questionData = data.questions.find(
			(question) => question.testNumber === sideBar_R_Questions_CurrentTestNumber_rdx && question.questionNumber === sideBar_R_Questions_CurrentQuestionNumber_rdx
		);

		if (questionsSubmittedData) {
			console.log("setting commenceCheckIfCorrect to true");
			setCommenceCheckIfCorrect(true);
			setChosenAnswerID(questionsSubmittedData[1]);
		} else {
			console.log("setting commenceCheckIfCorrect to false");
			setCommenceCheckIfCorrect(false);
			setChosenAnswerID(null);
		}

		if (questionData || questionsSubmittedData) {
			setQuestionComponent(
				<SideBar_R_QuestionsParent
					questionData={questionData}
					theChosenAnswerID={theChosenAnswerID}
					commenceCheckIfCorrect={commenceCheckIfCorrect}
					questionsSubmittedData={questionsSubmittedData}
				/>
			);
		}
	}, [sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_Questions_CurrentQuestionNumber_rdx]);

	useEffect(() => {
		const questionsSubmittedData = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[sideBar_R_Questions_CurrentQuestionNumber_rdx] || null;
		const questionData = data.questions.find(
			(question) => question.testNumber === sideBar_R_Questions_CurrentTestNumber_rdx && question.questionNumber === sideBar_R_Questions_CurrentQuestionNumber_rdx
		);

		if (questionData || questionsSubmittedData) {
			setQuestionComponent(
				<SideBar_R_QuestionsParent
					questionData={questionData}
					theChosenAnswerID={theChosenAnswerID}
					commenceCheckIfCorrect={commenceCheckIfCorrect}
					questionsSubmittedData={questionsSubmittedData}
				/>
			);
		}
	}, [commenceCheckIfCorrect]);

	const [chosenAnswerID, setChosenAnswerID] = useState(null);
	const theChosenAnswerID = (id) => {
		setChosenAnswerID(id);
		setSubmitIsActive(id > 0);
	};

	// Button Actions
	const cancelButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Landing());
	};
	const submitButtonAction = () => {
		const testNumber = sideBar_R_Questions_CurrentTestNumber_rdx;
		const currentQuestionNumber = sideBar_R_Questions_CurrentQuestionNumber_rdx;
		dispatch(
			userReducerActions.updateQuestionResults({
				testNumber: testNumber,
				questionNumber: currentQuestionNumber,
				answerData: [currentQuestionNumber, chosenAnswerID],
			})
		);

		setCommenceCheckIfCorrect(true);
	};

	return (
		<div className={classes.handbook_outerContainer2}>
			<div className={classes.handbook_innerContainer}>
				<div className={classes.page_contentContainer}>
					{questionComponent}
					<div className={classes.buttonSection}>
						<button className={classes.button_formatCancel} onClick={cancelButtonAction} type="submit">
							Cancel
						</button>
						<button className={classes.button_formatSubmit} onClick={submitButtonAction} type="submit" disabled={!submitIsActive}>
							Submit
						</button>
					</div>
					<PaginationQuestionsGUI />
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_QuestionNumber;
