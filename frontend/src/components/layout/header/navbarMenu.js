import React from 'react';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {
    return (
        <div className={classes.hamburgerMaster}>
            <div className={classes.hamburger}></div>
            <div className={classes.hamburger}></div>
            <div className={classes.hamburger}></div>
        </div>
    );
};

export default NavbarMenu;

