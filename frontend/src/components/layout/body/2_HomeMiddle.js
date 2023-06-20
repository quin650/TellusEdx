import React, {useState} from "react";
import ToggleButton from "./ToggleButton/ToggleButton";

import HomeMiddleLearn from "./2a_HomeMiddleLearn";
import HomeMiddleContribute from "./2b_HomeMiddleContribute";

import classes from './2c_HomeMiddle.module.css';

const HomeSection2 = () => {

    const[side, SetSide] = useState(true)

    const ToggleFunction = (x) =>{
        SetSide(x);
    }

    let content = "";
    if (side){
        content = <HomeMiddleLearn />
    } else {
        content = <HomeMiddleContribute />
    }

    return (
        <section className={classes.main}>
            {content}
            <ToggleButton ToggleFunction={ToggleFunction}/>
        </section>
    );
}

export default HomeSection2;