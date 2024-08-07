import React, {useState} from "react";
import ToggleButton from "./features/ToggleButton";
import HomeMiddleLearn from "./2a_HomeMiddleLearn";
import HomeMiddleContribute from "./2b_HomeMiddleContribute";
import classes from './2c_HomeMiddle.module.css';

const HomeMiddle = () => {
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
        <section>
            <div className={classes.middleMainSection} id="Learn/Contribute">
                {content}
                <ToggleButton ToggleFunction={ToggleFunction}/>
            </div>
        </section>
    );
}

export default HomeMiddle;