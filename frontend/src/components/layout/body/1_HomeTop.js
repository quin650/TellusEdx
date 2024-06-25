import React from "react";
import GetStartedButton from "../getStarted/button/GetStartedButton";
import BackgroundImage from '../../../../static/images/Background_Limited.png';
import logo from '/Users/quin/Desktop/TellusEdShield/TellusEdx/frontend/static/images/1Logo.png';
import Logo from '../../../../static/images/1Logo.png';
import classes from './1_HomeTop.module.css';

const HomeTop = () => {

    return (
        <div>
            <div className={classes.outer_container_top}>
                <div className={classes.inner_container_top}>
                    <img src={BackgroundImage} alt='subjects' /> 
                    <blockquote className={classes.caption} >
                        <h1> LEARNING NEVER EXHAUSTS THE MIND</h1>
                        <h3> TellusEd is adding a Montessori-flair to online-learning. Learn your way.</h3>
                    </blockquote>
                </div>
                <div className={classes.splash_page_whole}>
                    <div className={classes.splash_page_top}>
                        <div className={classes.top_left}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                        <div className={classes.top_mid}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                        <div className={classes.top_right}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                    </div>
                    <div className={classes.splash_page_mid}>
                        <div className={classes.mid_left}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                        <div className={classes.mid_mid}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                        <div className={classes.mid_right}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                    </div>
                    <div className={classes.splash_page_bot}>
                        <div className={classes.bot_left}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                        <div className={classes.bot_mid}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                        <div className={classes.bot_right}>
                            <img src={Logo} alt='Logo' className={classes.Logo}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTop;