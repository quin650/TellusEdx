import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarMenuButton from './navbarMenuButton';
import SearchBar from './searchBar';
import GetStartedButton from '../getStarted/button/GetStartedButton';
import classes from './mainNavbar.module.css';
import Logo from '../../../../static/images/Logo_arrows.png';
import defaultPNG from '../../../../static/images/1Avatar.png';

const MainNavbar = () => {
    const { isAuthenticated } = useSelector(state => state.user);
    const handleClickScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    const authUser = (
        <Fragment>
                <li className={classes.NavItem1}>
                    <Link to="/home" onClick={handleClickScroll} className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                </li>

                <li className={classes.NavItem3}>
                    <NavbarMenuButton />
                </li>
        </Fragment>
    )

    const authGuest = (
        <Fragment>
                <li className={classes.NavItem1}>
                    <Link to="/home" onClick={handleClickScroll} className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                </li>
                <li className={classes.NavItem2}>
                    <GetStartedButton />
                </li>
                <li className={classes.NavItem3}>
                    <NavbarMenuButton />
                </li>
        </Fragment>
    )

    let content = {authGuest} 
    !isAuthenticated ? content = authGuest : content = authUser

    return (
        
        <nav className={classes.outer_container_nav}>
            <ul className={classes.inner_container_nav}>
                {content}
            </ul>
        </nav>
    );
};

export default MainNavbar;