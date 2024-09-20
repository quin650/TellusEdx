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
		console.log("test1 clicked");
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(1));
	};
	const test2 = () => {
		console.log("test2 clicked");
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(2));
	};
	const test3 = () => {
		console.log("test3 clicked");
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(3));
	};
	const test4 = () => {
		console.log("test4 clicked");
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(4));
	};
	const test5 = () => {
		console.log("test5 clicked");
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test(4));
	};
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	// const [test1Status, setTest1Status] = useState(false);
	const [test2Status, setTest2Status] = useState(false);
	const [test3Status, setTest3Status] = useState(false);
	const [test4Status, setTest4Status] = useState(false);
	const [test5Status, setTest5Status] = useState(false);

	useEffect(() => {
		if (sideBar_R_QuestionTestResults_rdx) {
			// Check if the values are available before updating state
			// const test1Completed = !!sideBar_R_QuestionTestResults_rdx[1]?.[36];
			const test2Completed = !!sideBar_R_QuestionTestResults_rdx[2]?.[36];
			const test3Completed = !!sideBar_R_QuestionTestResults_rdx[3]?.[36];
			const test4Completed = !!sideBar_R_QuestionTestResults_rdx[4]?.[36];
			const test5Completed = !!sideBar_R_QuestionTestResults_rdx[5]?.[36];

			// Update each test status only if the values exist
			// setTest1Status(test1Completed);
			setTest2Status(test2Completed);
			setTest3Status(test3Completed);
			setTest4Status(test4Completed);
			setTest5Status(test5Completed);

			// Log after each update to ensure the state is correctly reflected
			// console.log("Test 1 Completed: ", test1Completed);
			// console.log("Test 2 Completed: ", test2Completed);
			// console.log("Test 3 Completed: ", test3Completed);
			// console.log("Test 4 Completed: ", test4Completed);
			// console.log("Test 5 Completed: ", test5Completed);
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
								</button>
								<button onClick={test2} className={`${classes["paginationButtonR"]} ${!test2Status && classes.isInactive}`} disabled={!test2Status}>
									<p>#2 </p>
									<svg className={`${classes["arrowIconR"]} ${!test2Status ? classes.isInactive : ""}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
								</button>
								<button onClick={test3} className={`${classes["paginationButtonR"]} ${!test3Status && classes.isInactive}`} disabled={!test3Status}>
									<p>#3 </p>
									<svg className={`${classes["arrowIconR"]} ${!test3Status ? classes.isInactive : ""}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
								</button>
								<button onClick={test4} className={`${classes["paginationButtonR"]} ${!test4Status && classes.isInactive}`} disabled={!test4Status}>
									<p>#4 </p>
									<svg className={`${classes["arrowIconR"]} ${!test4Status ? classes.isInactive : ""}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
								</button>
								<button onClick={test5} className={`${classes["paginationButtonR"]} ${!test5Status && classes.isInactive}`} disabled={test5Status}>
									<p>#5 </p>
									<svg className={`${classes["arrowIconR"]} ${test5Status ? classes.isInactive : ""}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
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
