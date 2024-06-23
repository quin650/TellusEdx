import React, {Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userReducerActions } from '../../../a.reducers/auth_Reducers';
import GetStartedModal from '../getStarted/modal/GetStartedModal';
import NavbarMenu from './navbarMenu';
import classes from './NavbarMenuButton.module.css';

const NavbarMenuButton = () => {
    const dispatch = useDispatch();
    const {navbarMenuStatus, getStartedModalStatus} = useSelector(({ user }) => user);

    const OpenAction = () => {
        dispatch(userReducerActions.navBarMenuOpen());
    }
    const CloseAction = () => {
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
    <div className={classes.exitButtonContainer}>
        <div onClick={CloseAction} className={classes.exitButton}>
            <svg className={classes.svgExit} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" 
                stroke="none">
                </path>
            </svg>
        </div>
    </div>
    );

    const content = navbarMenuStatus ? exitButton : navbarButton;

    return (
        <Fragment>
            {navbarMenuStatus && <NavbarMenu />}
            {getStartedModalStatus && <GetStartedModal />}
            {content}
        </Fragment>
    );
};

export default NavbarMenuButton;