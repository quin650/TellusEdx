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
	const testResultData = sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx];
	const [isPassed, setIsPassed] = useState(null);
	const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
	const [status, setStatus] = useState(null);
	const [statusResponse, setStatusResponse] = useState(null);

	// Responses
	//
	useEffect(() => {
		if (isPassed) {
			setStatus("Passed");
			setStatusResponse(`Congratulations, you passed test #${sideBar_R_Questions_CurrentTestNumber_rdx}.`);
		} else {
			setStatus("Test Not Passed");
			setStatusResponse("You did not meet the passing score for this test. You can retake it by selecting 'Reset this Test' or proceed to the next test.");
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

	useEffect(() => {
		if (!testResultData) {
			return;
		}
		const testDataEntries = Object.entries(testResultData);
		let numberAnsweredCorrectly = 0;
		setUl1(
			testDataEntries.map(([key, value]) => {
				const isCorrect = value[2];
				if (isCorrect) numberAnsweredCorrectly += 1;
				return <SideBar_R_TestResultsListOfQuestions key={key} id={key} isCorrect={isCorrect} />;
			})
		);
		setAnsweredCorrectly(numberAnsweredCorrectly);
		setIsPassed(numberAnsweredCorrectly >= 30);
	}, [testResultData]);

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
							<div className={classes.score_content}>
								<div>
									<p>Your Score: {answeredCorrectly}/36</p>
								</div>
								<div>
									<p>Passing Score: 30/36</p>
								</div>
							</div>
						</div>
					</div>

					<nav className={classes.bottom}>
						<div className={classes.tocTitleLabel}>
							<h2>Results</h2>
						</div>
						<div className={classes.tocInnerContainer2}>{ul1}</div>
					</nav>
				</div>
				<div onClick={gotoResetThisTestModal} className={`${classes["viewTestResults"]} ${true ? classes.testIsComplete : ""}`}>
					<p>Retake this test</p>
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

/* <div className={classes.bottomSection}>
	<div onClick={gotoTestResults} className={`${classes["viewTestResults"]} ${testIsComplete ? classes.testIsComplete : ""}`}>
		<p>Test Score</p>
		<svg className={classes.arrowIconR} viewBox="0 0 24 24">
			<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
		</svg>
	</div>
	<div className={classes.buttonSection}>
		<button className={classes.button_formatCancel} onClick={cancelButtonAction} type="submit">
			Cancel
		</button>
		<button className={classes.button_formatSubmit} onClick={submitButtonAction} type="submit" disabled={!submitButtonIsActive}>
			Submit
		</button>
	</div>
</div> */
