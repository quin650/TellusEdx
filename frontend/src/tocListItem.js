import React, { useState } from "react";
import TocListSubItem from "./tocListISubtem";
import classes from "./App.module.css";

const TocListItem = ({ idx, text, children }) => {
	const [isVisible, setIsVisible] = useState(true);

	const toggleMenuOpen = () => {
		setIsVisible(!isVisible);
		console.log("toggleMenuOpen clicked");
	};

	// console.log("idx --> index counter of h2, h3: ", idx);
	// console.log("level --> h2 or h3: ", level);
	// console.log("text -->header h2/h3 text: ", text);
	// console.log("children h2 of the h3 parent: ", children);

	return (
		<li key={idx} className={classes.productListItemContainer}>
			<button className={classes.productListItemButton} aria-expanded={isVisible}>
				<div className={classes.productListItem}>
					<div className={classes.productListItemLabel}>
						<a href={`#${text}`} className={classes.a_link}>
							<span>{text}</span>
						</a>
						<span className={classes.menuArrow} onClick={toggleMenuOpen}>
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
			{children.map((child) => (
				<TocListSubItem key={child.idx} idx={child.idx} level={child.level} text={child.text} isVisible={isVisible} />
			))}
		</li>
	);
};

export default TocListItem;
