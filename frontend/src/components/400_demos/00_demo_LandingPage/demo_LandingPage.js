import React from "react";
import DemoNavbar from "../../100_layout/10_header/2_navBar_Demo";
import classes from "./demo_LandingPage.module.css";

const Demo_LandingPage = () => {
	return (
		<main className={classes.mainContainer}>
			<DemoNavbar />
			<div className={classes.bodyContainer}>
				<h1>Demo_LandingPage</h1>
			</div>
		</main>
	);
};

export default Demo_LandingPage;
