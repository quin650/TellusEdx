import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../reducers/auth";
import classes from  './GetStartedButton.module.css';

const GetStartedButton = () => {
    const dispatch = useDispatch();
    const modalButtonAction = () => {
        dispatch(userActions.getStartedModalOpen());
    }

    return (
        <button
            className={classes.button_format}
            onClick={modalButtonAction}
            type="submit">
                Get Started
        </button>
    );
};

export default GetStartedButton;