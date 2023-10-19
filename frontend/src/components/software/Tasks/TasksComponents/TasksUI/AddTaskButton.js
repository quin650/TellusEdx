import React from "react";
import classes from  './AddTaskButton.module.css';

const AddTaskButton = (props) => {
    console.log('AddTaskbutton')
    return (
        <div className={classes.button_format}>
            <button
                type="submit">
                {props.buttonText}
            </button>
        </div>
    );
};

export default AddTaskButton;