import React, { useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "./4_sideBar_R_QuestionsModal.module.css";

const SideBar_R_QuestionsModal = () => {
	const sideBarQuestionsRef = useRef();
	const exitButtonRef = useRef();
	const sideBar_R_Questions_ModalStatus_rdx = useSelector(({ user }) => user.sideBar_R_Questions_ModalStatus_rdx);
	const dispatch = useDispatch();
	// Exit Functionality

	const onClickOutsideNavBar_closeNavBar = (e) => {
		if (navBarRef.current && !navBarRef.current.contains(e.target) && !exitButtonRef.current.contains(e.target) && !languageSettingsModalStatusRef.current) {
			exitNavBarAction();
		}
	};
	const exitNavBarAction = () => {
		dispatch(userReducerActions.sideBar_R_Close_Questions_Modal());
		document.removeEventListener("mousedown", onClickOutsideNavBar_closeNavBar);
	};
	const onEscKey_ExitModal = (e) => {
		if (e.key === "Escape") {
			exitNavBarAction();
		}
	};
	const toggleMenu = () => {
		dispatch(userReducerActions.sideBar_R_Close_Questions_Modal());
	};
	let exitButton = (
		<button onClick={toggleMenu} className={classes.exitButton} ref={exitButtonRef}>
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
		<Fragment>
			{sideBar_R_Questions_ModalStatus_rdx ? exitButton : ""}
			<menu className={`${classes["sideBar_R_outerContainer"]} ${sideBar_R_Questions_ModalStatus_rdx ? classes.open : ""}`} ref={sideBarQuestionsRef}></menu>
		</Fragment>
	);
};

export default SideBar_R_QuestionsModal;
