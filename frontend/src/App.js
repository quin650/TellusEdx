import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { userReducerActions } from "./a.reducers/auth_Reducers";
import { throttle } from "lodash";
import MainNavbar from "./components/100_layout/10_header/1_navBar_Main";
import Footer from "./components/100_layout/40_footer/footer";
import Home from "./components/200_pages/10_pages/0_home/0_home";
import Demo_LandingPage from "./components/400_demos/00_demo_LandingPage/demo_LandingPage";
import DemoDMVClassC from "./components/400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC";
import PDFViewer from "./components/400_demos/10_demo_DMV_ClassC/0_features/PDFViewer/PDFVIewer";

import AboutUs from "./components/200_pages/10_pages/3_aboutUs";
import SupportCenter from "./components/200_pages/10_pages/4_supportCenter";
import Help from "./components/200_pages/10_pages/5_help";
import OnThisPageQuickView from "./components/100_layout/20_features/1_onThisPageQuickView";

const App = () => {
	const mainAppContainerRef = useRef();
	const dispatch = useDispatch();
	const location = useLocation();
	const isDarkMode_rdx = useSelector(({ user }) => user.isDarkMode_rdx);
	const isDemoView_rdx = useSelector(({ user }) => user.isDemoView_rdx);
	const sideBar_R_Main_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Main_isOpen_rdx);
	const sideBar_R_SearchBar_isActive_rdx = useSelector(({ user }) => user.sideBar_R_SearchBar_isActive_rdx);

	const [divIDs, setDivIDs] = useState([]);
	const [activeID, setActiveID] = useState("");
	// Set Dark/Light Mode
	useEffect(() => {
		document.querySelector("main").setAttribute("prefers-color-scheme", isDarkMode_rdx === "dark" ? "dark" : "light");
	}, [isDarkMode_rdx]);
	// Set Regular/Demo View
	useEffect(() => {
		if (location.pathname === "/demo") {
			dispatch(userReducerActions.setDemoView());
		} else if (isDemoView_rdx && location.pathname !== "/demo") {
			dispatch(userReducerActions.setRegularView());
		}
	}, [location, dispatch, isDemoView_rdx]);
	// List of div's with ID's
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
	}, [location]);
	// Find active ID (i.e. currently scrolled to)
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
		}, 350);
		const scrollContainer = document.querySelector("main");
		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, [location]);
	// General Event listeners -- Ctrl+m (Toggle SideBar_R_Main)

	useEffect(() => {
		const handleKeyCombination = (e) => {
			if (!sideBar_R_SearchBar_isActive_rdx && e.key === "m") {
				if (sideBar_R_Main_isOpen_rdx) {
					dispatch(userReducerActions.sideBar_R_Close_Main());
				} else {
					dispatch(userReducerActions.sideBar_R_Open_Main());
				}
			} else if (!sideBar_R_SearchBar_isActive_rdx) {
				if (e.key === "s") {
					e.preventDefault();
					dispatch(userReducerActions.sideBar_R_SearchBar_isActive(true));
				}
			}
		};
		if (location.pathname !== "/demo") {
			document.addEventListener("keydown", handleKeyCombination);
		}
		return () => {
			document.removeEventListener("keydown", handleKeyCombination);
		};
	}, [location.pathname, sideBar_R_Main_isOpen_rdx, sideBar_R_SearchBar_isActive_rdx]);

	return (
		<main id="main" role="main" ref={mainAppContainerRef}>
			{location.pathname !== "/PDFViewer" && (
				<header>
					<MainNavbar />
				</header>
			)}
			{divIDs.length > 0 ? <OnThisPageQuickView divIDs={divIDs} activeID={activeID} /> : ""}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/demos" element={<Demo_LandingPage />} />
				<Route path="/demo_dmvClassC" element={<DemoDMVClassC />} />
				<Route path="/PDFViewer" element={<PDFViewer />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/supportcenter" element={<SupportCenter />} />
				<Route path="/help" element={<Help />} />
			</Routes>
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
//     dispatch(checkAuthenticated());
// },[])
