import React from "react";
import classes from "./generalPage.module.css";

const GeneralPage = ({ text }) => {
	return (
		<div className={classes.outer_container}>
			<div className={classes.inner_container}>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default GeneralPage;
