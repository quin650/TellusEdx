import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import HomeTop from "./1_homeTop";
import HomeMiddle from "./2_homeMiddle";
import Dashboard from "../../../6000_authenticated/dashboard/dashboard";
import { Helmet } from "react-helmet-async";

const Home = ({ isToggleChange }) => {
	// console.log('Home')
	const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
	const homepage = (
		<Fragment>
			<Helmet>
				<title>TellusLearn | DMV Practice & Guided Learning</title>
				<meta name="description" content="Interactive DMV practice tests, guided study paths, and learning tools to help you pass your California permit exam." />
				<link rel="canonical" href="https://telluslearn.com/" />
			</Helmet>
			<HomeTop />
			<HomeMiddle isToggleChange={isToggleChange} />
		</Fragment>
	);
	const dashboard = (
		<Fragment>
			<Helmet>
				<title>Dashboard | TellusLearn</title>
				<meta name="description" content="Your TellusLearn dashboard — contribute to different open education resources." />
			</Helmet>
			<Dashboard />
		</Fragment>
	);
	return <Fragment>{!isAuthenticated ? homepage : dashboard}</Fragment>;
};

export default Home;
