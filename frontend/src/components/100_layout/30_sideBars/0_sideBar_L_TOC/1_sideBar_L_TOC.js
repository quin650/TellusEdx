import React, { useState, useRef } from "react";
import PaginationGUI from "../../../400_demos/10_demo_DMV_ClassC/0_features/pagination/paginationGUI";
import SideBar_L_TOC_Parent_Items from "./2_sideBar_L_TOC_Parent_Items";
import classes from "./4_sideBar_L_TOC.module.css";

const SideBar_L_TOC = ({ sideBar_L_isOpen, pageTitle, memoizedHeadings, currentPageNum, activeID, GoTo_TopOfPage }) => {
	//!Tab Options
	const TOC_TabOptions = (
		<div className={classes.sideBar_L_tabs_outerContainer}>
			<div className={classes.sideBar_L_tabs_innerContainer}>
				<span className={classes.sideBar_L_tab_Name_onThisPage}>
					<p>On this page</p>
				</span>
				<span className={classes.sideBar_L_tab_Name_all}>
					<p>All</p>
				</span>
				<span className={classes.sideBar_L_tab_Name_pinned}>
					<p>Pinned</p>
				</span>
			</div>
			<div className={classes.sideBar_L_tabs_underline}></div>
		</div>
	);
	//!Search Bar
	const TOC_SearchBarRef = useRef(null);
	const [sideBar_L_TOC_SearchInputIsFocused, setSideBar_L_TOC_SearchInputIsFocused] = useState(false);
	const handle_SideBar_L_TOC_SearchInputFocus = () => {
		setSideBar_L_TOC_SearchInputIsFocused(true);
	};
	const handle_SideBar_L_TOC_SearchInputBlur = () => {
		setSideBar_L_TOC_SearchInputIsFocused(false);
	};
	const TOC_SearchBar = (
		<div className={classes.sideBar_L_TOC_SearchInputContainer} method="get" action="#" role="search">
			<input
				className={`${classes["sideBar_L_TOC_SearchInput"]} ${sideBar_L_TOC_SearchInputIsFocused ? classes.isFocused : ""}`}
				ref={TOC_SearchBarRef}
				onFocus={handle_SideBar_L_TOC_SearchInputFocus}
				onBlur={handle_SideBar_L_TOC_SearchInputBlur}
				placeholder="Search Handbook"
				name="q"
				aria-label="Search"
			/>
			<input type="hidden" name="check_keywords" value="yes" />
			<input type="hidden" name="area" value="default" />
		</div>
	);
	//!TOC_Contents
	const TOC_Contents = (
		<nav className={classes.tocOuterContainer}>
			<div className={classes.tocTitleLabel} onClick={GoTo_TopOfPage}>
				<a>{pageTitle}</a>
			</div>
			<div className={classes.tocInnerContainer}>
				<ul>
					{memoizedHeadings.map((heading) => (
						<SideBar_L_TOC_Parent_Items
							key={heading.idx}
							idx={heading.idx}
							text={heading.text}
							id={`#${heading.id}`}
							currentPageNum={currentPageNum}
							isActiveID={activeID === heading.id}
							activeID={activeID}
							children={heading.children}
						/>
					))}
				</ul>
			</div>
		</nav>
	);

	return (
		<div className={`${classes["sideBar_l_outerContainer"]} ${sideBar_L_isOpen ? classes.open : ""}`}>
			{TOC_TabOptions}
			<PaginationGUI />
			{TOC_SearchBar}
			{TOC_Contents}
		</div>
	);
};

export default SideBar_L_TOC;
