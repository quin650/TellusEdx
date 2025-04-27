import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import HomeTop from "./1_homeTop";
import HomeMiddle from "./2_homeMiddle";

import Dashboard from "../../../6000_authenticated/dashboard/dashboard";

const Home = ({ isToggleChange }) => {
	// console.log('Home')
	const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
	const homepage = (
		<Fragment>
			<HomeTop />
			<HomeMiddle isToggleChange={isToggleChange} />
		</Fragment>
	);
	const dashboard = (
		<Fragment>
			<Dashboard />
		</Fragment>
	);
	return <Fragment>{!isAuthenticated ? homepage : dashboard}</Fragment>;
};

export default Home;
