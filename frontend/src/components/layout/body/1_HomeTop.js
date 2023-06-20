import React from "react";
import GetStartedButton from "../header/headerUI/GetStartedButton";
import Landing_Image from '../../../../static/images/Background_Main.png';

import classes from './1_HomeTop.module.css';

const HomeTop = () => {
    return (
        <section className={classes.main} >
            <img src={Landing_Image} alt='subjects' /> 
            <blockquote className={classes.caption} >
                <h1> LEARNING NEVER EXHAUSTS THE MIND</h1>
                <h3> TellusEd is adding a Montessori-flair to online-learning. Learn your way.</h3>
            </blockquote>
            <section className={classes.but}>
                <GetStartedButton />
            </section>
        </section>
    );
};

export default HomeTop;