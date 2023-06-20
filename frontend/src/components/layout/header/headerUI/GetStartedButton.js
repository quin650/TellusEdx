import React from "react";
import classes from  './GetStartedButton.module.css';

const GetStartedButton = () => {

    return (
        <button
            className={classes.button_format}
            type="submit">
                Get Started
        </button>
    );
};

export default GetStartedButton;