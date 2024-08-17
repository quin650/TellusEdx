import React, { useState, useEffect } from "react";
import OnThisPageQuickViewChild from "./1_onThisPageQuickViewChild";
import classes from "./1_onThisPageQuickView.modules.css";

const OnThisPageQuickView = ({ contents, activePage }) => {
	// Event Listeners
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

		// Clean up the event listeners on component unmount
		return () => {
			document.removeEventListener("keydown", altOptionPressedKeyDown);
			document.removeEventListener("keyup", altOptionPressedKeyUp);
		};
	}, []);

	const [altOptionKeyPressed, setAltOptionKeyPressed] = useState(false);

	return (
		<div className={`${classes["tocContainer"]} ${altOptionKeyPressed && classes.altOptionKeyPressed}`}>
			{contents.map((content, index) => (
				<OnThisPageQuickViewChild key={index} id={index} text={content} goto={content} status={activePage === content} />
			))}
		</div>
	);
};

export default OnThisPageQuickView;
