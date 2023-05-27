import React from "react";
import classes from  './GetStartedButton.module.css';

const GetStartedButton = () => {

    return (
        <div className={classes.button_format}>
            <button
                type="submit">
                    Get Started
            </button>
        </div>
    );
};

export default GetStartedButton;