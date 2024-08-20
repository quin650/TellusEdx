import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import { Link } from "react-router-dom";
import GetStartedButton from "../../300_modals/10_getStartedModal/features/1_getStartedButton";
import SideBar_R_MainModal from "../30_sideBars/3_sideBar_R_MainModal/sideBar_R_MainModal";
import GetStartedModal from "../../300_modals/10_getStartedModal/getStartedModal";
import LanguageSettingsModal from "../../300_modals/20_languageSettings/1_languageSettingsModal";

import Logo from "../../../../static/images/Logo_arrows.png";
import classes from "./navBar.module.css";

const MainNavbar = () => {
	const goToTOp = () => {
		document.querySelector("main").scrollTo(0, 0);
	};
	const isAuthenticated_rdx = useSelector(({ user }) => user.isAuthenticated_rdx);
	const sideBar_R_Main_ModalStatus_rdx = useSelector(({ user }) => user.sideBar_R_Main_ModalStatus_rdx);
	const languageSettings_ModalStatus_rdx = useSelector(({ user }) => user.languageSettings_ModalStatus_rdx);
	const getStarted_ModalStatus_rdx = useSelector(({ user }) => user.getStarted_ModalStatus_rdx);

	const dispatch = useDispatch();
	// Button onClick actions
	const open_sideBar_R_Main_Modal = () => {
		dispatch(userReducerActions.sideBar_R_Open_Main_Modal());
	};
	// Buttons

	const sideBar_R_Main_Button = (
		<button onClick={open_sideBar_R_Main_Modal} className={`${classes["hamburgerButton"]} ${sideBar_R_Main_ModalStatus_rdx && classes.open_NavBarMenu}`}>
			<svg className={classes.svgHamburger} focusable="false" viewBox="0 0 16 16">
				<path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
			</svg>
		</button>
	);
	const authUser = (
		<Fragment>
			<li className={classes.NavItem1}>
				<Link to="/home" onClick={goToTOp}>
					<img src={Logo} alt="Logo" className={classes.Logo}></img>
				</Link>
			</li>
			<li className={classes.NavItem3}>{sideBar_R_Main_Button}</li>
		</Fragment>
	);
	const authGuest = (
		<Fragment>
			<li className={classes.NavItem1}>
				<Link to="/home" onClick={goToTOp}>
					<img src={Logo} alt="Logo" className={classes.Logo}></img>
				</Link>
			</li>
			<li className={classes.NavItem2}>
				<GetStartedButton />
			</li>
			<li className={classes.NavItem4}>{sideBar_R_Main_Button}</li>
		</Fragment>
	);
	let content = { authGuest };
	!isAuthenticated_rdx ? (content = authGuest) : (content = authUser);

	return (
		<nav className={classes.navContainer}>
			<div className={classes.inner_container_nav}>
				{content}
				{sideBar_R_Main_ModalStatus_rdx && <SideBar_R_MainModal />}
				{getStarted_ModalStatus_rdx && <GetStartedModal />}
				{languageSettings_ModalStatus_rdx && <LanguageSettingsModal />}
			</div>
		</nav>
	);
};

export default MainNavbar;
