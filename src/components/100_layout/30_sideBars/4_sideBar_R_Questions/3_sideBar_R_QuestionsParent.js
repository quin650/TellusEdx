import React, { useState, useRef, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar_R_QuestionsChild from "./4_sideBar_R_QuestionsChild";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsParent = ({ testNumber, questionNumber, questionData, previouslyCheckedID, get_ChosenAnswerID, startGradingTest }) => {
	const dispatch = useDispatch();
	const sideBar_L_isOpen_rdx = useSelector(({ user }) => user.sideBar_L_isOpen_rdx);
	const question = questionData.question;
	const answersData = questionData.answers;
	const [previousAnswerID, setPreviousAnswerID] = useState(null);
	const [answerIDToUncheck, setAnswerIDToUncheck] = useState(null);

	const get_newlyCheckedID = (newAnswerID, correctOrIncorrect) => {
		if (previousAnswerID && newAnswerID !== previousAnswerID) {
			setAnswerIDToUncheck(previousAnswerID);
		}
		setPreviousAnswerID(newAnswerID);
		get_ChosenAnswerID(newAnswerID, correctOrIncorrect);
	};

	const gotoQuestion = () => {
		console.log("going to question");
	};

	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const questionData_ifSubmitted = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx] || null;

	// useEffect(() => {
	// 	Array.from({ length: 36 }, (_, i) => i + 1).map((i) => {
	// 		const questionData1 = questionData_ifSubmitted?.[i];
	// 		if (questionData1) {
	// 			console.log("i:", i);
	// 			const answerData1 = questionData1[2];
	// 			console.log("answerData1", answerData1);
	// 		}
	// 	});
	// }, []);

	const [quickNavBar, setQuickNavBar] = useState(null);
	useEffect(() => {
		setQuickNavBar(
			Array.from({ length: 36 }, (_, i) => i + 1).map((i) => {
				const questionData1 = questionData_ifSubmitted?.[i];
				if (questionData1) {
					return (
						<li
							key={i}
							onClick={gotoQuestion}
							className={`${classes["quickNavButton"]} ${questionData1[2] !== null ? (questionData1[2] ? classes.inCorrect : classes.correct) : ""}`}
						>
							{i}
						</li>
					);
				} else {
					return (
						<li key={i} onClick={gotoQuestion} className={classes.quickNavButton}>
							{i}
						</li>
					);
				}
				return null; // Prevent undefined in the array
			})
		);
	}, [questionData_ifSubmitted, gotoQuestion, classes]);

	const quickNavRef = useRef(null);

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
							uncheck={answer.id === answerIDToUncheck}
							startGradingTest={startGradingTest}
						/>
					))}
				</ul>
			</div>
			<div className={`${classes["reasonCorrect"]} ${startGradingTest ? classes.startGradingTest : ""}`}>
				<p>Reason for the correct answer here</p>
			</div>
		</Fragment>
	);
};

export default SideBar_R_QuestionsParent;
