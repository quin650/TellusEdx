import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import classes from "./modal_languageSettings.module.css";

const Modal_languageSettingsOptions = (props) => {
	const dispatch = useDispatch();
	const modal_languageSettings_currentLanguage_rdx = useSelector(({ user }) => user.modal_languageSettings_currentLanguage_rdx);
	const [isChecked, setIsChecked] = useState(false);
	useEffect(() => {
		if (modal_languageSettings_currentLanguage_rdx === props.language) {
			setIsChecked(true);
		} else if (isChecked && modal_languageSettings_currentLanguage_rdx !== props.language) {
			setIsChecked(false);
		}
	}, [modal_languageSettings_currentLanguage_rdx]);
	const handleCheckboxChange = () => {
		if (isChecked) {
			setIsChecked(false);
			dispatch(userReducerActions.modal_action_languageSettings_changeLanguage_rdx(""));
		} else if (!isChecked && modal_languageSettings_currentLanguage_rdx !== props.language) {
			setIsChecked(true);
			dispatch(userReducerActions.modal_action_languageSettings_changeLanguage_rdx(props.language));
		}
	};
	return (
		<Fragment>
			<div onClick={handleCheckboxChange} className={`${classes["languageOption"]} ${isChecked && classes.isChecked}`}>
				<span>{props.language}</span>
				<img src={props.flag} alt="Logo" className={classes.flag}></img>
				<input className={classes.optionInputBox} type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
			</div>
			<hr className={classes.break}></hr>
		</Fragment>
	);
};

export default Modal_languageSettingsOptions;
