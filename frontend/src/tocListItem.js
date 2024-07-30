import React, { Fragment, useEffect, useState } from "react";
import TocListSubItem from "./tocListISubtem";
import classes from "./App.module.css";

const TocListItem = ({ idx, level, text, children }) => {
	const [isVisible, setIsVisible] = useState(true);

	const toggleMenuOpen = () => {
		setIsVisible(!isVisible);
		console.log("toggleMenuOpen clicked");
	};

	console.log("idx?-----: ", idx);
	console.log("level?-----: ", level);
	console.log("text?-----: ", text);
	console.log("children?-----: ", children);

	return (
		<li key={idx} className={classes.productListItemContainer}>
			<button className={classes.productListItemButton} aria-expanded={isVisible} onClick={toggleMenuOpen}>
				<div className={classes.productListItem}>
					<div className={classes.productListItemLabel}>
						<span className={classes.label}>
							<a href={`#${text}`} className={classes.a_link}>
								<span>
									{idx}
									{level}
									{text}
								</span>
							</a>
						</span>
						<span className={classes.menuArrow}>
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
					</div>
				</div>
			</button>
			)
			{children.map((child) => (
				<TocListSubItem key={idx} idx={child.idx} level={child.level} text={child.text} isVisible={isVisible} />
			))}
		</li>
	);
};

export default TocListItem;
