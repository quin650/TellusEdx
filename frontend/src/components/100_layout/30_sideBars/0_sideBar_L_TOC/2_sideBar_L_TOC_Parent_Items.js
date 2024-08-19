import React, { useEffect, useState } from "react";
import SideBar_L_TOC_Children_Items from "./3_sideBar_L_TOC_Children_Items";
import classes from "./4_sideBar_L_TOC.module.css";

const SideBar_L_TOC_Parent_Items = ({ idx, text, id, currentPageNum, isActiveID, activeID, children }) => {
	const [isVisible, setIsVisible] = useState(true);
	const toggleMenuOpen = () => {
		setIsVisible(!isVisible);
	};
	//! Every time the page changes, this resets the menu so that if it was open previously, is closed in new page
	useEffect(() => {
		setIsVisible(true);
	}, [currentPageNum]);

	return (
		<li key={idx} className={classes.contentContainer}>
			<div className={classes.parentLabelOuterContainer} aria-expanded={isVisible}>
				<a href={id} className={`${classes["parentLabel"]} ${isActiveID ? classes.isActive : ""}`}>
					<span>{text}</span>
				</a>
				{children.length > 0 && (
					<span onClick={toggleMenuOpen} className={classes.menuArrow}>
						{isVisible ? (
							<svg aria-hidden="true" focusable="false" className={classes.octicon2} viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
								<path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
							</svg>
						) : (
							<svg aria-hidden="true" focusable="false" className={classes.octicon} viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
								<path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
							</svg>
						)}
					</span>
				)}
			</div>
			{children.map((child) => (
				<SideBar_L_TOC_Children_Items
					key={child.idx}
					isVisible={isVisible}
					idx={child.idx}
					text={child.text}
					id={`#${child.id}`}
					isActiveID={activeID === child.id}
					activeID={activeID}
				/>
			))}
		</li>
	);
};

export default SideBar_L_TOC_Parent_Items;
