import React, { useState, useEffect, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "./sideBar_R_SearchModal.module.css";

const SideBar_R_SearchModal = () => {
	const sideBarRIghtSearchRef = useRef();
	const exitButtonRef = useRef();
	const dispatch = useDispatch();
	const sideBar_Right_Search_ModalStatus_rdx = useSelector(({ user }) => user.sideBar_Right_Search_ModalStatus_rdx);
	// useEffects
	useEffect(() => {
		window.addEventListener("keydown", onEscKey_ExitModal);
		document.addEventListener("mousedown", onClickOutsideNavBar_closeNavBar);
	}, []);
	// Functions
	const onClickOutsideNavBar_closeNavBar = (e) => {
		if (sideBarRIghtSearchRef.current && !sideBarRIghtSearchRef.current.contains(e.target) && !exitButtonRef.current.contains(e.target)) {
			exitNavBarAction();
		}
	};
	const exitNavBarAction = () => {
		dispatch(userReducerActions.sideBar_Right_Close_Search_Modal());
		document.removeEventListener("mousedown", onClickOutsideNavBar_closeNavBar);
	};
	const onEscKey_ExitModal = (e) => {
		if (e.key === "Escape") {
			exitNavBarAction();
		}
	};
	const [navState, setNavState] = useState(false);
	useEffect(() => {
		if (sideBar_Right_Search_ModalStatus_rdx) {
			setNavState(true);
		} else {
			setNavState(false);
		}
	}, [sideBar_Right_Search_ModalStatus_rdx]);
	const toggleMenu = () => {
		dispatch(userReducerActions.sideBar_Right_Close_Search_Modal());
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
	//!Search Bar
	const searchBarRef = useRef(null);
	const [searchBarIsFocused, setSearchBarIsFocused] = useState(false);
	useEffect(() => {
		handleSearchBarFocus();
	}, []);
	const handleSearchBarFocus = () => {
		setSearchBarIsFocused(true);
		searchBarRef.current.focus();
	};
	const handleSearchBarBlur = () => {
		setSearchBarIsFocused(false);
	};
	const RightMain_SearchBar = (
		<div className={classes.sideBarSearchInputContainer} method="get" action="#" role="search">
			<input
				className={`${classes["sidebar_search"]} ${searchBarIsFocused ? classes.isFocused : ""}`}
				ref={searchBarRef}
				onFocus={handleSearchBarFocus}
				onBlur={handleSearchBarBlur}
				placeholder="Search Resources"
				name="q"
				aria-label="Search"
			/>
			<input type="hidden" name="check_keywords" value="yes" />
			<input type="hidden" name="area" value="default" />
		</div>
	);
	return (
		<Fragment>
			{exitButton}
			<menu className={`${classes["sidebar"]} ${navState ? classes.open : ""}`} ref={sideBarRIghtSearchRef}>
				{RightMain_SearchBar}
				<div className={classes.top}></div>
				<div className={classes.bottom}>
					<div className={classes.break}></div>
				</div>
			</menu>
		</Fragment>
	);
};

export default SideBar_R_SearchModal;
