import React from 'react';
import classes from './searchBar.module.css';

const SearchBar = () => {
    console.log('SearchBar')
    return (
        <div className={classes.searchInputContainer}>
            <input 
                id="search" 
                type="text" 
                placeholder="Search TellusEd"
                name="search" 
                className={classes.searchInput}
                >
            </input>
        </div>
    );
};

export default SearchBar;

