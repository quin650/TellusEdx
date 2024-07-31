import React from "react";
import classes from "./App.module.css";

const TocListSubItem = ({ idx, text, isVisible }) => {
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
