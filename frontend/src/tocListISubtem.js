import React, { Fragment, useEffect, useState } from "react";
import classes from "./App.module.css";

const TocListSubItem = ({ idx, level, text, isVisible }) => {
	// console.log("idx: ", idx);
	// console.log("level: ", level);
	// console.log("text: ", text);
	// console.log("isVisible: ", isVisible);

	return (
		<ul key={idx} className={`${classes["subLineOuterContainer"]} ${isVisible ? classes.isVisible : ""}`}>
			<li className={classes.subLineInnerContainer}>
				<a href={`#${text}`} className={classes.subLine}>
					<div className={classes.subProductListItem}>
						<span className={classes.subProductListItemLabel}>{text}</span>
					</div>
				</a>
			</li>
		</ul>
	);
};

export default TocListSubItem;
