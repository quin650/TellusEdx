import React from "react";
import classes from "./4_sideBar_L_TOC.module.css";

const SideBar_L_TOC_SubSection = ({ isVisible, idx, text, id, isActiveID, activeID }) => {
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

export default SideBar_L_TOC_SubSection;
