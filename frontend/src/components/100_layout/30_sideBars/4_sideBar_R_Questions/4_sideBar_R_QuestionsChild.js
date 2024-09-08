import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsChild = ({ id, text, isCorrect, newlyCheckedAnswerID, uncheck, commenceCheckIfCorrect, previouslyChecked }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (event) => {
		if (event.target.checked) {
			setIsChecked(true);
			newlyCheckedAnswerID(id);
		}
	};
	useEffect(() => {
		if (uncheck) {
			setIsChecked(false);
		}
	}, [uncheck]);

	useEffect(() => {
		if (!commenceCheckIfCorrect) {
			setIsChecked(false);
		}
	}, [commenceCheckIfCorrect]);
	useEffect(() => {
		if (previouslyChecked) {
			setIsChecked(true);
		}
	}, []);

	return (
		<li
			key={id}
			className={`${classes["answerListItem"]} ${commenceCheckIfCorrect && isCorrect ? classes.isCorrect : commenceCheckIfCorrect ? classes.isIncorrect : ""}`}
		>
			<label className={`${classes["answerLabel"]} ${isChecked ? classes.isChecked : ""}`}>
				<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
				<span className={`${classes["checkBox"]} ${isChecked ? classes.isChecked : ""}`}></span>
				<p>{text}</p>
			</label>
		</li>
	);
};

export default SideBar_R_QuestionsChild;
