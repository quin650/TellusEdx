import React, { useState, useRef, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar_R_QuestionsChild from "./4_sideBar_R_QuestionsChild";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsParent = ({ testNumber, questionNumber, questionData, previouslyCheckedID, get_ChosenAnswerID, startGradingTest, gotoQuestion, showHint }) => {
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const questionData_ifSubmitted = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx] || null;
	const sideBar_L_isOpen_rdx = useSelector(({ user }) => user.sideBar_L_isOpen_rdx);
	const quickNavRef = useRef(null);
	const question = questionData.question;
	const answersData = questionData.answers;
	const answersHint = questionData.hint;

	const get_newlyCheckedID = (newAnswerID, correctOrIncorrect) => {
		get_ChosenAnswerID(newAnswerID, correctOrIncorrect);
	};

	const [quickNavBar, setQuickNavBar] = useState(null);
	useEffect(() => {
		setQuickNavBar(
			Array.from({ length: 36 }, (_, i) => i + 1).map((i) => {
				const questionAnswerData = questionData_ifSubmitted?.[i];
				if (questionAnswerData) {
					return (
						<li key={i} onClick={() => gotoQuestion(i)} className={`${classes["quickNavButton"]} ${questionAnswerData[2] ? classes.correct : classes.inCorrect}`}>
							{i}
						</li>
					);
				} else {
					return (
						<li key={i} className={classes.quickNavButton}>
							{i}
						</li>
					);
				}
			})
		);
	}, [questionData_ifSubmitted, gotoQuestion]);

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

	return (
		<Fragment>
			<div className={classes.handbook_header_section_question}>
				<span className={classes.headerTop}>
					<p className={classes.questionNumber}>Question {questionNumber} of 36</p>
					<p className={classes.testNumber}>Test {testNumber}</p>
				</span>
				<h2>{question}</h2>
			</div>
			<div className={classes.quickNavContainer}>
				<div ref={quickNavRef} className={classes.quickNavWrapper}>
					<div className={classes.quickNav}>{quickNavBar}</div>
					<div className={classes.scrollPortion}></div>
				</div>
			</div>
			<div className={`${classes["question_content"]} ${sideBar_L_isOpen_rdx && classes.sideBar_L_isOpen}`}>
				<ul>
					{answersData.map((answer) => (
						<SideBar_R_QuestionsChild
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
