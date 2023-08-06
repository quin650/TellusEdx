import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Link } from 'react-router-dom';
import GetStartedModalLogIn from "./GetStartedModalLogIn";
import GetStartedModalCreateAccount from "./GetStartedModalCreateAccount";

const GetStartedModal = () => {
    const { isAuthenticated } = useSelector(state => state.user);
    const { registered } = useSelector(state => state.user);
    const [logIn_True_CreateAccount_False, SetLogIn_True_CreateAccount_False] = useState(false);
    
    const LogInToggle = () => {
        SetLogIn_True_CreateAccount_False(!logIn_True_CreateAccount_False);
    };

    useEffect(() => {
        if (registered) {
            SetLogIn_True_CreateAccount_False(true);
        }
    }, [registered]);

    if (isAuthenticated)
        return <Navigate to='/home' />;

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