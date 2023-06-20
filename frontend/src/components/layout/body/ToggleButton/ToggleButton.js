import React,{ useState } from "react";
import classes from './ToggleButton.module.css';

const ToggleButton = (props) =>{
    // true is toggle on Right
    // false is toggle on Left
    const [isValid, setIsValid] = useState(false);

    const handleToggle = () => {
        setIsValid(!isValid);
        props.ToggleFunction(isValid);
    };

    return(
        <section className={classes.toggleSection}>
            <label className={classes.switch}>
                <section className={classes.sliderText}>
                    {/* The expression starts with a template literal string using backticks (), which allows for embedded expressions inside ${}`. */}
                    {/*  It checks if the value of isValid is false or a falsy value. If it is, then it appends the value of classes.rightSide to the className string*/}
                    <div className={`${classes['left']} ${!isValid && classes.rightSide}`}>Learn</div>
                    <div className={`${classes['right']} ${!isValid && classes.rightSide}`}>Contribute</div>
                </section>
                <input type="checkbox" checked={isValid} onChange={handleToggle}/>
                <span className={classes.slider}></span>
            </label>
        </section>
    )
}

export default ToggleButton