import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions/auth';
import { userActions } from '../../../reducers/auth';
import { checkAuthenticated } from '../../../actions/auth';
import SearchBar from './searchBar';
import GetStartedButton from '../getStarted/button/GetStartedButton';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {
    const { isAuthenticated } = useSelector(state => state.user);
    const dispatch = useDispatch();

    let content = (<li><GetStartedButton /></li>)

    isAuthenticated 
    ? content = null 
    : content = (<li><GetStartedButton /></li>)

    const LogOut = () => {
        dispatch(logout());
        dispatch(checkAuthenticated());
        dispatch(userActions.navBarAsGuestOpenClose());
    }

    const LogIn = () => {
        dispatch(userActions.registerModalOpen());
        dispatch(userActions.logIn_True_CreateAccount_FalseToggle());
    }

    let option = (<li><a onClick={LogIn}>Log in</a></li>)

    isAuthenticated
    ? option = (<li><a onClick={LogOut}>Log out</a></li>)
    : option = (<li><a onClick={LogIn}>Log in</a></li>)


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

                        {option}

                        {content}
                    </ul>
                </div>
            </menu>
        </div>
    );
};

export default NavbarMenu;

