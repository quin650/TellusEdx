import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_ProbabilityOfPassingPage = () => {
	const dispatch = useDispatch();
	const questionContentRef = useRef(null);
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const testResultData1 = sideBar_R_QuestionTestResults_rdx[1] ? sideBar_R_QuestionTestResults_rdx[1] : null;
	const testResultData2 = sideBar_R_QuestionTestResults_rdx[2] ? sideBar_R_QuestionTestResults_rdx[2] : null;
	const testResultData3 = sideBar_R_QuestionTestResults_rdx[3] ? sideBar_R_QuestionTestResults_rdx[3] : null;
	const testResultData4 = sideBar_R_QuestionTestResults_rdx[4] ? sideBar_R_QuestionTestResults_rdx[4] : null;
	const testResultData5 = sideBar_R_QuestionTestResults_rdx[5] ? sideBar_R_QuestionTestResults_rdx[5] : null;

	const [answeredCorrectly1, setAnsweredCorrectly1] = useState(null);
	const [answeredCorrectly2, setAnsweredCorrectly2] = useState(null);
	const [answeredCorrectly3, setAnsweredCorrectly3] = useState(null);
	const [answeredCorrectly4, setAnsweredCorrectly4] = useState(null);
	const [answeredCorrectly5, setAnsweredCorrectly5] = useState(null);

	const [lastSubmittedQuestion1, setLastSubmittedQuestion1] = useState(0);
	const [lastSubmittedQuestion2, setLastSubmittedQuestion2] = useState(0);
	const [lastSubmittedQuestion3, setLastSubmittedQuestion3] = useState(0);
	const [lastSubmittedQuestion4, setLastSubmittedQuestion4] = useState(0);
	const [lastSubmittedQuestion5, setLastSubmittedQuestion5] = useState(0);

	const [yourScore1, setYourScore1] = useState(0);
	const [yourScore2, setYourScore2] = useState(0);
	const [yourScore3, setYourScore3] = useState(0);
	const [yourScore4, setYourScore4] = useState(0);
	const [yourScore5, setYourScore5] = useState(0);

	const [isPassed1, setIsPassed1] = useState(null);
	const [isPassed2, setIsPassed2] = useState(null);
	const [isPassed3, setIsPassed3] = useState(null);
	const [isPassed4, setIsPassed4] = useState(null);
	const [isPassed5, setIsPassed5] = useState(null);

	const [status1, setStatus1] = useState(null);
	const [status2, setStatus2] = useState(null);
	const [status3, setStatus3] = useState(null);
	const [status4, setStatus4] = useState(null);
	const [status5, setStatus5] = useState(null);

	useEffect(() => {
		if (!testResultData1) {
			setStatus1("Not Started");
			return;
		}
		const testDataEntries1 = Object.entries(testResultData1);
		let numberAnswered1 = 0;
		let numberAnsweredCorrectly1 = 0;

		testDataEntries1.map(([key, value]) => {
			numberAnswered1 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnsweredCorrectly1 += 1;
		});

		setLastSubmittedQuestion1(numberAnswered1);
		setAnsweredCorrectly1(numberAnsweredCorrectly1);
		setIsPassed1(numberAnsweredCorrectly1 >= 30);
		setYourScore1(Math.round((numberAnsweredCorrectly1 / numberAnswered1) * 100));
		if (numberAnswered1 < 36) {
			setStatus1("Incomplete");
		} else if (numberAnsweredCorrectly1 >= 30) {
			setStatus1("Passed");
		} else {
			setStatus1("Failed");
		}
	}, [testResultData1]);

	useEffect(() => {
		if (!testResultData2) {
			setStatus2("Not Started");
			return;
		}
		const testDataEntries2 = Object.entries(testResultData2);
		let numberAnswered2 = 0;
		let numberAnsweredCorrectly2 = 0;

		testDataEntries2.map(([key, value]) => {
			numberAnswered2 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnsweredCorrectly2 += 1;
		});

		setLastSubmittedQuestion2(numberAnswered2);
		setAnsweredCorrectly2(numberAnsweredCorrectly2);
		setIsPassed2(numberAnsweredCorrectly2 >= 30);
		setYourScore2(Math.round((numberAnsweredCorrectly2 / numberAnswered2) * 100));
		if (numberAnswered2 < 36) {
			setStatus2("Incomplete");
		} else if (numberAnsweredCorrectly2 >= 30) {
			setStatus2("Passed");
		} else {
			setStatus2("Failed");
		}
	}, [testResultData2]);

	useEffect(() => {
		if (!testResultData3) {
			setStatus3("Not Started");
			return;
		}
		const testDataEntries3 = Object.entries(testResultData3);
		let numberAnswered3 = 0;
		let numberAnsweredCorrectly3 = 0;
		testDataEntries3.map(([key, value]) => {
			numberAnswered3 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnsweredCorrectly3 += 1;
		});

		setLastSubmittedQuestion3(numberAnswered3);
		setAnsweredCorrectly3(numberAnsweredCorrectly3);
		setIsPassed3(numberAnsweredCorrectly3 >= 30);
		setYourScore3(Math.round((numberAnsweredCorrectly3 / numberAnswered3) * 100));
		if (numberAnswered3 < 36) {
			setStatus3("Incomplete");
		} else if (numberAnsweredCorrectly3 >= 30) {
			setStatus3("Passed");
		} else {
			setStatus3("Failed");
		}
	}, [testResultData3]);

	useEffect(() => {
		if (!testResultData4) {
			setStatus4("Not Started");
			return;
		}
		const testDataEntries4 = Object.entries(testResultData4);
		let numberAnswered4 = 0;
		let numberAnsweredCorrectly4 = 0;

		testDataEntries4.map(([key, value]) => {
			numberAnswered4 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnsweredCorrectly4 += 1;
		});

		setLastSubmittedQuestion4(numberAnswered4);
		setAnsweredCorrectly4(numberAnsweredCorrectly4);
		setIsPassed4(numberAnsweredCorrectly4 >= 30);
		setYourScore4(Math.round((numberAnsweredCorrectly4 / numberAnswered4) * 100));
		if (numberAnswered4 < 36) {
			setStatus4("Incomplete");
		} else if (numberAnsweredCorrectly4 >= 30) {
			setStatus4("Passed");
		} else {
			setStatus4("Failed");
		}
	}, [testResultData4]);

	useEffect(() => {
		if (!testResultData5) {
			setStatus5("Not Started");
			return;
		}
		const testDataEntries5 = Object.entries(testResultData5);
		let numberAnswered5 = 0;
		let numberAnsweredCorrectly5 = 0;

		testDataEntries5.map(([key, value]) => {
			numberAnswered5 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnsweredCorrectly5 += 1;
		});

		setLastSubmittedQuestion5(numberAnswered5);
		setAnsweredCorrectly5(numberAnsweredCorrectly5);
		setIsPassed5(numberAnsweredCorrectly5 >= 30);
		setYourScore5(Math.round((numberAnsweredCorrectly5 / numberAnswered5) * 100));
		if (numberAnswered5 < 36) {
			setStatus5("Incomplete");
		} else if (numberAnsweredCorrectly5 >= 30) {
			setStatus5("Passed");
		} else {
			setStatus5("Failed");
		}
	}, [testResultData5]);

	// Button Actions
	const backButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Landing());
	};
	const test1_ButtonAction = () => {
		console.log("Test 1 button clicked");
	};
	return (
		<div className={classes.handbook_outerContainer2} ref={questionContentRef}>
			<div className={classes.page_contentContainer}>
				<div className={classes.handbook_header_section}>
					<h1>Probability of passing</h1>
				</div>
				<div className={classes.score_section}>
					<div className={classes.demoIntroTopLeft}>
						<ul>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test1_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>Test #1</span>
												<span className={classes.percentCorrect}>{yourScore1}%</span>
												<span className={classes.fractionCorrect}>
													{answeredCorrectly1}/{lastSubmittedQuestion1}
												</span>
											</div>
											<div className={classes.testResultsBar}></div>
											<span className={classes.testStatus}>{status1}</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test1_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>Test #2</span>
												<span className={classes.percentCorrect}>{yourScore2}%</span>
												<span className={classes.fractionCorrect}>
													{answeredCorrectly2}/{lastSubmittedQuestion2}
												</span>
											</div>
											<div className={classes.testResultsBar}></div>
											<span className={classes.testStatus}>{status2}</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test1_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>Test #1</span>
												<span className={classes.percentCorrect}>{yourScore3}%</span>
												<span className={classes.fractionCorrect}>
													{answeredCorrectly3}/{lastSubmittedQuestion3}
												</span>
											</div>
											<div className={classes.testResultsBar}></div>
											<span className={classes.testStatus}>{status3}</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test1_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>Test #1</span>
												<span className={classes.percentCorrect}>{yourScore4}%</span>
												<span className={classes.fractionCorrect}>
													{answeredCorrectly4}/{lastSubmittedQuestion4}
												</span>
											</div>
											<div className={classes.testResultsBar}></div>
											<span className={classes.testStatus}>{status4}</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test1_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>Test #1</span>
												<span className={classes.percentCorrect}>{yourScore5}%</span>
												<span className={classes.fractionCorrect}>
													{answeredCorrectly5}/{lastSubmittedQuestion5}
												</span>
											</div>
											<div className={classes.testResultsBar}></div>
											<span className={classes.testStatus}>{status5}</span>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className={classes.buttonCancelSection}>
					<button className={classes.button_formatBack} onClick={backButtonAction} type="submit">
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_ProbabilityOfPassingPage;
