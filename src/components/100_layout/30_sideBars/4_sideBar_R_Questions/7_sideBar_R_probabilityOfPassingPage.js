import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const SideBar_R_ProbabilityOfPassingPage = () => {
	const dispatch = useDispatch();
	const questionContentRef = useRef(null);
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const testResultData = sideBar_R_QuestionTestResults_rdx ? sideBar_R_QuestionTestResults_rdx : null;
	const testResultData1 = sideBar_R_QuestionTestResults_rdx[1] ? sideBar_R_QuestionTestResults_rdx[1] : null;
	const testResultData2 = sideBar_R_QuestionTestResults_rdx[2] ? sideBar_R_QuestionTestResults_rdx[2] : null;
	const testResultData3 = sideBar_R_QuestionTestResults_rdx[3] ? sideBar_R_QuestionTestResults_rdx[3] : null;
	const testResultData4 = sideBar_R_QuestionTestResults_rdx[4] ? sideBar_R_QuestionTestResults_rdx[4] : null;
	const testResultData5 = sideBar_R_QuestionTestResults_rdx[5] ? sideBar_R_QuestionTestResults_rdx[5] : null;

	const [answered_Correctly1, setAnswered_Correctly1] = useState(null);
	const [answered_Correctly2, setAnswered_Correctly2] = useState(null);
	const [answered_Correctly3, setAnswered_Correctly3] = useState(null);
	const [answered_Correctly4, setAnswered_Correctly4] = useState(null);
	const [answered_Correctly5, setAnswered_Correctly5] = useState(null);
	const [answered_Correctly, setAnswered_Correctly] = useState(null);

	const [lastSubmittedQuestion1, setLastSubmittedQuestion1] = useState(0);
	const [lastSubmittedQuestion2, setLastSubmittedQuestion2] = useState(0);
	const [lastSubmittedQuestion3, setLastSubmittedQuestion3] = useState(0);
	const [lastSubmittedQuestion4, setLastSubmittedQuestion4] = useState(0);
	const [lastSubmittedQuestion5, setLastSubmittedQuestion5] = useState(0);
	const [lastSubmittedQuestion, setLastSubmittedQuestion] = useState(0);

	const [yourScore3, setYourScore3] = useState(0);
	const [yourScore4, setYourScore4] = useState(0);
	const [yourScore5, setYourScore5] = useState(0);

	const [isPassed1, setIsPassed1] = useState(null);
	const [isPassed2, setIsPassed2] = useState(null);
	const [isPassed3, setIsPassed3] = useState(null);
	const [isPassed4, setIsPassed4] = useState(null);
	const [isPassed5, setIsPassed5] = useState(null);
	const [isPassed, setIsPassed] = useState(null);

	const [status1, setStatus1] = useState(null);
	const [status2, setStatus2] = useState(null);
	const [status3, setStatus3] = useState(null);
	const [status4, setStatus4] = useState(null);
	const [status5, setStatus5] = useState(null);
	const [status, setStatus] = useState(null);

	const [percentAnswered_Incorrectly1, setPercentAnswered_Incorrectly1] = useState("0%");
	const [percentAnswered_Incorrectly2, setPercentAnswered_Incorrectly2] = useState("0%");
	const [percentAnswered_Incorrectly3, setPercentAnswered_Incorrectly3] = useState("0%");
	const [percentAnswered_Incorrectly4, setPercentAnswered_Incorrectly4] = useState("0%");
	const [percentAnswered_Incorrectly5, setPercentAnswered_Incorrectly5] = useState("0%");
	const [percentAnswered_Incorrectly, setPercentAnswered_Incorrectly] = useState("0%");

	const [percentAnswered_Correctly1, setPercentAnswered_Correctly1] = useState("0%");
	const [percentAnswered_Correctly2, setPercentAnswered_Correctly2] = useState("0%");
	const [percentAnswered_Correctly3, setPercentAnswered_Correctly3] = useState("0%");
	const [percentAnswered_Correctly4, setPercentAnswered_Correctly4] = useState("0%");
	const [percentAnswered_Correctly5, setPercentAnswered_Correctly5] = useState("0%");
	const [percentAnswered_Correctly, setPercentAnswered_Correctly] = useState("0%");

	useEffect(() => {
		if (!testResultData1) {
			setStatus1("Not Started");
			return;
		}
		const testDataEntries1 = Object.entries(testResultData1);
		let numberAnswered1 = 0;
		let numberAnswered_Correctly1 = 0;

		testDataEntries1.map(([key, value]) => {
			numberAnswered1 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnswered_Correctly1 += 1;
		});

		setLastSubmittedQuestion1(numberAnswered1);
		setAnswered_Correctly1(numberAnswered_Correctly1);
		setIsPassed1(numberAnswered_Correctly1 >= 30);
		setPercentAnswered_Correctly1(`${Math.round((numberAnswered_Correctly1 / numberAnswered1) * 100 * (numberAnswered1 / 36))}%`);
		setPercentAnswered_Incorrectly1(`${Math.round(100 * (numberAnswered1 / 36))}%`);
		if (numberAnswered1 < 36) {
			setStatus1("Incomplete");
		} else if (numberAnswered_Correctly1 >= 30) {
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
		let numberAnswered_Correctly2 = 0;

		testDataEntries2.map(([key, value]) => {
			numberAnswered2 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnswered_Correctly2 += 1;
		});

		setLastSubmittedQuestion2(numberAnswered2);
		setAnswered_Correctly2(numberAnswered_Correctly2);
		setIsPassed2(numberAnswered_Correctly2 >= 30);
		setPercentAnswered_Correctly2(`${Math.round((numberAnswered_Correctly2 / numberAnswered2) * 100 * (numberAnswered2 / 36))}%`);
		setPercentAnswered_Incorrectly2(`${Math.round(100 * (numberAnswered2 / 36))}%`);
		if (numberAnswered2 < 36) {
			setStatus2("Incomplete");
		} else if (numberAnswered_Correctly2 >= 30) {
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
		let numberAnswered_Correctly3 = 0;
		testDataEntries3.map(([key, value]) => {
			numberAnswered3 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnswered_Correctly3 += 1;
		});

		setLastSubmittedQuestion3(numberAnswered3);
		setAnswered_Correctly3(numberAnswered_Correctly3);
		setIsPassed3(numberAnswered_Correctly3 >= 30);
		setPercentAnswered_Correctly3(`${Math.round((numberAnswered_Correctly3 / numberAnswered3) * 100 * (numberAnswered3 / 36))}%`);
		setPercentAnswered_Incorrectly3(`${Math.round(100 * (numberAnswered3 / 36))}%`);
		if (numberAnswered3 < 36) {
			setStatus3("Incomplete");
		} else if (numberAnswered_Correctly3 >= 30) {
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
		let numberAnswered_Correctly4 = 0;

		testDataEntries4.map(([key, value]) => {
			numberAnswered4 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnswered_Correctly4 += 1;
		});

		setLastSubmittedQuestion4(numberAnswered4);
		setAnswered_Correctly4(numberAnswered_Correctly4);
		setIsPassed4(numberAnswered_Correctly4 >= 30);
		setPercentAnswered_Correctly4(`${Math.round((numberAnswered_Correctly4 / numberAnswered4) * 100 * (numberAnswered4 / 36))}%`);
		setPercentAnswered_Incorrectly4(`${Math.round(100 * (numberAnswered4 / 36))}%`);
		if (numberAnswered4 < 36) {
			setStatus4("Incomplete");
		} else if (numberAnswered_Correctly4 >= 30) {
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
		let numberAnswered_Correctly5 = 0;

		testDataEntries5.map(([key, value]) => {
			numberAnswered5 += 1;
			const isCorrect = value[2];
			if (isCorrect) numberAnswered_Correctly5 += 1;
		});

		setLastSubmittedQuestion5(numberAnswered5);
		setAnswered_Correctly5(numberAnswered_Correctly5);
		setIsPassed5(numberAnswered_Correctly5 >= 30);
		setPercentAnswered_Correctly5(`${Math.round((numberAnswered_Correctly5 / numberAnswered5) * 100 * (numberAnswered5 / 36))}%`);
		setPercentAnswered_Incorrectly5(`${Math.round(100 * (numberAnswered5 / 36))}%`);
		if (numberAnswered5 < 36) {
			setStatus5("Incomplete");
		} else if (numberAnswered_Correctly5 >= 30) {
			setStatus5("Passed");
		} else {
			setStatus5("Failed");
		}
	}, [testResultData5]);
	useEffect(() => {
		if (!testResultData) {
			return;
		}

		let numberAnswered = 0;
		let numberAnswered_Correctly = 0;

		const testDataEntries = Object.entries(testResultData);

		for (let i = 0; i < testDataEntries.length; i++) {
			const testData = testDataEntries[i][1];
			const testObjectData = Object.entries(testData);
			for (let j = 0; j < testObjectData.length; j++) {
				numberAnswered += 1;
				const questionData = testObjectData[j];
				const isCorrect = questionData[1][2];
				if (isCorrect) numberAnswered_Correctly += 1;
			}
		}
		setLastSubmittedQuestion(numberAnswered);
		setAnswered_Correctly(numberAnswered_Correctly);
		setIsPassed((numberAnswered_Correctly / numberAnswered) * 100 >= 80);
		setPercentAnswered_Correctly(`${Math.round((numberAnswered_Correctly / numberAnswered) * 100)}%`);
		setPercentAnswered_Incorrectly(`${Math.round(100)}%`);
		if ((numberAnswered_Correctly / numberAnswered) * 100 >= 80) {
			setStatus("Passing Grade - Over 80%");
		} else {
			setStatus("Failing Grade - Under 80%");
		}
	}, [testResultData]);

	// Button Actions
	const backButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Landing());
	};
	const test1_ButtonAction = () => {
		testResultData1 && dispatch(userReducerActions.sideBar_R_Questions_GoTo_TestResultsForTestNum(1));
	};
	const test2_ButtonAction = () => {
		testResultData2 && dispatch(userReducerActions.sideBar_R_Questions_GoTo_TestResultsForTestNum(2));
	};
	const test3_ButtonAction = () => {
		testResultData3 && dispatch(userReducerActions.sideBar_R_Questions_GoTo_TestResultsForTestNum(3));
	};
	const test4_ButtonAction = () => {
		testResultData4 && dispatch(userReducerActions.sideBar_R_Questions_GoTo_TestResultsForTestNum(4));
	};
	const test5_ButtonAction = () => {
		testResultData5 && dispatch(userReducerActions.sideBar_R_Questions_GoTo_TestResultsForTestNum(5));
	};
	const infoIcon = (
		<svg className={classes.infoSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
			<path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" />
		</svg>
	);

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
												<span className={classes.sectionNUm}>
													<p className={classes.testText}>Test #1</p>
													<span className={classes.testTextInfo}>
														<Tippy
															content={
																<>
																	<div>Passing Grade</div>
																	<div>80%</div>
																	<div>30/36</div>
																</>
															}
															placement="top"
															theme="custom"
															appendTo="parent"
														>
															{infoIcon}
														</Tippy>
													</span>
												</span>
												<span className={classes.percentCorrect}>{percentAnswered_Correctly1}</span>
												<span className={classes.fractionCorrect}>
													{answered_Correctly1}/{lastSubmittedQuestion1}
												</span>
											</div>
											<div className={classes.testResultsContainer}>
												<div className={classes.testResultsBarTotal}></div>
												<div className={classes.testResultsBarIncorrect} style={{ width: percentAnswered_Incorrectly1 }}></div>
												<div className={classes.testResultsBarCorrect} style={{ width: percentAnswered_Correctly1 }}></div>
											</div>
											<span
												className={`${classes["testStatus"]} ${
													status1 === "Failed" || status1 === "Failing Grade - Under 80%" ? classes.red : status1 === "Passed" ? classes.green : ""
												}`}
											>
												{status1}
											</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test2_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>
													<p className={classes.testText}>Test #2</p>
													<span className={classes.testTextInfo}>
														<Tippy
															content={
																<>
																	<div>Passing Grade</div>
																	<div>80%</div>
																	<div>30/36</div>
																</>
															}
															placement="top"
															theme="custom"
															appendTo="parent"
														>
															{infoIcon}
														</Tippy>
													</span>
												</span>
												<span className={classes.percentCorrect}>{percentAnswered_Correctly2}</span>
												<span className={classes.fractionCorrect}>
													{answered_Correctly2}/{lastSubmittedQuestion2}
												</span>
											</div>
											<div className={classes.testResultsContainer}>
												<div className={classes.testResultsBarTotal}></div>
												<div className={classes.testResultsBarIncorrect} style={{ width: percentAnswered_Incorrectly2 }}></div>
												<div className={classes.testResultsBarCorrect} style={{ width: percentAnswered_Correctly2 }}></div>
											</div>
											<span
												className={`${classes["testStatus"]} ${
													status2 === "Failed" || status2 === "Failing Grade - Under 80%" ? classes.red : status2 === "Passed" ? classes.green : ""
												}`}
											>
												{status2}
											</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test3_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>
													<p className={classes.testText}>Test #3</p>
													<span className={classes.testTextInfo}>
														<Tippy
															content={
																<>
																	<div>Passing Grade</div>
																	<div>80%</div>
																	<div>30/36</div>
																</>
															}
															placement="top"
															theme="custom"
															appendTo="parent"
														>
															{infoIcon}
														</Tippy>
													</span>
												</span>
												<span className={classes.percentCorrect}>{percentAnswered_Correctly3}</span>
												<span className={classes.fractionCorrect}>
													{answered_Correctly3}/{lastSubmittedQuestion3}
												</span>
											</div>
											<div className={classes.testResultsContainer}>
												<div className={classes.testResultsBarTotal}></div>
												<div className={classes.testResultsBarIncorrect} style={{ width: percentAnswered_Incorrectly3 }}></div>
												<div className={classes.testResultsBarCorrect} style={{ width: percentAnswered_Correctly3 }}></div>
											</div>
											<span
												className={`${classes["testStatus"]} ${
													status3 === "Failed" || status3 === "Failing Grade - Under 80%" ? classes.red : status3 === "Passed" ? classes.green : ""
												}`}
											>
												{status3}
											</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test4_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>
													<p className={classes.testText}>Test #4</p>
													<span className={classes.testTextInfo}>
														<Tippy
															content={
																<>
																	<div>Passing Grade</div>
																	<div>80%</div>
																	<div>30/36</div>
																</>
															}
															placement="top"
															theme="custom"
															appendTo="parent"
														>
															{infoIcon}
														</Tippy>
													</span>
												</span>
												<span className={classes.percentCorrect}>{percentAnswered_Correctly4}</span>
												<span className={classes.fractionCorrect}>
													{answered_Correctly4}/{lastSubmittedQuestion4}
												</span>
											</div>
											<div className={classes.testResultsContainer}>
												<div className={classes.testResultsBarTotal}></div>
												<div className={classes.testResultsBarIncorrect} style={{ width: percentAnswered_Incorrectly4 }}></div>
												<div className={classes.testResultsBarCorrect} style={{ width: percentAnswered_Correctly4 }}></div>
											</div>
											<span
												className={`${classes["testStatus"]} ${
													status4 === "Failed" || status4 === "Failing Grade - Under 80%" ? classes.red : status4 === "Passed" ? classes.green : ""
												}`}
											>
												{status4}
											</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel} onClick={test5_ButtonAction}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>
													<p className={classes.testText}>Test #5</p>
													<span className={classes.testTextInfo}>
														<Tippy
															content={
																<>
																	<div>Passing Grade</div>
																	<div>80%</div>
																	<div>30/36</div>
																</>
															}
															placement="top"
															theme="custom"
															appendTo="parent"
														>
															{infoIcon}
														</Tippy>
													</span>
												</span>
												<span className={classes.percentCorrect}>{percentAnswered_Correctly5}</span>
												<span className={classes.fractionCorrect}>
													{answered_Correctly5}/{lastSubmittedQuestion5}
												</span>
											</div>
											<div className={classes.testResultsContainer}>
												<div className={classes.testResultsBarTotal}></div>
												<div className={classes.testResultsBarIncorrect} style={{ width: percentAnswered_Incorrectly5 }}></div>
												<div className={classes.testResultsBarCorrect} style={{ width: percentAnswered_Correctly5 }}></div>
											</div>
											<span
												className={`${classes["testStatus"]} ${
													status5 === "Failed" || status5 === "Failing Grade - Under 80%" ? classes.red : status5 === "Passed" ? classes.green : ""
												}`}
											>
												{status5}
											</span>
										</div>
									</div>
								</div>
							</li>
							<li className={classes.contentContainer}>
								<div className={classes.parentLabelOuterContainer}>
									<div className={classes.parentLabel}>
										<div className={classes.testResultsBarContainer}>
											<div className={classes.testResultsLabel}>
												<span className={classes.sectionNUm}>
													<p className={classes.testText}>Average</p>
													<span className={classes.testTextInfo}>
														<Tippy
															content={
																<>
																	<div>Passing Grade</div>
																	<div>80%</div>
																	<div>
																		{Math.round(lastSubmittedQuestion * 0.8)}/{lastSubmittedQuestion}
																	</div>
																</>
															}
															placement="top"
															theme="custom"
															appendTo="parent"
														>
															{infoIcon}
														</Tippy>
													</span>
												</span>
												<span className={classes.percentCorrect}>{percentAnswered_Correctly}</span>
												<span className={classes.fractionCorrect}>
													{answered_Correctly}/{lastSubmittedQuestion}
												</span>
											</div>
											<div className={classes.testResultsContainer}>
												<div className={classes.testResultsBarTotal}></div>
												<div className={classes.testResultsBarIncorrect} style={{ width: percentAnswered_Incorrectly }}></div>
												<div className={classes.testResultsBarCorrect} style={{ width: percentAnswered_Correctly }}></div>
											</div>
											<span
												className={`${classes["testStatus"]} ${
													status4 === "Failed" || status1 === "Failing Grade - Under 80%" ? classes.red : status1 === "Passed" ? classes.green : ""
												}`}
											>
												{status}
											</span>
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
