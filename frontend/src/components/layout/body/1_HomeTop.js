import React from "react";
import GetStartedButton from "../getStarted/button/GetStartedButton";
import BackgroundImage from '../../../../static/images/Background_Limited.png';
import classes from './1_HomeTop.module.css';

const HomeTop = () => {
    console.log('1_HomeTop')

    return (
        <div className={classes.outer_container_top}>
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