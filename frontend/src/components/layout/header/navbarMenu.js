import React from 'react';
import { useDispatch } from "react-redux";
import { userActions } from '../../../reducers/auth';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {

    const dispatch = useDispatch();
    const exitAction = () => {
        dispatch(userActions.navBarAsGuestOpenClose());
    }

    return (
        <div className={classes.blurredBackgroundContainer}>
            <menu className={classes.menuContainer}>
                <div className={classes.exitButtonPlaceholder}></div>
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

