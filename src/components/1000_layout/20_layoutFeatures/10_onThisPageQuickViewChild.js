import React from "react";
import classes from "./10_onThisPageQuickView.modules.css";

const OnThisPageQuickViewChild = (props) => {
	const { id, content, status } = props;
	const handleClickScroll = () => {
		document.getElementById(content).scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div id={id} onClick={handleClickScroll} className={`${classes["tocSectionContainer"]} ${status && classes.isCurrent}`}>
			<div className={classes.theTextContainer}>
				<p className={classes.theText}>{content}</p>
			</div>
		</div>
	);
};

export default OnThisPageQuickViewChild;
