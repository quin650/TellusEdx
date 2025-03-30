import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import classes from "../../../components/500_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsOptions = () => {
	const dispatch = useDispatch();
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const pageNum_current_reader_rdx = useSelector(({ user }) => user.pageNum_current_reader_rdx);
	const testResultData = sideBar_R_QuestionTestResults_rdx ? sideBar_R_QuestionTestResults_rdx : null;
	const sideBar_R_Questions_currentAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_currentAttempt_rdx);
	const sideBar_R_Questions_RecentTestNumber_idx_reAttempted_rdx = useSelector(({ user }) => user.sideBar_R_Questions_RecentTestNumber_idx_reAttempted_rdx);
	const sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted_rdx = useSelector(({ user }) => user.sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted_rdx);
	const setRetakeFailedQuestions_moduleIsActive_rdx = useSelector(({ user }) => user.setRetakeFailedQuestions_moduleIsActive_rdx);
	const sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt_rdx);
	const [hasReAttemptedQuestion, setHasReAttemptedQuestion] = useState(false);
	const [questionsOnThisPage_ActiveStatus, setQuestionsOnThisPage_ActiveStatus] = useState(false);
	const [probabilityOfPassingStatus, setProbabilityOfPassingStatus] = useState(true);
	const [lastQuestionSubmitted, setLastQuestionSubmitted] = useState(null);
	const [test1Status, setTest1Status] = useState("");
	const [test2Status, setTest2Status] = useState("");
	const [test3Status, setTest3Status] = useState("");
	const [test4Status, setTest4Status] = useState("");
	const [test5Status, setTest5Status] = useState("");
	//! loop through testResultData, dispatch pertinent values
	useEffect(() => {
		const testResultsData_listForm = Object.entries(testResultData);
		let sideBar_R_Questions_FirstTestNumber_idx_reAttempted = null;
		let sideBar_R_Questions_FirstQuestionNumber_idx_reAttempted = null;
		let sideBar_R_Questions_FirstTestNumber_num_reAttempted = null;
		let sideBar_R_Questions_FirstQuestionNumber_num_reAttempted = null;

		let sideBar_R_Questions_RecentTestNumber_idx_reAttempted = null;
		let sideBar_R_Questions_RecentTestNumber_num_reAttempted = null;
		let sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted = null;
		let sideBar_R_Questions_RecentQuestionNumber_num_reAttempted = null;

		let sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt = null;
		let sideBar_R_Questions_CurrentTestNumber_num_toReAttempt = null;
		let sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt = null;
		let sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt = null;

		let sideBar_R_Questions_LastTestNumber_idx_toReAttempt = null;
		let sideBar_R_Questions_LastTestNumber_num_toReAttempt = null;
		let sideBar_R_Questions_LastQuestionNumber_idx_toReAttempt = null;
		let sideBar_R_Questions_LastQuestionNumber_num_toReAttempt = null;

		//TODO Push array of questions got wrong
		let wrongAnswers_num = {
			1: [],
			2: [],
			3: [],
			4: [],
			5: [],
		};

		for (let testNum_idx = 0; testNum_idx < testResultsData_listForm.length; testNum_idx++) {
			const testNum = testNum_idx + 1;
			const testData = testResultsData_listForm[testNum_idx][1];
			let testNumPrev = null;
			let questionNumPrev = null;
			const testData_object = Object.entries(testData);
			for (let questionNum_idx = 0; questionNum_idx < testData_object.length; questionNum_idx++) {
				const questionNum = questionNum_idx + 1;
				const questionData_attempts = testData_object[questionNum_idx][1].attempts;
				const initialAttempt = questionData_attempts[sideBar_R_Questions_currentAttempt_rdx + 1]
					? questionData_attempts[sideBar_R_Questions_currentAttempt_rdx + 1]
					: questionData_attempts[sideBar_R_Questions_currentAttempt_rdx];
				const initialAttempt_gotCorrect = initialAttempt?.isCorrect;
				const question_wasReAttempted = questionData_attempts[sideBar_R_Questions_currentAttempt_rdx + 1] ? true : false;

				if (questionData_attempts && sideBar_R_Questions_FirstTestNumber_idx_reAttempted === null && sideBar_R_Questions_FirstQuestionNumber_idx_reAttempted === null) {
					sideBar_R_Questions_FirstTestNumber_idx_reAttempted = testNum_idx;
					sideBar_R_Questions_FirstQuestionNumber_idx_reAttempted = questionNum_idx;
					sideBar_R_Questions_FirstTestNumber_num_reAttempted = testNum;
					sideBar_R_Questions_FirstQuestionNumber_num_reAttempted = questionNum;
					dispatch(
						userReducerActions.sideBar_R_Questions_setFirstTestNumber_reAttempted({
							idx: sideBar_R_Questions_FirstTestNumber_idx_reAttempted,
							num: sideBar_R_Questions_FirstTestNumber_num_reAttempted,
						})
					);
					dispatch(
						userReducerActions.sideBar_R_Questions_setFirstQuestionNumber_reAttempted({
							idx: sideBar_R_Questions_FirstQuestionNumber_idx_reAttempted,
							num: sideBar_R_Questions_FirstQuestionNumber_num_reAttempted,
						})
					);
				}

				if (!initialAttempt_gotCorrect) {
					wrongAnswers_num[testNum].push(questionNum);
					if (!question_wasReAttempted) {
						if (sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt === null || sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt === undefined) {
							sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt = testNum_idx;
							sideBar_R_Questions_CurrentTestNumber_num_toReAttempt = testNum_idx + 1;
							sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt = questionNum_idx;
							sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt = questionNum_idx + 1;

							sideBar_R_Questions_RecentTestNumber_idx_reAttempted = testNumPrev - 1;
							sideBar_R_Questions_RecentTestNumber_num_reAttempted = testNumPrev;
							sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted = questionNumPrev - 1;
							sideBar_R_Questions_RecentQuestionNumber_num_reAttempted = questionNumPrev;
						}
						sideBar_R_Questions_LastTestNumber_idx_toReAttempt = testNum_idx;
						sideBar_R_Questions_LastTestNumber_num_toReAttempt = testNum;
						sideBar_R_Questions_LastQuestionNumber_idx_toReAttempt = questionNum_idx;
						sideBar_R_Questions_LastQuestionNumber_num_toReAttempt = questionNum;
					}
				}
				testNumPrev = testNum;
				questionNumPrev = questionNum;
			}
		}

		if (
			sideBar_R_Questions_RecentTestNumber_idx_reAttempted !== null &&
			sideBar_R_Questions_RecentTestNumber_idx_reAttempted !== undefined &&
			sideBar_R_Questions_RecentTestNumber_idx_reAttempted_rdx === null
		) {
			dispatch(
				userReducerActions.sideBar_R_Questions_setRecentTestNumber_reAttempted({
					idx: sideBar_R_Questions_RecentTestNumber_idx_reAttempted,
					num: sideBar_R_Questions_RecentTestNumber_num_reAttempted,
				})
			);
			dispatch(userReducerActions.sideBar_R_Questions_setRetakeFailedQuestions_moduleIsActive(true));
		}
		if (
			sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted !== null &&
			sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted !== undefined &&
			sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted_rdx === null
		) {
			dispatch(
				userReducerActions.sideBar_R_Questions_setRecentQuestionNumber_reAttempted({
					idx: sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted,
					num: sideBar_R_Questions_RecentQuestionNumber_num_reAttempted,
				})
			);
		}

		if (
			sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt !== null &&
			sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt !== undefined &&
			sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt_rdx === null
		) {
			dispatch(
				userReducerActions.sideBar_R_Questions_setCurrentTestNumber_toReAttempt({
					idx: sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt,
					num: sideBar_R_Questions_CurrentTestNumber_num_toReAttempt,
				})
			);
		}

		if (
			sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt !== null &&
			sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt !== undefined &&
			sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt_rdx === null
		) {
			dispatch(
				userReducerActions.sideBar_R_Questions_setCurrentQuestionNumber_toReAttempt({
					idx: sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt,
					num: sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt,
				})
			);
		}
		dispatch(
			userReducerActions.sideBar_R_Questions_setLastTestNumber_toReAttempt({
				idx: sideBar_R_Questions_LastTestNumber_idx_toReAttempt,
				num: sideBar_R_Questions_LastTestNumber_num_toReAttempt,
			})
		);
		dispatch(
			userReducerActions.sideBar_R_Questions_setLastQuestionNumber_toReAttempt({
				idx: sideBar_R_Questions_LastQuestionNumber_idx_toReAttempt,
				num: sideBar_R_Questions_LastQuestionNumber_num_toReAttempt,
			})
		);

		dispatch(userReducerActions.sideBar_R_Questions_setWrongAnswers(wrongAnswers_num));
	}, []);

	// ! Set test-caption/active status
	useEffect(() => {
		if (sideBar_R_QuestionTestResults_rdx) {
			// Check if the values are available before updating state -- !!double negation returns boolean if truthy of falsy
			const test1Started = !!sideBar_R_QuestionTestResults_rdx[1]?.[1];
			const test2Started = !!sideBar_R_QuestionTestResults_rdx[2]?.[1];
			const test3Started = !!sideBar_R_QuestionTestResults_rdx[3]?.[1];
			const test4Started = !!sideBar_R_QuestionTestResults_rdx[4]?.[1];
			const test5Started = !!sideBar_R_QuestionTestResults_rdx[4]?.[1];

			const test1Completed = !!sideBar_R_QuestionTestResults_rdx[1]?.[36];
			const test2Completed = !!sideBar_R_QuestionTestResults_rdx[2]?.[36];
			const test3Completed = !!sideBar_R_QuestionTestResults_rdx[3]?.[36];
			const test4Completed = !!sideBar_R_QuestionTestResults_rdx[4]?.[36];
			const test5Completed = !!sideBar_R_QuestionTestResults_rdx[5]?.[36];

			// Update each test status only if the values exist
			setTest1Status(test1Completed ? "Done" : !test1Started ? "Start" : "Continue");
			setTest2Status(test1Completed ? (test2Completed ? "Done" : !test2Started ? "Start" : "Continue") : "n/a yet");
			setTest3Status(test2Completed ? (test3Completed ? "Done" : !test3Started ? "Start" : "Continue") : "n/a yet");
			setTest4Status(test3Completed ? (test4Completed ? "Done" : !test4Started ? "Start" : "Continue") : "n/a yet");
			setTest5Status(test4Completed ? (test5Completed ? "Done" : !test5Started ? "Start" : "Continue") : "n/a yet");
		}
		if (Object.keys(sideBar_R_QuestionTestResults_rdx).length > 0) {
			const testKeys = Object.keys(sideBar_R_QuestionTestResults_rdx);
			const lastTest = testKeys[testKeys.length - 1];
			if (sideBar_R_QuestionTestResults_rdx[lastTest]) {
				const lastQuestionKeys = Object.keys(sideBar_R_QuestionTestResults_rdx[lastTest]);
				const lastQuestion = lastQuestionKeys[lastQuestionKeys.length - 1];
				if (lastQuestion) {
					setLastQuestionSubmitted(Number(lastQuestion));
				}
			}
		}
	}, [sideBar_R_QuestionTestResults_rdx]);

	// ! Set Status for Questions On This Page - Active/Inactive
	useEffect(() => {
		if (pageNum_current_reader_rdx > 5) {
			setQuestionsOnThisPage_ActiveStatus(true);
		} else {
			setQuestionsOnThisPage_ActiveStatus(false);
		}
	}, [pageNum_current_reader_rdx]);

	//! Button Actions
	const generalButtonClick = () => {
		console.log("generalButtonClick");
	};
	const test1 = () => {
		if (test1Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else if (test1Status === "Start" || test1Status === "") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(1));
		} else {
			if (lastQuestionSubmitted + 1 > 36) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
			} else {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted + 1));
				dispatch(userReducerActions.sideBar_R_Questions_setCurrentQuestionNumber_toAttempt(lastQuestionSubmitted + 1));
			}
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(1));
	};

	const test2 = () => {
		if (test2Status === "n/a yet" || !test2Status) {
			return;
		} else if (test2Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else if (test2Status === "Start" || test2Status === "") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(1));
		} else {
			if (lastQuestionSubmitted + 1 > 36) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
			} else {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted + 1));
				dispatch(userReducerActions.sideBar_R_Questions_setCurrentQuestionNumber_toAttempt(lastQuestionSubmitted + 1));
			}
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(2));
	};
	const test3 = () => {
		if (test3Status === "n/a yet" || !test3Status) {
			return;
		} else if (test3Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else if (test3Status === "Start" || test3Status === "") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(1));
		} else {
			if (lastQuestionSubmitted + 1 > 36) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
			} else {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted + 1));
				dispatch(userReducerActions.sideBar_R_Questions_setCurrentQuestionNumber_toAttempt(lastQuestionSubmitted + 1));
			}
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(3));
	};
	const test4 = () => {
		if (test4Status === "n/a yet" || !test4Status) {
			return;
		} else if (test4Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else if (test4Status === "Start" || test4Status === "") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(1));
		} else {
			if (lastQuestionSubmitted + 1 > 36) {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
			} else {
				dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted + 1));
				dispatch(userReducerActions.sideBar_R_Questions_setCurrentQuestionNumber_toAttempt(lastQuestionSubmitted + 1));
			}
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(4));
	};
	const test5 = () => {
		if (test5Status === "n/a yet" || !test5Status) {
			return;
		} else if (test5Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else if (test5Status === "Start" || test5Status === "") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(1));
		} else {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
			dispatch(userReducerActions.sideBar_R_Questions_setCurrentQuestionNumber_toAttempt(lastQuestionSubmitted + 1));
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(5));
	};
	const goTo_RetakeFailedQuestions = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_RetakeFailedQuestions());
	};
	const goTo_ProbabilityOfPassingPage = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_ProbabilityOfPassing());
	};

	//! Hot-Key Combinations
	const handleKeyCombination = useCallback(
		(e) => {
			if (e.key) {
				switch (e.key) {
					case "1":
						test1();
						break;
					case "2":
						test2();
						break;
					case "3":
						test3();
						break;
					case "4":
						test4();
						break;
					case "5":
						test5();
						break;
					default:
						break;
				}
			}
		},
		[test1Status, test2Status, test3Status, test4Status, test5Status]
	);
	useEffect(() => {
		if (location.pathname === "/demo_dmvClassC") {
			document.addEventListener("keydown", handleKeyCombination);
		}
		return () => {
			document.removeEventListener("keydown", handleKeyCombination);
		};
	}, [location.pathname, handleKeyCombination]);

	return (
		<div className={classes.handbook_outerContainer2}>
			<div className={classes.page_contentContainer}>
				<div className={classes.handbook_header_section}>
					<p>Starting Page</p>
					<h1>Questions</h1>
				</div>
				<div className={classes.questionsLandingPageBody}>
					<div className={`${classes["quadrant_OuterContainer"]} ${!questionsOnThisPage_ActiveStatus && classes.isInactive}`}>
						<div className={`${classes["quadrant_InnerContainer"]} ${!questionsOnThisPage_ActiveStatus && classes.isInactive}`}>
							<div className={`${classes["overlay"]} ${!questionsOnThisPage_ActiveStatus && classes.isInactive}`}>
								<p>Available for Section's 1-13</p>
							</div>
							<h2>Questions On This Page</h2>
							<button
								onClick={generalButtonClick}
								className={`${classes["paginationButtonR"]} ${!questionsOnThisPage_ActiveStatus && classes.isInactive}`}
								disabled={questionsOnThisPage_ActiveStatus}
							>
								<svg className={`${classes["arrowIconR"]} ${!questionsOnThisPage_ActiveStatus && classes.isInactive}`} viewBox="0 0 24 24">
									<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
								</svg>
							</button>
						</div>
					</div>
					<div className={classes.quadrant_OuterContainer}>
						<div className={classes.quadrant_InnerContainer}>
							<h2>Sample Driver's License Tests</h2>
							<div className={classes.testButtonsContainer}>
								<button onClick={test1} className={`${classes["paginationButtonR"]} ${false ? classes.isInactive : ""}`} disabled={false}>
									<p>#1 </p>
									<svg className={`${classes["arrowIconR"]} ${false ? classes.isInactive : ""}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
									<span>{test1Status}</span>
								</button>
								<button onClick={test2} className={`${classes["paginationButtonR"]} ${test2Status === "n/a yet" && classes.isInactive}`} disabled={!test2Status}>
									<p>#2 </p>
									<svg className={`${classes["arrowIconR"]} ${test2Status === "n/a yet" && classes.isInactive}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
									<span>{test2Status}</span>
								</button>
								<button onClick={test3} className={`${classes["paginationButtonR"]} ${test3Status === "n/a yet" && classes.isInactive}`} disabled={!test3Status}>
									<p>#3 </p>
									<svg className={`${classes["arrowIconR"]} ${test3Status === "n/a yet" && classes.isInactive}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
									<span>{test3Status}</span>
								</button>
								<button onClick={test4} className={`${classes["paginationButtonR"]} ${test4Status === "n/a yet" && classes.isInactive}`} disabled={!test4Status}>
									<p>#4 </p>
									<svg className={`${classes["arrowIconR"]} ${test4Status === "n/a yet" && classes.isInactive}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
									<span>{test4Status}</span>
								</button>
								<button onClick={test5} className={`${classes["paginationButtonR"]} ${test5Status === "n/a yet" && classes.isInactive}`} disabled={test5Status}>
									<p>#5 </p>
									<svg className={`${classes["arrowIconR"]} ${test5Status === "n/a yet" && classes.isInactive}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
									<span>{test5Status}</span>
								</button>
							</div>
						</div>
					</div>
					<div className={`${classes["quadrant_OuterContainer"]} ${!setRetakeFailedQuestions_moduleIsActive_rdx && classes.isInactive}`}>
						<div className={`${classes["quadrant_InnerContainer"]} ${!setRetakeFailedQuestions_moduleIsActive_rdx && classes.isInactive}`}>
							<div className={`${classes["overlay"]} ${!setRetakeFailedQuestions_moduleIsActive_rdx && classes.isInactive}`}>
								<p>No Failed Questions available</p>
							</div>
							<h2>Retake failed questions</h2>
							<button
								onClick={goTo_RetakeFailedQuestions}
								className={`${classes["paginationButtonR"]} ${!setRetakeFailedQuestions_moduleIsActive_rdx && classes.isInactive}`}
								disabled={!setRetakeFailedQuestions_moduleIsActive_rdx}
							>
								<svg className={`${classes["arrowIconR"]} ${!setRetakeFailedQuestions_moduleIsActive_rdx ? classes.isInactive : ""}`} viewBox="0 0 24 24">
									<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
								</svg>
							</button>
						</div>
					</div>
					<div onClick={goTo_ProbabilityOfPassingPage} className={`${classes["quadrant_OuterContainer"]} ${!probabilityOfPassingStatus && classes.isInactive}`}>
						<div className={`${classes["quadrant_InnerContainer"]} ${!probabilityOfPassingStatus && classes.isInactive}`}>
							<div className={`${classes["overlay"]} ${!probabilityOfPassingStatus && classes.isInactive}`}>
								<p>Available after taking first test</p>
							</div>
							<h2>Probability of Passing</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_QuestionsOptions;
