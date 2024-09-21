import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsLandingPage = () => {
	const dispatch = useDispatch();
	//! Questions Landing Page ---------------------------------
	// Button Actions
	const generalButtonClick = () => {
		console.log("generalButtonClick");
	};
	const test1 = () => {
		if (test1Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else {
			console.log("test");
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(1));
	};
	const test2 = () => {
		if (test2Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else {
			console.log("test");
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(2));
	};
	const test3 = () => {
		if (test3Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(3));
	};
	const test4 = () => {
		if (test4Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(4));
	};
	const test5 = () => {
		if (test5Status === "Done") {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(36));
		} else {
			dispatch(userReducerActions.sideBar_R_Questions_setQuestionNumber(lastQuestionSubmitted));
		}
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(5));
	};
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const [lastQuestionSubmitted, setLastQuestionSubmitted] = useState(null);
	const [test1Status, setTest1Status] = useState("");
	const [test2Status, setTest2Status] = useState("");
	const [test3Status, setTest3Status] = useState("");
	const [test4Status, setTest4Status] = useState("");
	const [test5Status, setTest5Status] = useState("");

	useEffect(() => {
		if (sideBar_R_QuestionTestResults_rdx) {
			// Check if the values are available before updating state
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

			const testKeys = Object.keys(sideBar_R_QuestionTestResults_rdx);
			const lastTest = testKeys[testKeys.length - 1];
			const lastQuestionKeys = Object.keys(sideBar_R_QuestionTestResults_rdx[lastTest]);
			const lastQuestion = lastQuestionKeys[lastQuestionKeys.length - 1];

			setLastQuestionSubmitted(Number(lastQuestion));
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

	return (
		<div className={classes.handbook_outerContainer2}>
			<div className={classes.page_contentContainer}>
				<div className={classes.handbook_header_section}>
					<p>Starting Page</p>
					<h1>Questions</h1>
				</div>
				<div className={classes.questionsLandingPageBody}>
					<div className={classes.quadrant_OuterContainer}>
						<div className={classes.quadrant_InnerContainer}>
							<h2>Questions On This Page</h2>
							<button onClick={generalButtonClick} className={`${classes["paginationButtonR"]} ${false && classes.isInactive}`} disabled={false}>
								<svg className={`${classes["arrowIconR"]} ${false ? classes.isInactive : ""}`} viewBox="0 0 24 24">
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
					<div className={classes.quadrant_OuterContainer}>
						<div className={classes.quadrant_InnerContainer}>
							<h2>Retake failed questions</h2>
							<button onClick={generalButtonClick} className={`${classes["paginationButtonR"]} ${false && classes.isInactive}`} disabled={false}>
								<svg className={`${classes["arrowIconR"]} ${false ? classes.isInactive : ""}`} viewBox="0 0 24 24">
									<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
								</svg>
							</button>
						</div>
					</div>
					<div className={classes.quadrant_OuterContainer}>
						<div className={classes.quadrant_InnerContainer}>
							<h2>Probability of Passing</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_QuestionsLandingPage;
