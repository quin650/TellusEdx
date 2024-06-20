import React from 'react';
import classes from './searchBar.module.css';

const SearchBar = () => {
    return (
        <div className={classes.searchInputContainer}>
            <input 
                id="search" 
                type="text" 
                placeholder="Explore"
                name="search" 
                className={classes.searchInput}
                >
            </input>
        </div>
    );
};

export default SearchBar;

