import React,{ useState } from "react";
import classes from './ToggleButton.module.css';

const ToggleButton = (props) =>{
    // console.log('ToggleButton')
    // true is toggle on Right (aka Contribute)
    // false is toggle on Left (aka Learn)
    const [ToggleIsContribute, setToggleIsContribute] = useState(false);

    const handleToggle = () => {
        setToggleIsContribute(!ToggleIsContribute);
        props.ToggleFunction(ToggleIsContribute);
        console.log('ToggleButton.handleToggle')
    };

    return(
        <div className={classes.toggleSection}>
            <label className={classes.switch}>
                <section className={classes.sliderText}>
                    {/* The expression starts with a template literal string using backticks (), which allows for embedded expressions inside ${}`. */}
                    {/*  It checks if the value of ifToggleIsContribute is false or a falsy value. If it is, then it appends the value of classes.rightSide to the className string*/}
                    <div className={`${classes['leftSideWhenToggleOnLeft']} ${!ToggleIsContribute && classes.toggleMovedRight}`}>Learn</div>
                    <div className={`${classes['rightSideWhenToggleOnLeft']} ${!ToggleIsContribute && classes.toggleMovedRight}`}>Contribute</div>
                </section>
                <input type="checkbox" checked={ToggleIsContribute} onChange={handleToggle}/>
                <span className={classes.slider}></span>
            </label>
        </div>
    )
}

export default ToggleButton