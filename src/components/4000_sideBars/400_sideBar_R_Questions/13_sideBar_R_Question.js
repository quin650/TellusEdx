import React, { useState, useRef, Fragment, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import SideBar_R_MultipleChoiceOptions from "./14_sideBar_R_MultipleChoiceOption";
import classes from "../../5000_demos/100_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsParent = ({ testNumber, questionNumber, questionData, previouslyCheckedID, get_ChosenAnswerID, startGradingTest, gotoQuestion, showHint }) => {
	const dispatch = useDispatch();
	const quickNavRef = useRef(null);
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);
	const questionData_ifSubmitted = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx] || null;
	const sideBar_L_isOpen_rdx = useSelector(({ user }) => user.sideBar_L_isOpen_rdx);
	const sideBar_R_Questions_retakeFailed_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_retakeFailed_isOpen_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx);
	const sideBar_R_Questions_RecentTestNumber_num_reAttempted_rdx = useSelector(({ user }) => user.sideBar_R_Questions_RecentTestNumber_num_reAttempted_rdx);
	const sideBar_R_Questions_RecentQuestionNumber_num_reAttempted_rdx = useSelector(({ user }) => user.sideBar_R_Questions_RecentQuestionNumber_num_reAttempted_rdx);
	const sideBar_R_Questions_CurrentTestNumber_num_toReAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_num_toReAttempt_rdx);
	const [quickNavBar, setQuickNavBar] = useState(null);
	const [hasQuestionImage, setHasQuestionImage] = useState(true);
	const question = questionData.question;
	const answersData = questionData.answers;
	const answersHint = questionData.hint;
	const questionImage = questionData.image ? questionData.image : null;
	// ! new...
	const testResultData = sideBar_R_QuestionTestResults_rdx ? sideBar_R_QuestionTestResults_rdx : null;
	const testResultsData_listForm = Object.entries(testResultData);
	const sideBar_R_Questions_CurrentAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentAttempt_rdx);
	const navItems = [];

	let sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt = null;

	let sideBar_R_Questions_RecentTestNumber_idx_reAttempted = null;
	let sideBar_R_Questions_RecentTestNumber_num_reAttempted = null;
	let sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted = null;
	let sideBar_R_Questions_RecentQuestionNumber_num_reAttempted = null;

	let sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt = null;
	let sideBar_R_Questions_CurrentTestNumber_num_toReAttempt = null;
	let sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt = null;
	let sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt = null;

	//! loop through questionData to create the quickNavBar
	useEffect(() => {
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			for (let i = 1; i <= 36; i++) {
				const questionAnswerData = questionData_ifSubmitted?.[i];
				const questionAnswerData_gotCorrect = questionAnswerData?.attempts[0]?.isCorrect;
				if (!questionAnswerData) {
					if (sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt === null) {
						sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt = i;
						dispatch(userReducerActions.sideBar_R_Questions_setCurrentQuestionNumber_toAttempt(i));
					}
					// Blue - Currently Selected
					// Yellow - Currently Attempting
					if (sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt_rdx === i) {
						navItems.push(
							<li
								key={i}
								onClick={() => gotoQuestion(i)}
								className={`${sideBar_R_Questions_CurrentQuestionNumber_rdx === i ? classes["quickNavButtonCurrent"] : classes["quickNavButton"]} ${
									classes.currentlyAttempting
								}`}
							>
								{i}
							</li>
						);
					} else {
						//Gray - not attempted
						navItems.push(
							<li key={i} className={classes.quickNavButton}>
								{i}
							</li>
						);
					}
				} else {
					//Green or Red - attempted
					navItems.push(
						<li
							key={i}
							onClick={() => gotoQuestion(i)}
							className={`${sideBar_R_Questions_CurrentQuestionNumber_rdx === i ? classes["quickNavButtonCurrent"] : classes["quickNavButton"]} ${
								questionAnswerData_gotCorrect ? classes.correct : classes.isCorrect
							}`}
						>
							{i}
						</li>
					);
				}
			}
		} else {
			let testNumPrev = null;
			let questionNumPrev = null;
			for (let testNum_idx = 0; testNum_idx < testResultsData_listForm.length; testNum_idx++) {
				const testNum = testNum_idx + 1;
				const testData = testResultsData_listForm[testNum_idx][1];
				const testData_object = Object.entries(testData);

				for (let questionNum_idx = 0; questionNum_idx < testData_object.length; questionNum_idx++) {
					const questionNum = questionNum_idx + 1;
					const questionData_attempts = testData_object[questionNum_idx][1].attempts;
					const initialAttempt = questionData_attempts[sideBar_R_Questions_CurrentAttempt_rdx + 1]
						? questionData_attempts[sideBar_R_Questions_CurrentAttempt_rdx + 1]
						: questionData_attempts[sideBar_R_Questions_CurrentAttempt_rdx];
					const initialAttempt_gotCorrect = initialAttempt?.isCorrect;
					const question_wasReAttempted = questionData_attempts[sideBar_R_Questions_CurrentAttempt_rdx + 1] ? true : false;
					const question_wasReAttempted_gotCorrect = questionData_attempts[sideBar_R_Questions_CurrentAttempt_rdx]?.isCorrect;

					if (!initialAttempt_gotCorrect) {
						if (!question_wasReAttempted) {
							if (sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt === null || sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt === undefined) {
								sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt = testNum_idx;
								sideBar_R_Questions_CurrentTestNumber_num_toReAttempt = testNum_idx + 1;
								sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt = questionNum_idx;
								sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt = questionNum_idx + 1;
							}
							if (
								(testNumPrev !== null && questionNumPrev !== null && sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted === null) ||
								sideBar_R_Questions_RecentTestNumber_idx_reAttempted === undefined
							) {
								sideBar_R_Questions_RecentTestNumber_idx_reAttempted = testNumPrev - 1;
								sideBar_R_Questions_RecentTestNumber_num_reAttempted = testNumPrev;
								sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted = questionNumPrev - 1;
								sideBar_R_Questions_RecentQuestionNumber_num_reAttempted = questionNumPrev;
							}
							// Blue - Currently Selected
							// Yellow - Currently Attempting
							if (sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx === questionNum) {
								navItems.push(
									<li
										key={`${testNum}-${questionNum}`}
										onClick={() => gotoQuestion(questionNum)}
										className={`${sideBar_R_Questions_CurrentQuestionNumber_rdx === questionNum ? classes["quickNavButtonCurrent"] : classes["quickNavButton"]} ${
											classes.currentlyAttempting
										}`}
									>
										{questionNum}
									</li>
								);
							} else {
								//Gray - not re-attempted
								navItems.push(
									<li key={`${testNum}-${questionNum}`} className={classes.quickNavButton}>
										{questionNum}
									</li>
								);
							}
						} else {
							//Green or Red - re-attempted
							navItems.push(
								<li
									key={`${testNum}-${questionNum}`}
									onClick={() => gotoQuestion(questionNum)}
									className={`${sideBar_R_Questions_CurrentQuestionNumber_rdx === questionNum ? classes["quickNavButtonCurrent"] : classes["quickNavButton"]} ${
										question_wasReAttempted_gotCorrect ? classes.correct : classes.isCorrect
									}`}
								>
									{questionNum}
								</li>
							);
						}
						testNumPrev = testNum;
						questionNumPrev = questionNum;
					}
				}
			}

			//Recent Test re-attempted#
			if (
				sideBar_R_Questions_RecentTestNumber_num_reAttempted !== null &&
				sideBar_R_Questions_RecentTestNumber_num_reAttempted !== undefined &&
				sideBar_R_Questions_RecentTestNumber_num_reAttempted + sideBar_R_Questions_RecentQuestionNumber_num_reAttempted >
					sideBar_R_Questions_RecentTestNumber_num_reAttempted_rdx + sideBar_R_Questions_RecentQuestionNumber_num_reAttempted_rdx
			) {
				dispatch(
					userReducerActions.sideBar_R_Questions_setRecentTestNumber_reAttempted({
						idx: sideBar_R_Questions_RecentTestNumber_idx_reAttempted,
						num: sideBar_R_Questions_RecentTestNumber_num_reAttempted,
					})
				);
			}

			//Recent Question re-attempted#
			if (
				sideBar_R_Questions_RecentQuestionNumber_num_reAttempted !== null &&
				sideBar_R_Questions_RecentQuestionNumber_num_reAttempted !== undefined &&
				sideBar_R_Questions_RecentTestNumber_num_reAttempted + sideBar_R_Questions_RecentQuestionNumber_num_reAttempted >
					sideBar_R_Questions_RecentTestNumber_num_reAttempted_rdx + sideBar_R_Questions_RecentQuestionNumber_num_reAttempted_rdx
			) {
				dispatch(
					userReducerActions.sideBar_R_Questions_setRecentQuestionNumber_reAttempted({
						idx: sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted,
						num: sideBar_R_Questions_RecentQuestionNumber_num_reAttempted,
					})
				);
			}

			//Current Test to re-attempt#
			if (
				sideBar_R_Questions_CurrentTestNumber_num_toReAttempt !== null &&
				sideBar_R_Questions_CurrentTestNumber_num_toReAttempt !== undefined &&
				sideBar_R_Questions_CurrentTestNumber_num_toReAttempt + sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt >
					sideBar_R_Questions_CurrentTestNumber_num_toReAttempt_rdx + sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx
			) {
				dispatch(
					userReducerActions.sideBar_R_Questions_setCurrentTestNumber_toReAttempt({
						idx: sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt,
						num: sideBar_R_Questions_CurrentTestNumber_num_toReAttempt,
					})
				);
			}
			//Current Question to re-attempt#
			if (
				sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt !== null &&
				sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt !== undefined &&
				sideBar_R_Questions_CurrentTestNumber_num_toReAttempt + sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt >
					sideBar_R_Questions_CurrentTestNumber_num_toReAttempt_rdx + sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx
			) {
				dispatch(
					userReducerActions.sideBar_R_Questions_setCurrentQuestionNumber_toReAttempt({
						idx: sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt,
						num: sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt,
					})
				);
			}
		}
		setQuickNavBar(navItems);
	}, [
		questionData_ifSubmitted,
		sideBar_R_QuestionTestResults_rdx,
		sideBar_R_Questions_CurrentQuestionNumber_rdx,
		sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt_rdx,
		sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx,
		gotoQuestion,
	]);

	//! set what multiple choice option is checked
	const get_newlyCheckedID = (newAnswerID, correctOrIncorrect) => {
		get_ChosenAnswerID(newAnswerID, correctOrIncorrect);
	};

	//! event listener for scroll on quickNav
	const [keyEventListenerSelection, setKeyEventListenerSelection] = useState(null);
	const handleKeyCombination = useCallback((e) => {
		setKeyEventListenerSelection(null);
		switch (e.key) {
			case "1":
				console.log("keyed 1");
			case "2":
			case "3":
			case "4":
				setKeyEventListenerSelection(Number(e.key));
				break;
			default:
				break;
		}
	}, []);

	const handleWheel = (e) => {
		e.preventDefault();
		if (quickNavRef.current) {
			quickNavRef.current.scrollLeft += e.deltaY + e.deltaX;
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyCombination);
		const quickNavEl = quickNavRef.current;

		if (quickNavEl) {
			quickNavEl.addEventListener("wheel", handleWheel);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyCombination);
			if (quickNavEl) {
				quickNavEl.removeEventListener("wheel", handleWheel);
			}
		};
	}, [handleKeyCombination]);

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
					{!sideBar_R_Questions_retakeFailed_isOpen_rdx ? (
						<>
							<p className={classes.questionNumber}>Question {questionNumber} of 36</p>
							<p className={classes.testNumber}>Test {testNumber}</p>
						</>
					) : (
						<>
							<p className={classes.questionNumber}>Question {questionNumber}</p>
							<p className={classes.testNumber}>Retake Test {testNumber}</p>
							<p className={classes.previouslyFailed}>Previously Failed</p>
						</>
					)}
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
							keyEventListenerSelection={keyEventListenerSelection}
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
