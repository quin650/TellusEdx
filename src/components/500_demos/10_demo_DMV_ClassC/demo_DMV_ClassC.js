import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import { throttle } from "lodash";
import SideBar_R_Notes from "../../400_sideBars/20_sideBar_R_Notes/sideBar_R_Notes";
import SideBar_L_TOC from "../../400_sideBars/10_sideBar_L_TOC/1_sideBar_L_TOC";
import SideBar_R_Questions_Container from "../../400_sideBars/40_sideBar_R_Questions/10_sideBar_R_Questions_Container";
import Pagination_eReader_GUI from "./0_features/pagination/pagination_eReader_GUI";
import Modal_resetThisTest from "../../300_modals/30_modal_resetThisTest/modal_resetThisTest";

import Page1 from "../../200_pages/20_demo_pages/page1";
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
import Page23 from "../../200_pages/20_demo_pages/page23";
import Page24 from "../../200_pages/20_demo_pages/page24";

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
		sideBar_L_isOpen_rdx,
		sideBar_L_AllowCollapse_OnWindowResize_rdx,
		sideBar_R_Notes_isOpen_rdx,
		sideBar_R_Main_isOpen_rdx,
		pageNum_current_reader_rdx,
		sideBar_R_Questions_isOpen_rdx,
	} = useSelector(({ user }) => user);
	const ListOfPages = [
		<Page1 />,
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
		<Page23 />,
		<Page24 />,
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
	}, [pageNum_current_reader_rdx]);
	//! Get Page Title | Get Range of pages
	useEffect(() => {
		if (pageContentRef.current) {
			dispatch(userReducerActions.setDemoPageLength(ListOfPages.length));
			const H1_Element = pageContentRef.current.querySelectorAll("h1")[0];
			const secTitle = H1_Element ? H1_Element.textContent : "";
			setPageTitle(secTitle);
		}
	}, [pageNum_current_reader_rdx]);
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
	}, [pageNum_current_reader_rdx]);
	//! Get closest ID to the top
	const debounce = (func, wait) => {
		let timeout;
		return function (...args) {
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(this, args), wait);
		};
	};
	const getClosestHeaderToTop = () => {
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
	}, [pageNum_current_reader_rdx]);
	//! TOC Status: Open/Close
	const width_Affects_to_SideBar_L_TOC = useCallback(
		throttle(() => {
			if (window.innerWidth < 1400 && sideBar_L_isOpen_rdx) {
				dispatch(userReducerActions.sideBar_L_Close());
			} else if (window.innerWidth >= 1400 && !sideBar_L_isOpen_rdx) {
				dispatch(userReducerActions.sideBar_L_Open());
			}
		}, 50),
		[sideBar_L_isOpen_rdx]
	);
	useEffect(() => {
		if (!sideBar_L_AllowCollapse_OnWindowResize_rdx) return;
		window.addEventListener("resize", width_Affects_to_SideBar_L_TOC);
		width_Affects_to_SideBar_L_TOC();
		return () => {
			window.removeEventListener("resize", width_Affects_to_SideBar_L_TOC);
		};
	}, [sideBar_L_AllowCollapse_OnWindowResize_rdx, sideBar_L_isOpen_rdx, width_Affects_to_SideBar_L_TOC]);
	// Hot-Key Combinations
	const sideBar_R_SearchBar_isActive_rdx = useSelector(({ user }) => user.sideBar_R_SearchBar_isActive_rdx);
	const handleKeyCombination = (e) => {
		if (!sideBar_R_SearchBar_isActive_rdx && !sideBar_R_Notes_isOpen_rdx) {
			switch (true) {
				case e.key === "b" || e.key === "B":
					if (sideBar_L_isOpen_rdx) {
						dispatch(userReducerActions.sideBar_L_Close());
						if (sideBar_L_AllowCollapse_OnWindowResize_rdx) {
							dispatch(userReducerActions.sideBar_L_NotAllowCollapse_OnWindowResize());
						}
					} else {
						dispatch(userReducerActions.sideBar_L_Open());
					}
					break;
				case e.key === "m" || e.key === "M":
					if (sideBar_R_Questions_isOpen_rdx) dispatch(userReducerActions.sideBar_R_Close_Questions());
					if (!sideBar_R_Main_isOpen_rdx) {
						dispatch(userReducerActions.sideBar_R_Open_Main());
					} else {
						dispatch(userReducerActions.sideBar_R_Close_Main());
					}
					break;
				case e.key === "q" || e.key === "Q":
					if (sideBar_R_Main_isOpen_rdx) dispatch(userReducerActions.sideBar_R_Close_Main());
					if (!sideBar_R_Questions_isOpen_rdx) {
						dispatch(userReducerActions.sideBar_R_Open_Questions());
					} else {
						dispatch(userReducerActions.sideBar_R_Close_Questions());
					}
					break;
				case e.key === "n" || e.key === "N":
					if (sideBar_R_Main_isOpen_rdx) dispatch(userReducerActions.sideBar_R_Close_Main());
					if (sideBar_R_Questions_isOpen_rdx) dispatch(userReducerActions.sideBar_R_Close_Questions());
					dispatch(userReducerActions.sideBar_R_Open_Notes());
					break;
				case e.key === "s" || e.key === "S":
					e.preventDefault();
					if (sideBar_R_Main_isOpen_rdx) dispatch(userReducerActions.sideBar_R_Close_Main());
					if (sideBar_R_Questions_isOpen_rdx) dispatch(userReducerActions.sideBar_R_Close_Questions());
					dispatch(userReducerActions.sideBar_R_SearchBar_isActive(true));
					break;
				default:
					break;
			}
		}
	};
	useEffect(() => {
		document.addEventListener("keydown", handleKeyCombination);
		return () => {
			document.removeEventListener("keydown", handleKeyCombination);
		};
	}, [sideBar_L_isOpen_rdx, sideBar_R_Notes_isOpen_rdx, sideBar_R_Main_isOpen_rdx, sideBar_R_Questions_isOpen_rdx, sideBar_R_SearchBar_isActive_rdx]);
	const handleMainClick = () => {
		dispatch(userReducerActions.setActivePanel("main"));
	};
	const resetThisTest_ModalStatus_rdx = useSelector(({ user }) => user.resetThisTest_ModalStatus_rdx);
	return (
		<main className={classes.mainContainer} id="demo_main" role="demo_main" ref={mainContainerRef}>
			<div className={classes.bodyContainer}>
				{resetThisTest_ModalStatus_rdx && <Modal_resetThisTest />}
				<SideBar_L_TOC
					sideBar_L_isOpen={sideBar_L_isOpen_rdx}
					pageTitle={pageTitle}
					memoizedHeadings={memoizedHeadings}
					currentPageNum={pageNum_current_reader_rdx}
					activeID={activeID}
					GoTo_TopOfPage={GoTo_TopOfPage}
				/>
				<div className={classes.handbook_outerContainer} ref={pageContentRef} onClick={handleMainClick}>
					<div className={classes.page_contentContainer}>
						{ListOfPages[pageNum_current_reader_rdx - 1]}
						<Pagination_eReader_GUI />
					</div>
				</div>
				{sideBar_R_Notes_isOpen_rdx && <SideBar_R_Notes pageContentRef={pageContentRef} />}
				{sideBar_R_Questions_isOpen_rdx && <SideBar_R_Questions_Container pageContentRef={pageContentRef} />}
			</div>
		</main>
	);
};

export default DemoDMVClassC;
