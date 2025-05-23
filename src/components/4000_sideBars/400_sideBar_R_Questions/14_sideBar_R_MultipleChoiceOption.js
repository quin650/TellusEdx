import React, { useState, useEffect } from "react";
import classes from "../../5000_demos/100_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const SideBar_R_MultipleChoiceOptions = ({ id, text, isCorrect, isPreviouslyChecked, get_newlyCheckedID, startGradingTest, keyEventListenerSelection }) => {
	const [isChecked, setIsChecked] = useState(false);
	// console.log("id:", id);
	// console.log("isPreviouslyChecked:", isPreviouslyChecked);
	// console.log("isChecked:", isChecked);
	// console.log("keyEventListenerSelection:", keyEventListenerSelection);
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
	useEffect(() => {
		if (keyEventListenerSelection) {
			if (keyEventListenerSelection === id) {
				setIsChecked(true);
				get_newlyCheckedID(id, isCorrect);
			}
		}
	}, [keyEventListenerSelection]);
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

export default SideBar_R_MultipleChoiceOptions;
