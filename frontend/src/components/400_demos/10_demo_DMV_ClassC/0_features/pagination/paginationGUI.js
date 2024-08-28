import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../../a.reducers/auth_Reducers";

import classes from "./paginationGUI.module.css";

const PaginationGUI = () => {
	const dispatch = useDispatch();
	const currentPageNum_rdx = useSelector(({ user }) => user.currentPageNum_rdx);
	const inputPageNum_rdx = useSelector(({ user }) => user.inputPageNum_rdx);
	const pagesLength_rdx = useSelector(({ user }) => user.pagesLength_rdx);
	//!Prev-Next Page
	const PrevPage = useCallback(() => {
		let newPageNum = currentPageNum_rdx - 1;
		if (newPageNum >= 0) {
			dispatch(userReducerActions.setDemoCurrentPageNum(newPageNum));
			dispatch(userReducerActions.setDemoInputPageNum(newPageNum));
			localStorage.setItem("page", newPageNum);
		}
	}, [currentPageNum_rdx, dispatch]);
	const NextPage = useCallback(() => {
		let newPageNum = currentPageNum_rdx + 1;
		if (newPageNum <= pagesLength_rdx) {
			dispatch(userReducerActions.setDemoCurrentPageNum(newPageNum));
			dispatch(userReducerActions.setDemoInputPageNum(newPageNum));
			localStorage.setItem("page", newPageNum);
		}
	}, [currentPageNum_rdx, pagesLength_rdx, dispatch]);
	// Event listeners -- Left(Prev)-Right(Next)
	const handleKeyDown = useCallback(
		(e) => {
			switch (e.key) {
				case "ArrowLeft":
					PrevPage();
					break;
				case "ArrowRight":
					NextPage();
					break;
				default:
					break;
			}
		},
		[PrevPage, NextPage]
	);
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);
	//!Page Input Number
	const pageInputRef_top = useRef(null);
	const handlePageInputFocus_top = () => {
		if (pageInputRef_top.current) {
			pageInputRef_top.current.select();
		}
	};
	//Local Storage -Page#
	useEffect(() => {
		let localStoragePageNum = localStorage.getItem("page");
		if (localStoragePageNum) {
			const parsedPageNum = parseInt(localStoragePageNum, 10);
			if (currentPageNum_rdx !== parsedPageNum) {
				dispatch(userReducerActions.setDemoCurrentPageNum(parsedPageNum));
				dispatch(userReducerActions.setDemoInputPageNum(parsedPageNum));
			}
		}
	}, []);
	//Handle's any changes to the input value (Delayed)
	useEffect(() => {
		const identifier = setTimeout(() => {
			var newPageNum = parseInt(inputPageNum_rdx, 10);
			if (!isNaN(newPageNum) && newPageNum >= 0 && newPageNum <= pagesLength_rdx) {
				dispatch(userReducerActions.setDemoCurrentPageNum(newPageNum));
				localStorage.setItem("page", newPageNum);
			} else {
				dispatch(userReducerActions.setDemoInputPageNum(currentPageNum_rdx));
			}
		}, 500);
		return () => {
			clearTimeout(identifier);
		};
	}, [inputPageNum_rdx, pagesLength_rdx]);
	//Handle's any page-changes (Not Delayed)
	const handleInputChange = (e) => {
		const inputPageValue = parseInt(e.target.value, 10);
		if (e.target.value === "") {
			dispatch(userReducerActions.setDemoInputPageNum(""));
		} else if (!isNaN(inputPageValue) && inputPageValue >= 0 && inputPageValue <= pagesLength_rdx) {
			dispatch(userReducerActions.setDemoInputPageNum(inputPageValue));
		} else {
			dispatch(userReducerActions.setDemoInputPageNum(currentPageNum_rdx));
		}
	};
	return (
		<div className={classes.paginationContainer}>
			<button id="prev" onClick={PrevPage} className={classes.paginationButtonL} disabled={inputPageNum_rdx === 1}>
				<svg className={`${classes["arrowIconL"]} ${inputPageNum_rdx === 1 && classes.isInactive}`} viewBox="0 0 24 24">
					<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
				</svg>
			</button>
			<svg className={classes.lineSVG_L} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="0" x2="1" y2="40" />
			</svg>
			<div className={classes.paginationInputContainer}>
				<input
					type="text"
					onChange={handleInputChange}
					value={inputPageNum_rdx}
					onFocus={handlePageInputFocus_top}
					ref={pageInputRef_top}
					id="current_page"
					className={classes.pageInput}
				/>
			</div>
			<span className={classes.pageSeparator}>|</span>
			<div className={classes.paginationTotalPages}>
				<span>{pagesLength_rdx}</span>
			</div>
			<svg className={classes.lineSVG_R} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="0" x2="1" y2="40" />
			</svg>
			<button id="next" onClick={NextPage} className={classes.paginationButtonR} disabled={inputPageNum_rdx === pagesLength_rdx}>
				<svg className={`${classes["arrowIconR"]} ${inputPageNum_rdx === pagesLength_rdx && classes.isInactive}`} viewBox="0 0 24 24">
					<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
				</svg>
			</button>
		</div>
	);
};

export default PaginationGUI;
