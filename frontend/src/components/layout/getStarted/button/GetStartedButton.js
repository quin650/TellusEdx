import React from "react";
import { useDispatch } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from  './GetStartedButton.module.css';

const GetStartedButton = () => {
    // console.log('GetStartedButton1')
    const dispatch = useDispatch();
    const modalButtonAction = () => {
        // console.log('GetStartedButton.modalButtonAction')
        dispatch(userReducerActions.getStartedModalOpen());
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