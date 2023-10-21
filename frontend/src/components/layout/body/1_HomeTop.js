import React from "react";
import { useSelector } from "react-redux";
import NavbarMenu from "../header/navbarMenu";
import GetStartedButton from "../getStarted/button/GetStartedButton";
import GetStartedModal from "../getStarted/modal/GetStartedModal";
import BackgroundImage from '../../../../static/images/Background_Limited.png';
import classes from './1_HomeTop.module.css';

const HomeTop = () => {
    console.log('1_HomeTop')
    const navbarMenuStatus = useSelector(({ user }) => user.navbarMenuStatus);
    const getStartedModalStatus = useSelector(({ user }) => user.getStartedModalStatus);

    return (
        <div className={classes.outer_container_top}>
            {navbarMenuStatus && <NavbarMenu />}
            {getStartedModalStatus && <GetStartedModal />}
            <div className={classes.inner_container_top} >
                <img src={BackgroundImage} alt='subjects' /> 
                <blockquote className={classes.caption} >
                    <h1> LEARNING NEVER EXHAUSTS THE MIND</h1>
                    <h3> TellusEd is adding a Montessori-flair to online-learning. Learn your way.</h3>
                </blockquote>
                <div className={classes.buttonSection}>
                    <GetStartedButton />
                </div>
            </div>
        </div>
    );
};

export default HomeTop;