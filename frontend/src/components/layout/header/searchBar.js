import React from 'react';
import classes from './searchBar.module.css';

const SearchBar = () => {

    return (
        <div className={classes.search}>
            <input 
                id="search" 
                type="text" 
                name="search" 
                placeholder="Search TellusEd">
            </input>
        </div>
    );
};

export default SearchBar;

