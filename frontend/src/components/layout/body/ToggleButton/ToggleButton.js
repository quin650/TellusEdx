import React from "react";

import classes from './ToggleButton.module.css';

const ToggleButton = () =>{

    return(
        <div className={classes.toggleArea}>
            <label className={classes.switch}>
                <input type="checkbox"/>
                <span className={classes.slider}></span>
            </label>
        </div>
    )
}

export default ToggleButton