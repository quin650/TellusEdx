import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarMenuButton from './navbarMenuButton';
import GetStartedButton from '../../12modals/GetStartedButton';
import Logo from '../../../../static/images/Logo_arrows.png';
// import defaultPNG from '../../../../static/images/1Avatar.png';
import classes from './mainNavbar.module.css';

const MainNavbar = () => {
    const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)
    const handleClickScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    const authUser = (
        <Fragment>
                <li className={classes.NavItem1}>
                    <Link to="/home" onClick={handleClickScroll}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                </li>
                <li className={classes.NavItem3}>
                    <NavbarMenuButton />
                </li>
        </Fragment>
    )
    const authGuest = (
        <Fragment>
                <li className={classes.NavItem1}>
                    <Link to="/home" onClick={handleClickScroll}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
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
        <nav className={classes.inner_container_nav}>
            {content}
        </nav>
    );
};

export default MainNavbar;