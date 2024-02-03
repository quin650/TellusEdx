import React, {useState} from "react";
import ToggleButton from "./ToggleButton/ToggleButton";
import HomeMiddleLearn from "./2a_HomeMiddleLearn";
import HomeMiddleContribute from "./2b_HomeMiddleContribute";
import classes from './2c_HomeMiddle.module.css';

const HomeMiddle = () => {
    // console.log('HomeMiddle')
    const[ifToggleIsLearn, SetIfToggleIsLearn] = useState(true)

    const ToggleFunction = (x) =>{
        SetIfToggleIsLearn(x);
    }

    let content = "";
    if (ifToggleIsLearn){
        content = <HomeMiddleLearn />
    } else {
        content = <HomeMiddleContribute />
    }

    return (
        <section className={classes.middleMainSection}>
            {content}
            <ToggleButton ToggleFunction={ToggleFunction}/>
        </section>
    );
}

export default HomeMiddle;