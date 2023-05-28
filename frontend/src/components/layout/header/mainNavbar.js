import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarMenu from './navbarMenu';
import SearchBar from './searchBar';
import GetStartedButton from './headerUI/GetStartedButton';

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
                <Link to="/home" onClick={handleClickScroll} className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                <SearchBar />
                <div className={classes.avatarDiv}><img src={defaultPNG} className={classes.avatar} alt='Avatar'></img></div>
        </Fragment>
    )

    const authGuest = (
        <Fragment>
                <div className={classes.NavItem1}>
                    <Link to="/home" onClick={handleClickScroll} className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                </div>
                <div className={classes.NavItem2}>
                    <GetStartedButton />
                </div>
                <div className={classes.NavItem3}>
                    <NavbarMenu />
                </div>
        </Fragment>
    )

    let content = {authGuest} 
    !isAuthenticated ? content = authGuest : content = authUser

    return (
        <nav className={classes.nav}>
            <div className={classes.nav_container}>
                {content}
            </div>
        </nav>
    );
};

export default MainNavbar;