import React, {useState} from "react";
import classes from  './GetStartedButton.module.css';

const GetStartedButton = () => {

    // const[getStartedModalOpen, setGetStartedModalOpen] = useState(false);

    // const getStarted = {
    //     setGetStartedModalOpen(true);
    // }

    return (
        <button
            className={classes.button_format}
            // onClick={getStarted}
            type="submit">
                Get Started
        </button>
    );
};

export default GetStartedButton;