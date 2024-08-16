import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import SideBar_Right_MainModal from "../../300_modals/3SideBar_Right-MainModal/SideBar_Right-MainModal";
import GetStartedButton from "../../300_modals/GetStartedModal/features/GetStartedButton";
import GetStartedModal from "../../300_modals/GetStartedModal/GetStartedModal";
import LanguageSettingsModal from "../../300_modals/LanguageSettings/LanguageSettingsModal";
import Logo from "../../../../static/images/Logo_arrows.png";
import classes from "./NavBar.module.css";

const MainNavbar = () => {
	const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
	const goToTOp = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const { sideBar_Right_Main_ModalStatus_rdx, getStarted_ModalStatus_rdx, languageSettings_ModalStatus_rdx } = useSelector(({ user }) => user);
	const dispatch = useDispatch();

	const demoNavBarMenuOption = true;
	// Button onClick actions
	const open_sideBar_Right_Main_Modal = () => {
		dispatch(userReducerActions.sideBar_Right_Open_Main_Modal());
	};
	// Buttons
	const sideBar_Right_Main_Button = (
		<button onClick={open_sideBar_Right_Main_Modal} className={classes.hamburgerButton}>
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
			<li className={classes.NavItem3}>{sideBar_Right_Main_Button}</li>
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
			<li className={classes.NavItem3}>{sideBar_Right_Main_Button}</li>
		</Fragment>
	);
	let content = { authGuest };
	!isAuthenticated ? (content = authGuest) : (content = authUser);

	return (
		<nav className={classes.navContainer}>
			<div className={classes.inner_container_nav}>
				{content}
				{sideBar_Right_Main_ModalStatus_rdx && <SideBar_Right_MainModal demoNavBarMenuOption={demoNavBarMenuOption} />}
				{getStarted_ModalStatus_rdx && <GetStartedModal />}
				{languageSettings_ModalStatus_rdx && <LanguageSettingsModal />}
			</div>
		</nav>
	);
};

export default MainNavbar;
