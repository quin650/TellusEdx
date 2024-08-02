import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../static/images/Logo_arrows.png";
import GetStartedButton from "./components/12modals/getStarted/features/GetStartedButton";
import NavbarMenuButton from "./components/10layout/10header/features/navbarMenuButton";
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

const App = () => {
	const containerRef = useRef(null);
	const [headings, setHeadings] = useState([]);
	const [pageTitle, setPageTitle] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	const pages = [<Page1A />, <Page1B />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />, <Page7 />, <Page8 />, <Page9 />, <Page10 />, <Page11 />, <Page12 />, <Page13 />, <Page14 />, <Page15 />, <Page16 />, <Page17 />, <Page18 />, <Page19 />, <Page20 />, <Page21 />, <Page22 />];

	// Create headings variable =  h2 headings and their h3 children
	useEffect(() => {
		if (containerRef.current) {
			const elements = containerRef.current.querySelectorAll("h2, h3");
			const h1Element = containerRef.current.querySelectorAll("h1")[0];
			const secTitle = h1Element ? h1Element.textContent : "";
			setPageTitle(secTitle);
			let headingsArray = [];
			let currentH2Index = -1;
			for (let i = 0; i < elements.length; i++) {
				let currentHead = elements[i].tagName;
				if (currentHead === "H2") {
					headingsArray.push({ idx: i + 1, level: currentHead, text: elements[i].textContent, children: [] });
					currentH2Index += 1;
				} else if (currentHead === "H3") {
					if (currentH2Index >= 0) {
						headingsArray[currentH2Index].children.push({ idx: i + 1, level: currentHead, text: elements[i].textContent });
					}
				}
			}
			setHeadings(headingsArray);
		}
	}, [containerRef, currentPage]);
	// to iterate through headings variable and crate table of Contents
	const TableOfContents = (
		<nav className={classes.tocOuterContainer}>
			<div className={classes.tocInnerContainer}>
				<ul>
					{headings.map((heading) => (
						<TocListItem key={heading.idx} idx={heading.idx} level={heading.level} text={heading.text} children={heading.children} />
					))}
				</ul>
			</div>
		</nav>
	);
	const handleClickScroll = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const authGuestNavBar = (
		<div className={classes.inner_container_nav}>
			<li className={classes.NavItem1}>
				<Link to="/home" onClick={handleClickScroll}>
					<img src={Logo} alt="Logo" className={classes.Logo}></img>
				</Link>
			</li>
			<li className={classes.NavItem2}>
				<GetStartedButton />
			</li>
			<li className={classes.NavItem3}>
				<NavbarMenuButton />
			</li>
		</div>
	);
	const authGuestSubNavBar = (
		<div className={classes.headerSubNav}>
			<div className={classes.headerSubNav_hamburger}>
				<button>
					<svg aria-hidden="true" focusable="false" className={classes.octicon} viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
						<path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
					</svg>
				</button>
			</div>
			<div className={classes.breadCrumbs}>
				<nav className={classes.breadCrumbsHeader}>
					<ul>
						<li>
							<a className={classes.breadCrumbsHeaderLink}> Get Started</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
	const [handbookState, setHandbookState] = useState({
		scale: null,
		scaleFull: null,
		pageNum: 9,
		section: 6,
		inputValue: 9,
		numPages: 22,
	});
	//!Prev-Next Page
	const PrevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};
	const NextPage = () => {
		if (currentPage < pages.length - 1) {
			setCurrentPage(currentPage + 1);
		}
	};
	//!Page Input Field
	const handleInputChange = (e) => {
		const val = parseInt(e.target.value);
		if (val > 0 && val <= pages.length) {
			setCurrentPage(val - 1);
		}
	};
	return (
		<main className={classes.mainContainer} id="main" role="main">
			<nav className={classes.navContainer}>
				{authGuestNavBar}
				{authGuestSubNavBar}
			</nav>
			<div className={classes.bodyContainer}>
				<nav className={classes.sideBarOuterContainer}>
					<div className={classes.sideBarInnerContainer}>
						<div className={classes.sideBarHeaderSection}>
							<div className={classes.sideBarHeaderTopSection}>
								<span>
									<a href={`#${pageTitle}`}> {pageTitle}</a>
								</span>
							</div>
							<div className={classes.navigation_container}>
								<div className={classes.pagination}>
									<button id="prev" onClick={PrevPage} className={classes.arrowButton}>
										<svg className={classes.arrowIcon} viewBox="0 0 24 24">
											<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
										</svg>
									</button>
									<div className={classes.numbersContainer}>
										<svg className={classes.lineSVG_L} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
											<line x1="1" y1="0" x2="1" y2="40" />
										</svg>
										<span id="pageNumbers">
											<input type="text" onChange={handleInputChange} value={handbookState.inputValue} id="current_page" className={classes.pageInput} />
											<span className={classes.pageSeparator}>|</span>
											<span className={classes.totalPages}>665</span>
										</span>
										<svg className={classes.lineSVG_R} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
											<line x1="1" y1="0" x2="1" y2="40" />
										</svg>
									</div>
									<button id="next" onClick={NextPage} className={classes.arrowButton}>
										<svg className={classes.arrowIcon} viewBox="0 0 24 24">
											<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
						{TableOfContents}
					</div>
				</nav>
				<div className={classes.handbook_OuterContainer} ref={containerRef}>
					<div className={classes.handbook_InnerContainer}>
						<div className={classes.page_contentContainer}>{pages[currentPage]}</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
