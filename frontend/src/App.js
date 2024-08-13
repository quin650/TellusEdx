import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "./a.reducers/auth_Reducers";
import DemoNavbar from "./components/100_layout/10_header/2NavBar_Demo";
import TOC_Parent_Item from "./SideBar_Left-TOC_Parent_Item";

import Page1A from "./components/200_pages/demoHtml/Page1A";
import Page1B from "./components/200_pages/demoHtml/Page1B";
import Page2 from "./components/200_pages/demoHtml/Page2";
import Page3 from "./components/200_pages/demoHtml/Page3";
import Page4 from "./components/200_pages/demoHtml/Page4";
import Page5 from "./components/200_pages/demoHtml/Page5";
import Page6 from "./components/200_pages/demoHtml/Page6";
import Page7 from "./components/200_pages/demoHtml/Page7";
import Page8 from "./components/200_pages/demoHtml/Page8";
import Page9 from "./components/200_pages/demoHtml/Page9";
import Page10 from "./components/200_pages/demoHtml/Page10";
import Page11 from "./components/200_pages/demoHtml/Page11";
import Page12 from "./components/200_pages/demoHtml/Page12";
import Page13 from "./components/200_pages/demoHtml/Page13";
import Page14 from "./components/200_pages/demoHtml/Page14";
import Page15 from "./components/200_pages/demoHtml/Page15";
import Page16 from "./components/200_pages/demoHtml/Page16";
import Page17 from "./components/200_pages/demoHtml/Page17";
import Page18 from "./components/200_pages/demoHtml/Page18";
import Page19 from "./components/200_pages/demoHtml/Page19";
import Page20 from "./components/200_pages/demoHtml/Page20";
import Page21 from "./components/200_pages/demoHtml/Page21";
import Page22 from "./components/200_pages/demoHtml/Page22";

import classes from "./App.module.css";
const generateIdFromText = (text) => {
	if (typeof text !== "string") {
		return "";
	}
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
};
const App = () => {
	const dispatch = useDispatch();
	const mainContainerRef = useRef(null);
	const pageContentRef = useRef(null);
	const [pageTitle, setPageTitle] = useState([]);
	const [headingsList, setHeadingsList] = useState([]);
	const [pagesLength, setPagesLength] = useState(0);
	const [currentPageNum, setCurrentPageNum] = useState(1);
	const [inputPageNum, setInputPageNum] = useState(1);
	const ListOfPages = [
		<Page1A />,
		<Page1B />,
		<Page2 />,
		<Page3 />,
		<Page4 />,
		<Page5 />,
		<Page6 />,
		<Page7 />,
		<Page8 />,
		<Page9 />,
		<Page10 />,
		<Page11 />,
		<Page12 />,
		<Page13 />,
		<Page14 />,
		<Page15 />,
		<Page16 />,
		<Page17 />,
		<Page18 />,
		<Page19 />,
		<Page20 />,
		<Page21 />,
		<Page22 />,
	];
	const memoizedHeadings = useMemo(() => headingsList, [headingsList]);
	const sideBar_Left_isOpen_Rdx = useSelector(({ user }) => user.sideBar_Left_isOpen_Rdx);
	const [sideBar_Left_isOpen, setSideBar_Left_isOpen] = useState(true);
	const SideBar_Left_AllowCollapse_OnWindowResize_rdx = useSelector(({ user }) => user.SideBar_Left_AllowCollapse_OnWindowResize_rdx);
	const [sideBar_Left_AllowCollapse_OnWindowResize, setSideBar_Left_AllowCollapse_OnWindowResize] = useState(true);
	//! Creates id's based on the h1, h2, h3 text
	useEffect(() => {
		const List_of_H1_H2_H3_Headers = document.querySelectorAll("h1, h2, h3");
		List_of_H1_H2_H3_Headers.forEach((header) => {
			const id = generateIdFromText(header.textContent);
			header.id = id;
		});
	}, [currentPageNum]);
	//! Get Page Title | Get Range of pages | Get list of all the headings h2 & their h3 children
	useEffect(() => {
		if (pageContentRef.current) {
			setPagesLength(ListOfPages.length - 1);
			const H1_Element = pageContentRef.current.querySelectorAll("h1")[0];
			const secTitle = H1_Element ? H1_Element.textContent : "";
			setPageTitle(secTitle);
			const H2_H3_elements = pageContentRef.current.querySelectorAll("h2, h3");
			let headingsArray = [];
			let currentH2Index = -1;

			H2_H3_elements.forEach((element, index) => {
				const id = element.id || generateIdFromText(element.textContent);
				element.id = id;
				let currentHead = element.tagName;
				if (currentHead === "H2") {
					headingsArray.push({
						idx: index + 1,
						level: currentHead,
						text: element.textContent,
						children: [],
						id,
					});
					currentH2Index += 1;
				} else if (currentHead === "H3" && currentH2Index >= 0) {
					headingsArray[currentH2Index].children.push({
						idx: index + 1,
						level: currentHead,
						text: element.textContent,
						id,
					});
				}
			});
			setHeadingsList(headingsArray);
		}
	}, [currentPageNum]);
	//! GoTo_TopOfPage
	const GoTo_TopOfPage = () => {
		if (mainContainerRef.current) {
			mainContainerRef.current.scrollTo({
				top: 0,
				behavior: "instant",
			});
			Width_Affects_to_SideBar_Left_TOC();
		}
	};
	useEffect(() => {
		GoTo_TopOfPage();
	}, [currentPageNum]);
	//! TOC Status: Open/Close
	useEffect(() => {
		setSideBar_Left_isOpen(sideBar_Left_isOpen_Rdx);
	}, [sideBar_Left_isOpen_Rdx]);
	useEffect(() => {
		setSideBar_Left_AllowCollapse_OnWindowResize(SideBar_Left_AllowCollapse_OnWindowResize_rdx);
	}, [SideBar_Left_AllowCollapse_OnWindowResize_rdx]);
	const Width_Affects_to_SideBar_Left_TOC = () => {
		if (window.innerWidth < 1400) {
			setSideBar_Left_isOpen(false);
			dispatch(userReducerActions.sideBar_Left_Close());
		} else {
			setSideBar_Left_isOpen(true);
			dispatch(userReducerActions.sideBar_Left_Open());
		}
	};
	useEffect(() => {
		if (!sideBar_Left_AllowCollapse_OnWindowResize) return;
		window.addEventListener("resize", Width_Affects_to_SideBar_Left_TOC);
		Width_Affects_to_SideBar_Left_TOC();
		return () => {
			window.removeEventListener("resize", Width_Affects_to_SideBar_Left_TOC);
		};
	}, [sideBar_Left_AllowCollapse_OnWindowResize]);
	//!Tab Options
	const TOC_TabOptions = (
		<div className={classes.sideBar_left_tabs_outerContainer}>
			<div className={classes.sideBar_left_tabs_innerContainer}>
				<span className={classes.sideBar_left_tab_Name_onThisPage}>
					<p>On this page</p>
				</span>
				<span className={classes.sideBar_left_tab_Name_all}>
					<p>All</p>
				</span>
				<span className={classes.sideBar_left_tab_Name_pinned}>
					<p>Pinned</p>
				</span>
			</div>
			<div className={classes.sideBar_left_tabs_underline}></div>
		</div>
	);
	//!Prev-Next Page
	const PrevPage = () => {
		let newPageNum = currentPageNum - 1;
		if (newPageNum >= 1) {
			setCurrentPageNum(newPageNum);
			setInputPageNum(newPageNum);
			localStorage.setItem("page", newPageNum);
		}
	};
	const NextPage = () => {
		let newPageNum = currentPageNum + 1;
		if (newPageNum <= pagesLength) {
			setCurrentPageNum(newPageNum);
			setInputPageNum(newPageNum);
			localStorage.setItem("page", newPageNum);
		}
	};
	// Event listeners -- Left(Prev)-Right(Next)
	const handleKeyDown = (e) => {
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
	};
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [currentPageNum]);
	//!Page Input Number
	const pageInputRef_top = useRef(null);
	const handlePageInputFocus_top = () => {
		if (pageInputRef_top.current) {
			pageInputRef_top.current.select();
		}
	};
	const pageInputRef_bottom = useRef(null);
	const handlePageInputFocus_bottom = () => {
		if (pageInputRef_bottom.current) {
			pageInputRef_bottom.current.select();
		}
	};
	//Local Storage -Page#
	useEffect(() => {
		let localStoragePageNum = localStorage.getItem("page");
		if (localStoragePageNum) {
			setCurrentPageNum(localStoragePageNum);
			setInputPageNum(localStoragePageNum);
		}
	}, []);
	//Handle's any changes to the input value (Delayed)
	useEffect(() => {
		const identifier = setTimeout(() => {
			var newPageNum = parseInt(inputPageNum, 10);
			if (!isNaN(newPageNum) && newPageNum > 0 && newPageNum <= pagesLength) {
				setCurrentPageNum(newPageNum);
				localStorage.setItem("page", newPageNum);
			} else {
				setInputPageNum(currentPageNum);
			}
		}, 500);
		return () => {
			clearTimeout(identifier);
		};
	}, [inputPageNum, pagesLength]);
	//Handle's any page-changes (Not Delayed)
	const handleInputChange = (e) => {
		const inputPageValue = parseInt(e.target.value, 10);
		if (e.target.value === "") {
			setInputPageNum("");
		} else if (!isNaN(inputPageValue) && inputPageValue > 0 && inputPageValue <= pagesLength) {
			setInputPageNum(inputPageValue);
		} else {
			setInputPageNum(currentPageNum);
		}
	};
	//!Pagination GUI
	const Pagination_SideBar_Left = (
		<div className={classes.paginationContainer}>
			<button id="prev" onClick={PrevPage} className={classes.paginationButtonL}>
				<svg className={`${classes["arrowIconL"]} ${inputPageNum === 1 && classes.isInactive}`} viewBox="0 0 24 24">
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
					value={inputPageNum}
					onFocus={handlePageInputFocus_top}
					ref={pageInputRef_top}
					id="current_page"
					className={classes.pageInput}
				/>
			</div>
			<span className={classes.pageSeparator}>|</span>
			<div className={classes.paginationTotalPages}>
				<span>{pagesLength}</span>
			</div>
			<svg className={classes.lineSVG_R} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="0" x2="1" y2="40" />
			</svg>
			<button id="next" onClick={NextPage} className={classes.paginationButtonR}>
				<svg className={`${classes["arrowIconR"]} ${inputPageNum === pagesLength && classes.isInactive}`} viewBox="0 0 24 24">
					<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
				</svg>
			</button>
		</div>
	);
	const Pagination_Reader_Bottom = (
		<div className={classes.paginationContainer}>
			<button id="prev" onClick={PrevPage} className={classes.paginationButtonL}>
				<svg className={`${classes["arrowIconL"]} ${inputPageNum === 1 && classes.isInactive}`} viewBox="0 0 24 24">
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
					value={inputPageNum}
					onFocus={handlePageInputFocus_bottom}
					ref={pageInputRef_bottom}
					id="current_page"
					className={classes.pageInput}
				/>
			</div>
			<span className={classes.pageSeparator}>|</span>
			<div className={classes.paginationTotalPages}>
				<span>{pagesLength}</span>
			</div>
			<svg className={classes.lineSVG_R} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="0" x2="1" y2="40" />
			</svg>
			<button id="next" onClick={NextPage} className={classes.paginationButtonR}>
				<svg className={`${classes["arrowIconR"]} ${inputPageNum === pagesLength && classes.isInactive}`} viewBox="0 0 24 24">
					<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
				</svg>
			</button>
		</div>
	);
	//!Search Bar
	const TOC_SearchBarRef = useRef(null);
	const [sideBar_Left_TOC_SearchInputIsFocused, setSideBar_Left_TOC_SearchInputIsFocused] = useState(false);
	const handle_SideBar_Left_TOC_SearchInputFocus = () => {
		setSideBar_Left_TOC_SearchInputIsFocused(true);
	};
	const handle_SideBar_Left_TOC_SearchInputBlur = () => {
		setSideBar_Left_TOC_SearchInputIsFocused(false);
	};
	const TOC_SearchBar = (
		<div className={classes.sideBar_Left_TOC_SearchInputContainer} method="get" action="#" role="search">
			<input
				className={`${classes["sideBar_Left_TOC_SearchInput"]} ${sideBar_Left_TOC_SearchInputIsFocused ? classes.isFocused : ""}`}
				ref={TOC_SearchBarRef}
				onFocus={handle_SideBar_Left_TOC_SearchInputFocus}
				onBlur={handle_SideBar_Left_TOC_SearchInputBlur}
				placeholder="Search"
				name="q"
				aria-label="Search"
			/>
			<input type="hidden" name="check_keywords" value="yes" />
			<input type="hidden" name="area" value="default" />
		</div>
	);
	//!TOC_Contents
	const handleTOCItemClick = (id) => {
		console.log(`Item clicked: ${id}`);
		Width_Affects_to_SideBar_Left_TOC();
	};
	const TOC_Contents = (
		<nav className={classes.tocOuterContainer}>
			<div className={classes.tocTitleLabel} onClick={GoTo_TopOfPage}>
				<a>{pageTitle}</a>
			</div>
			<div className={classes.tocInnerContainer}>
				<ul>
					{memoizedHeadings.map((heading) => (
						<TOC_Parent_Item
							key={heading.idx}
							idx={heading.idx}
							level={heading.level}
							text={heading.text}
							children={heading.children}
							id={`#${heading.id}`}
							currentPageNum={currentPageNum}
							handleTOCItemClick={handleTOCItemClick}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
	//Prevents the demo option to be shown in the sideBar_right_MainModal
	const demoNavBarMenuOption = false;

	return (
		<main className={classes.mainContainer} id="main" role="main" ref={mainContainerRef}>
			<DemoNavbar sideBar_Left_isOpen={sideBar_Left_isOpen} demoNavBarMenuOption={demoNavBarMenuOption} />
			<div className={classes.bodyContainer}>
				<div className={`${classes["sideBar_left_outerContainer"]} ${sideBar_Left_isOpen ? classes.open : ""}`}>
					{TOC_TabOptions}
					{Pagination_SideBar_Left}
					{TOC_SearchBar}
					{TOC_Contents}
				</div>
				<div className={classes.handbook_outerContainer} ref={pageContentRef}>
					<div className={classes.handbook_innerContainer}>
						<div className={classes.page_contentContainer}>
							{ListOfPages[currentPageNum]}
							{Pagination_Reader_Bottom}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
