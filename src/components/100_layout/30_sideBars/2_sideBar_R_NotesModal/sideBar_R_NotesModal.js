import React, { useState, useEffect, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "./sideBar_R_NotesModal.module.css";

const SideBar_R_NotesModal = ({pageContentRef}) => {
	const sideBarRNotesRef = useRef();
	const exitButtonRef = useRef();
	const resizerRef = useRef();
	const sideBar_R_Notes_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Notes_isOpen_rdx);
	const sideBar_L_isOpen_rdx = useSelector(({ user }) => user.sideBar_L_isOpen_rdx);
	const dispatch = useDispatch();
	// Exit Functionality
	useEffect(() => {
		window.addEventListener("keydown", onEscKey_ExitModal);
		return () => {
			window.removeEventListener("keydown", onEscKey_ExitModal);
		};
	}, []);
	const onEscKey_ExitModal = (e) => {
		if (e.key === "Escape") {
			exitAction();
		}
	};
	const exitAction = () => {
		dispatch(userReducerActions.sideBar_R_Close_Notes());
	};
	let exitButton = (
		<button onClick={exitAction} className={classes.exitButton} ref={exitButtonRef}>
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

		// Resizer functionality
		useEffect(() => {
			const sidebar = sideBarRNotesRef.current;
			const pageContent = pageContentRef.current;
			const resizer = resizerRef.current;
			if (!resizer || !sidebar || !pageContent) return;
	
		
			if (!sideBar_R_Notes_isOpen_rdx) {
				sidebar.style.width = "0%";
				return; 
			}
	
			let firstX_Width;
			let newX_Width;
			let sideBarRWidth;
	
			const rs_mousedownHandler = (e) => {
				firstX_Width = e.clientX;
				sideBarRWidth = sidebar.getBoundingClientRect().width;
				document.body.style.userSelect = "none";
				document.addEventListener("mousemove", rs_mousemoveHandler);
				document.addEventListener("mouseup", rs_mouseupHandler);
			};
	
			const rs_mousemoveHandler = (e) => {
				e.preventDefault(); 
				newX_Width = e.clientX
				let changeInX = firstX_Width - newX_Width;
				const newSideBarWidth = sideBarRWidth + changeInX;
			
				const viewportWidth = document.documentElement.clientWidth;
				const sideBarLWidth = sideBar_L_isOpen_rdx ? 326 : 0;
				const pageContentEstimatedWidth = 1500  // based on max-width (handbook_outerContainer) 		
				// const pageContentCalculatedWidth = pageContent.getBoundingClientRect().width
				const availableWidth = viewportWidth - pageContentEstimatedWidth - sideBarLWidth;
				const minWidthPercent = 5; 
				const maxWidthPercent = 40; 
				const newWidthPercent = (newSideBarWidth / viewportWidth) * 100;
				const availableWidthPercent = (availableWidth / availableWidth) * 100
	
				if (newWidthPercent > availableWidthPercent) {
					sidebar.style.width = `${availableWidthPercent}%`;
					stopResizing();
					return;
				}
			
				if (newWidthPercent > maxWidthPercent) {
					sidebar.style.width = `${maxWidthPercent}%`;
					stopResizing();
					return;
				}
				if (newWidthPercent < minWidthPercent) {
					exitAction();
					stopResizing();
					return;
				}
				sidebar.style.width = `${newWidthPercent}%`;
			};
			
			const stopResizing = () => {
				document.removeEventListener("mouseup", rs_mouseupHandler);
				document.removeEventListener("mousemove", rs_mousemoveHandler);
				document.body.style.userSelect = "";
			};
			
			const rs_mouseupHandler = () => {
				document.removeEventListener("mouseup", rs_mouseupHandler);
				document.removeEventListener("mousemove", rs_mousemoveHandler);
			};
			resizer.addEventListener("mousedown", rs_mousedownHandler);
			return () => {
				resizer.removeEventListener("mousedown", rs_mousedownHandler);
			};
		}, [sideBar_R_Notes_isOpen_rdx, sideBar_L_isOpen_rdx]);

	return (
		<Fragment>
			<menu className={`${classes["sideBar_R_outerContainer"]} ${sideBar_R_Notes_isOpen_rdx ? classes.open : ""}`} ref={sideBarRNotesRef}>
				{exitButton}
				<div className={classes.resizer} ref={resizerRef}></div>
			</menu>
		</Fragment>
	);
};

export default SideBar_R_NotesModal;
