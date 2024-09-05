import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import SideBar_R_QuestionsParent from "./3_sideBar_R_QuestionsParent";
import PaginationQuestionsGUI from "../../../400_demos/10_demo_DMV_ClassC/0_features/pagination/paginationQuestionsGUI";
import data from "../../../400_demos/10_demo_DMV_ClassC/data/questions.json";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionNumber = () => {
	const dispatch = useDispatch();

	const [questionID, setQuestionID] = useState(1);
	const questionData = data.questions[questionID - 1];

	//! Questions  --------------------------------------------
	// State
	const [submitIsActive, setSubmitIsActive] = useState(false);
	const oneIsChecked = (status) => {
		setSubmitIsActive(status);
	};
	// Button Actions
	const cancelButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Landing());
	};
	const submitButtonAction = () => {
		console.log("submit Button clicked");
	};
	return (
		<div className={classes.handbook_outerContainer2}>
			<div className={classes.handbook_innerContainer}>
				<div className={classes.page_contentContainer}>
					<SideBar_R_QuestionsParent questionData={questionData} oneIsChecked={oneIsChecked} />
					<div className={classes.buttonSection}>
						<button className={classes.button_formatCancel} onClick={cancelButtonAction} type="submit">
							Cancel
						</button>
						<button className={classes.button_formatSubmit} onClick={submitButtonAction} type="submit" disabled={!submitIsActive}>
							Submit
						</button>
					</div>
					<PaginationQuestionsGUI />
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_QuestionNumber;
