import React, { useState, useRef } from "react";
import classes from "./10_onThisPageQuickView.modules.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const OnThisPageQuickViewChild = (props) => {
	const { id, content, status, registerTippy } = props;
	const handleClickScroll = () => {
		document.getElementById(content).scrollIntoView({ behavior: "smooth" });
	};

	//! Tippy Hover Tooltip customized to each button
	const useHoverTooltip = (defaultButtonText, textWithHotkey, delay = 1000) => {
		const [button_text, setButton_text] = useState(defaultButtonText);
		const hoverTimer = useRef(null);
		const handleMouseEnter = () => {
			hoverTimer.current = setTimeout(() => {
				setButton_text(textWithHotkey);
			}, delay);
		};
		const handleMouseLeave = () => {
			clearTimeout(hoverTimer);
			setButton_text(defaultButtonText);
		};
		return { button_text, handleMouseEnter, handleMouseLeave };
	};

	const {
		button_text: onThisPageQuickViewChildText,
		handleMouseEnter: onThisPageQuickViewChildText_handleMouseEnter,
		handleMouseLeave: onThisPageQuickViewChildText_handleMouseLeave,
	} = useHoverTooltip(content, content + " (" + String(id + 1) + ")");

	return (
		<Tippy
			content={<span style={{ whiteSpace: "nowrap" }}>{onThisPageQuickViewChildText}</span>}
			placement="right"
			theme="custom"
			appendTo="parent"
			trigger="mouseenter focus"
			onCreate={({ reference, popper, ...instance }) => {
				registerTippy(instance);
			}}
		>
			<div
				id={id}
				onClick={handleClickScroll}
				className={`${classes["tocSectionContainer"]} ${status && classes.isCurrent}`}
				onMouseEnter={onThisPageQuickViewChildText_handleMouseEnter}
				onMouseLeave={onThisPageQuickViewChildText_handleMouseLeave}
			></div>
		</Tippy>
	);
};

export default OnThisPageQuickViewChild;
