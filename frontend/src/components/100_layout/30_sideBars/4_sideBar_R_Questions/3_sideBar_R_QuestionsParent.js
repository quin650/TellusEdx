import React, { useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar_R_QuestionsChild from "./4_sideBar_R_QuestionsChild";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsParent = ({ testNumber, questionNumber, questionData, previouslyCheckedID, get_ChosenAnswerID, startGradingTest, testIsComplete }) => {
	const sideBar_L_isOpen_rdx = useSelector(({ user }) => user.sideBar_L_isOpen_rdx);
	const question = questionData.question;
	const answersData = questionData.answers;
	const [previousAnswerID, setPreviousAnswerID] = useState(null);
	const [answerIDToUncheck, setAnswerIDToUncheck] = useState(null);

	const get_newlyCheckedID = (newAnswerID) => {
		if (previousAnswerID && newAnswerID !== previousAnswerID) {
			setAnswerIDToUncheck(previousAnswerID);
		}
		setPreviousAnswerID(newAnswerID);
		get_ChosenAnswerID(newAnswerID);
	};

	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<span className={classes.headerTop}>
					<p className={classes.questionNumber}>Question {questionNumber} of 36</p>
					<p className={classes.testNumber}>Test {testNumber}</p>
				</span>

				<h2>{question}</h2>
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
			<div className={`${classes["viewTestResults"]} ${testIsComplete ? classes.testIsComplete : ""}`}>
				<p>View Test Results </p>
				<svg className={classes.arrowIconR} viewBox="0 0 24 24">
					<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
				</svg>
			</div>
		</Fragment>
	);
};

export default SideBar_R_QuestionsParent;
