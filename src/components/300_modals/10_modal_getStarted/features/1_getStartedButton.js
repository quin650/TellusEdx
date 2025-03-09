import React from "react";
import { useDispatch } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "./1_getStartedButton.module.css";

const GetStartedButton = () => {
	const dispatch = useDispatch();
	const modalButtonAction = () => {
		dispatch(userReducerActions.modal_action_getStarted_createAccount_open_rdx());
	};

	return (
		<button className={classes.button_format} onClick={modalButtonAction} type="submit">
			Get Started
		</button>
	);
};

export default GetStartedButton;
