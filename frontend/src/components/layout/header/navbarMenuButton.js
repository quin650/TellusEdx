import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userReducerActions } from '../../../a.reducers/auth_Reducers';
import classes from './NavbarMenuButton.module.css';

const NavbarMenuButton = () => {
    console.log('NavbarMenuButton')
    const dispatch = useDispatch();

    const OpenAction = () => {
        console.log('NavbarMenuButton.OpenAction')
        dispatch(userReducerActions.navBarMenuOpen());
    }
    const CloseAction = () => {
        console.log('NavbarMenuButton.CloseAction')
        dispatch(userReducerActions.navBarMenuClose());
    }

    let navbarButton = (
    <div onClick={OpenAction} className={classes.hamburgerMaster}>
        <div className={classes.hamburger}></div>
        <div className={classes.hamburger}></div>
        <div className={classes.hamburger}></div>
    </div>
    );

    let exitButton = (
    <div onClick={CloseAction} className={classes.exitButtonContainer}>
        <div className={classes.exitButton}>
            <svg className="svg" width="20" height="20" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
        </div>
    </div>
    );

    const navbarMenuStatus = useSelector( ({ user }) => user.navbarMenuStatus)
    const content = navbarMenuStatus ? exitButton : navbarButton;

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
};

export default NavbarMenuButton;