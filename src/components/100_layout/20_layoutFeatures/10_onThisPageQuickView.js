import React, { useState, useEffect } from "react";
import OnThisPageQuickViewChild from "./10_onThisPageQuickViewChild";
import classes from "./10_onThisPageQuickView.modules.css";

const OnThisPageQuickView = ({ divIDs, activeID }) => {
	const [altOptionKeyPressed, setAltOptionKeyPressed] = useState(false);
	useEffect(() => {
		const altOptionPressedKeyDown = (event) => {
			if (event.altKey || event.key === "Alt" || event.key === "Option") {
				setAltOptionKeyPressed(true);
			}
		};
		const altOptionPressedKeyUp = (event) => {
			if (!event.altKey || event.key === "Alt" || event.key === "Option") {
				setAltOptionKeyPressed(false);
			}
		};
		document.addEventListener("keydown", altOptionPressedKeyDown);
		document.addEventListener("keyup", altOptionPressedKeyUp);
		return () => {
			document.removeEventListener("keydown", altOptionPressedKeyDown);
			document.removeEventListener("keyup", altOptionPressedKeyUp);
		};
	}, [altOptionKeyPressed]);

	return (
		<div className={`${classes["tocContainer"]} ${altOptionKeyPressed && classes.altOptionKeyPressed}`}>
			{divIDs.map((content, index) => (
				<OnThisPageQuickViewChild key={index} id={index} content={content} status={activeID === content} />
			))}
		</div>
	);
};

export default OnThisPageQuickView;
