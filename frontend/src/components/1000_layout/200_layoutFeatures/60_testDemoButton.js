import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./60_testDemoButton.module.css";

const TestDemoButton = () => {
	const navigate = useNavigate();
	return (
		<button aria-label="Test Demo" className={classes.button_format} type="button" onClick={() => navigate("/demos")}>
			Demo
		</button>
	);
};

export default TestDemoButton;
