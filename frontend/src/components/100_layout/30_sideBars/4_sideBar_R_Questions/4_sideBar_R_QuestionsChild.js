import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsChild = ({ id, text, isCorrect, isPreviouslyChecked, get_newlyCheckedID, uncheck, startGradingTest }) => {
	const [isChecked, setIsChecked] = useState(false);
	console.log("startGradingTest: ", startGradingTest);
	useEffect(() => {
		if (isPreviouslyChecked) {
			setIsChecked(true);
			console.log("checked here 1");
		} else {
			setIsChecked(false);
		}
	}, [isPreviouslyChecked]);

	const handleCheckboxChange = (event) => {
		if (event.target.checked) {
			setIsChecked(true);
			console.log("checked here 2");
			get_newlyCheckedID(id);
		} else {
			setIsChecked(false);
			get_newlyCheckedID(null);
		}
	};

	useEffect(() => {
		if (uncheck) {
			setIsChecked(false);
		}
	}, [uncheck]);

	return (
		<li key={id} className={`${classes["answerListItem"]} ${startGradingTest && isCorrect ? classes.isCorrect : startGradingTest ? classes.isIncorrect : ""}`}>
			<label className={`${classes["answerLabel"]} ${isChecked ? classes.isChecked : ""}`}>
				<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
				<span className={`${classes["checkBox"]} ${isChecked ? classes.isChecked : ""}`}></span>
				<p>{text}</p>
			</label>
		</li>
	);
};

export default SideBar_R_QuestionsChild;
