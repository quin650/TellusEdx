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
                        <li><a>Platform</a></li>                                   {/* 320rem */}
                        <li><a>Explore</a></li>

                        <div className={classes.break}></div>

                        <li><a>Theme</a></li>
                        <li><a>English</a></li>

                        <div className={classes.break}></div>

                        <li><a>Log in</a></li>

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

