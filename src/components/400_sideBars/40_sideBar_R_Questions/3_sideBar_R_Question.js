import React, { useState, useRef, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar_R_QuestionsChild from "./4_sideBar_R_MultipleChoiceOption";
import classes from "../../../components/500_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsParent = ({ testNumber, questionNumber, questionData, previouslyCheckedID, get_ChosenAnswerID, startGradingTest, gotoQuestion, showHint }) => {
	const quickNavRef = useRef(null);

	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const questionData_ifSubmitted = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx] || null;
	const sideBar_R_QuestionTestResultsFailed_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResultsFailed_rdx);
	const questionData_ifSubmitted_RetakeFailed = sideBar_R_QuestionTestResultsFailed_rdx[sideBar_R_Questions_CurrentTestNumber_rdx] || null;
	const dictionaryOfTestsAndWrongAnswers_rdx = useSelector(({ user }) => user.dictionaryOfTestsAndWrongAnswers_rdx);
	const sideBar_L_isOpen_rdx = useSelector(({ user }) => user.sideBar_L_isOpen_rdx);
	const sideBar_R_QuestionsIsFailed_rdx = useSelector(({ user }) => user.sideBar_R_QuestionsIsFailed_rdx);

	const question = questionData.question;
	const answersData = questionData.answers;
	const answersHint = questionData.hint;
	const questionImage = questionData.image ? questionData.image : null;

	const get_newlyCheckedID = (newAnswerID, correctOrIncorrect) => {
		get_ChosenAnswerID(newAnswerID, correctOrIncorrect);
	};
	const [quickNavBar, setQuickNavBar] = useState(null);
	useEffect(() => {
		if (!sideBar_R_QuestionsIsFailed_rdx) {
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
		} else {
			setQuickNavBar(
				Array.from({ length: dictionaryOfTestsAndWrongAnswers_rdx[sideBar_R_Questions_CurrentTestNumber_rdx - 1].length }, (_, i) => i + 1).map((i) => {
					let val = dictionaryOfTestsAndWrongAnswers_rdx[sideBar_R_Questions_CurrentTestNumber_rdx - 1][i - 1] + 1;
					const questionAnswerData_RetakeFailed = questionData_ifSubmitted_RetakeFailed?.[val];
					if (val) {
						if (questionAnswerData_RetakeFailed) {
							return (
								<li
									key={val}
									onClick={() => gotoQuestion(val)}
									className={`${classes["quickNavButton"]} ${questionAnswerData_RetakeFailed[2] ? classes.correct : classes.inCorrect}`}
								>
									{val}
								</li>
							);
						} else {
							return (
								<li key={val} className={classes.quickNavButton}>
									{val}
								</li>
							);
						}
					}
				})
			);
		}
	}, [questionData_ifSubmitted, questionData_ifSubmitted_RetakeFailed, gotoQuestion]);

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
	const [hasQuestionImage, setHasQuestionImage] = useState(true);
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
