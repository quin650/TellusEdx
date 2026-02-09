import React, { useState, useRef, useEffect, useCallback, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { userReducerActions } from "./a.reducers/auth_Reducers";
import { throttle } from "lodash";

import MainNavbar from "./components/1000_layout/100_header/1_mainNavbar";
import Home from "./components/2000_pages/100_pages/10_home_LandingPage/0_home";
import GeneralPage from "./components/2000_pages/100_pages/generalPage";
import Footer from "./components/1000_layout/400_footer/footer";
import OnThisPageQuickView from "./components/1000_layout/200_layoutFeatures/10_onThisPageQuickView";

const Demo_LandingPage = lazy(() => import("./components/2000_pages/100_pages/20_demo_LandingPage/demo_LandingPage"));
const DemoDMVClassC = lazy(() => import("./components/5000_demos/100_demo_DMV/10_demo_DMV_ClassC/demo_DMV_ClassC"));
const PDFViewer = lazy(() => import("./components/5000_demos/100_demo_DMV/10_demo_DMV_ClassC/0_features/PDFViewer/PDFVIewer"));

const App = () => {
	const mainAppContainerRef = useRef();
	const dispatch = useDispatch();
	const location = useLocation();
	const isDarkMode_rdx = useSelector(({ user }) => user.isDarkMode_rdx);
	const isDemoView_rdx = useSelector(({ user }) => user.isDemoView_rdx);
	const getStarted_ModalStatus_rdx = useSelector(({ user }) => user.getStarted_ModalStatus_rdx);
	const sideBar_R_Main_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Main_isOpen_rdx);
	const sideBar_R_SearchBar_isActive_rdx = useSelector(({ user }) => user.sideBar_R_SearchBar_isActive_rdx);
	const userComputerType_rdx = useSelector(({ user }) => user.userComputerType_rdx);
	const [divIDs, setDivIDs] = useState([]);
	const [activeID, setActiveID] = useState("");
	//! Find if using windows or mac
	useEffect(() => {
		const isMac = navigator.userAgent.toLowerCase().includes("mac");
		// const isWindows = navigator.userAgent.toLowerCase().includes("win");
		if (isMac) {
			dispatch(userReducerActions.setUserComputerType("mac"));
		} else {
			dispatch(userReducerActions.setUserComputerType("windows"));
		}
	}, []);
	//! Set Dark/Light Mode
	useEffect(() => {
		document.querySelector("main").setAttribute("prefers-color-scheme", isDarkMode_rdx === "dark" ? "dark" : "light");
	}, [isDarkMode_rdx]);
	//! Set Regular/Demo View
	useEffect(() => {
		if (location.pathname === "/demo") {
			dispatch(userReducerActions.setDemoView());
		} else if (isDemoView_rdx && location.pathname !== "/demo") {
			dispatch(userReducerActions.setRegularView());
		}
	}, [location, dispatch, isDemoView_rdx]);
	//! List of div's with ID's
	useEffect(() => {
		setDivIDs([]);
		const timer = setTimeout(() => {
			const mainElement = document.querySelector("main");
			let listOfDivIDs = [];
			if (mainElement) {
				const divElements = mainElement.querySelectorAll("div[id]");
				divElements.forEach((element) => {
					if (isNaN(element.id)) {
						listOfDivIDs.push(element.id);
					}
				});
			}
			setDivIDs(listOfDivIDs);
		}, 50);
		return () => clearTimeout(timer);
	}, [location.pathname]);
	//! Find active ID (i.e. currently scrolled to)
	useEffect(() => {
		const handleScroll = throttle(() => {
			let currentActiveID = "";
			setActiveID("");
			let divElements = document.querySelectorAll("div[id]");
			divElements.forEach((divID) => {
				const rect = divID.getBoundingClientRect();
				if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
					currentActiveID = divID.id;
				}
			});
			setActiveID(currentActiveID);
			divElements = [];
		}, 50);
		const scrollContainer = document.querySelector("main");
		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);
	// HotKey - Toggle Learn/Contribute
	const [isToggleChange, setIsToggleChange] = useState(1);
	// For alt key on tippy show QuickView Page Items
	const tippyRefs = useRef([]);
	const registerTippy = (instance) => {
		if (instance && !tippyRefs.current.includes(instance)) {
			tippyRefs.current.push(instance);
		}
	};
	//! Hot-Key Combinations
	const handleClickScroll = useCallback(
		(i) => {
			if (i > divIDs.length) {
				return;
			} else {
				document.getElementById(divIDs[i - 1]).scrollIntoView({ behavior: "smooth" });
			}
		},
		[divIDs],
	);
	const isMac = userComputerType_rdx === "mac";
	const handleKeyDownCombination = (e) => {
		if (location.pathname === "/demo_dmvClassC") return;

		if (isMac) {
			if (e.key === "Meta") {
				tippyRefs.current.forEach((instance) => {
					if (instance && !instance.state.isDestroyed) {
						instance.show();
					}
				});
			}
		} else {
			if (e.key === "Alt") {
				tippyRefs.current.forEach((instance) => {
					if (instance && !instance.state.isDestroyed) {
						instance.show();
					}
				});
			}
		}

		if (!getStarted_ModalStatus_rdx) {
			if (!sideBar_R_SearchBar_isActive_rdx) {
				if (!sideBar_R_Main_isOpen_rdx) {
					if (e.key === "s" || e.key === "S") {
						e.preventDefault();
						dispatch(userReducerActions.sideBar_R_SearchBar_isActive(true));
					}
					if (activeID === "Learn/Contribute") {
						if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
							console.log(" left or right");
							setIsToggleChange((prev) => prev + 1);
						}
					}
				}
				if (e.key === "m" || e.key === "M") {
					if (sideBar_R_Main_isOpen_rdx) {
						dispatch(userReducerActions.sideBar_R_Close_Main());
					} else {
						dispatch(userReducerActions.sideBar_R_Open_Main());
					}
				}
				if (!isNaN(e.key) && Number(e.key) >= 1 && Number(e.key) <= 9) {
					handleClickScroll(Number(e.key));
				}
			}
		}
	};
	const handleKeyUpCombination = (e) => {
		if (location.pathname === "/demo_dmvClassC") return;
		if (isMac) {
			if (e.key === "Meta") {
				tippyRefs.current.forEach((instance) => instance.hide());
			}
		} else {
			if (e.key === "Alt") {
				tippyRefs.current.forEach((instance) => instance.hide());
			}
		}
	};
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDownCombination);
		document.addEventListener("keyup", handleKeyUpCombination);

		return () => {
			document.removeEventListener("keydown", handleKeyDownCombination);
			document.removeEventListener("keyup", handleKeyUpCombination);
		};
	}, [location.pathname, sideBar_R_Main_isOpen_rdx, sideBar_R_SearchBar_isActive_rdx, getStarted_ModalStatus_rdx, handleClickScroll, activeID, isMac]);
	return (
		<main id="main" role="main" ref={mainAppContainerRef}>
			{location.pathname !== "/PDFViewer" && (
				<header>
					<MainNavbar />
				</header>
			)}
			{location.pathname !== "/PDFViewer" && location.pathname !== "/demo_dmvClassC" ? (
				<OnThisPageQuickView divIDs={divIDs} activeID={activeID} registerTippy={registerTippy} />
			) : (
				""
			)}
			<Suspense fallback={<div style={{ padding: "16px" }}>Loading…</div>}>
				<Routes>
					<Route path="/demos" element={<Demo_LandingPage />} />
					<Route path="/demo_dmvClassC" element={<DemoDMVClassC />} />
					<Route path="/PDFViewer" element={<PDFViewer />} />
					{/* General Pages */}
					<Route path="/" element={<Home isToggleChange={isToggleChange} />} />
					<Route path="/aboutus" element={<GeneralPage text={"About Us"} DivID={"About Us"} />} />
					<Route path="/company" element={<GeneralPage text={"company"} DivID={"company"} />} />
					<Route path="/ourteam" element={<GeneralPage text={"Our Team"} DivID={"Our Team"} />} />
					<Route path="/careers" element={<GeneralPage text={"Careers"} DivID={"Careers"} />} />
					<Route path="/merch" element={<GeneralPage text={"Merch"} DivID={"Merch"} />} />
					<Route path="/supportcenter" element={<GeneralPage text={"Support Center"} DivID={"Support Center"} />} />
					<Route path="/docs" element={<GeneralPage text={"Docs"} DivID={"Docs"} />} />
					<Route path="/guides" element={<GeneralPage text={"Guides"} DivID={"Guides"} />} />
					<Route path="/apireference" element={<GeneralPage text={"API Reference"} DivID={"API Reference"} />} />
					<Route path="/integrations" element={<GeneralPage text={"Integrations"} DivID={"Integrations"} />} />
					<Route path="/help" element={<GeneralPage text={"Help"} DivID={"Help"} />} />
					<Route path="/faq" element={<GeneralPage text={"FAQ"} DivID={"FAQ"} />} />
					<Route path="/tutorials" element={<GeneralPage text={"Tutorials"} DivID={"Tutorials"} />} />
					<Route path="/contactus" element={<GeneralPage text={"Contacts Us"} DivID={"Contacts Us"} />} />
				</Routes>
			</Suspense>
			{location.pathname !== "/demo" && location.pathname !== "/demos" && location.pathname !== "/demo_dmvClassC" && location.pathname !== "/PDFViewer" && (
				<footer>
					<Footer />
				</footer>
			)}
		</main>
	);
};
export default App;

// const isAuthenticated_rdx = useSelector(({ user }) => user.isAuthenticated_rdx)
// useEffect(()=>{
//     dispatch(checkAuthenticated_APIAction());
// },[])
