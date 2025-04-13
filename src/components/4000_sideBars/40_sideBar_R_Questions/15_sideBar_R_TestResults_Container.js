import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import SideBar_R_TestResults_ListOfQuestions from "./20_sideBar_R_TestResults_ListOfQuestions";
import classes from "../../../components/5000_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_TestResults_Container = () => {
	const dispatch = useDispatch();
	const questionContentRef = useRef(null);
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_currentAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_currentAttempt_rdx);
	const setRetakeFailedQuestions_moduleIsActive_rdx = useSelector(({ user }) => user.setRetakeFailedQuestions_moduleIsActive_rdx);
	const sideBar_R_Questions_wrongAnswers_num_rdx = useSelector(({ user }) => user.sideBar_R_Questions_wrongAnswers_num_rdx);
	const sideBar_R_Questions_retakeFailed_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_retakeFailed_isOpen_rdx);
	const testResultData = sideBar_R_QuestionTestResults_rdx ? sideBar_R_QuestionTestResults_rdx : null;
	const sideBar_R_Questions_LastTestNumber_idx_toReAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_LastTestNumber_idx_toReAttempt_rdx);
	const [isPassed, setIsPassed] = useState(null);
	const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
	const [status, setStatus] = useState(null);
	const [statusResponse, setStatusResponse] = useState(null);
	const [yourScore, setYourScore] = useState(0);

	// Button Actions
	const backButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoToPrev());
	};
	const gotoNexTest = () => {
		dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(1));
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(sideBar_R_Questions_CurrentTestNumber_rdx + 1));
	};
	const [ul1, setUl1] = useState([]);
	const [lastSubmittedQuestion, setLastSubmittedQuestion] = useState(0);
	useEffect(() => {
		if (!testResultData) {
			return;
		}
		const testResultsData_listForm = Object.entries(testResultData);
		const testData = testResultsData_listForm[sideBar_R_Questions_CurrentTestNumber_rdx - 1][1];
		const testData_object = Object.entries(testData);
		let numberAnswered = 0;
		let numberAnsweredCorrectly = 0;

		let ul = [];
		if (!sideBar_R_Questions_retakeFailed_isOpen_rdx) {
			for (let questionNum_idx = 0; questionNum_idx < testData_object.length; questionNum_idx++) {
				numberAnswered += 1;
				const questionData_attempts = testData_object[questionNum_idx][1].attempts;
				const initialAttempt_gotCorrect = questionData_attempts[sideBar_R_Questions_currentAttempt_rdx]?.isCorrect;
				if (initialAttempt_gotCorrect) numberAnsweredCorrectly += 1;
				ul.push(<SideBar_R_TestResults_ListOfQuestions key={questionNum_idx} id={questionNum_idx} isCorrect={initialAttempt_gotCorrect} />);
			}
		} else {
			for (let testNum_idx = 0; testNum_idx < sideBar_R_Questions_LastTestNumber_idx_toReAttempt_rdx; testNum_idx++) {
				const testNum_num = testNum_idx + 1;

				// console.log("sideBar_R_Questions_wrongAnswers_num_rdx[testNum_num]", sideBar_R_Questions_wrongAnswers_num_rdx[testNum_num]);
				for (let questionNum_idx = 0; questionNum_idx < sideBar_R_Questions_wrongAnswers_num_rdx[testNum_num].length; questionNum_idx++) {
					const questionWrongNum_num = sideBar_R_Questions_wrongAnswers_num_rdx[testNum_num][questionNum_idx];
					const questionWrongNum_idx = questionWrongNum_num - 1;
					const questionData_attempts = testData_object[questionWrongNum_idx][1].attempts;
					const question_wasReAttempted = questionData_attempts[sideBar_R_Questions_currentAttempt_rdx + 1] ? true : false;
					// console.log("questionWrongNum_num", questionWrongNum_num);
					// console.log("questionData_attempts", questionData_attempts);
					// console.log("question_wasReAttempted", question_wasReAttempted);
					//above is correct

					if (question_wasReAttempted) {
						numberAnswered += 1;
						const secondaryAttempt_gotCorrect = questionData_attempts[sideBar_R_Questions_currentAttempt_rdx + 1]?.isCorrect;
						ul.push(<SideBar_R_TestResults_ListOfQuestions key={testNum_idx - questionNum_idx} id={questionWrongNum_num} isCorrect={secondaryAttempt_gotCorrect} />);
					}
				}
			}
		}

		setUl1(ul);
		setLastSubmittedQuestion(numberAnswered);
		setAnsweredCorrectly(numberAnsweredCorrectly);
		setIsPassed(numberAnsweredCorrectly >= 30);
	}, [
		testResultData,
		setRetakeFailedQuestions_moduleIsActive_rdx,
		sideBar_R_Questions_wrongAnswers_num_rdx,
		sideBar_R_Questions_CurrentTestNumber_rdx,
		sideBar_R_Questions_currentAttempt_rdx,
		setUl1,
		setLastSubmittedQuestion,
		setAnsweredCorrectly,
		setIsPassed,
	]);

	useEffect(() => {
		if (isPassed) {
			setStatus("Passed");
			setStatusResponse(`Congratulations, you passed test #${sideBar_R_Questions_CurrentTestNumber_rdx}.`);
			setYourScore(Math.round((answeredCorrectly / lastSubmittedQuestion) * 100));
		} else if (lastSubmittedQuestion === 0 || lastSubmittedQuestion === null) {
			setStatus("Test Not Started");
			setStatusResponse("You have not started this test yet. Selecting 'Back' will take you back to the test.");
			setYourScore("0");
		} else if (lastSubmittedQuestion > 0 && lastSubmittedQuestion < 36) {
			setStatus("Test Incomplete");
			setStatusResponse("You have not completed this test. Selecting 'Back' will take you back to the test, or 'Reset this test' to start over.");
			setYourScore(Math.round((answeredCorrectly / lastSubmittedQuestion) * 100));
		} else {
			setStatus("Test Not Passed");
			setStatusResponse("You did not meet the passing score for this test. You can retake it by selecting 'Reset this Test' or proceed to the next test.");
			setYourScore(Math.round((answeredCorrectly / lastSubmittedQuestion) * 100));
		}
	}, [isPassed, lastSubmittedQuestion, sideBar_R_Questions_CurrentTestNumber_rdx]);
	const modal_action_resetThisTest_open = () => {
		dispatch(userReducerActions.modal_action_resetThisTest_open_rdx());
	};

	return (
		<div className={classes.handbook_outerContainer2} ref={questionContentRef}>
			<div className={classes.page_contentContainer}>
				<div className={classes.handbook_header_section}>
					<span className={classes.headerTop}>
						<p className={`${classes["questionNumber"]} ${isPassed ? classes.isPassed : classes.failed}`}>{status}</p>
						<p className={classes.testNumber}>Test {sideBar_R_Questions_CurrentTestNumber_rdx}</p>
					</span>
					<h1>Test Results</h1>
				</div>
				<div className={classes.score_section}>
					<div className={classes.demoIntroTopLeft}>
						<div className={classes.welcome}>
							<h2 className={`${classes["questionNumber"]} ${isPassed ? classes.isPassed : classes.failed}`}>{status}</h2>
							<div className={classes.sectionContentResults}>
								<p>{statusResponse}</p>
							</div>
						</div>
					</div>
					<nav className={classes.bottom}>
						<div className={classes.scoreTitleLabel}>
							<div className={classes.score_content}>
								<div className={classes.score_contentInner}>
									<p>Your Score</p>
								</div>
								<div className={classes.score_contentInner}>
									<p>Passing Score</p>
								</div>
							</div>
							<div className={classes.score_content}>
								<div className={classes.score_contentInner}>
									<p className={classes.presentedPrimarily}>{yourScore}%</p>
									<p className={classes.presentedSecondarily}>
										{answeredCorrectly}/{lastSubmittedQuestion}
									</p>
								</div>
								<div className={classes.score_contentInner}>
									<p className={classes.presentedPrimarily}>84%</p>
									<p className={classes.presentedSecondarily}>30/36</p>
								</div>
							</div>
						</div>
						<div className={classes.tocInnerContainerTestResults}>{ul1}</div>
					</nav>
				</div>
				<div onClick={modal_action_resetThisTest_open} className={`${classes["viewTestResults"]} ${true ? classes.testIsComplete : ""}`}>
					<p>Reset this test</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path className={classes.refreshButtonArrow} d="M14 15L10 19L14 23" />
						<path
							className={classes.refreshButtonCircle}
							d="M5.93782 15.5C5.16735 14.1655 4.85875 12.6141 5.05989 11.0863C5.26102 9.55856 5.96064 8.13986 7.05025 7.05025C8.13986 5.96064 9.55856 5.26102 11.0863 5.05989C12.6141 4.85875 14.1655 5.16735 15.5 5.93782C16.8345 6.70829 17.8775 7.89757 18.4672 9.32122C19.0568 10.7449 19.1603 12.3233 18.7615 13.8117C18.3627 15.3002 17.4838 16.6154 16.2613 17.5535C15.0388 18.4915 13.5409 19 12 19"
						/>
					</svg>
				</div>
				<div className={classes.buttonCancelSection}>
					<button className={classes.button_formatBack} onClick={backButtonAction} type="submit">
						Back
					</button>
					<button className={classes.button_formatSubmit} onClick={gotoNexTest} type="submit" disabled={!(lastSubmittedQuestion === 36)}>
						Next Test
					</button>
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_TestResults_Container;
