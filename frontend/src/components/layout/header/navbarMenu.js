import React from 'react';
import SearchBar from './searchBar';
import GetStartedButton from '../getStarted/button/GetStartedButton';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {

    return (
        <div className={classes.blurredBackgroundContainer}>
            <menu className={classes.menuContainer}>                        {/* 420px */}
                <div className={classes.exitButtonPlaceholder}></div>
                                                    
                <div className={classes.menuContentContainer}>              {/* 350px left and right 30px margin  */}
                    <ul className={classes.orderedList}>
                        <div className={classes.searchContainer}>            {/* 350px */}
                            <SearchBar />                                   {/* 320rem */}
                        </div>
                        <li>Platform</li>                                   {/* 320rem */}
                        <li>Explore</li>
                        <div className={classes.break}></div>
                        <li>Theme</li>
                        <li>English</li>
                        <div className={classes.break}></div>
                        <li>Log in</li>
                        <li>
                            <GetStartedButton />
                        </li>
                    </ul>
                </div>
            </menu>
        </div>
    );
};

export default NavbarMenu;

