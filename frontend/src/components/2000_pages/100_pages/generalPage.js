import React from "react";
import classes from "./generalPage.module.css";

const GeneralPage = ({ text, DivID }) => {
	return (
		<div className={classes.outer_container} id={DivID}>
			<div className={classes.inner_container}>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default GeneralPage;
