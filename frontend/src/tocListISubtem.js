import React from "react";
import classes from "./App.module.css";

const TocListSubItem = ({ idx, text, isVisible, id }) => {
	return (
		<ul key={idx} className={`${classes["childLabelOuterContainer"]} ${isVisible ? classes.isVisible : ""}`}>
			<li className={classes.childLabelInnerContainer}>
				<a href={id} className={classes.childLabel}>
					<span>{text}</span>
				</a>
			</li>
		</ul>
	);
};

export default TocListSubItem;
