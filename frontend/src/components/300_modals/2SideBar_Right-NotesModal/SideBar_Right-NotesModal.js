import React, { useState, useEffect, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import GetStartedButton from "../GetStartedModal/features/GetStartedButton";
import { logout_APIAction } from "../../../a.actions/auth_Actions";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import Logo from "../../../../static/images/1Logo.png";
import classes from "./SideBar_Right-NotesModal.module.css";

const SideBar_Right_NotesModal = () => {
	const sideBarRightNotesRef = useRef();
	const exitButtonRef = useRef();
	const dispatch = useDispatch();
	const sideBar_Right_Notes_ModalStatus_rdx = useSelector(({ user }) => user.sideBar_Right_Notes_ModalStatus_rdx);

	useEffect(() => {
		window.addEventListener("keydown", onEscKey_ExitModal);
		document.addEventListener("mousedown", onClickOutsideNavBar_closeNavBar);
	}, []);
	const onClickOutsideNavBar_closeNavBar = (e) => {
		if (
			sideBarRightNotesRef.current &&
			!sideBarRightNotesRef.current.contains(e.target) &&
			!exitButtonRef.current.contains(e.target) &&
			!languageSettingsModalStatusRef.current
		) {
			exitNavBarAction();
		}
	};
	const exitNavBarAction = () => {
		dispatch(userReducerActions.sideBar_Right_Close_Notes_Modal());
		document.removeEventListener("mousedown", onClickOutsideNavBar_closeNavBar);
	};
	const onEscKey_ExitModal = (e) => {
		if (e.key === "Escape") {
			exitNavBarAction();
		}
	};
	const [navState, setNavState] = useState(false);
	useEffect(() => {
		if (sideBar_Right_Notes_ModalStatus_rdx) {
			setNavState(true);
		} else {
			setNavState(false);
		}
	}, [sideBar_Right_Notes_ModalStatus_rdx]);
	const toggleMenu = () => {
		dispatch(userReducerActions.sideBar_Right_Close_Notes_Modal());
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
			{exitButton}
			<menu className={`${classes["sidebar"]} ${navState ? classes.open : ""}`} ref={sideBarRightNotesRef}>
				<div className={classes.top}></div>
				<div className={classes.bottom}>
					<div className={classes.break}></div>
				</div>
			</menu>
		</Fragment>
	);
};

export default SideBar_Right_NotesModal;
