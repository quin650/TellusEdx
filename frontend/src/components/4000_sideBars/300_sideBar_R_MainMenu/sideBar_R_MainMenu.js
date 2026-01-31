import React, { useState, useEffect, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout_APIAction } from "../../../a.actions/auth_Actions";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
// import GetStartedButton from "../../3000_modals/100_modal_getStarted/getStartedFeatures/1_getStartedButton";

import GetStartedButton from "../../1000_layout/200_layoutFeatures/50_getStartedButton";

const Logo = "/static/images/logos_webp/logo_tellusEd_whiteCircleBackground.webp";

import classes from "./sideBar_R_MainMenu.module.css";

const SideBar_R_MainMenu = () => {
	const sideBarMainRef = useRef();
	const exitButtonRef = useRef();
	const isAuthenticated_rdx = useSelector(({ user }) => user.isAuthenticated_rdx);
	const activeFlag_rdx = useSelector(({ user }) => user.activeFlag_rdx);
	const sideBar_R_Search_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Search_isOpen_rdx);
	const sideBar_R_Notes_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Notes_isOpen_rdx);
	const sideBar_R_Main_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Main_isOpen_rdx);
	const sideBar_R_Questions_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_isOpen_rdx);
	const languageSettings_ModalStatus_rdx = useSelector(({ user }) => user.languageSettings_ModalStatus_rdx);
	const dispatch = useDispatch();
	const location = useLocation();
	const [activeIcon, setActiveIcon] = useState("/");
	const languageSettingsModalStatusRef = useRef(languageSettings_ModalStatus_rdx);
	// Icons
	const homeIcon = (
		<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.25 0.0625L0.75 7.9375H3.375V18.4375H8.625V13.1875H13.875V18.4375H19.125V7.85875L21.75 7.9375L11.25 0.0625Z" fill="currentColor" />
		</svg>
	);
	const demosIcon = (
		<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.75 1.14062C0.75 0.786818 1.03682 0.5 1.39062 0.5H9.55859C9.9124 0.5 10.1992 0.786818 10.1992 1.14063V12.1914C10.1992 12.5452 9.9124 12.832 9.55859 12.832H1.39062C1.03682 12.832 0.75 12.5452 0.75 12.1914V1.14062ZM2.35156 2.10156V11.2305H8.59766V2.10156H2.35156ZM11.8008 1.14062C11.8008 0.786818 12.0876 0.5 12.4414 0.5H20.6094C20.9632 0.5 21.25 0.786818 21.25 1.14063V6.42578C21.25 6.77959 20.9632 7.06641 20.6094 7.06641H12.4414C12.0876 7.06641 11.8008 6.77959 11.8008 6.42578V1.14062ZM13.4023 2.10156V5.46484H19.6484V2.10156H13.4023ZM11.8008 9.30859C11.8008 8.95479 12.0876 8.66797 12.4414 8.66797H20.6094C20.9632 8.66797 21.25 8.95479 21.25 9.30859V20.3594C21.25 20.7132 20.9632 21 20.6094 21H12.4414C12.0876 21 11.8008 20.7132 11.8008 20.3594V9.30859ZM13.4023 10.2695V19.3984H19.6484V10.2695H13.4023ZM0.75 15.0742C0.75 14.7204 1.03682 14.4336 1.39062 14.4336H9.55859C9.9124 14.4336 10.1992 14.7204 10.1992 15.0742V20.3594C10.1992 20.7132 9.9124 21 9.55859 21H1.39062C1.03682 21 0.75 20.7132 0.75 20.3594V15.0742ZM2.35156 16.0352V19.3984H8.59766V16.0352H2.35156Z"
				fill="currentColor"
			/>
		</svg>
	);
	const steeringWheelIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="21"
			height="21"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			{/* Outer wheel */}
			<circle cx="12" cy="12" r="10" />

			{/* Three spokes */}
			<line x1="12" y1="12" x2="12" y2="4" />
			<line x1="12" y1="12" x2="18" y2="16" />
			<line x1="12" y1="12" x2="6" y2="16" />
		</svg>
	);
	const NotesIcon = (
		<svg className={classes.svgNotesMenuButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
		</svg>
	);
	const aboutUsIcon = (
		<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14.4 7.67422C16.2847 7.67422 17.8125 6.36465 17.8125 4.74922C17.8125 3.13379 16.2847 1.82422 14.4 1.82422M14.6625 10.8242H14.7938C17.6208 10.8242 19.9125 12.7886 19.9125 15.2117C19.9125 16.0194 19.1486 16.6742 18.2063 16.6742H16.5M11.5125 4.74922C11.5125 6.36465 9.9847 7.67422 8.10002 7.67422C6.21535 7.67422 4.68752 6.36465 4.68752 4.74922C4.68752 3.13379 6.21535 1.82422 8.10002 1.82422C9.9847 1.82422 11.5125 3.13379 11.5125 4.74922ZM4.29377 16.6742H11.9063C12.8486 16.6742 13.6125 16.0194 13.6125 15.2117C13.6125 12.7886 11.3208 10.8242 8.49377 10.8242H7.70627C4.87927 10.8242 2.58752 12.7886 2.58752 15.2117C2.58752 16.0194 3.35144 16.6742 4.29377 16.6742Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
	const supportCenterIcon = (
		<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.00004 5.33333H7.16671C6.68048 5.33333 6.21416 5.52649 5.87034 5.8703C5.52653 6.21412 5.33337 6.68044 5.33337 7.16667V18.1667C5.33337 18.6529 5.52653 19.1192 5.87034 19.463C6.21416 19.8068 6.68048 20 7.16671 20H16.3334C16.8196 20 17.2859 19.8068 17.6297 19.463C17.9736 19.1192 18.1667 18.6529 18.1667 18.1667V7.16667C18.1667 6.68044 17.9736 6.21412 17.6297 5.8703C17.2859 5.52649 16.8196 5.33333 16.3334 5.33333H14.5M9.00004 5.33333C9.00004 5.81956 9.19319 6.28588 9.53701 6.6297C9.88083 6.97351 10.3471 7.16667 10.8334 7.16667H12.6667C13.1529 7.16667 13.6193 6.97351 13.9631 6.6297C14.3069 6.28588 14.5 5.81956 14.5 5.33333M9.00004 5.33333C9.00004 4.8471 9.19319 4.38079 9.53701 4.03697C9.88083 3.69315 10.3471 3.5 10.8334 3.5H12.6667C13.1529 3.5 13.6193 3.69315 13.9631 4.03697C14.3069 4.38079 14.5 4.8471 14.5 5.33333M9.00004 13.5833L10.8334 15.4167L14.5 11.75"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
	const helpIcon = (
		<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.29233 8.5C8.79558 7.43208 10.1532 6.66667 11.75 6.66667C13.7758 6.66667 15.4167 7.89775 15.4167 9.41667C15.4167 10.7 14.2452 11.7771 12.6612 12.0814C12.1643 12.1767 11.75 12.5764 11.75 13.0833M11.75 15.8333H11.7592M20 11.25C20 12.3334 19.7866 13.4062 19.372 14.4071C18.9574 15.4081 18.3497 16.3175 17.5836 17.0836C16.8175 17.8497 15.9081 18.4574 14.9071 18.872C13.9062 19.2866 12.8334 19.5 11.75 19.5C10.6666 19.5 9.5938 19.2866 8.59286 18.872C7.59193 18.4574 6.68245 17.8497 5.91637 17.0836C5.15029 16.3175 4.5426 15.4081 4.12799 14.4071C3.71339 13.4062 3.5 12.3334 3.5 11.25C3.5 9.06196 4.36919 6.96354 5.91637 5.41637C7.46354 3.86919 9.56196 3 11.75 3C13.938 3 16.0365 3.86919 17.5836 5.41637C19.1308 6.96354 20 9.06196 20 11.25Z"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="currentColor"
			/>
		</svg>
	);
	const languageIcon = (
		<svg
			style={{ width: "24px", height: "24px" }}
			xmlns="http://www.w3.org/2000/svg"
			enableBackground="new 0 0 24 24"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			focusable="false"
		>
			<path
				d="M13.33 6c-1 2.42-2.22 4.65-3.57 6.52l2.98 2.94-.7.71-2.88-2.84c-.53.67-1.06 1.28-1.61 1.83l-3.19 3.19-.71-.71 3.19-3.19c.55-.55 1.08-1.16 1.6-1.83l-.16-.15c-1.11-1.09-1.97-2.44-2.49-3.9l.94-.34c.47 1.32 1.25 2.54 2.25 3.53l.05.05c1.2-1.68 2.29-3.66 3.2-5.81H2V5h6V3h1v2h7v1h-2.67zM22 21h-1l-1.49-4h-5.02L13 21h-1l4-11h2l4 11zm-2.86-5-1.86-5h-.56l-1.86 5h4.28z"
				stroke="currentColor"
			/>
		</svg>
	);
	const darkModeIcon = (
		<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14.6784 15.2529C16.2628 15.5766 17.9074 15.4275 19.4078 14.8241C18.7936 16.3525 17.7361 17.6621 16.3714 18.5845C15.0066 19.5068 13.3971 19.9997 11.7499 19.9996C9.83446 19.9976 7.97935 19.3292 6.50262 18.1093C5.0259 16.8893 4.01954 15.1936 3.65606 13.3129C3.29258 11.4322 3.59462 9.48368 4.51041 7.80129C5.42619 6.1189 6.89868 4.80747 8.67544 4.0918C8.07209 5.59217 7.923 7.23679 8.2467 8.82121C8.57039 10.4056 9.35261 11.86 10.4961 13.0035C11.6396 14.147 13.0939 14.9292 14.6784 15.2529Z"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="currentColor"
			/>
		</svg>
	);
	const logInIcon = (
		<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.6667 7.58398L16.3333 11.2507M16.3333 11.2507L12.6667 14.9173M16.3333 11.2507L3.5 11.2507M8.08333 7.58398V6.66732C8.08333 5.93797 8.37306 5.2385 8.88879 4.72277C9.40451 4.20705 10.104 3.91732 10.8333 3.91732L17.25 3.91732C17.9793 3.91732 18.6788 4.20705 19.1945 4.72277C19.7103 5.2385 20 5.93797 20 6.66732V15.834C20 16.5633 19.7103 17.2628 19.1945 17.7785C18.6788 18.2943 17.9793 18.584 17.25 18.584H10.8333C10.104 18.584 9.40451 18.2943 8.88879 17.7785C8.37306 17.2628 8.08333 16.5633 8.08333 15.834V14.9173"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
	const logOutIcon = (
		<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.5833 14.666L19.25 10.9993M19.25 10.9993L15.5833 7.33268M19.25 10.9993H6.41667M11.9167 14.666V15.5827C11.9167 16.312 11.6269 17.0115 11.1112 17.5272C10.5955 18.043 9.89601 18.3327 9.16667 18.3327H5.5C4.77065 18.3327 4.07118 18.043 3.55546 17.5272C3.03973 17.0115 2.75 16.312 2.75 15.5827V6.41602C2.75 5.68667 3.03973 4.9872 3.55546 4.47147C4.07118 3.95575 4.77065 3.66602 5.5 3.66602H9.16667C9.89601 3.66602 10.5955 3.95575 11.1112 4.47147C11.6269 4.9872 11.9167 5.68667 11.9167 6.41602V7.33268"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
	const sunIcon = (
		<svg className={classes.sun} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
			<circle cx="12" cy="12" r="5" stroke="#1C274C" strokeWidth="1.5" />
			<path d="M12 2V4" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M12 20V22" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M4 12L2 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M22 12L20 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M19.7778 4.22266L17.5558 6.25424" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M4.22217 4.22266L6.44418 6.25424" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M6.44434 17.5557L4.22211 19.7779" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M19.7778 19.7773L17.5558 17.5551" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	);
	const moonIcon = (
		<svg className={classes.moon} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
			<path
				d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
	const QuestionsIcon = (
		<svg className={classes.svgQuestionsButton} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			{/* Checkmark */}
			<path d="M2 4 L4 6 L7 3" className={classes.checkmark} />

			{/* X mark */}
			<line x1="2" y1="14" x2="6" y2="18" className={classes.xmark} />
			<line x1="2" y1="18" x2="6" y2="14" className={classes.xmark} />

			{/* First horizontal line */}
			<line x1="10" y1="5" x2="20" y2="5" className={classes.horizontalline} />

			{/* Second horizontal line */}
			<line x1="10" y1="15" x2="20" y2="15" className={classes.horizontalline} />
		</svg>
	);
	// useEffects
	useEffect(() => {
		window.addEventListener("keydown", onEscKey_ExitModal);
		document.addEventListener("mousedown", onClickOutsideNavBar_closeNavBar);
		return () => {
			window.removeEventListener("keydown", onEscKey_ExitModal);
			document.removeEventListener("mousedown", onClickOutsideNavBar_closeNavBar);
		};
	}, []);
	useEffect(() => {
		setActiveIcon(location.pathname);
	}, [location]);
	// Functions
	const LogInHandler = () => {
		dispatch(userReducerActions.modal_action_getStarted_logIn_open_rdx());
	};
	const LogOutHandler = () => {
		dispatch(logout_APIAction());
		dispatch(userReducerActions.sideBar_R_Close_Main());
	};
	const CloseNavBarMenu_and_ScrollSmoothly = () => {
		dispatch(userReducerActions.sideBar_R_Close_Main());
		setTimeout(() => {
			document.querySelector("main").scrollTo({
				top: 0,
				behavior: "instant",
			});
		}, 0);
	};
	const CloseNavBarMenu_and_ScrollQuickly = () => {
		dispatch(userReducerActions.sideBar_R_Close_Main());
		document.querySelector("main").scrollTo({
			top: 0,
			behavior: "instant",
		});
	};
	const OpenLanguageSettingsModal = () => {
		dispatch(userReducerActions.languageSettingsModalOpen());
	};
	const isDarkMode_rdx = useSelector(({ user }) => user.isDarkMode_rdx);
	const [isChecked, setIsChecked] = useState(isDarkMode_rdx === "dark");
	const toggleTheme = (e) => {
		if (e.target.checked) {
			dispatch(userReducerActions.setDarkLightModeToTrue("dark"));
			setIsChecked(true);
		} else {
			dispatch(userReducerActions.setDarkLightModeToFalse("light"));
			setIsChecked(false);
		}
	};
	useEffect(() => {
		languageSettingsModalStatusRef.current = languageSettings_ModalStatus_rdx;
	}, [languageSettings_ModalStatus_rdx]);
	// Exit Functionality
	const onClickOutsideNavBar_closeNavBar = (e) => {
		if (sideBarMainRef.current && !sideBarMainRef.current.contains(e.target) && !exitButtonRef.current.contains(e.target) && !languageSettingsModalStatusRef.current) {
			exitNavBarAction();
		}
	};
	const exitNavBarAction = () => {
		dispatch(userReducerActions.sideBar_R_Close_Main());
		document.removeEventListener("mousedown", onClickOutsideNavBar_closeNavBar);
	};
	const onEscKey_ExitModal = (e) => {
		if (e.key === "Escape") {
			exitNavBarAction();
		}
	};
	// Other JSX
	let option = (
		<button type="button" onClick={LogInHandler} className={classes.menuItem}>
			<i className={classes.icon} onClick={LogInHandler}>
				{logInIcon}
			</i>
			<span>Log in</span>
		</button>
	);
	isAuthenticated_rdx
		? (option = (
				<button type="button" onClick={LogOutHandler} className={classes.menuItem}>
					<i className={classes.icon} onClick={LogOutHandler}>
						{logOutIcon}
					</i>
					<span>Log in</span>
				</button>
			))
		: (option = (
				<button type="button" onClick={LogInHandler} className={classes.menuItem}>
					<i className={classes.icon} onClick={LogInHandler}>
						{logInIcon}
					</i>
					<span>Log in</span>
				</button>
			));
	let content = (
		<div className={classes.buttonPadding}>
			<GetStartedButton />
		</div>
	);
	isAuthenticated_rdx
		? (content = null)
		: (content = (
				<div className={classes.buttonPadding}>
					<GetStartedButton />
				</div>
			));
	const toggleMenu = () => {
		dispatch(userReducerActions.sideBar_R_Close_Main());
	};
	let exitButton = (
		<button aria-label="Exit Main Menu" onClick={toggleMenu} className={classes.exitButton} ref={exitButtonRef}>
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
	const open_sideBar_R_Notes_Modal = () => {
		if (sideBar_R_Search_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Notes());
		}
		if (sideBar_R_Main_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Main());
		}
		if (sideBar_R_Questions_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Questions());
		}
		dispatch(userReducerActions.sideBar_R_Open_Notes());
	};
	const open_sideBar_R_Questions_Modal = () => {
		if (sideBar_R_Search_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Notes());
		}
		if (sideBar_R_Notes_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Notes());
		}
		if (sideBar_R_Main_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Main());
		}
		dispatch(userReducerActions.sideBar_R_Open_Questions());
	};
	const sideBar_R_Border_handleMouseEnter = () => {
		dispatch(userReducerActions.sideBar_R_menuIsHover(true));
	};
	const sideBar_R_Border_handleMouseLeave = () => {
		setTimeout(() => {
			dispatch(userReducerActions.sideBar_R_menuIsNotHover(false));
		}, 80);
	};
	return (
		<Fragment>
			<menu
				className={`${classes["sidebar"]} ${sideBar_R_Main_isOpen_rdx ? classes.sideBar_R_isOpen : ""}`}
				ref={sideBarMainRef}
				onMouseEnter={sideBar_R_Border_handleMouseEnter}
				onMouseLeave={sideBar_R_Border_handleMouseLeave}
			>
				{exitButton}
				<div className={classes.outerLogoContainer}>
					<Link to="/home" onClick={CloseNavBarMenu_and_ScrollSmoothly} className={classes.Logo}>
						<img src={Logo} alt="Logo" className={classes.Logo}></img>
					</Link>
					<Link to="/home" onClick={CloseNavBarMenu_and_ScrollSmoothly} className={classes.companyName}>
						TellusLearn
					</Link>
				</div>
				<div className={classes.top}>
					<div className={classes.sidebarMenu}>
						<Link
							onClick={CloseNavBarMenu_and_ScrollSmoothly}
							to="/home"
							className={`${classes["sidebarMenuOptions"]} ${(activeIcon === "/home" || activeIcon === "/") && classes.isActiveHomeIcon}`}
						>
							<i>{homeIcon}</i>
							<span>Home</span>
						</Link>
						<Link
							onClick={CloseNavBarMenu_and_ScrollQuickly}
							to="/demos"
							className={`${classes["sidebarMenuOptions"]} ${activeIcon === "/demos" && classes.isActiveDemosIcon}`}
						>
							<i>{demosIcon}</i>
							<span>Demos</span>
						</Link>
						{location.pathname === "/demo_dmvClassC" && (
							<>
								<Link
									onClick={CloseNavBarMenu_and_ScrollQuickly}
									to="/demo_dmvClassC"
									className={`${classes["sidebarMenuOptions"]} ${activeIcon === "/demo_dmvClassC" && classes.isActiveDmvCIcon}`}
								>
									<i>{steeringWheelIcon}</i>
									<span>DMV - C</span>
								</Link>
								<Link onClick={open_sideBar_R_Notes_Modal} className={`${classes["sidebarMenuOptions"]} ${classes.notesIcon}`}>
									<i>{NotesIcon}</i>
									<span>Notes</span>
								</Link>
								<Link onClick={open_sideBar_R_Questions_Modal} className={`${classes["sidebarMenuOptions"]} ${classes.testIcon}`}>
									<i>{QuestionsIcon}</i>
									<span>Test</span>
								</Link>
							</>
						)}
					</div>
				</div>
				<div className={classes.bottom}>
					<div className={classes.subgroup}>
						<div className={classes.sidebarMenu}>
							<Link
								onClick={CloseNavBarMenu_and_ScrollQuickly}
								to="/aboutus"
								className={`${classes["sidebarMenuOptions"]} ${activeIcon === "/aboutus" && classes.isActiveAboutUsIcon}`}
							>
								<i>{aboutUsIcon}</i>
								<span>About Us</span>
							</Link>
							<Link
								onClick={CloseNavBarMenu_and_ScrollQuickly}
								to="/supportcenter"
								className={`${classes["sidebarMenuOptions"]} ${activeIcon === "/supportcenter" && classes.isActiveSupportCenterIcon}`}
							>
								<i>{supportCenterIcon}</i>
								<span>Support Center</span>
							</Link>
							<Link
								onClick={CloseNavBarMenu_and_ScrollQuickly}
								to="/help"
								className={`${classes["sidebarMenuOptions"]} ${activeIcon === "/help" && classes.isActiveHelpIcon}`}
							>
								<i>{helpIcon}</i>
								<span>Help</span>
							</Link>
						</div>
					</div>
					<div className={classes.break}></div>
					<div className={classes.subgroup}>
						<div className={classes.sidebarMenu}>
							<button type="button" onClick={OpenLanguageSettingsModal} className={classes.sidebarMenuOptions}>
								<i className={classes.languageIcon}>{languageIcon}</i>
								<span>Language</span>
								<img alt="Flag Logo" src={activeFlag_rdx} className={classes.flag} tabIndex="0"></img>
							</button>

							<label htmlFor="theme-toggle" className={classes.darkModeMenuItem}>
								<i className={classes.icon}>{darkModeIcon}</i>
								<span>Dark Mode</span>
								<div className={classes.darkModeToggleAndInputContainer}>
									<input type="checkbox" className={classes.toggleCheckBox} id="theme-toggle" checked={isChecked} onChange={toggleTheme} />
									<div className={classes.darkModeToggleContainer}>
										<div className={classes.darkModeToggleButton}></div>
										{sunIcon}
										{moonIcon}
									</div>
								</div>
							</label>
						</div>
					</div>
					<div className={classes.break}></div>
					<div className={classes.subgroup}>
						<div className={classes.sidebarMenu}>
							{option}
							{content}
						</div>
					</div>
				</div>
			</menu>
		</Fragment>
	);
};

export default SideBar_R_MainMenu;
