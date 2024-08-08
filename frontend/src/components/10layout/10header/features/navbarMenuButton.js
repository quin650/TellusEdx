import React, { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import GetStartedModal from "../../../12modals/getStarted/GetStartedModal";
import LanguageSettingsModal from "../../../12modals/languageSettings/LanguageSettingsModal";
import NavbarMenu from "../../11menu/navbarMenu";
import classes from "./NavbarMenuButton.module.css";

const NavbarMenuButton = ({ demoNavBarMenuOption }) => {
	const dispatch = useDispatch();
	const exitButtonRef = useRef();
	const { navbarMenuStatus, getStartedModalStatus, languageSettingsModalStatus } = useSelector(({ user }) => user);
	const toggleMenu = () => {
		if (!navbarMenuStatus) {
			dispatch(userReducerActions.navBarMenuOpen());
		} else {
			dispatch(userReducerActions.navBarMenuClose());
		}
	};
	let hamburgerButton = (
		<button onClick={toggleMenu} className={classes.hamburgerButton}>
			<svg className={classes.svgHamburger} focusable="false" viewBox="0 0 16 16">
				<path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
			</svg>
		</button>
	);
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
	const content = navbarMenuStatus ? exitButton : hamburgerButton;

	return (
		<Fragment>
			{navbarMenuStatus && <NavbarMenu demoNavBarMenuOption={demoNavBarMenuOption} exitButtonRef={exitButtonRef} />}
			{getStartedModalStatus && <GetStartedModal />}
			{languageSettingsModalStatus && <LanguageSettingsModal />}
			{content}
		</Fragment>
	);
};

export default NavbarMenuButton;
