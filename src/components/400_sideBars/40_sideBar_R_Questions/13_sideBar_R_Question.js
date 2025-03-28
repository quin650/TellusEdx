import React, { useState, useRef, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar_R_MultipleChoiceOptions from "./14_sideBar_R_MultipleChoiceOption";
import classes from "../../../components/500_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsParent = ({ testNumber, questionNumber, questionData, previouslyCheckedID, get_ChosenAnswerID, startGradingTest, gotoQuestion, showHint }) => {
	const quickNavRef = useRef(null);
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const questionData_ifSubmitted = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx] || null;
	const sideBar_L_isOpen_rdx = useSelector(({ user }) => user.sideBar_L_isOpen_rdx);
	const sideBar_R_Questions_retakeFailed_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_retakeFailed_isOpen_rdx);
	const [quickNavBar, setQuickNavBar] = useState(null);
	const [hasQuestionImage, setHasQuestionImage] = useState(true);
	const question = questionData.question;
	const answersData = questionData.answers;
	const answersHint = questionData.hint;
	const questionImage = questionData.image ? questionData.image : null;
	// ! new...
	const testResultData = sideBar_R_QuestionTestResults_rdx ? sideBar_R_QuestionTestResults_rdx : null;
	const testResultsData_listForm = Object.entries(testResultData);
	const sideBar_R_Questions_currentAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_currentAttempt_rdx);
	const navItems = [];

	//! loop through questionData to create the quickNavBar
	useEffect(() => {
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			for (let i = 1; i <= 36; i++) {
				const questionAnswerData = questionData_ifSubmitted?.[i];
				const questionAnswerData_gotCorrect = questionAnswerData?.attempts[0]?.isCorrect;
				if (questionAnswerData) {
					navItems.push(
						<li key={i} onClick={() => gotoQuestion(i)} className={`${classes["quickNavButton"]} ${questionAnswerData_gotCorrect ? classes.correct : classes.inCorrect}`}>
							{i}
						</li>
					);
				} else {
					navItems.push(
						<li key={i} className={classes.quickNavButton}>
							{i}
						</li>
					);
				}
			}
		} else {
			for (let testNum_idx = 0; testNum_idx < testResultsData_listForm.length; testNum_idx++) {
				const testNum = testNum_idx + 1;
				const testData = testResultsData_listForm[testNum_idx][1];
				const testData_object = Object.entries(testData);
				for (let questionNum_idx = 0; questionNum_idx < testData_object.length; questionNum_idx++) {
					const questionNum = questionNum_idx + 1;
					const questionData_attempts = testData_object[questionNum_idx][1].attempts;

					const initialAttempt_gotCorrect = questionData_attempts[sideBar_R_Questions_currentAttempt_rdx + 1]
						? questionData_attempts[sideBar_R_Questions_currentAttempt_rdx + 1]?.isCorrect
						: questionData_attempts[sideBar_R_Questions_currentAttempt_rdx]?.isCorrect;
					const question_wasReAttempted = questionData_attempts[sideBar_R_Questions_currentAttempt_rdx + 1] ? true : false;
					const question_wasReAttempted_gotCorrect = questionData_attempts[sideBar_R_Questions_currentAttempt_rdx]?.isCorrect;

					if (!initialAttempt_gotCorrect) {
						if (question_wasReAttempted) {
							navItems.push(
								<li
									key={`${testNum}-${questionNum}`}
									onClick={() => gotoQuestion(questionNum)}
									className={`${classes["quickNavButton"]} ${question_wasReAttempted_gotCorrect ? classes.correct : classes.inCorrect}`}
								>
									{questionNum}
								</li>
							);
						} else {
							navItems.push(
								<li key={`${testNum}-${questionNum}`} className={classes.quickNavButton}>
									{questionNum}
								</li>
							);
						}
					}
				}
			}
		}
		setQuickNavBar(navItems);
	}, [questionData_ifSubmitted, gotoQuestion, sideBar_R_QuestionTestResults_rdx]);

	//! set what multiple choice option is checked
	const get_newlyCheckedID = (newAnswerID, correctOrIncorrect) => {
		get_ChosenAnswerID(newAnswerID, correctOrIncorrect);
	};

	//! event listener for scroll on quickNav
	useEffect(() => {
		const quickNav = quickNavRef.current;
		const handleWheel = (e) => {
			e.preventDefault();
			quickNav.scrollLeft += e.deltaY + e.deltaX;
		};
		quickNav.addEventListener("wheel", handleWheel);
		return () => {
			quickNav.removeEventListener("wheel", handleWheel);
		};
	}, []);

	//! set Image Status - hasQuestionImage
	useEffect(() => {
		if (questionImage === "" || questionImage === null) {
			setHasQuestionImage(false);
		} else {
			setHasQuestionImage(true);
		}
	}, [questionImage, questionData]);
	return (
		<Fragment>
			<div className={classes.handbook_header_section_question}>
				<span className={classes.headerTop}>
					<p className={classes.questionNumber}>Question {questionNumber} of 36</p>
					<p className={classes.testNumber}>Test {testNumber}</p>
				</span>
				<h2>{question}</h2>
			</div>
			<div className={`${classes["quickNavContainer"]} ${hasQuestionImage && classes.hasQuestionImage}`}>
				<div ref={quickNavRef} className={classes.quickNavWrapper}>
					<div className={classes.quickNav}>{quickNavBar}</div>
					<div className={classes.scrollPortion}></div>
				</div>
			</div>
			<div className={`${classes["questionImage"]} ${hasQuestionImage && classes.hasQuestionImage}`}>
				<img src={questionImage} alt="Image"></img>
			</div>

			<div className={`${classes["question_content"]} ${sideBar_L_isOpen_rdx && classes.sideBar_L_isOpen}`}>
				<ul>
					{answersData.map((answer) => (
						<SideBar_R_MultipleChoiceOptions
							key={answer.id}
							id={answer.id}
							text={answer.text}
							isCorrect={answer.isCorrect}
							isPreviouslyChecked={answer.id === previouslyCheckedID}
							get_newlyCheckedID={get_newlyCheckedID}
							startGradingTest={startGradingTest}
						/>
					))}
				</ul>
			</div>
			<div className={`${classes["hint"]} ${showHint ? classes.showHint : ""}`}>
				<p>{answersHint}</p>
			</div>
		</Fragment>
	);
};

export default SideBar_R_QuestionsParent;
