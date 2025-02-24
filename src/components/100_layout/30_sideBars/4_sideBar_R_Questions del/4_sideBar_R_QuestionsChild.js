import React, { useState, useEffect } from "react";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_QuestionsChild = ({ id, text, isCorrect, isPreviouslyChecked, get_newlyCheckedID, startGradingTest }) => {
	const [isChecked, setIsChecked] = useState(false);
	useEffect(() => {
		if (isPreviouslyChecked) {
			setIsChecked(true);
		} else {
			setIsChecked(false);
		}
	}, [isPreviouslyChecked]);

	const handleCheckboxChange = (event) => {
		if (event.target.checked) {
			setIsChecked(true);
			get_newlyCheckedID(id, isCorrect);
		}
	};

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
