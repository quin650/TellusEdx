import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsLandingPage = () => {
	const dispatch = useDispatch();
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);

	const [questionsOnThisPageStatus, setQuestionsOnThisPageStatus] = useState(false);
	const [retakeFailedQuestionsStatus, setRetakeFailedQuestionsStatus] = useState(true);
	const [probabilityOfPassingStatus, setProbabilityOfPassingStatus] = useState(true);

	const [lastQuestionSubmitted, setLastQuestionSubmitted] = useState(null);
	const [test1Status, setTest1Status] = useState("");
	const [test2Status, setTest2Status] = useState("");
	const [test3Status, setTest3Status] = useState("");
	const [test4Status, setTest4Status] = useState("");
	const [test5Status, setTest5Status] = useState("");
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
			// Log after each update to ensure the state is correctly reflected
			// console.log("test1Started: ", test1Started);
			// console.log("test2Started: ", test2Started);
			// console.log("test3Started: ", test3Started);
			// console.log("test4Started: ", test4Started);
			// console.log("test5Started: ", test5Started);
			// console.log("test1Completed: ", test1Completed);
			// console.log("test2Completed: ", test2Completed);
			// console.log("test3Completed: ", test3Completed);
			// console.log("test4Completed: ", test4Completed);
			// console.log("test5Completed: ", test5Completed);
		}
	}, [sideBar_R_QuestionTestResults_rdx]);
	useEffect(() => {
		if (sideBar_R_Questions_CurrentQuestionNumber_rdx > 5) {
			setQuestionsOnThisPageStatus(true);
		} else {
			setQuestionsOnThisPageStatus(false);
		}
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx]);
	// Button Actions
	const generalButtonClick = () => {
		console.log("generalButtonClick");
	};
	const test1 = () => {
		if (test1Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else if (test1Status === "Start" || test1Status === "") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(1));
		} else {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
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
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
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
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
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
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
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
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(5));
	};
	const goTo_ProbabilityOfPassingPage = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_ProbabilityOfPassing());
	};
	// Hot-Key Combinations
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
					<div className={`${classes["quadrant_OuterContainer"]} ${!questionsOnThisPageStatus && classes.isInactive}`}>
						<div className={`${classes["quadrant_InnerContainer"]} ${!questionsOnThisPageStatus && classes.isInactive}`}>
							<div className={`${classes["overlay"]} ${!questionsOnThisPageStatus && classes.isInactive}`}>
								<p>Available for Section's 1-13</p>
							</div>
							<h2>Questions On This Page</h2>
							<button
								onClick={generalButtonClick}
								className={`${classes["paginationButtonR"]} ${!questionsOnThisPageStatus && classes.isInactive}`}
								disabled={questionsOnThisPageStatus}
							>
								<svg className={`${classes["arrowIconR"]} ${!questionsOnThisPageStatus && classes.isInactive}`} viewBox="0 0 24 24">
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
					<div className={`${classes["quadrant_OuterContainer"]} ${!retakeFailedQuestionsStatus && classes.isInactive}`}>
						<div className={`${classes["quadrant_InnerContainer"]} ${!retakeFailedQuestionsStatus && classes.isInactive}`}>
							<div className={`${classes["overlay"]} ${!retakeFailedQuestionsStatus && classes.isInactive}`}>
								<p>No Failed Questions available</p>
							</div>
							<h2>Retake failed questions</h2>
							<button
								onClick={generalButtonClick}
								className={`${classes["paginationButtonR"]} ${!retakeFailedQuestionsStatus && classes.isInactive}`}
								disabled={retakeFailedQuestionsStatus}
							>
								<svg className={`${classes["arrowIconR"]} ${!retakeFailedQuestionsStatus ? classes.isInactive : ""}`} viewBox="0 0 24 24">
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

export default SideBar_R_QuestionsLandingPage;
