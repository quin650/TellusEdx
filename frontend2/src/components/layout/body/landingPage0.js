import React from "react";
import classes from './landingPage0.module.css';
import Landing_Image from '../../../../static/images/book_background_dark.png';

const LandingPage0 = () => {

    return (
        <div className={classes.main} >
            <img src={Landing_Image} alt='book' />
            <div className={classes.caption} >
                <h1> LEARNING NEVER EXHAUSTS THE MIND</h1>
                <h3> -Leonardo da Vinci</h3>
            </div>
        </div>
    );
};

export default LandingPage0;