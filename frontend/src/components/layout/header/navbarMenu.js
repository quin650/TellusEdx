import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './searchBar';
import GetStartedButton from '../getStarted/button/GetStartedButton';
// import { checkAuthenticated } from '../../../a.actions/auth_Actions';
import { logout } from '../../../a.actions/auth_Actions';
import { userReducerActions } from '../../../a.reducers/auth_Reducers';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {
    const { isAuthenticated } = useSelector(state => state.user);
    const dispatch = useDispatch();

    let content = (<li><GetStartedButton /></li>)

    isAuthenticated 
    ? content = null 
    : content = (<li><GetStartedButton /></li>)

    const LogOutHandler = () => {
        dispatch(logout());
        dispatch(userReducerActions.navBarMenuClose());
    }

    const LogInHandler = () => {
        dispatch(userReducerActions.navBarMenuClose());
        dispatch(userReducerActions.getStartedModalOpen());
        dispatch(userReducerActions.getStartedModalLogIn());
    }

    let option = (<li><a onClick={LogInHandler}>Log in</a></li>)

    isAuthenticated
    ? option = (<li><a onClick={LogOutHandler}>Log out</a></li>)
    : option = (<li><a onClick={LogInHandler}>Log in</a></li>)

    const exitAction = () => {
        dispatch(userReducerActions.getStartedModalClose());
        dispatch(userReducerActions.navBarMenuClose());
    };

    return (
        <div className={classes.blurredBackgroundContainer}>
            <menu className={classes.menuContainer}>                        {/* 420px */}
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

                        {option}

                        {content}
                    </ul>
                </div>
            </menu>
        </div>
    );
};

export default NavbarMenu;

