import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import SideBar_R_TestResultsListOfQuestions from "./6_sideBar_R_TestResultsListOfQuestions";

import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_TestResults = () => {
	const dispatch = useDispatch();
	const questionContentRef = useRef(null);
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const testData = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx];
	const [isPassed, setIsPassed] = useState(null);
	const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
	const [status, setStatus] = useState(null);
	const [statusResponse, setStatusResponse] = useState(null);

	useEffect(() => {
		if (isPassed) {
			setStatus("Passed");
			setStatusResponse(`Congratulations, you passed test #${sideBar_R_Questions_CurrentTestNumber_rdx}.`);
		} else {
			setStatus("Try Again");
			setStatusResponse("Please attempt additional tests. You can proceed by clicking 'Next Test' below or select 'Reset this Test' to retry.");
		}
	}, [isPassed]);

	// Button Actions
	const backButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(sideBar_R_Questions_CurrentTestNumber_rdx));
	};

	const gotoNexTest = () => {
		dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(1));
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(sideBar_R_Questions_CurrentTestNumber_rdx + 1));
	};
	const [ul1, setUl1] = useState([]);
	const [ul2, setUl2] = useState([]);
	const [ul3, setUl3] = useState([]);

	useEffect(() => {
		if (!testData) {
			return;
		}
		const testDataEntries = Object.entries(testData);
		let numberAnsweredCorrectly = 0;
		setUl1(
			testDataEntries
				.filter(([key]) => Number(key) >= 1 && Number(key) <= 12)
				.map(([key, value]) => {
					const isCorrect = value[2];
					if (isCorrect) numberAnsweredCorrectly += 1;
					return <SideBar_R_TestResultsListOfQuestions key={key} id={key} isCorrect={isCorrect} />;
				})
		);
		setUl2(
			testDataEntries
				.filter(([key]) => Number(key) >= 13 && Number(key) <= 24)
				.map(([key, value]) => {
					const isCorrect = value[2];
					if (isCorrect) numberAnsweredCorrectly += 1;
					return <SideBar_R_TestResultsListOfQuestions key={key} id={key} isCorrect={isCorrect} />;
				})
		);
		setUl3(
			testDataEntries
				.filter(([key]) => Number(key) >= 25 && Number(key) <= 36)
				.map(([key, value]) => {
					const isCorrect = value[2];
					if (isCorrect) numberAnsweredCorrectly += 1;
					return <SideBar_R_TestResultsListOfQuestions key={key} id={key} isCorrect={isCorrect} />;
				})
		);

		setAnsweredCorrectly(numberAnsweredCorrectly);
		setIsPassed(numberAnsweredCorrectly >= 30);
	}, [testData]);

	const gotoResetThisTestModal = () => {
		dispatch(userReducerActions.resetThisTestModalOpen());
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
							<div className={classes.sectionContent}>
								<p>{statusResponse}</p>
							</div>
						</div>
						<div className={classes.options}>
							<h2>Scoring</h2>
							<div className={classes.score_content}>
								<div>
									<h3>Your Score</h3>
									<p>{answeredCorrectly}/36</p>
								</div>
								<div>
									<h3>Required to Pass</h3>
									<p>30/36</p>
								</div>
							</div>
						</div>
					</div>

					<nav className={classes.bottom}>
						<div className={classes.tocTitleLabel}>
							<h2>List of Questions</h2>
						</div>
						<div className={classes.tocInnerContainer2}>
							<ul>{ul1}</ul>
							<ul>{ul2}</ul>
							<ul>{ul3}</ul>
						</div>
					</nav>
				</div>
				<div onClick={gotoResetThisTestModal} className={`${classes["viewTestResults"]} ${true ? classes.testIsComplete : ""}`}>
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
					<button className={classes.button_formatSubmit} onClick={gotoNexTest} type="submit">
						Next Test
					</button>
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_TestResults;