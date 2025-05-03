import React, { useState, useRef, useEffect, Fragment, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RefContext } from "../../../index";
import { useLocation } from "react-router-dom";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import { Link } from "react-router-dom";
import GetStartedButton from "../../3000_modals/100_modal_getStarted/getStartedFeatures/1_getStartedButton";
import Modal_getStarted from "../../3000_modals/100_modal_getStarted/modal_getStarted";
import Modal_languageSettings from "../../3000_modals/200_modal_languageSettings/1_modal_languageSettings";
import SideBar_R_MainMenu from "../../4000_sideBars/300_sideBar_R_MainMenu/sideBar_R_MainMenu";
import Logo from "../../../../static/images/logos/logo_tellusEd_arrowsOnly.png";
import classes from "./navBar.module.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const MainNavbar = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const goToTOp = () => {
		document.querySelector("main").scrollTo(0, 0);
	};
	const isAuthenticated_rdx = useSelector(({ user }) => user.isAuthenticated_rdx);
	const sideBar_L_isOpen_rdx = useSelector(({ user }) => user.sideBar_L_isOpen_rdx);
	const sideBar_L_AllowCollapse_OnWindowResize_rdx = useSelector(({ user }) => user.sideBar_L_AllowCollapse_OnWindowResize_rdx);
	const sideBar_R_Notes_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Notes_isOpen_rdx);
	const sideBar_R_Questions_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_isOpen_rdx);
	const sideBar_R_Main_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Main_isOpen_rdx);
	const getStarted_ModalStatus_rdx = useSelector(({ user }) => user.getStarted_ModalStatus_rdx);
	const languageSettings_ModalStatus_rdx = useSelector(({ user }) => user.languageSettings_ModalStatus_rdx);
	const sideBar_R_SearchBar_isActive_rdx = useSelector(({ user }) => user.sideBar_R_SearchBar_isActive_rdx);
	// Button onClick actions
	const toggle_SideBar_L_Visibility = () => {
		dispatch(userReducerActions.sideBar_L_Toggle_Visibility());
		if (sideBar_L_AllowCollapse_OnWindowResize_rdx) {
			dispatch(userReducerActions.sideBar_L_NotAllowCollapse_OnWindowResize());
		}
	};
	const open_sideBar_R_Notes_Modal = () => {
		if (sideBar_R_Main_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Main());
		}
		dispatch(userReducerActions.sideBar_R_Open_Notes());
	};
	const open_sideBar_R_Main_Modal = () => {
		if (sideBar_R_Notes_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Notes());
		}
		dispatch(userReducerActions.sideBar_R_Open_Main());
	};
	const open_sideBar_R_Questions_Modal = () => {
		if (sideBar_R_Main_isOpen_rdx) {
			dispatch(userReducerActions.sideBar_R_Close_Main());
		}
		dispatch(userReducerActions.sideBar_R_Open_Questions());
	};
	//! Tippy Hover Tooltip customized to each button
	const useHoverTooltip = (defaultButtonText, textWithHotkey, delay = 1000) => {
		const [button_text, setButton_text] = useState(defaultButtonText);
		const hoverTimer = useRef(null);
		const handleMouseEnter = () => {
			hoverTimer.current = setTimeout(() => {
				setButton_text(textWithHotkey);
			}, delay);
		};
		const handleMouseLeave = () => {
			clearTimeout(hoverTimer);
			setButton_text(defaultButtonText);
		};
		return { button_text, handleMouseEnter, handleMouseLeave };
	};
	const {
		button_text: sideBar_L_Button_text,
		handleMouseEnter: sideBar_L_Button_handleMouseEnter,
		handleMouseLeave: sideBar_L_Button_handleMouseLeave,
	} = useHoverTooltip("Table of Contents", "Table of Contents (B)");
	const {
		button_text: sideBar_R_Notes_Button_text,
		handleMouseEnter: sideBar_R_Notes_Button_handleMouseEnter,
		handleMouseLeave: sideBar_R_Notes_Button_handleMouseLeave,
	} = useHoverTooltip("Notes", "Notes (N)");
	const {
		button_text: sideBar_R_Main_Button_text,
		handleMouseEnter: sideBar_R_Main_Button_handleMouseEnter,
		handleMouseLeave: sideBar_R_Main_Button_handleMouseLeave,
	} = useHoverTooltip("Menu", "Menu (M)");
	const {
		button_text: sideBar_R_Questions_Button_text,
		handleMouseEnter: sideBar_R_Questions_Button_handleMouseEnter,
		handleMouseLeave: sideBar_R_Questions_Button_handleMouseLeave,
	} = useHoverTooltip("Test", "Quiz (Q)");
	const {
		button_text: search_Button_text,
		handleMouseEnter: search_Button_handleMouseEnter,
		handleMouseLeave: search_Button_handleMouseLeave,
	} = useHoverTooltip("Search", "Search (S)");
	//! Buttons
	const { buttonRef_ctx } = useContext(RefContext);
	//TODO HERE ---------------------------------------------------
	useEffect(() => {
		if (!buttonRef_ctx) return;
		const handleMouseEnter = () => {
			// console.log("Yes - Hovering leftMenu Button!");
			dispatch(userReducerActions.sideBar_L_buttonIsHover(true));
		};
		const handleMouseLeave = () => {
			// console.log("No -  hovering leftMenu Button!");
			dispatch(userReducerActions.sideBar_L_buttonIsNotHover(false));
		};
		buttonRef_ctx.current.addEventListener("mouseenter", handleMouseEnter);
		buttonRef_ctx.current.addEventListener("mouseleave", handleMouseLeave);
		return () => {
			buttonRef_ctx.current.removeEventListener("mouseenter", handleMouseEnter);
			buttonRef_ctx.current.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [buttonRef_ctx]);

	//TODO HERE ---------------------------------------------------
	const sideBar_L_Button = (
		<Tippy content={sideBar_L_Button_text} placement="bottom" theme="custom" appendTo="parent">
			<button
				onClick={toggle_SideBar_L_Visibility}
				ref={buttonRef_ctx}
				className={`${classes["tocButton"]} ${sideBar_L_isOpen_rdx ? classes.open : ""}`}
				onMouseEnter={sideBar_L_Button_handleMouseEnter}
				onMouseLeave={sideBar_L_Button_handleMouseLeave}
			>
				<svg className={classes.svgMenuButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						fillRule="evenodd"
						d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
						clipRule="evenodd"
					></path>
				</svg>
			</button>
		</Tippy>
	);
	const sideBar_R_Notes_Button = (
		<Tippy content={<span style={{ whiteSpace: "nowrap" }}>{sideBar_R_Notes_Button_text}</span>} placement="left" theme="custom" appendTo="parent">
			<button
				onClick={open_sideBar_R_Notes_Modal}
				className={`${classes["notesButton"]} ${sideBar_R_Notes_isOpen_rdx ? classes.open : ""}`}
				onMouseEnter={sideBar_R_Notes_Button_handleMouseEnter}
				onMouseLeave={sideBar_R_Notes_Button_handleMouseLeave}
			>
				<svg className={classes.svgNotesButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
				</svg>
			</button>
		</Tippy>
	);
	const sideBar_R_Main_Button = (
		<Tippy content={<span style={{ whiteSpace: "nowrap" }}>{sideBar_R_Main_Button_text}</span>} placement="bottom" theme="custom" appendTo="parent">
			<button
				onClick={open_sideBar_R_Main_Modal}
				className={`${classes["hamburgerButton"]} ${(sideBar_R_Notes_isOpen_rdx || sideBar_R_Main_isOpen_rdx) && classes.open}`}
				onMouseEnter={sideBar_R_Main_Button_handleMouseEnter}
				onMouseLeave={sideBar_R_Main_Button_handleMouseLeave}
			>
				<svg className={classes.svgHamburger} focusable="false" viewBox="0 0 16 16">
					<path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
				</svg>
			</button>
		</Tippy>
	);
	const sideBar_R_Questions_Button = (
		<Tippy content={<span style={{ whiteSpace: "nowrap" }}>{sideBar_R_Questions_Button_text}</span>} placement="left" theme="custom" appendTo="parent">
			<button
				onClick={open_sideBar_R_Questions_Modal}
				className={`${classes["questionsButton"]} ${sideBar_R_Questions_isOpen_rdx ? classes.open : ""}`}
				onMouseEnter={sideBar_R_Questions_Button_handleMouseEnter}
				onMouseLeave={sideBar_R_Questions_Button_handleMouseLeave}
			>
				<svg className={classes.svgQuestionsButton} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 4 L4 6 L7 3" className={classes.checkMark} />
					<line x1="2" y1="14" x2="6" y2="18" className={classes.xMark} />
					<line x1="2" y1="18" x2="6" y2="14" className={classes.xMark} />
					<line x1="10" y1="5" x2="20" y2="5" className={classes.horizontalLine} />
					<line x1="10" y1="15" x2="20" y2="15" className={classes.horizontalLine} />
				</svg>
			</button>
		</Tippy>
	);
	//!Search Bar
	const [searchText, setSearchText] = useState("");
	const exitSearchBarAction = () => {
		// dispatch to exit search bar is coming from demo_DMV_ClassC event listener
		setSearchBarIsOpened(false);
		setSearchBarIsFocused(false);
		searchBarRef.current.blur();
		setSearchText("");
	};
	useEffect(() => {
		window.addEventListener("keydown", onEscKey_ExitModal);
		return () => {
			window.removeEventListener("keydown", onEscKey_ExitModal);
		};
	}, []);
	const onChange = (e) => {
		setSearchText(e.target.value);
		console.log("searching hits for: ", e.target.value);
	};
	const searchBarRef = useRef(null);
	const [searchBarIsOpened, setSearchBarIsOpened] = useState(false);
	const [searchBarIsFocused, setSearchBarIsFocused] = useState(false);
	useEffect(() => {
		if (sideBar_R_SearchBar_isActive_rdx) {
			openSearchBar();
		}
	}, [sideBar_R_SearchBar_isActive_rdx]);
	const handleSearchBarFocus = () => {
		dispatch(userReducerActions.sideBar_R_SearchBar_isActive(true));
		setSearchBarIsFocused(true);
		searchBarRef.current.focus();
	};
	const handleSearchBarBlur = () => {
		dispatch(userReducerActions.sideBar_R_SearchBar_isActive(false));
		if (searchText) {
			return;
		}
		setSearchBarIsOpened(false);
		setSearchBarIsFocused(false);
		searchBarRef.current.blur();
	};
	const openSearchBar = () => {
		if (!searchBarIsOpened) {
			setSearchBarIsOpened(true);
			setSearchBarIsFocused(true);
			searchBarRef.current.focus();
		}
	};
	//! Event Listener for Hover Effects
	//? Left Border
	//TODO HERE ---------------------------------------------------
	const leftBorderRef = useRef(null);
	const hoverTimer_leftBorder = useRef(null);
	useEffect(() => {
		if (!leftBorderRef.current) return;
		const handleMouseEnter = () => {
			// console.log("Yes - Hovering leftBorder!");

			hoverTimer_leftBorder.current = setTimeout(() => {
				dispatch(userReducerActions.sideBar_L_borderIsHover(true));
			}, 360);
		};
		const handleMouseLeave = () => {
			// console.log("No - hovering leftBorder!");
			clearTimeout(hoverTimer_leftBorder.current);
			dispatch(userReducerActions.sideBar_L_borderIsNotHover(true));
		};
		leftBorderRef.current.addEventListener("mouseenter", handleMouseEnter);
		leftBorderRef.current.addEventListener("mouseleave", handleMouseLeave);
		return () => {
			leftBorderRef.current.removeEventListener("mouseenter", handleMouseEnter);
			leftBorderRef.current.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	//? Right Border
	//TODO HERE ---------------------------------------------------
	const rightBorderRef = useRef(null);
	const hoverTimer_rightBorder = useRef(null);
	useEffect(() => {
		if (!rightBorderRef.current) return;
		const handleMouseEnter = () => {
			// console.log("Yes - Hovering leftBorder!");
			hoverTimer_rightBorder.current = setTimeout(() => {
				dispatch(userReducerActions.sideBar_R_borderIsHover(true));
			}, 360);
		};
		const handleMouseLeave = () => {
			// console.log("No - hovering leftBorder!");
			clearTimeout(hoverTimer_rightBorder.current);
			dispatch(userReducerActions.sideBar_R_borderIsNotHover(true));
		};
		rightBorderRef.current.addEventListener("mouseenter", handleMouseEnter);
		rightBorderRef.current.addEventListener("mouseleave", handleMouseLeave);
		return () => {
			rightBorderRef.current.removeEventListener("mouseenter", handleMouseEnter);
			rightBorderRef.current.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	//TODO HERE ---------------------------------------------------
	let demoContent = (
		<Fragment>
			<div className={classes.leftBorder} ref={leftBorderRef}></div>
			<li className={classes.topLeft}>{sideBar_L_Button}</li>
			<li className={`${classes["searchContainer"]} ${searchBarIsOpened ? classes.open : ""}`}>
				<Tippy content={search_Button_text} placement="bottom" theme="custom" appendTo="parent">
					<button
						onClick={openSearchBar}
						className={`${classes["searchButton"]} ${searchBarIsOpened ? classes.open : ""}`}
						onMouseEnter={search_Button_handleMouseEnter}
						onMouseLeave={search_Button_handleMouseLeave}
					>
						<svg className={classes.searchIconSVG} viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.1458 16.7292C13.9198 16.7292 16.9792 13.6698 16.9792 9.89583C16.9792 6.12189 13.9198 3.0625 10.1458 3.0625C6.37189 3.0625 3.3125 6.12189 3.3125 9.89583C3.3125 13.6698 6.37189 16.7292 10.1458 16.7292Z" />
							<path d="M18.6875 18.4383L14.9719 14.7227" />
						</svg>
					</button>
				</Tippy>
				<input
					type="text"
					id="search"
					placeholder="Search"
					name="search"
					onChange={(e) => onChange(e)}
					value={searchText}
					ref={searchBarRef}
					className={`${classes["searchInput"]} ${searchBarIsFocused ? classes.isFocused : ""}`}
					onFocus={handleSearchBarFocus}
					onBlur={handleSearchBarBlur}
				/>
				<button onClick={exitSearchBarAction} className={`${classes["exitButton"]} ${searchText !== "" ? classes.inputHasText : ""}`}>
					<svg className={classes.svgExit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
						<path
							d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z"
							fillRule="nonzero"
							fillOpacity="1"
							stroke="none"
						></path>
					</svg>
				</button>
			</li>
			<li className={classes.topRight}>{sideBar_R_Main_Button}</li>
			<li className={classes.bottomRightAbove}>{sideBar_R_Notes_Button}</li>
			<li className={classes.bottomRight}>{sideBar_R_Questions_Button}</li>
			<div className={classes.rightBorder} ref={rightBorderRef}></div>
		</Fragment>
	);
	// regular navbar
	const authUser = (
		<Fragment>
			<div className={classes.leftBorder} ref={leftBorderRef}></div>
			<li className={classes.topLeft}>
				<Link to="/home" onClick={goToTOp}>
					<img src={Logo} alt="Logo" className={classes.Logo}></img>
				</Link>
			</li>
			<li className={`${classes["searchContainer"]} ${searchBarIsOpened ? classes.open : ""}`}>
				<Tippy content={search_Button_text} placement="bottom" theme="custom" appendTo="parent">
					<button
						onClick={openSearchBar}
						className={`${classes["searchButton"]} ${searchBarIsOpened ? classes.open : ""}`}
						onMouseEnter={search_Button_handleMouseEnter}
						onMouseLeave={search_Button_handleMouseLeave}
					>
						<svg className={classes.searchIconSVG} viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.1458 16.7292C13.9198 16.7292 16.9792 13.6698 16.9792 9.89583C16.9792 6.12189 13.9198 3.0625 10.1458 3.0625C6.37189 3.0625 3.3125 6.12189 3.3125 9.89583C3.3125 13.6698 6.37189 16.7292 10.1458 16.7292Z" />
							<path d="M18.6875 18.4383L14.9719 14.7227" />
						</svg>
					</button>
				</Tippy>
				<input
					type="text"
					id="search"
					placeholder="Search"
					name="search"
					onChange={(e) => onChange(e)}
					value={searchText}
					ref={searchBarRef}
					className={`${classes["searchInput"]} ${searchBarIsFocused ? classes.isFocused : ""}`}
					onFocus={handleSearchBarFocus}
					onBlur={handleSearchBarBlur}
				/>
				<button
					onClick={exitSearchBarAction}
					className={`${classes["exitButton"]} ${searchText !== "" ? classes.inputHasText : ""}`}
					onMouseEnter={search_Button_handleMouseEnter}
					onMouseLeave={search_Button_handleMouseLeave}
				>
					<svg className={classes.svgExit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
						<path
							d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z"
							fillRule="nonzero"
							fillOpacity="1"
							stroke="none"
						></path>
					</svg>
				</button>
			</li>
			<li className={classes.topRight}>{sideBar_R_Main_Button}</li>
			<div className={classes.rightBorder} ref={rightBorderRef}></div>
		</Fragment>
	);
	const authGuest = (
		<Fragment>
			<div className={classes.leftBorder} ref={leftBorderRef}></div>
			<li className={classes.topLeft}>
				<Link to="/home" onClick={goToTOp}>
					<img src={Logo} alt="Logo" className={classes.Logo}></img>
				</Link>
			</li>
			<li className={classes.getStartedButtonContainer}>
				<GetStartedButton />
			</li>
			<li className={`${classes["searchContainer"]} ${searchBarIsOpened ? classes.open : ""}`}>
				<Tippy content={search_Button_text} placement="bottom" theme="custom" appendTo="parent">
					<button
						onClick={openSearchBar}
						className={`${classes["searchButton"]} ${searchBarIsOpened ? classes.open : ""}`}
						onMouseEnter={search_Button_handleMouseEnter}
						onMouseLeave={search_Button_handleMouseLeave}
					>
						<svg className={classes.searchIconSVG} viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.1458 16.7292C13.9198 16.7292 16.9792 13.6698 16.9792 9.89583C16.9792 6.12189 13.9198 3.0625 10.1458 3.0625C6.37189 3.0625 3.3125 6.12189 3.3125 9.89583C3.3125 13.6698 6.37189 16.7292 10.1458 16.7292Z" />
							<path d="M18.6875 18.4383L14.9719 14.7227" />
						</svg>
					</button>
				</Tippy>
				<input
					type="text"
					id="search"
					placeholder="Search"
					name="search"
					onChange={(e) => onChange(e)}
					value={searchText}
					ref={searchBarRef}
					className={`${classes["searchInput"]} ${searchBarIsFocused ? classes.isFocused : ""}`}
					onFocus={handleSearchBarFocus}
					onBlur={handleSearchBarBlur}
				/>
				<button onClick={exitSearchBarAction} className={`${classes["exitButton"]} ${searchText !== "" ? classes.inputHasText : ""}`}>
					<svg className={classes.svgExit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
						<path
							d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z"
							fillRule="nonzero"
							fillOpacity="1"
							stroke="none"
						></path>
					</svg>
				</button>
			</li>
			<li className={classes.topRight}>{sideBar_R_Main_Button}</li>
			<div className={classes.rightBorder} ref={rightBorderRef}></div>
		</Fragment>
	);
	let regularContent = { authGuest };
	!isAuthenticated_rdx ? (regularContent = authGuest) : (regularContent = authUser);
	const onEscKey_ExitModal = (e) => {
		if (e.key === "Escape") {
			exitSearchBarAction();
		}
	};
	return (
		<nav className={classes.navContainer}>
			<div className={classes.inner_container_nav}>
				{(location.pathname !== "/demo_dmvClassC" || location.pathname === "demoLandingPage") && regularContent}
				{location.pathname === "/demo_dmvClassC" && demoContent}

				{sideBar_R_Main_isOpen_rdx && <SideBar_R_MainMenu />}
				{getStarted_ModalStatus_rdx && <Modal_getStarted />}
				{languageSettings_ModalStatus_rdx && <Modal_languageSettings />}
			</div>
		</nav>
	);
};

export default MainNavbar;
