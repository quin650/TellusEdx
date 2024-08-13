import React, { useEffect, useState } from "react";
import TOC_Child_Item from "./SideBar_Left-TOC_Child_Item.js.js";
import classes from "./App.module.css";

const TOC_Parent_Item = ({ idx, text, children, id, pageNum, handleTOCItemClick, isActive }) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleMenuOpen = () => {
		setIsVisible(!isVisible);
	};
	//! Every time the page changes, this resets the menu so that if it was open previously, is closed in new page
	useEffect(() => {
		setIsVisible(false);
	}, [pageNum]);

	return (
		<li key={idx} className={classes.contentContainer}>
			<div className={classes.parentLabelOuterContainer} aria-expanded={isVisible}>
				<a href={id} onClick={(e) => handleTOCItemClick(id)} className={`${classes["parentLabel"]} ${isActive ? classes.isActive : ""}`}>
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
				<TOC_Child_Item
					key={child.idx}
					idx={child.idx}
					level={child.level}
					text={child.text}
					isVisible={isVisible}
					id={`#${child.id}`}
					handleTOCItemClick={handleTOCItemClick}
					isActive={isActive}
				/>
			))}
		</li>
	);
};

export default TOC_Parent_Item;
