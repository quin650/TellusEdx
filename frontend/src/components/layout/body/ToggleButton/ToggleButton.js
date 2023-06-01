import React,{ useState } from "react";
import classes from './ToggleButton.module.css';

const ToggleButton = () =>{
    const [isValid, setIsValid] = useState(true);

    const handleToggle = () => {
        setIsValid(!isValid);
    };

    return(
        <div className={classes.toggleSection}>
            <label className={classes.switch}>
                <div className={classes.sliderText}>
                    <div className={`${classes['left']} ${!isValid && classes.invalid}`}>Learn</div>
                    <div className={`${classes['right']} ${!isValid && classes.invalid}`}>Contribute</div>
                </div>
                <input type="checkbox" checked={isValid} onChange={handleToggle}/>
                <span className={classes.slider}></span>
            </label>
        </div>
    )
}

export default ToggleButton