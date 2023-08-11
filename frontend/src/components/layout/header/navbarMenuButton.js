import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { userActions } from '../../../reducers/auth';
import classes from './NavbarMenuButton.module.css';

const NavbarMenuButton = () => {

    const dispatch = useDispatch();
    const OpenCloseAction = () => {
        dispatch(userActions.navBarAsGuestOpenClose());
    }

    let navbarButton = (
    <div onClick={OpenCloseAction} className={classes.hamburgerMaster}>
        <div className={classes.hamburger}></div>
        <div className={classes.hamburger}></div>
        <div className={classes.hamburger}></div>
    </div>
    );

    let exitButton = (
    <div onClick={OpenCloseAction} className={classes.exitButtonContainer}>
        <div className={classes.exitButton}>
            <svg className="svg" width="20" height="20" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
        </div>
    </div>
    );

    const { navbarModalStatus } = useSelector(state => state.user);
    const content = navbarModalStatus ? exitButton : navbarButton;

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
};

export default NavbarMenuButton;

