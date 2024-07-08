import React from "react";
import GetStartedButton from "../../modals/GetStartedButton";
import Logo1 from '../../../../static/images/Logo1.png';
import Logo2 from '../../../../static/images/Logo2.png';
import Logo3 from '../../../../static/images/Logo3.png';
import Logo4 from '../../../../static/images/Logo4.png';
import Logo5 from '../../../../static/images/Logo51.png';
import Logo6 from '../../../../static/images/Logo6.png';
import Logo7 from '../../../../static/images/Logo7.png';
import Logo8 from '../../../../static/images/Logo8.png';
import classes from './1_HomeTop.module.css';

const HomeTop = () => {
    return (                                                                    
        <div className={classes.outer_container_top} id="landingPage">                    
            <div className={classes.inner_container_top}>           
                <blockquote className={classes.caption} >          
                    <h1> LEARNING NEVER EXHAUSTS THE MIND</h1>  
                    <h3> TellusEd is adding a Montessori-flair to online-learning. Learn your way.</h3>
                </blockquote>  
                <img src={Logo1} alt='Logo' className={classes.Logo1} tabIndex="0"></img>               
                <img src={Logo2} alt='Logo' className={classes.Logo2} tabIndex="0"></img>   
                <img src={Logo3} alt='Logo' className={classes.Logo3} tabIndex="0"></img>   
                <img src={Logo4} alt='Logo' className={classes.Logo4} tabIndex="0"></img>   
                <img src={Logo5} alt='Logo' className={classes.Logo5} tabIndex="0"></img>   
                <img src={Logo6} alt='Logo' className={classes.Logo6} tabIndex="0"></img>   
                <img src={Logo7} alt='Logo' className={classes.Logo7} tabIndex="0"></img>   
                <img src={Logo8} alt='Logo' className={classes.Logo8} tabIndex="0"></img>   
                <div className={classes.buttonSection}>
                    <GetStartedButton />
                </div>
            </div>
        </div>
    );
};

export default HomeTop;