import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { userReducerActions } from "./a.reducers/auth_Reducers";
import MainNavbar from "./components/100_layout/10_header/1NavBar_Main";
import Footer from "./components/100_layout/30_footer/footer";
import Home from "./components/200_pages/regularPages/home";
import DemoDMVClassC from "./components/400_demos/demo_DMV_ClassC";

import AboutUs from "./components/200_pages/regularPages/aboutUs";
import SupportCenter from "./components/200_pages/regularPages/supportCenter";
import Help from "./components/200_pages/regularPages/help";
import OnThisPageQuickView from "./components/100_layout/20_body/features/OnThisPageQuickView";

const App = () => {
	const dispatch = useDispatch();
	const isDemoView = useSelector(({ user }) => user.isDemoView);
	const location = useLocation();
	const [contents, setContents] = useState([]);
	const [activePage, setActivePage] = useState("");
	const isDarkMode_rdx = useSelector(({ user }) => user.isDarkMode_rdx);

	useEffect(() => {
		document.querySelector("main").setAttribute("prefers-color-scheme", isDarkMode_rdx === "dark" ? "dark" : "light");
	}, [isDarkMode_rdx]);

	useEffect(() => {
		if (location.pathname === "/demo") {
			dispatch(userReducerActions.setDemoView());
		} else if (isDemoView && location.pathname !== "/demo") {
			dispatch(userReducerActions.setRegularView());
		}
	}, [location, dispatch, isDemoView]);
	// const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)
	// useEffect(()=>{
	//     dispatch(checkAuthenticated());
	// },[])

	useEffect(() => {
		let contentsArray = [];
		const contentsId = document.querySelectorAll("div[id]");
		Array.from(contentsId).map((element) => {
			if (isNaN(element.id)) {
				contentsArray.push(element.id);
			}
		});
		setContents(contentsArray);
	}, [location]);

	useEffect(() => {
		const handleScroll = () => {
			const pages = document.querySelectorAll("div[id]");
			let currentPage = "";
			pages.forEach((page) => {
				const rect = page.getBoundingClientRect();
				if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
					currentPage = page.id;
				}
			});
			setActivePage(currentPage);
		};
		const scrollContainer = document.querySelector("main");
		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, [location]);
	// General Event listeners -- CMD+B (Toggle SideBar_Left) CMD+SHIFT+N (Toggle SideBar_Right Notes) CMD+SHIFT+S (Toggle SideBar_Right Search)
	const handleKeyCombination = (e) => {
		if (e.ctrlKey && e.key === "m") {
			dispatch(userReducerActions.sideBar_Right_Toggle_Main_ModalVisibility());
		}
	};
	useEffect(() => {
		document.addEventListener("keydown", handleKeyCombination);
		return () => {
			document.removeEventListener("keydown", handleKeyCombination);
		};
	}, [location]);
	return (
		<main>
			<header>{!isDemoView ? <MainNavbar /> : ""}</header>
			<OnThisPageQuickView contents={contents} activePage={activePage} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/demo" element={<DemoDMVClassC />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/supportcenter" element={<SupportCenter />} />
				<Route path="/help" element={<Help />} />
			</Routes>
			<footer>{!isDemoView ? <Footer /> : ""}</footer>
		</main>
	);
};
export default App;
