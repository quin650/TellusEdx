import React from 'react';
import SearchBar from './searchBar';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {

    return (
        <div className={classes.blurredBackgroundContainer}>
            <menu className={classes.menuContainer}>
                <div className={classes.exitButtonPlaceholder}></div>

                <div className={classes.menuContentContainer}>
                    <ul className={classes.orderedList}>
                        <li>
                            <SearchBar />
                        </li>
                        <li>Platform</li>
                        <li>Explore</li>
                        <li>Theme</li>
                        <li>English</li>
                        <li>Log in</li>
                        <li>GetStartedButton</li>
                    </ul>
                </div>
            </menu>
        </div>
    );
};

export default NavbarMenu;

