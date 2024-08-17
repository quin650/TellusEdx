import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import DemoNavbar from "../../100_layout/10_header/2_navBar_Demo";
import SideBar_L_TOC from "../../100_layout/30_sideBars/0_sideBar_L_TOC/1_sideBar_L_TOC";

import Page1A from "../../200_pages/20_demo_DMV_Pages/page1A";
import Page1B from "../../200_pages/20_demo_DMV_Pages/page1B";
import Page2 from "../../200_pages/20_demo_DMV_Pages/page2";
import Page3 from "../../200_pages/20_demo_DMV_Pages/page3";
import Page4 from "../../200_pages/20_demo_DMV_Pages/page4";
import Page5 from "../../200_pages/20_demo_DMV_Pages/page5";
import Page6 from "../../200_pages/20_demo_DMV_Pages/page6";
import Page7 from "../../200_pages/20_demo_DMV_Pages/page7";
import Page8 from "../../200_pages/20_demo_DMV_Pages/page8";
import Page9 from "../../200_pages/20_demo_DMV_Pages/page9";
import Page10 from "../../200_pages/20_demo_DMV_Pages/page10";
import Page11 from "../../200_pages/20_demo_DMV_Pages/page11";
import Page12 from "../../200_pages/20_demo_DMV_Pages/page12";
import Page13 from "../../200_pages/20_demo_DMV_Pages/page13";
import Page14 from "../../200_pages/20_demo_DMV_Pages/page14";
import Page15 from "../../200_pages/20_demo_DMV_Pages/page15";
import Page16 from "../../200_pages/20_demo_DMV_Pages/page16";
import Page17 from "../../200_pages/20_demo_DMV_Pages/page17";
import Page18 from "../../200_pages/20_demo_DMV_Pages/page18";
import Page19 from "../../200_pages/20_demo_DMV_Pages/page19";
import Page20 from "../../200_pages/20_demo_DMV_Pages/page20";
import Page21 from "../../200_pages/20_demo_DMV_Pages/page21";
import Page22 from "../../200_pages/20_demo_DMV_Pages/page22";

import PaginationGUI from "./0_features/pagination/paginationGUI";

import classes from "./demo_DMV_ClassC.module.css";
const generateIdFromText = (text) => {
	if (typeof text !== "string") {
		return "";
	}
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
};
const DemoDMVClassC = () => {
	const dispatch = useDispatch();
	const mainContainerRef = useRef(null);
	const pageContentRef = useRef(null);
	const [pageTitle, setPageTitle] = useState([]);
	const [headingsList, setHeadingsList] = useState([]);
	const currentPageNum_rdx = useSelector(({ user }) => user.currentPageNum_rdx);
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

	const SideBar_Left_AllowCollapse_OnWindowResize_rdx = useSelector(({ user }) => user.SideBar_Left_AllowCollapse_OnWindowResize_rdx);
	const [sideBar_Left_AllowCollapse_OnWindowResize, setSideBar_Left_AllowCollapse_OnWindowResize] = useState(true);
	const [activeID, setActiveID] = useState(null);
	//! Inject id's based on the h1, h2, h3 text
	useEffect(() => {
		if (pageContentRef.current) {
			const List_of_H1_H2_H3_Headers = document.querySelectorAll("h1, h2, h3");
			List_of_H1_H2_H3_Headers.forEach((header) => {
				const id = generateIdFromText(header.textContent);
				header.id = id;
			});
		}
	}, [currentPageNum_rdx]);
	//! Get Page Title | Get Range of pages
	useEffect(() => {
		if (pageContentRef.current) {
			dispatch(userReducerActions.setDemoPageLength(ListOfPages.length - 1));
			const H1_Element = pageContentRef.current.querySelectorAll("h1")[0];
			const secTitle = H1_Element ? H1_Element.textContent : "";
			setPageTitle(secTitle);
		}
	}, [currentPageNum_rdx]);
	//! Get list of all the headings h2 & their h3 children
	useEffect(() => {
		if (pageContentRef.current) {
			const H2_H3_elements1 = pageContentRef.current.querySelectorAll("h2, h3");
			let headingsArray = [];
			let currentH2Index = -1;
			H2_H3_elements1.forEach((element, index) => {
				const id = element.id || generateIdFromText(element.textContent);
				element.id = id;
				if (element.tagName === "H2") {
					headingsArray.push({
						idx: index + 1,
						level: element.tagName,
						text: element.textContent,
						children: [],
						id,
					});
					currentH2Index += 1;
				} else if (element.tagName === "H3" && currentH2Index >= 0) {
					headingsArray[currentH2Index].children.push({
						idx: index + 1,
						level: element.tagName,
						text: element.textContent,
						id,
					});
				}
			});
			setHeadingsList(headingsArray);
		}
	}, [currentPageNum_rdx]);
	//! Get closest ID to the top
	const debounce = (func, wait) => {
		let timeout;
		return function (...args) {
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(this, args), wait);
		};
	};
	const getClosestHeaderToTop = () => {
		// console.log("Running getClosestHeaderToTop...");
		const H2_H3_elements2 = pageContentRef.current.querySelectorAll("h2, h3");
		let closestHeader = null;
		let closestDistance = Infinity;
		const container = mainContainerRef.current;
		if (!container) {
			// console.log("mainContainerRef is not set.");
			return null;
		}
		const offsetValue = 10;
		H2_H3_elements2.forEach((heading) => {
			// console.log("Processing heading:", heading);
			const headerElement = container.querySelector(`#${heading.id}`);

			if (headerElement) {
				const containerTop = container.getBoundingClientRect().top;
				const headerTop = headerElement.getBoundingClientRect().top;
				const distanceFromTop = headerTop - containerTop;
				// console.log(`ID: ${heading.id}, Distance from top: ${distanceFromTop}`);

				if (distanceFromTop >= -offsetValue && distanceFromTop < closestDistance) {
					// console.log(`New closest header found: ${heading.id} (Distance: ${distanceFromTop})`);
					closestDistance = distanceFromTop;
					closestHeader = heading;
				}
			} else {
				// console.log(`Element with ID ${heading.id} not found in the container.`);
			}
		});

		if (closestHeader) {
			return closestHeader.id;
		} else {
			// console.log("No closest header found.");
			return null;
		}
	};
	const debouncedHandleScroll = debounce(() => {
		const closestHeaderId = getClosestHeaderToTop();
		setActiveID(closestHeaderId);
	}, 100);
	useEffect(() => {
		const scrollContainer = mainContainerRef.current;
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", debouncedHandleScroll);
			return () => {
				scrollContainer.removeEventListener("scroll", debouncedHandleScroll);
			};
		} else {
			// console.log("mainContainerRef is null.");
		}
	}, [mainContainerRef]);
	//! GoTo_TopOfPage
	const GoTo_TopOfPage = () => {
		if (mainContainerRef.current) {
			mainContainerRef.current.scrollTo({
				top: 0,
				behavior: "instant",
			});
		}
	};
	useEffect(() => {
		GoTo_TopOfPage();
	}, [currentPageNum_rdx]);
	//! TOC Status: Open/Close

	useEffect(() => {
		setSideBar_Left_AllowCollapse_OnWindowResize(SideBar_Left_AllowCollapse_OnWindowResize_rdx);
	}, [SideBar_Left_AllowCollapse_OnWindowResize_rdx]);
	const debouncedWidth_Affects_to_SideBar_Left_TOC = useCallback(
		debounce(() => {
			if (window.innerWidth < 1400 && sideBar_Left_isOpen_Rdx) {
				dispatch(userReducerActions.sideBar_Left_Close());
			} else if (window.innerWidth >= 1400 && !sideBar_Left_isOpen_Rdx) {
				dispatch(userReducerActions.sideBar_Left_Open());
			}
		}, 50),
		[sideBar_Left_isOpen_Rdx]
	);
	useEffect(() => {
		if (!sideBar_Left_AllowCollapse_OnWindowResize) return;
		window.addEventListener("resize", debouncedWidth_Affects_to_SideBar_Left_TOC);
		debouncedWidth_Affects_to_SideBar_Left_TOC();
		return () => {
			window.removeEventListener("resize", debouncedWidth_Affects_to_SideBar_Left_TOC);
		};
	}, [sideBar_Left_AllowCollapse_OnWindowResize, sideBar_Left_isOpen_Rdx, debouncedWidth_Affects_to_SideBar_Left_TOC]);
	//Prevents the demo option to be shown in the sideBar_right_MainModal
	const demoNavBarMenuOption = false;
	// General Event listeners -- CMD+B (Toggle SideBar_Left) CMD+SHIFT+N (Toggle SideBar_Right Notes) CMD+SHIFT+S (Toggle SideBar_Right Search)
	const handleKeyCombination = (e) => {
		switch (true) {
			case e.ctrlKey && e.key === "b":
				setSideBar_Left_AllowCollapse_OnWindowResize(false);
				dispatch(userReducerActions.sideBar_Left_Toggle_ModalVisibility());
				break;
			case e.ctrlKey && e.key === "s":
				dispatch(userReducerActions.sideBar_Right_Toggle_Search_ModalVisibility());
				break;
			case e.ctrlKey && e.key === "n":
				dispatch(userReducerActions.sideBar_Right_Toggle_Notes_ModalVisibility());
				break;
			default:
				break;
		}
	};
	useEffect(() => {
		document.addEventListener("keydown", handleKeyCombination);
		return () => {
			document.removeEventListener("keydown", handleKeyCombination);
		};
	}, [currentPageNum_rdx]);
	return (
		<main className={classes.mainContainer} id="main" role="main" ref={mainContainerRef}>
			<DemoNavbar demoNavBarMenuOption={demoNavBarMenuOption} />
			<div className={classes.bodyContainer}>
				<SideBar_L_TOC
					sideBar_Left_isOpen={sideBar_Left_isOpen_Rdx}
					pageTitle={pageTitle}
					memoizedHeadings={memoizedHeadings}
					currentPageNum={currentPageNum_rdx}
					activeID={activeID}
					GoTo_TopOfPage={GoTo_TopOfPage}
				/>
				<div className={classes.handbook_outerContainer} ref={pageContentRef}>
					<div className={classes.handbook_innerContainer}>
						<div className={classes.page_contentContainer}>
							{ListOfPages[currentPageNum_rdx]}
							<PaginationGUI />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DemoDMVClassC;
