import React, {useState} from "react";
import ToggleButton from "./ToggleButton/ToggleButton";
import LandingPage2 from "./landingPage2";
import LandingPage3 from "./landingPage3";

import classes from './landingPage1.module.css';

const LandingPage1 = () => {

    const[side, SetSide] = useState(true)

    const ToggleFunction = (x) =>{
        SetSide(x);
    }

    let content = "";
    if (side){
        content = <LandingPage2 />
    } else {
        content = <LandingPage3 />
    }

    return (
        <div className={classes.section2}>
            {content}
            <div className={classes.container2}>
                <ToggleButton ToggleFunction={ToggleFunction}/>
            </div>
        </div>
    );
}

export default LandingPage1;