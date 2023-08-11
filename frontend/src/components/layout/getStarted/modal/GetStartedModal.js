import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import GetStartedModalLogIn from "./GetStartedModalLogIn";
import GetStartedModalCreateAccount from "./GetStartedModalCreateAccount";
import { userActions } from "../../../../reducers/auth";

const GetStartedModal = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.user);
    const { registered } = useSelector(state => state.user);
    const { logIn_True_CreateAccount_False } = useSelector(state => state.user);
    const LogInToggle = () => {
        dispatch(userActions.logIn_True_CreateAccount_FalseToggle());
    };

    return (
        <Fragment>
            {logIn_True_CreateAccount_False ? (
                <GetStartedModalLogIn LogInToggle={LogInToggle} />
            ) : (
                <GetStartedModalCreateAccount LogInToggle={LogInToggle} />
            )}
        </Fragment>
    )
}

export default GetStartedModal;