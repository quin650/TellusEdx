import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import SideBar_R_QuestionsParent from "./3_sideBar_R_QuestionsParent";
import PaginationQuestionsGUI from "../../../400_demos/10_demo_DMV_ClassC/0_features/pagination/paginationQuestionsGUI";
import data from "../../../400_demos/10_demo_DMV_ClassC/data/questions.json";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionNumber = () => {
	// State
	const [submitIsActive, setSubmitIsActive] = useState(false);
	const [commenceCheckIfCorrect, setCommenceCheckIfCorrect] = useState(false);
	const dispatch = useDispatch();

	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);
	const [question, setQuestion] = useState(null);

	useEffect(() => {
		const questionData = data.questions.find(
			(question) => question.testNumber === sideBar_R_Questions_CurrentTestNumber_rdx && question.questionNumber === sideBar_R_Questions_CurrentQuestionNumber_rdx
		);
		setQuestion(<SideBar_R_QuestionsParent questionData={questionData} oneIsChecked={oneIsChecked} commenceCheckIfCorrect={commenceCheckIfCorrect} />);
	}, [sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_Questions_CurrentQuestionNumber_rdx, commenceCheckIfCorrect]);

	useEffect(() => {
		setCommenceCheckIfCorrect(false);
		setSubmitIsActive(false);
	}, [sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_Questions_CurrentQuestionNumber_rdx]);
	//! Questions  --------------------------------------------

	const oneIsChecked = (status) => {
		setSubmitIsActive(status);
	};
	// Button Actions
	const cancelButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Landing());
	};
	const submitButtonAction = () => {
		console.log("submit Button clicked");
		setCommenceCheckIfCorrect(true);
	};

	return (
		<div className={classes.handbook_outerContainer2}>
			<div className={classes.handbook_innerContainer}>
				<div className={classes.page_contentContainer}>
					{question}
					<div className={classes.buttonSection}>
						<button className={classes.button_formatCancel} onClick={cancelButtonAction} type="submit">
							Cancel
						</button>
						<button className={classes.button_formatSubmit} onClick={submitButtonAction} type="submit" disabled={!submitIsActive}>
							Submit
						</button>
					</div>
					<PaginationQuestionsGUI commenceCheckIfCorrect={commenceCheckIfCorrect} />
				</div>
			</div>
		</div>
	);
};

export default SideBar_R_QuestionNumber;
