import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import { throttle } from "lodash";
import DemoNavbar from "../../100_layout/10_header/2_navBar_Demo";
import SideBar_R_SearchModal from "../../100_layout/30_sideBars/1_sideBar_R_SearchModal/sideBar_R_SearchModal";
import SideBar_R_NotesModal from "../../100_layout/30_sideBars/2_sideBar_R_NotesModal/sideBar_R_NotesModal";
import SideBar_L_TOC from "../../100_layout/30_sideBars/0_sideBar_L_TOC/1_sideBar_L_TOC";
import SideBar_R_QuestionsModal from "../../100_layout/30_sideBars/4_sideBar_R_QuestionsModal/1_sideBar_R_QuestionsModal";
import PaginationGUI from "./0_features/pagination/paginationGUI";
import Page1A from "../../200_pages/20_demo_pages/page1A";
import Page1B from "../../200_pages/20_demo_pages/page1B";
import Page2 from "../../200_pages/20_demo_pages/page2";
import Page3 from "../../200_pages/20_demo_pages/page3";
import Page4 from "../../200_pages/20_demo_pages/page4";
import Page5 from "../../200_pages/20_demo_pages/page5";
import Page6 from "../../200_pages/20_demo_pages/page6";
import Page7 from "../../200_pages/20_demo_pages/page7";
import Page8 from "../../200_pages/20_demo_pages/page8";
import Page9 from "../../200_pages/20_demo_pages/page9";
import Page10 from "../../200_pages/20_demo_pages/page10";
import Page11 from "../../200_pages/20_demo_pages/page11";
import Page12 from "../../200_pages/20_demo_pages/page12";
import Page13 from "../../200_pages/20_demo_pages/page13";
import Page14 from "../../200_pages/20_demo_pages/page14";
import Page15 from "../../200_pages/20_demo_pages/page15";
import Page16 from "../../200_pages/20_demo_pages/page16";
import Page17 from "../../200_pages/20_demo_pages/page17";
import Page18 from "../../200_pages/20_demo_pages/page18";
import Page19 from "../../200_pages/20_demo_pages/page19";
import Page20 from "../../200_pages/20_demo_pages/page20";
import Page21 from "../../200_pages/20_demo_pages/page21";
import Page22 from "../../200_pages/20_demo_pages/page22";

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
	const {
		sideBar_L_isOpen_Rdx,
		sideBar_L_AllowCollapse_OnWindowResize_rdx,
		sideBar_R_Search_ModalStatus_rdx,
		sideBar_R_Notes_ModalStatus_rdx,
		sideBar_R_Main_ModalStatus_rdx,
		currentPageNum_rdx,
		sideBar_R_Questions_ModalStatus_rdx,
	} = useSelector(({ user }) => user);
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
		// console.log("Scroll event detected (debounced).");
		const closestHeaderId = getClosestHeaderToTop();
		setActiveID(closestHeaderId);
		// console.log("Closest header ID after scroll (debounced):", closestHeaderId);
	}, 100);

	useEffect(() => {
		const scrollContainer = mainContainerRef.current;
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", debouncedHandleScroll);
			// console.log("Scroll event listener added to mainContainerRef (debounced).");
			return () => {
				// console.log("Removing scroll event listener...");
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
	const width_Affects_to_SideBar_L_TOC = useCallback(
		throttle(() => {
			if (window.innerWidth < 1400 && sideBar_L_isOpen_Rdx) {
				dispatch(userReducerActions.sideBar_L_Close());
			} else if (window.innerWidth >= 1400 && !sideBar_L_isOpen_Rdx) {
				dispatch(userReducerActions.sideBar_L_Open());
			}
		}, 50),
		[sideBar_L_isOpen_Rdx]
	);
	useEffect(() => {
		if (!sideBar_L_AllowCollapse_OnWindowResize_rdx) return;
		window.addEventListener("resize", width_Affects_to_SideBar_L_TOC);
		width_Affects_to_SideBar_L_TOC();
		return () => {
			window.removeEventListener("resize", width_Affects_to_SideBar_L_TOC);
		};
	}, [sideBar_L_AllowCollapse_OnWindowResize_rdx, sideBar_L_isOpen_Rdx, width_Affects_to_SideBar_L_TOC]);
	// Hot-Key Combinations
	const handleKeyCombination = (e) => {
		switch (true) {
			case e.ctrlKey && e.key === "b":
				if (sideBar_L_isOpen_Rdx) {
					dispatch(userReducerActions.sideBar_L_Close());
					if (sideBar_L_AllowCollapse_OnWindowResize_rdx) {
						dispatch(userReducerActions.sideBar_L_NotAllowCollapse_OnWindowResize());
					}
				} else {
					dispatch(userReducerActions.sideBar_L_Open());
				}
				break;

			case e.ctrlKey && e.key === "s":
				if (sideBar_R_Notes_ModalStatus_rdx) dispatch(userReducerActions.sideBar_R_Close_Notes_Modal());
				if (sideBar_R_Main_ModalStatus_rdx) dispatch(userReducerActions.sideBar_R_Close_Main_Modal());
				if (!sideBar_R_Search_ModalStatus_rdx) {
					dispatch(userReducerActions.sideBar_R_Open_Search_Modal());
				} else {
					dispatch(userReducerActions.sideBar_R_Close_Search_Modal());
				}
				break;

			case e.ctrlKey && e.key === "n":
				if (sideBar_R_Search_ModalStatus_rdx) dispatch(userReducerActions.sideBar_R_Close_Search_Modal());
				if (sideBar_R_Main_ModalStatus_rdx) dispatch(userReducerActions.sideBar_R_Close_Main_Modal());
				if (!sideBar_R_Notes_ModalStatus_rdx) {
					dispatch(userReducerActions.sideBar_R_Open_Notes_Modal());
				} else {
					dispatch(userReducerActions.sideBar_R_Close_Notes_Modal());
				}
				break;

			case e.ctrlKey && e.key === "m":
				if (sideBar_R_Search_ModalStatus_rdx) dispatch(userReducerActions.sideBar_R_Close_Search_Modal());
				if (sideBar_R_Notes_ModalStatus_rdx) dispatch(userReducerActions.sideBar_R_Close_Notes_Modal());
				if (!sideBar_R_Main_ModalStatus_rdx) {
					dispatch(userReducerActions.sideBar_R_Open_Main_Modal());
				} else {
					dispatch(userReducerActions.sideBar_R_Close_Main_Modal());
				}
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
	}, [sideBar_L_isOpen_Rdx, sideBar_R_Search_ModalStatus_rdx, sideBar_R_Notes_ModalStatus_rdx, sideBar_R_Main_ModalStatus_rdx, sideBar_R_Questions_ModalStatus_rdx]);

	return (
		<main className={classes.mainContainer} id="demo_main" role="demo_main" ref={mainContainerRef}>
			<DemoNavbar />
			<div className={classes.bodyContainer}>
				<SideBar_L_TOC
					sideBar_L_isOpen={sideBar_L_isOpen_Rdx}
					pageTitle={pageTitle}
					memoizedHeadings={memoizedHeadings}
					currentPageNum={currentPageNum_rdx}
					activeID={activeID}
					GoTo_TopOfPage={GoTo_TopOfPage}
				/>
				<div className={`${classes["handbook_outerContainer"]} ${sideBar_L_isOpen_Rdx ? classes.sideBarLisOpen : ""}`}  ref={pageContentRef}>
					<div className={classes.handbook_innerContainer}>
						<div className={classes.page_contentContainer}>
							{ListOfPages[currentPageNum_rdx]}
							<PaginationGUI />
						</div>
					</div>
				</div>
				{sideBar_R_Search_ModalStatus_rdx && <SideBar_R_SearchModal />}
				{sideBar_R_Notes_ModalStatus_rdx && <SideBar_R_NotesModal />}
				{sideBar_R_Questions_ModalStatus_rdx && <SideBar_R_QuestionsModal pageContentRef={pageContentRef}/>}
			</div>
		</main>
	);
};

export default DemoDMVClassC;


// const minWidthPixels = 155; 
// if (newWidthPercent < minWidthPercent || newSideBarWidth < minWidthPixels) {
// 	exitAction();
// 	stopResizing();
// 	return;
// }