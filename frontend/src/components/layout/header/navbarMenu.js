import React from 'react';
import { useDispatch } from "react-redux";
import { userActions } from '../../../reducers/auth';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {

    const dispatch = useDispatch();
    const exitAction = () => {
        dispatch(userActions.navBarAsGuestClose());
    }

    return (
        <div className={classes.blurredBackgroundContainer}>
            <menu className={classes.menuContainer}>
                <div onClick={exitAction} className={classes.exitButtonContainer}>
                    <div className={classes.exitButton}>
                        <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
                    </div>
                </div>
                <div className={classes.menuContentContainer}>
                    <ol className={classes.orderedList}>
                        <li>
                            searchBar
                        </li>
                        <li>Platform</li>
                        <li>Explore</li>
                        <li>Theme</li>
                        <li>English</li>
                        <li>Log in</li>
                        <li>GetStartedButton</li>
                    </ol>
                </div>
            </menu>
        </div>
    );
};

export default NavbarMenu;

