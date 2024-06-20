import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './searchBar';
import GetStartedButton from '../getStarted/button/GetStartedButton';
import { logout_APIAction } from '../../../a.actions/auth_Actions';
import { userReducerActions } from '../../../a.reducers/auth_Reducers';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {
    const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
    const dispatch = useDispatch();

    let content = (<li><GetStartedButton /></li>)

    isAuthenticated 
    ? content = null 
    : content = (<li><GetStartedButton /></li>)

    const LogInHandler = () => {
        dispatch(userReducerActions.getStartedModalLogIn());
    }
    const LogOutHandler = () => {
        dispatch(logout_APIAction());
        dispatch(userReducerActions.navBarMenuClose());
    }

    let option = (<li><a onClick={LogInHandler}>Log in</a></li>)

    isAuthenticated
    ? option = (<li><a onClick={LogOutHandler}>Log out</a></li>)
    : option = (<li><a onClick={LogInHandler}>Log in</a></li>)

    return (
        <div className={classes.blurredBackgroundContainer}>




            <menu className={classes.menuContainer}>                  
                <div className={classes.menuContentContainer}>            
                    <ul className={classes.orderedList}>
                        <div className={classes.searchContainer}>           
                            <SearchBar />                                
                        </div>
                        <li><a>About Us</a></li>     
                        <li><a>Support Center</a></li>          
                        <li><a>Help</a></li>
                        <div className={classes.break}></div>
                        <li><a>Language</a></li>
                        <li><a>Dark Mode</a></li>
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

