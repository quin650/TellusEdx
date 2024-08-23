import React, { useState, useEffect, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from "./sideBar_R_NotesModal.module.css";

const SideBar_R_NotesModal = () => {
	const sideBarRNotesRef = useRef();
	const exitButtonRef = useRef();
	const resizerRef = useRef();
	const sideBar_R_Notes_ModalStatus_rdx = useSelector(({ user }) => user.sideBar_R_Notes_ModalStatus_rdx);
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
		dispatch(userReducerActions.sideBar_R_Close_Notes_Modal());
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
		if (sidebar && sideBar_R_Notes_ModalStatus_rdx) {
			sidebar.style.width = "700px";
		}
		const resizer = resizerRef.current;
		if (!resizer || !sidebar) return;
		if (!sideBar_R_Notes_ModalStatus_rdx) {
			sidebar.style.width = "0px";
			return; // Exit early if the modal is closed
		}
		let x;
		let w;
		const rs_mousedownHandler = (e) => {
			x = e.clientX;
			w = sidebar.getBoundingClientRect().width;
			document.body.style.userSelect = "none"; // Disable text selection
			console.log("Initial sidebar width: ", w);
			document.addEventListener("mousemove", rs_mousemoveHandler);
			document.addEventListener("mouseup", rs_mouseupHandler);
		};

		const rs_mousemoveHandler = (e) => {
			e.preventDefault(); // Prevent text selection
			const dx = x - e.clientX;
			let newWidth = w + dx; // Calculate new width
			// console.log("Resized width: ", newWidth);

			// If width exceeds 700px, stop further resizing and remove the mousedown event listener
			if (newWidth > 700) {
				// console.log("Width out of bounds, stopping resize.");
				sidebar.style.width = newWidth > 700 ? "700px" : "326px"; // Cap the width
				document.removeEventListener("mousemove", rs_mousemoveHandler);
				document.removeEventListener("mousedown", rs_mousedownHandler); // Remove mousedown listener
				document.removeEventListener("mouseup", rs_mouseupHandler);
				document.body.style.userSelect = ""; // Re-enable text selection
				return;
			}
			// Set new width if within the range
			sidebar.style.width = `${newWidth}px`;

			// Check if width is below 326px, if so, call exitAction
			if (newWidth < 150) {
				exitAction();
				console.log("Width out of bounds, stopping resize.");
				sidebar.style.width = 0; // Cap the width
				document.removeEventListener("mousemove", rs_mousemoveHandler);
				document.removeEventListener("mousedown", rs_mousedownHandler); // Remove mousedown listener
				document.removeEventListener("mouseup", rs_mouseupHandler);
				document.body.style.userSelect = ""; // Re-enable text selection
				return;
			}
		};
		const rs_mouseupHandler = () => {
			document.removeEventListener("mouseup", rs_mouseupHandler);
			document.removeEventListener("mousemove", rs_mousemoveHandler);
		};
		resizer.addEventListener("mousedown", rs_mousedownHandler);
		return () => {
			resizer.removeEventListener("mousedown", rs_mousedownHandler);
		};
	}, [sideBar_R_Notes_ModalStatus_rdx]);

	return (
		<Fragment>
			{exitButton}
			<menu className={`${classes["sideBar_R_outerContainer"]} ${sideBar_R_Notes_ModalStatus_rdx ? classes.open : ""}`} ref={sideBarRNotesRef}>
				<div className={classes.resizer} ref={resizerRef}></div>
			</menu>
		</Fragment>
	);
};

export default SideBar_R_NotesModal;
