import React from "react";
import { useDispatch } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import classes from "../../../components/500_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_TestResults_ListOfQuestions = ({ id, isCorrect }) => {
	const dispatch = useDispatch();

	const gotoQuestion = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoBackTo_Test());
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_QuestionNumber(Number(id)));
	};

	return (
		<li key={id} className={classes.contentContainer}>
			<div className={classes.parentLabelOuterContainer}>
				<a onClick={gotoQuestion} className={`${classes["parentLabel"]} ${isCorrect ? classes.isPassed : classes.failed}`}>
					<span className={classes.sectionNUm}>Q{id}:</span>
					{isCorrect ? <span className={classes.correctIcon}>✔</span> : <span className={classes.incorrectIcon}>✖</span>}
				</a>
			</div>
		</li>
	);
};

export default SideBar_R_TestResults_ListOfQuestions;
