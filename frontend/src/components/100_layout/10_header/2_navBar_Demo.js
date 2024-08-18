import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";

import SideBar_R_SearchModal from "../30_sideBars/1_sideBar_R_SearchModal/sideBar_R_SearchModal";
import SideBar_R_NotesModal from "../30_sideBars/2_sideBar_R_NotesModal/sideBar_R_NotesModal";
import SideBar_R_MainModal from "../30_sideBars/3_sideBar_R_MainModal/sideBar_R_MainModal";
import GetStartedModal from "../../300_modals/10_getStartedModal/getStartedModal";
import LanguageSettingsModal from "../../300_modals/20_languageSettings/1_languageSettingsModal";

import classes from "./navBar.module.css";

const DemoNavbar = () => {
	const {
		sideBar_Left_isOpen_Rdx,
		sideBar_Left_AllowCollapse_OnWindowResize_rdx,
		sideBar_Right_Search_ModalStatus_rdx,
		sideBar_Right_Notes_ModalStatus_rdx,
		sideBar_Right_Main_ModalStatus_rdx,
		getStarted_ModalStatus_rdx,
		languageSettings_ModalStatus_rdx,
	} = useSelector(({ user }) => user);
	const dispatch = useDispatch();
	// Button onClick actions
	const toggle_SideBar_Left_Visibility = () => {
		dispatch(userReducerActions.sideBar_Left_Toggle_ModalVisibility(!sideBar_Left_isOpen_Rdx));
		if (sideBar_Left_AllowCollapse_OnWindowResize_rdx) {
			dispatch(userReducerActions.sideBar_Left_NotAllowCollapse_OnWindowResize());
		}
	};
	const open_sideBar_Right_Search_Modal = () => {
		if (sideBar_Right_Notes_ModalStatus_rdx) {
			dispatch(userReducerActions.sideBar_Right_Close_Notes_Modal());
		}
		if (sideBar_Right_Main_ModalStatus_rdx) {
			dispatch(userReducerActions.sideBar_Right_Close_Main_Modal());
		}
		dispatch(userReducerActions.sideBar_Right_Open_Search_Modal());
	};
	const open_sideBar_Right_Notes_Modal = () => {
		if (sideBar_Right_Search_ModalStatus_rdx) {
			dispatch(userReducerActions.sideBar_Right_Close_Notes_Modal());
		}
		if (sideBar_Right_Main_ModalStatus_rdx) {
			dispatch(userReducerActions.sideBar_Right_Close_Main_Modal());
		}
		dispatch(userReducerActions.sideBar_Right_Close_Search_Modal());
	};
	const open_sideBar_Right_Main_Modal = () => {
		if (sideBar_Right_Notes_ModalStatus_rdx) {
			dispatch(userReducerActions.sideBar_Right_Close_Notes_Modal());
		}
		if (sideBar_Right_Search_ModalStatus_rdx) {
			dispatch(userReducerActions.sideBar_Right_Close_Notes_Modal());
		}
		dispatch(userReducerActions.sideBar_Right_Open_Main_Modal());
	};
	// Buttons
	const sideBar_Left_Button = (
		<button onClick={toggle_SideBar_Left_Visibility} className={`${classes["toggleLeftMenuButton"]} ${sideBar_Left_isOpen_Rdx ? classes.open : ""}`}>
			<svg className={classes.svgMenuButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path
					fillRule="evenodd"
					d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
					clipRule="evenodd"
				></path>
			</svg>
		</button>
	);
	const sideBar_Right_Search_Button = (
		<button
			onClick={open_sideBar_Right_Search_Modal}
			className={`${classes["toggleSearchMenuButton"]} ${sideBar_Right_Search_ModalStatus_rdx ? classes.open : ""}`}
		>
			<svg className={classes.searchIconSVG} width="22" height="21" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.1458 16.7292C13.9198 16.7292 16.9792 13.6698 16.9792 9.89583C16.9792 6.12189 13.9198 3.0625 10.1458 3.0625C6.37189 3.0625 3.3125 6.12189 3.3125 9.89583C3.3125 13.6698 6.37189 16.7292 10.1458 16.7292Z" />
				<path d="M18.6875 18.4383L14.9719 14.7227" />
			</svg>
		</button>
	);
	const sideBar_Right_Notes_Button = (
		<button
			onClick={open_sideBar_Right_Notes_Modal}
			className={`${classes["toggleNotesMenuButton"]} ${sideBar_Right_Notes_ModalStatus_rdx ? classes.open : ""}`}
		>
			<svg className={classes.svgNotesMenuButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
			</svg>
		</button>
	);
	const sideBar_Right_Main_Button = (
		<button
			onClick={open_sideBar_Right_Main_Modal}
			className={`${classes["hamburgerButton"]} ${
				(sideBar_Right_Search_ModalStatus_rdx || sideBar_Right_Notes_ModalStatus_rdx || sideBar_Right_Main_ModalStatus_rdx) && classes.open_NavBarMenu
			}`}
		>
			<svg className={classes.svgHamburger} focusable="false" viewBox="0 0 16 16">
				<path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
			</svg>
		</button>
	);

	return (
		<nav className={classes.navContainer}>
			<div className={classes.inner_container_nav}>
				<li className={classes.NavItem1}>{sideBar_Left_Button}</li>
				<li className={classes.NavItem2}>{sideBar_Right_Search_Button}</li>
				<li className={classes.NavItem3}>{sideBar_Right_Notes_Button}</li>
				<li className={classes.NavItem4}>{sideBar_Right_Main_Button}</li>
				{sideBar_Right_Search_ModalStatus_rdx && <SideBar_R_SearchModal />}
				{sideBar_Right_Notes_ModalStatus_rdx && <SideBar_R_NotesModal />}
				{sideBar_Right_Main_ModalStatus_rdx && <SideBar_R_MainModal />}
				{getStarted_ModalStatus_rdx && <GetStartedModal />}
				{languageSettings_ModalStatus_rdx && <LanguageSettingsModal />}
			</div>
		</nav>
	);
};

export default DemoNavbar;
