import React from "react";
import classes from "./searchBar.module.css";

const searchButton = (
	<svg className={classes.searchIconSVG} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10.1458 16.7292C13.9198 16.7292 16.9792 13.6698 16.9792 9.89583C16.9792 6.12189 13.9198 3.0625 10.1458 3.0625C6.37189 3.0625 3.3125 6.12189 3.3125 9.89583C3.3125 13.6698 6.37189 16.7292 10.1458 16.7292Z"
			stroke="#9E9E9E"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path d="M18.6875 18.4383L14.9719 14.7227" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
const SearchBar = () => {
	return (
		<div className={classes.searchInputContainer}>
			{searchButton}
			<input id="search" type="text" placeholder="Explore" name="search"></input>
		</div>
	);
};

export default SearchBar;
