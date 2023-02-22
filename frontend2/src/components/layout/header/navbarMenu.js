import React from 'react';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {
    return (
        <menu className={classes.hamburgerMaster}>
            <div className={classes.hamburger}></div>
            <div className={classes.hamburger}></div>
            <div className={classes.hamburger}></div>
        </menu>
    );
};

export default NavbarMenu;

