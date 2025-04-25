import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import classes from "../../5000_demos/100_demo_DMV_ClassC/demo_DMV_ClassC.module.css";
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
		const testResultsData_listForm = Object.entries(testResultData1);
		let numberAnswered1 = 0;
		let numberAnswered_Correctly1 = 0;
		testResultsData_listForm.map(([key, value]) => {
			numberAnswered1 += 1;
			const isCorrect = value.attempts[1] ? value.attempts[1].isCorrect : value.attempts[0].isCorrect;
			if (isCorrect) numberAnswered_Correctly1 += 1;
		});

		setLastSubmittedQuestion1(numberAnswered1);
		setAnswered_Correctly1(numberAnswered_Correctly1);
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
		const testResultsData_listForm = Object.entries(testResultData2);
		let numberAnswered2 = 0;
		let numberAnswered_Correctly2 = 0;
		testResultsData_listForm.map(([key, value]) => {
			numberAnswered2 += 1;
			const isCorrect = value.attempts[1] ? value.attempts[1].isCorrect : value.attempts[0].isCorrect;
			if (isCorrect) numberAnswered_Correctly2 += 1;
		});

		setLastSubmittedQuestion2(numberAnswered2);
		setAnswered_Correctly2(numberAnswered_Correctly2);
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
		const testResultsData_listForm = Object.entries(testResultData1);
		let numberAnswered3 = 0;
		let numberAnswered_Correctly3 = 0;
		testResultsData_listForm.map(([key, value]) => {
			numberAnswered3 += 1;
			const isCorrect = value.attempts[1] ? value.attempts[1].isCorrect : value.attempts[0].isCorrect;
			if (isCorrect) numberAnswered_Correctly3 += 1;
		});

		setLastSubmittedQuestion3(numberAnswered3);
		setAnswered_Correctly3(numberAnswered_Correctly3);
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
		const testResultsData_listForm = Object.entries(testResultData1);
		let numberAnswered4 = 0;
		let numberAnswered_Correctly4 = 0;
		testResultsData_listForm.map(([key, value]) => {
			numberAnswered4 += 1;
			const isCorrect = value.attempts[1] ? value.attempts[1].isCorrect : value.attempts[0].isCorrect;
			if (isCorrect) numberAnswered_Correctly4 += 1;
		});

		setLastSubmittedQuestion4(numberAnswered4);
		setAnswered_Correctly4(numberAnswered_Correctly4);
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
		const testResultsData_listForm = Object.entries(testResultData1);
		let numberAnswered5 = 0;
		let numberAnswered_Correctly5 = 0;
		testResultsData_listForm.map(([key, value]) => {
			numberAnswered5 += 1;
			const isCorrect = value.attempts[1] ? value.attempts[1].isCorrect : value.attempts[0].isCorrect;
			if (isCorrect) numberAnswered_Correctly5 += 1;
		});

		setLastSubmittedQuestion5(numberAnswered5);
		setAnswered_Correctly5(numberAnswered_Correctly5);
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
		const testResultsData_listForm = Object.entries(testResultData);
		let numberAnswered = 0;
		let numberAnswered_Correctly = 0;

		for (let i = 0; i < testResultsData_listForm.length; i++) {
			const testData = testResultsData_listForm[i][1];
			const testObjectData = Object.entries(testData);
			for (let j = 0; j < testObjectData.length; j++) {
				const questionKey = testObjectData[j][0];
				const questionData = testObjectData[j][1];
				numberAnswered += 1;
				const attempts = questionData.attempts;
				const lastAttempt = attempts[attempts.length - 1];
				const isCorrect = lastAttempt?.isCorrect;

				if (isCorrect) numberAnswered_Correctly += 1;
			}
		}
		setLastSubmittedQuestion(numberAnswered);
		setAnswered_Correctly(numberAnswered_Correctly);
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
		<svg className={classes.infoSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.868 299.867" id="Capa_1">
			<g>
				<g>
					<path d="M149.94,0C67.269,0,0,67.256,0,149.939c0,82.674,67.263,149.928,149.94,149.928c82.68,0,149.928-67.254,149.928-149.928    C299.868,67.256,232.62,0,149.94,0z M139.377,70.577c2.963-2.934,6.788-4.39,11.454-4.39c4.999,0,9.16,1.549,12.475,4.647    c3.303,3.099,4.96,6.6,4.96,10.503c0,2.882-0.654,5.768-1.963,8.646c-1.321,2.895-3.399,5.2-6.251,6.941    c-2.844,1.739-5.747,2.606-8.716,2.606c-4.071,0-7.821-1.735-11.259-5.215c-3.444-3.48-5.158-7.635-5.158-12.475    C134.919,77.26,136.408,73.51,139.377,70.577z M182.774,233.562c-2.282,0.084-3.975,0.126-5.08,0.126    c-1.272,0-3.212-0.084-5.837-0.259c-8.641-0.42-20.206-0.637-34.687-0.637c-4.152,0-8.172,0.156-12.066,0.445    c-3.903,0.3-6.566,0.444-8.004,0.444l-0.258-8.274l14.388-1.91c2.117-0.601,3.579-1.465,4.383-2.618    c0.814-1.141,1.213-3.711,1.213-7.698v-1.404c0-1.01,0.06-2.859,0.189-5.525c0.129-2.678,0.192-5.031,0.192-7.062    c0-1.621-0.129-4.72-0.381-9.295l0.189-6.365l-0.189-5.98l0.381-20.753c0-2.63-0.258-5.344-0.769-8.143    c-0.939-1.27-2.657-2.378-5.128-3.306c-2.471-0.931-6.789-1.618-12.938-2.036v-7.122c8.737-0.511,16.417-2.336,23.041-5.471    c4.489-2.041,9.364-5.647,14.633-10.823h8.533c0.336,10.521,0.504,24.185,0.504,40.982l-0.889,51.93    c0,3.555,0.169,6.785,0.505,9.668c2.63,0.937,6.917,1.873,12.856,2.798c2.287,0.349,4.113,0.769,5.47,1.273z" />
				</g>
			</g>
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
