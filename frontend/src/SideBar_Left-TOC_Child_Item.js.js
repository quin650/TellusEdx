import React from "react";
import classes from "./App.module.css";

const TOC_Child_Item = ({ idx, text, isVisible, id, handleTOCItemClick, isActive }) => {
	return (
		<ul key={idx} className={`${classes["childLabelOuterContainer"]} ${isVisible ? classes.isVisible : ""}`}>
			<li className={`${classes["childLabelInnerContainer"]} ${isActive ? classes.isActive : ""}`}>
				<a href={id} onClick={(e) => handleTOCItemClick(id)} className={classes.childLabel}>
					<span>{text}</span>
				</a>
			</li>
		</ul>
	);
};

export default TOC_Child_Item;
