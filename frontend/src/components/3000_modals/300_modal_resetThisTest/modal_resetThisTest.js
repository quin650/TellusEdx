import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import classes from "../../5000_demos/100_demo_DMV/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Modal_resetThisTest = () => {
	const dispatch = useDispatch();
	const modal_ref_resetThisTest = useRef();
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);

	const modal_button_action_resetThisTest = () => {
		dispatch(userReducerActions.modal_action_resetThisTest_close_rdx());
		dispatch(userReducerActions.deleteTestResults(sideBar_R_Questions_CurrentTestNumber_rdx));
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_Landing());
	};

	const modal_button_resetThisTest = (
		<button aria-label="Rest This Test" onClick={modal_button_action_resetThisTest} className={classes.button_formatSubmit} type="submit">
			Reset Test {sideBar_R_Questions_CurrentTestNumber_rdx}
		</button>
	);
	const backButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoToPrev());
	};
	let exitButton = (
		<button aria-label="Exit Reset" onClick={backButtonAction} className={classes.exitButton}>
			<svg className={classes.svgExit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
				<path
					d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z"
					fillRule="nonzero"
					fillOpacity="1"
					stroke="none"
				></path>
			</svg>
		</button>
	);
	return (
		<div className={classes.blurredBackgroundContainer}>
			<div className={classes.modal} ref={modal_ref_resetThisTest}>
				{exitButton}
				<div className={classes.modalContentContainer}>
					<div className={classes.modalForm}>
						<h2>Are you sure that you want to reset test {sideBar_R_Questions_CurrentTestNumber_rdx}?</h2>
						{modal_button_resetThisTest}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal_resetThisTest;
