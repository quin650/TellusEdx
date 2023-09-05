import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import GetStartedModalLogIn from "./GetStartedModalLogIn";
import GetStartedModalCreateAccount from "./GetStartedModalCreateAccount";
import GetStartedModalRegistrationSuccess from "./GetStartedModalRegistrationSuccess";
import GetStartedModalResetPassword from "./GetStartedModalResetPassword";
import { userActions } from "../../../../reducers/auth";

const GetStartedModal = () => {
    const dispatch = useDispatch();
    const { getStartedView } = useSelector(state => state.user);
    const LogIn = () => {
        dispatch(userActions.getStartedModalLogIn());
        console.log('getStartedModalLogIn')
    };
    const CreateAccount = () => {
        dispatch(userActions.getStartedModalCreateAccount());
        console.log('getStartedView')
    };
    const RegistrationSuccess = () => {
        dispatch(userActions.getStartedModalRegistrationSuccess());
        console.log('getStartedModalRegistrationSuccess')
    };
    const ResetPassword = () => {
        dispatch(userActions.getStartedModalResetPassword());
        console.log('ResetPassword')
    };

    return (
        <Fragment>
            {getStartedView === "LogIn" ? (
                <GetStartedModalLogIn 
                    LogIn={LogIn}
                    CreateAccount={CreateAccount}
                    RegistrationSuccess={RegistrationSuccess}
                    ResetPassword={ResetPassword}
                />
            ) : getStartedView == "CreateAccount" ? (
                <GetStartedModalCreateAccount 
                    LogIn={LogIn}
                    CreateAccount={CreateAccount}
                    RegistrationSuccess={RegistrationSuccess}
                    ResetPassword={ResetPassword}
                />
            ) : getStartedView == "RegistrationSuccess" ? (
                <GetStartedModalRegistrationSuccess 
                    LogIn={LogIn}
                    CreateAccount={CreateAccount}
                    RegistrationSuccess={RegistrationSuccess}
                    ResetPassword={ResetPassword}
                />
            ) : getStartedView == "ResetPassword" ? (
                <GetStartedModalResetPassword 
                    LogIn={LogIn}
                    CreateAccount={CreateAccount}
                    RegistrationSuccess={RegistrationSuccess}
                    ResetPassword={ResetPassword}
                />
            ) : null }
        </Fragment>
    );
}

export default GetStartedModal;