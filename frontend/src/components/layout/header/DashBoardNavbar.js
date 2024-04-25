import React from 'react';
import { useSelector } from 'react-redux';
import NavbarMenuButton from './navbarMenuButton';
import classes from './DashBoardNavbar.module.css';

const DashBoardNavbar = () => {
    const isDashboardFullScreen = useSelector(({ user }) => user.isDashboardFullScreen)
    const handleClickScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return (
        <nav className={`${classes['outer_container_nav']} ${isDashboardFullScreen && classes.isDashboardFullScreen}`}>
            <ul className={classes.inner_container_nav}>
                <li className={classes.NavItem1}>
                    Page Controls
                </li>
                <li className={classes.NavItem3}>
                    <NavbarMenuButton />
                </li>
            </ul>
        </nav>
    );
};

export default DashBoardNavbar;