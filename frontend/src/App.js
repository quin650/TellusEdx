import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "./a.reducers/auth_Reducers";
import DemoNavbar from "./components/10layout/10header/demoNavbar";
import TocListItem from "./tocListItem";
import Page1A from "./components/11pages/demoHtml/Page1A";
import Page1B from "./components/11pages/demoHtml/Page1B";
import Page2 from "./components/11pages/demoHtml/Page2";
import Page3 from "./components/11pages/demoHtml/Page3";
import Page4 from "./components/11pages/demoHtml/Page4";
import Page5 from "./components/11pages/demoHtml/Page5";
import Page6 from "./components/11pages/demoHtml/Page6";
import Page7 from "./components/11pages/demoHtml/Page7";
import Page8 from "./components/11pages/demoHtml/Page8";
import Page9 from "./components/11pages/demoHtml/Page9";
import Page10 from "./components/11pages/demoHtml/Page10";
import Page11 from "./components/11pages/demoHtml/Page11";
import Page12 from "./components/11pages/demoHtml/Page12";
import Page13 from "./components/11pages/demoHtml/Page13";
import Page14 from "./components/11pages/demoHtml/Page14";
import Page15 from "./components/11pages/demoHtml/Page15";
import Page16 from "./components/11pages/demoHtml/Page16";
import Page17 from "./components/11pages/demoHtml/Page17";
import Page18 from "./components/11pages/demoHtml/Page18";
import Page19 from "./components/11pages/demoHtml/Page19";
import Page20 from "./components/11pages/demoHtml/Page20";
import Page21 from "./components/11pages/demoHtml/Page21";
import Page22 from "./components/11pages/demoHtml/Page22";

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
	const containerRef = useRef(null);
	const mainContainerRef = useRef(null);
	const [headings, setHeadings] = useState([]);
	const [pageTitle, setPageTitle] = useState([]);
	const [pageNum, setPageNum] = useState(1);
	const [inputValue, setInputValue] = useState(1);
	const [pagesLength, setPagesLength] = useState(0);
	const pages = [
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
	useEffect(() => {
		const headers = document.querySelectorAll("h1, h2, h3");
		headers.forEach((header) => {
			const id = generateIdFromText(header.textContent);
			header.id = id;
		});
	}, [pageNum]);
	useEffect(() => {
		if (containerRef.current) {
			const elements = containerRef.current.querySelectorAll("h2, h3");
			const h1Element = containerRef.current.querySelectorAll("h1")[0];
			setPagesLength(pages.length);
			const secTitle = h1Element ? h1Element.textContent : "";
			setPageTitle(secTitle);
			let headingsArray = [];
			let currentH2Index = -1;
			for (let i = 0; i < elements.length; i++) {
				let currentHead = elements[i].tagName;
				const id = generateIdFromText(elements[i].textContent);
				if (currentHead === "H2") {
					headingsArray.push({
						idx: i + 1,
						level: currentHead,
						text: elements[i].textContent,
						children: [],
						id,
					});
					currentH2Index += 1;
				} else if (currentHead === "H3") {
					if (currentH2Index >= 0) {
						headingsArray[currentH2Index].children.push({
							idx: i + 1,
							level: currentHead,
							text: elements[i].textContent,
							id,
						});
					}
				}
			}
			setHeadings(headingsArray);
		}
	}, [pageNum]);
	const memoizedHeadings = useMemo(() => headings, [headings]);
	const handleClickScroll = () => {
		if (mainContainerRef.current) {
			mainContainerRef.current.scrollTo({
				top: 0,
				behavior: "instant",
			});
		}
	};
	const tocStatus = useSelector(({ user }) => user.tocStatus);
	const tocAllowWindowHandleResize_rdx = useSelector(({ user }) => user.tocAllowWindowHandleResize_rdx);
	const [isOpen, setIsOpen] = useState(true);
	const [tocAllowWindowHandleResize, SetTocAllowWindowHandleResize] = useState(true);

	useEffect(() => {
		setIsOpen(tocStatus);
	}, [tocStatus]);

	useEffect(() => {
		SetTocAllowWindowHandleResize(tocAllowWindowHandleResize_rdx);
	}, [tocAllowWindowHandleResize_rdx]);

	const handleResize = () => {
		console.log("handleResize");
		if (window.innerWidth < 1400) {
			setIsOpen(false);
			dispatch(userReducerActions.toggleTocStatus(false));
		} else {
			setIsOpen(true);
			dispatch(userReducerActions.toggleTocStatus(true));
		}
	};
	useEffect(() => {
		if (!tocAllowWindowHandleResize) return;
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [tocAllowWindowHandleResize]);

	const TableOfContents = (
		<nav className={classes.tocOuterContainer}>
			<div className={classes.titleLabel} onClick={handleClickScroll}>
				<a>{pageTitle}</a>
			</div>
			<div className={classes.tocInnerContainer}>
				<ul>
					{memoizedHeadings.map((heading) => (
						<TocListItem
							key={heading.idx}
							idx={heading.idx}
							level={heading.level}
							text={heading.text}
							children={heading.children}
							id={`#${heading.id}`}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
	useEffect(() => {
		handleClickScroll();
	}, [pageNum]);
	//!Prev-Next Page
	const PrevPage = () => {
		let newVal = pageNum - 1;
		if (newVal >= 1) {
			setPageNum(newVal);
			setInputValue(newVal);
		}
	};
	const NextPage = () => {
		let newVal = pageNum + 1;
		if (newVal < pagesLength) {
			setPageNum(newVal);
			setInputValue(newVal);
		}
	};
	//!Page Input Field
	const inputRef1 = useRef(null);
	const inputRef2 = useRef(null);
	const handleFocus1 = () => {
		if (inputRef1.current) {
			inputRef1.current.select();
		}
	};
	const handleFocus2 = () => {
		if (inputRef2.current) {
			inputRef2.current.select();
		}
	};
	const handleInputChange = (e) => {
		const val = e.target.value;
		if (val === "") {
			setInputValue("");
		} else {
			const parsedValue = parseInt(val, 10);
			if (!isNaN(parsedValue) && parsedValue > 0 && parsedValue <= pagesLength) {
				setInputValue(parsedValue);
			}
		}
	};
	useEffect(() => {
		const identifier = setTimeout(() => {
			var newPageNum = inputValue;
			if (newPageNum > 0 && newPageNum <= pagesLength) {
				setPageNum(newPageNum);
			}
		}, 500);
		return () => {
			clearTimeout(identifier);
		};
	}, [inputValue]);
	//!Search Bar
	const inputSearchRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const handleSearchBarFocus = () => {
		setIsFocused(true);
	};
	const handleSearchBarBlur = () => {
		setIsFocused(false);
	};
	const searchBar = (
		<div className={classes.sidebarSearchInputContainer} method="get" action="#" role="search">
			<input
				className={`${classes["sidebar_search"]} ${isFocused ? classes.isFocused : ""}`}
				ref={inputSearchRef}
				onFocus={handleSearchBarFocus}
				onBlur={handleSearchBarBlur}
				placeholder="Search"
				name="q"
				aria-label="Search"
			/>
			<input type="hidden" name="check_keywords" value="yes" />
			<input type="hidden" name="area" value="default" />
		</div>
	);
	//!Navigation GUI
	const navigation1 = (
		<div className={classes.sideBarHeaderSection}>
			<div className={classes.navigation_container}>
				<div className={classes.pagination}>
					<button id="prev" onClick={PrevPage} className={classes.arrowButton}>
						<svg className={`${classes["arrowIconL"]} ${inputValue === 1 && classes.isInactive}`} viewBox="0 0 24 24">
							<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
						</svg>
					</button>
					<div className={classes.numbersContainer}>
						<svg className={classes.lineSVG_L} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
							<line x1="1" y1="0" x2="1" y2="40" />
						</svg>
						<span id="pageNumbers">
							<input
								type="text"
								onChange={handleInputChange}
								value={inputValue}
								onFocus={handleFocus1}
								ref={inputRef1}
								id="current_page"
								className={classes.pageInput}
							/>
							<span className={classes.pageSeparator}>|</span>
							<span className={classes.totalPages}>{pagesLength - 1}</span>
						</span>
						<svg className={classes.lineSVG_R} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
							<line x1="1" y1="0" x2="1" y2="40" />
						</svg>
					</div>
					<button id="next" onClick={NextPage} className={classes.arrowButton}>
						<svg className={`${classes["arrowIconR"]} ${inputValue === pagesLength - 1 && classes.isInactive}`} viewBox="0 0 24 24">
							<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
	const navigation2 = (
		<div className={classes.bottomNavigationSpacing}>
			<div className={classes.navigation_container}>
				<div className={classes.pagination}>
					<button id="prev" onClick={PrevPage} className={classes.arrowButton}>
						<svg className={`${classes["arrowIconL"]} ${inputValue === 1 && classes.isInactive}`} viewBox="0 0 24 24">
							<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
						</svg>
					</button>
					<div className={classes.numbersContainer}>
						<svg className={classes.lineSVG_L} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
							<line x1="1" y1="0" x2="1" y2="40" />
						</svg>
						<span id="pageNumbers">
							<input
								type="text"
								onChange={handleInputChange}
								value={inputValue}
								onFocus={handleFocus2}
								ref={inputRef2}
								id="current_page"
								className={classes.pageInput}
							/>
							<span className={classes.pageSeparator}>|</span>
							<span className={classes.totalPages}>{pagesLength - 1}</span>
						</span>
						<svg className={classes.lineSVG_R} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
							<line x1="1" y1="0" x2="1" y2="40" />
						</svg>
					</div>
					<button id="next" onClick={NextPage} className={classes.arrowButton}>
						<svg className={`${classes["arrowIconR"]} ${inputValue === pagesLength - 1 && classes.isInactive}`} viewBox="0 0 24 24">
							<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<main className={classes.mainContainer} id="main" role="main" ref={mainContainerRef}>
			<DemoNavbar isOpen={isOpen} />
			<div className={classes.bodyContainer}>
				<nav className={`${classes["sideBarOuterContainer"]} ${isOpen ? classes.open : ""}`}>
					{navigation1}
					{searchBar}
					{TableOfContents}
				</nav>
				<div className={classes.handbook_OuterContainer} ref={containerRef}>
					<div className={classes.handbook_InnerContainer}>
						<div className={classes.page_contentContainer}>
							{pages[pageNum]}
							{navigation2}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
