import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsLandingPage = () => {
	const dispatch = useDispatch();
	//! Questions Landing Page ---------------------------------
	// State
	const [isInactive, setIsInactive] = useState(false);
	// Button Actions
	const generalButtonClick = () => {
		console.log("generalButtonClick");
	};

	const test1 = () => {
		console.log("test1 clicked");
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Test1());
	};

	return (
		<div className={classes.handbook_outerContainer2}>
			<div className={classes.handbook_innerContainer}>
				<div className={classes.page_contentContainer}>
					<div className={classes.handbook_header_section}>
						<p>Starting Page</p>
						<h1>Questions</h1>
					</div>
					<div className={classes.questionsLandingPageBody}>
						<div className={classes.quadrantContainer}>
							<div className={classes.topLeft}>
								<h2>Questions On This Page</h2>
								<button onClick={generalButtonClick} className={classes.paginationButtonR} disabled={isInactive}>
									<svg className={`${classes["arrowIconR"]} ${isInactive && classes.isInactive}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
								</button>
							</div>
						</div>
						<div className={classes.quadrantContainer}>
							<div className={classes.topLeft}>
								<h2>Sample Driver's License Tests</h2>
								<div className={classes.testButtonsContainer}>
									<button onClick={test1} className={classes.paginationButtonR} disabled={isInactive}>
										<p>Test #1 </p>
										<svg className={`${classes["arrowIconR"]} ${isInactive && classes.isInactive}`} viewBox="0 0 24 24">
											<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
										</svg>
									</button>
									<button onClick={generalButtonClick} className={classes.paginationButtonR} disabled={isInactive}>
										<p>Test #2 </p>
										<svg className={`${classes["arrowIconR"]} ${isInactive && classes.isInactive}`} viewBox="0 0 24 24">
											<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
										</svg>
									</button>
									<button onClick={generalButtonClick} className={classes.paginationButtonR} disabled={isInactive}>
										<p>Test #3 </p>
										<svg className={`${classes["arrowIconR"]} ${isInactive && classes.isInactive}`} viewBox="0 0 24 24">
											<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
										</svg>
									</button>
									<button onClick={generalButtonClick} className={classes.paginationButtonR} disabled={isInactive}>
										<p>Test #4 </p>
										<svg className={`${classes["arrowIconR"]} ${isInactive && classes.isInactive}`} viewBox="0 0 24 24">
											<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className={classes.quadrantContainer}>
							<div className={classes.topLeft}>
								<h2>Retake failed questions</h2>
								<button onClick={generalButtonClick} className={classes.paginationButtonR} disabled={isInactive}>
									<svg className={`${classes["arrowIconR"]} ${isInactive && classes.isInactive}`} viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
									</svg>
								</button>
							</div>
						</div>
						<div className={classes.quadrantContainer}>
							<div className={classes.topLeft}>
								<h2>Probability of Passing</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_QuestionsLandingPage;
