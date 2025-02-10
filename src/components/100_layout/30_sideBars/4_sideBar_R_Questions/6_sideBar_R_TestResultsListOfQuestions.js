import React from "react";
import { useDispatch } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_TestResultsListOfQuestions = ({ id, isCorrect }) => {
	const dispatch = useDispatch();

	const gotoQuestion = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoBackTo_Test());
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_QuestionNumber(id));
	};

	return (
		<li key={id} className={classes.contentContainer}>
			<div className={classes.parentLabelOuterContainer}>
				<a onClick={gotoQuestion} className={`${classes["parentLabel"]} ${isCorrect ? classes.isPassed : classes.failed}`}>
					<span className={classes.sectionNUm}>Q{id}:</span> {isCorrect ? "Correct" : "Incorrect"}
				</a>
			</div>
		</li>
	);
};

export default SideBar_R_TestResultsListOfQuestions;
