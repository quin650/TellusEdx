import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../reducers/auth';
import classes from './NavbarMenuButton.module.css';

const NavbarMenuButton = () => {

    const dispatch = useDispatch();
    const openAction = () => {
        dispatch(userActions.navBarAsGuestOpen());
    }

    return (
        <div onClick={openAction} className={classes.hamburgerMaster}>
            <div className={classes.hamburger}></div>
            <div className={classes.hamburger}></div>
            <div className={classes.hamburger}></div>
        </div>
    );
};

export default NavbarMenuButton;

