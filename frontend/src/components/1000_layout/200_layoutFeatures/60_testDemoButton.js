import React from "react";
import { Link } from "react-router-dom";
import classes from "./60_testDemoButton.module.css";

const TestDemoButton = () => {
	return (
		<Link to="/demos" className={classes.button_format}>
			Demo
		</Link>
	);
};

export default TestDemoButton;
