import React from "react";
import classes from "./demo_DMV_ClassC.module.css";

const TOC_Child_Item = ({ isVisible, idx, text, id, isActiveID }) => {
	return (
		<ul key={idx} className={`${classes["childLabelOuterContainer"]} ${isVisible ? classes.isVisible : ""}`}>
			<li className={`${classes["childLabelInnerContainer"]} ${isActiveID ? classes.isActive : ""}`}>
				<a href={id} className={classes.childLabel}>
					<span>{text}</span>
				</a>
			</li>
		</ul>
	);
};

export default TOC_Child_Item;
