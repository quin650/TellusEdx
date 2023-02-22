import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import NavbarMenu from './navbarMenu';
import SearchBar from './searchBar';
import { logout } from '../../../actions/auth';

import classes from './mainNavbar.module.css';
import Logo from '../../../../static/images/1Logo.png';
import defaultPNG from '../../../../static/images/1Avatar.png';

const MainNavbar = () => {
    const { isAuthenticated } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleClickScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };
    
    const LogoutHandler = () => {
        dispatch(logout());
    }

    const authLinks = (
        <Fragment>
                <a onClick={LogoutHandler} href='#!' className={classes.sign_in_out}>Log-Out</a>
                <div className={classes.avatarDiv}><img src={defaultPNG} className={classes.avatar} alt='Avatar'></img></div>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
                <Link to='/login' onClick={handleClickScroll} className={classes.sign_in_out}>Sign-In</Link>
                <Link to='/register'onClick={handleClickScroll} className={classes.sign_up}>Sign-Up</Link>
                <NavbarMenu />
        </Fragment>
    )

    return (
        <nav className={classes.nav}>
            <div className={classes.nav_container}>
                <Link to="/home" onClick={handleClickScroll} className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                <Link to='/software' onClick={handleClickScroll}className={classes.software}>Software</Link>
                <Link to='/explore' onClick={handleClickScroll} className={classes.explore}>Explore</Link>
                <SearchBar />
                { isAuthenticated ? authLinks : guestLinks }
            </div>
        </nav>
    );
};

export default MainNavbar;