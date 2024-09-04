import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import SideBar_R_QuestionsChild from "./3_sideBar_R_QuestionsChild";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsParent = ({ questionData, oneIsChecked }) => {
	const question = questionData.question;
	const answersData = questionData.answers;
	const [checkedID, setCheckedID] = useState(null);
	const [toUncheckID, setToUncheckID] = useState(null);

	const newlyCheckedID = (id, status) => {
		if (checkedID && id !== checkedID) {
			setToUncheckID(checkedID);
		}
		setCheckedID(id);
		if (id) {
			oneIsChecked(status);
		}
	};

	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p></p>
				<h2>{question}</h2>
			</div>
			<div className={classes.page_content}>
				<ul>
					{answersData.map((answer) => (
						<SideBar_R_QuestionsChild
							key={answer.id}
							id={answer.id}
							text={answer.text}
							isCorrect={answer.isCorrect}
							newlyCheckedID={newlyCheckedID}
							uncheck={answer.id === toUncheckID}
						/>
					))}
				</ul>
			</div>
		</Fragment>
	);
};

export default SideBar_R_QuestionsParent;
