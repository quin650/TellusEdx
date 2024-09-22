import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";

import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_TestResults = () => {
	const dispatch = useDispatch();
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);

	const questionContentRef = useRef(null);
	const handleQuestionSideBarClick = () => {
		dispatch(userReducerActions.setActivePanel("questions"));
	};
	// Button Actions
	const cancelButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Landing());
	};
	return (
		<div className={classes.handbook_outerContainer2} ref={questionContentRef} onClick={handleQuestionSideBarClick}>
			<div className={classes.handbook_innerContainer}>
				<div className={classes.page_contentContainer}>
					<p>Test Results</p>
					<div className={classes.buttonSection}>
						<button className={classes.button_formatCancel} onClick={cancelButtonAction} type="submit">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_TestResults;
