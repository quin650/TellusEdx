import React, { useState, useEffect, useRef, useCallback, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import SideBar_R_QuestionsParent from "./13_sideBar_R_QuestionParent";
import SideBar_R_Questions_layoutFeatures from "./00_sideBar_R_Questions_layoutFeatures";
import PaginationQuestionsGUI from "../../1000_layout/200_layoutFeatures/30_pagination_Questions_GUI";
import data from "../../5000_demos/100_demo_DMV_ClassC/data/questions.json";
import classes from "../../5000_demos/100_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionAndMultipleChoiceContainer = () => {
	const dispatch = useDispatch();
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);
	const sideBar_R_Questions_retakeFailed_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_retakeFailed_isOpen_rdx);
	const [questionComponent, setQuestionComponent] = useState(null);
	const [chosenAnswerID, setChosenAnswerID] = useState(null);
	const [startGradingTest, setStartGradingTest] = useState(false);
	const questionContentRef = useRef(null);
	const get_ChosenAnswerID = (id, correctOrIncorrect) => {
		let attemptIdx;
		setChosenAnswerID(id);
		sideBar_R_Questions_retakeFailed_isOpen_rdx ? (attemptIdx = 2) : (attemptIdx = 1);
		dispatch(
			userReducerActions.updateQuestionResults({
				testNumber: sideBar_R_Questions_CurrentTestNumber_rdx,
				questionNumber: sideBar_R_Questions_CurrentQuestionNumber_rdx,
				answerData: { attemptId: attemptIdx, isCorrect: correctOrIncorrect, selectedId: id },
			})
		);
		setStartGradingTest(true);
	};
	const gotoQuestion = useCallback(
		(testNum, questionNum) => {
			dispatch(userReducerActions.sideBar_R_Questions_GoTo_QuestionNumber({ testNum: testNum, questionNum: questionNum }));
		},
		[sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch]
	);
	const [showHint, setShowHint] = useState(false);
	const getHint = (x) => {
		setShowHint(x);
	};
	//! Render Question Component
	useEffect(() => {
		const questionData = data.questions.find(
			(question) => question.testNumber === sideBar_R_Questions_CurrentTestNumber_rdx && question.questionNumber === sideBar_R_Questions_CurrentQuestionNumber_rdx
		);
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx && questionData) {
			const currentQuestionData_ifSubmitted =
				sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[sideBar_R_Questions_CurrentQuestionNumber_rdx] || null;

			if (currentQuestionData_ifSubmitted) {
				setStartGradingTest(false);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={currentQuestionData_ifSubmitted.attempts?.[0]?.selectedId}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={true}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			} else if (!currentQuestionData_ifSubmitted && !chosenAnswerID) {
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={false}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			} else {
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={startGradingTest}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			}
		} else if (sideBar_R_Questions_retakeFailed_isOpen_rdx && questionData) {
			// changed to attempt = 1
			const currentQuestionData_ifSubmitted =
				sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[sideBar_R_Questions_CurrentQuestionNumber_rdx]?.attempts?.[1]?.selectedId || null;
			console.log("rerendered component");
			if (currentQuestionData_ifSubmitted) {
				console.log("1");
				setStartGradingTest(false);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={
							sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[sideBar_R_Questions_CurrentQuestionNumber_rdx]?.attempts?.[0]?.selectedId
						}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={true}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			} else if (!currentQuestionData_ifSubmitted && !chosenAnswerID) {
				console.log("2");
				console.log("sideBar_R_Questions_CurrentTestNumber_rdx:", sideBar_R_Questions_CurrentTestNumber_rdx);
				console.log("sideBar_R_Questions_CurrentQuestionNumber_rdx:", sideBar_R_Questions_CurrentQuestionNumber_rdx);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={false}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			} else {
				console.log("3");
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={startGradingTest}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			}
		}
	}, [
		sideBar_R_Questions_CurrentTestNumber_rdx,
		sideBar_R_Questions_CurrentQuestionNumber_rdx,
		startGradingTest,
		showHint,
		sideBar_R_Questions_retakeFailed_isOpen_rdx,
		sideBar_R_QuestionTestResults_rdx,
	]);

	const handleQuestionSideBarClick = () => {
		dispatch(userReducerActions.setActivePanel("questions"));
	};

	return (
		<Fragment>
			<div className={classes.handbook_outerContainer2} ref={questionContentRef} onClick={handleQuestionSideBarClick}>
				<div className={classes.page_contentContainer}>
					{questionComponent}
					<PaginationQuestionsGUI />
				</div>
			</div>
			<SideBar_R_Questions_layoutFeatures getHint={getHint} />
		</Fragment>
	);
};

export default SideBar_R_QuestionAndMultipleChoiceContainer;
