import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import Pagination_eReader_GUI from "../../1000_layout/200_layoutFeatures/30_pagination_eReader_GUI";
import SideBar_L_TOC_Section from "./2_sideBar_L_TOC_Section";
import classes from "./4_sideBar_L_TOC.module.css";

const SideBar_L_TOC = ({ sideBar_L_isOpen, pageTitle, memoizedHeadings, currentPageNum, activeID, GoTo_TopOfPage }) => {
	const sideBar_R_Questions_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_isOpen_rdx);
	const dispatch = useDispatch();
	//!Tab Options
	const [activeTab, setActiveTab] = useState("onThisPage");
	const onThisPageTabAction = () => {
		setActiveTab("onThisPage");
	};
	const sectionsTabAction = () => {
		setActiveTab("sections");
	};
	const pinnedAction = () => {
		setActiveTab("pinned");
	};
	const TOC_TabOptions = (
		<div className={classes.sideBar_L_tabs_outerContainer}>
			<div className={classes.sideBar_L_tabs_innerContainer}>
				<span onClick={onThisPageTabAction} className={`${classes["sideBar_L_tab_Name_onThisPage"]} ${activeTab === "onThisPage" ? classes.active : ""}`}>
					<p>On this page</p>
				</span>
				<span onClick={sectionsTabAction} className={`${classes["sideBar_L_tab_Name_sections"]} ${activeTab === "sections" ? classes.active : ""}`}>
					<p>Sections</p>
				</span>
				<span onClick={pinnedAction} className={`${classes["sideBar_L_tab_Name_pinned"]} ${activeTab === "pinned" ? classes.active : ""}`}>
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
				placeholder="Search Index"
				name="q"
				aria-label="Search"
			/>
			<input type="hidden" name="check_keywords" value="yes" />
			<input type="hidden" name="area" value="default" />
		</div>
	);
	//!onThisPageTab
	const onThisPageTab = (
		<nav className={classes.tocOuterContainer}>
			<div className={classes.tocTitleLabel} onClick={GoTo_TopOfPage}>
				<a>{pageTitle}</a>
			</div>
			<div className={classes.tocInnerContainer}>
				<ul>
					{memoizedHeadings.map((heading) => (
						<SideBar_L_TOC_Section
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
	const pageNum_current_reader_rdx = useSelector(({ user }) => user.pageNum_current_reader_rdx);
	const sectionsTab = (
		<nav className={classes.tocOuterContainer}>
			<div className={classes.tocTitleLabel} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(1))}>
				<a>Handbook Sections</a>
			</div>
			<div className={classes.tocInnerContainer}>
				<ul>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(2))}
							>
								<span>Secretary's Message</span>
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(3))}
							>
								<span>DMV Services</span>
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(4))}
							>
								<span>Copyright</span>
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(5))}
							>
								<span>Disclaimer</span>
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(6))}
							>
								<span className={classes.sectionNUm}>Section 1:</span> The California Driver's License
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(7))}
							>
								<span className={classes.sectionNUm}>Section 2:</span> Getting an Instruction Permit and Driver’s License
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(8))}
							>
								<span className={classes.sectionNUm}>Section 3:</span> The Testing Process
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(9))}
							>
								<span className={classes.sectionNUm}>Section 4:</span> Changing, Replacing, and Renewing Your Driver’s License
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(10))}
							>
								<span className={classes.sectionNUm}>Section 5:</span> An Introduction to Driving
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(11))}
							>
								<span className={classes.sectionNUm}>Section 6:</span> Navigating the Roads
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(12))}
							>
								<span className={classes.sectionNUm}>Section 6:</span> Navigating the Roads (Continued)
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(13))}
							>
								<span className={classes.sectionNUm}>Section 7:</span> Laws and Rules of the Road
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(14))}
							>
								<span className={classes.sectionNUm}>Section 7:</span> Laws and Rules of the Road (Continued)
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(15))}
							>
								<span className={classes.sectionNUm}>Section 7:</span> Laws and Rules of the Road (Continued)
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(16))}
							>
								<span className={classes.sectionNUm}>Section 8:</span> Safe Driving
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(17))}
							>
								<span className={classes.sectionNUm}>Section 8:</span> Safe Driving (Continued)
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(18))}
							>
								<span className={classes.sectionNUm}>Section 8:</span> Safe Driving (Continued)
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(19))}
							>
								<span className={classes.sectionNUm}>Section 9:</span> Alcohol and Drugs
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(20))}
							>
								<span className={classes.sectionNUm}>Section 10:</span> Financial Responsibility, Insurance Requirements, and Collisions
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(21))}
							>
								<span className={classes.sectionNUm}>Section 11:</span> Vehicle Registration Requirements
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(22))}
							>
								<span className={classes.sectionNUm}>Section 12:</span> Driver Safety
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(23))}
							>
								<span className={classes.sectionNUm}>Section 13:</span> Seniors and Driving
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a
								className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}
								onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(24))}
							>
								<span className={classes.sectionNUm}>Section 14:</span> Glossary
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
	const pinnedTab = (
		<nav className={classes.tocOuterContainer}>
			<div className={classes.tocTitleLabel} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(1))}>
				<a>Handbook Sections</a>
			</div>
			<div className={classes.tocInnerContainer}>
				<ul>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}>
								<span>Pinned1</span>
							</a>
						</div>
					</li>
					<li className={classes.contentContainer}>
						<div className={classes.parentLabelOuterContainer}>
							<a className={`${classes["parentLabel"]} ${pageNum_current_reader_rdx === 2 ? classes.isActive : ""}`}>
								<span>Pinned2</span>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
	//! Event Listener for Hover Effects
	//TODO HERE ---------------------------------------------------
	const sideBar_L_Border_handleMouseEnter = () => {
		dispatch(userReducerActions.sideBar_L_menuIsHover(true));
	};
	const sideBar_L_Border_handleMouseLeave = () => {
		setTimeout(() => {
			dispatch(userReducerActions.sideBar_L_menuIsNotHover(false));
		}, 80);
	};
	const sideBar_L_isOpenViaHover_rdx = useSelector(({ user }) => user.sideBar_L_isOpenViaHover_rdx);
	//TODO HERE ---------------------------------------------------
	return (
		<div
			className={`${classes["sideBar_L_outerContainer"]} 
		${sideBar_R_Questions_isOpen_rdx ? classes.sideBar_R_isOpen : ""} 
		${sideBar_L_isOpenViaHover_rdx ? classes.overLay : ""}
		${sideBar_L_isOpen ? classes.open : ""}`}
			onMouseEnter={sideBar_L_Border_handleMouseEnter}
			onMouseLeave={sideBar_L_Border_handleMouseLeave}
		>
			{TOC_TabOptions}
			<Pagination_eReader_GUI />
			{TOC_SearchBar}
			{activeTab === "onThisPage" ? onThisPageTab : activeTab === "sections" ? sectionsTab : activeTab === "pinned" ? pinnedTab : null}
		</div>
	);
};

export default SideBar_L_TOC;
