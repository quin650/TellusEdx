import React from "react";
import GetStartedButton from "../getStarted/button/GetStartedButton";
import BackgroundImage from '../../../../static/images/Background_Limited.png';
import logo from '/Users/quin/Desktop/TellusEdShield/TellusEdx/frontend/static/images/1Logo.png';
import Logo from '../../../../static/images/1Logo.png';
import classes from './1_HomeTop.module.css';

const HomeTop = () => {

    return (                                                                    
        <div className={classes.outer_container_top}>                    
            <div className={classes.inner_container_top}>     
                <img className={classes.inner_container_img} src={BackgroundImage} alt='subjects' />         
                <blockquote className={classes.caption} >          
                    <h1> LEARNING NEVER EXHAUSTS THE MIND</h1>  
                    <h3> TellusEd is adding a Montessori-flair to online-learning. Learn your way.</h3>
                </blockquote>              
                <div className={classes.one}>                     
                    <img src={Logo} alt='Logo' className={classes.Logo1}></img>    
                </div>
                <div className={classes.two}>
                    <img src={Logo} alt='Logo' className={classes.Logo2}></img>
                </div>
                <div className={classes.three}>
                    <img src={Logo} alt='Logo' className={classes.Logo3}></img>
                </div>
                <div className={classes.four}>
                    <img src={Logo} alt='Logo' className={classes.Logo4}></img>
                </div>
                <div className={classes.five}>
                    <img src={Logo} alt='Logo' className={classes.Logo5}></img>
                </div>
                <div className={classes.six}>
                    <img src={Logo} alt='Logo' className={classes.Logo6}></img>
                </div>
                <div className={classes.seven}>
                    <img src={Logo} alt='Logo' className={classes.Logo7}></img>
                </div>
                <div className={classes.eight}>
                    <img src={Logo} alt='Logo' className={classes.Logo8}></img>
                </div>
            </div>
        </div>
    );
};

export default HomeTop;