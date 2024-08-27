import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "./sideBar_R_QuestionsModal.module.css";

const SideBar_R_QuestionsChild = ({ id, text, isCorrect }) => {
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	return (
		<li key={id}>
			<label className={`${classes["answerLabel"]} ${isChecked ? classes.isChecked : ""}`}>
				<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
				<span className={`${classes["checkBox"]} ${isChecked ? classes.isChecked : ""}`}></span>
				<p>{text}</p>
				{isCorrect && <p>&lt;-- Correct Answer w/ id#: {id}</p>}
			</label>
		</li>
	);
};

export default SideBar_R_QuestionsChild;
