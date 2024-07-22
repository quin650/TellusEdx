import React from 'react';
import NavbarMenuButton from '../../../10layout/10header/features/navbarMenuButton';
import classes from './demoNavbar.module.css';

const DemoNavbar =  React.memo((props) =>{                                                  //react.memo --use when: Stable props: When the props passed down to the component change infrequently. +  preventing unnecessary renders provides a noticeable performance improvement
    const handleClickScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    const toggle = () =>{
        props.toggleFullScreen();
    }

    return (
        <nav className={`${classes['outer_container_nav']} ${props.isFullScreen && classes.isFullScreen}`}>
            <ul className={classes.inner_container_nav}>
                <li className={classes.windowControlsContainer}>
                    <button className={classes.close}></button>
                    <button className={classes.minimize}></button>
                    <button onClick={toggle} className={`${classes['fullScreenToggle']} ${props.isFullScreen && classes.isFullScreen}`}></button>
                </li>
                <li className={classes.NavBarMenuItem}>
                    <NavbarMenuButton />
                </li>
            </ul>
        </nav>
    );
});

export default DemoNavbar;