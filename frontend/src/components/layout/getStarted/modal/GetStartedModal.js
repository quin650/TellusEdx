import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import GetStartedModalLogIn from "./GetStartedModalLogIn";
import GetStartedModalCreateAccount from "./GetStartedModalCreateAccount";
import GetStartedModalRegistrationSuccess from "./GetStartedModalRegistrationSuccess";
import GetStartedModalResetPassword from "./GetStartedModalResetPassword";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";

const GetStartedModal = () => {
    console.log('GetStartedModal')
    const dispatch = useDispatch();
    const { getStartedView } = useSelector(state => state.user);
    const LogIn = () => {
        console.log('GetStartedModal.LogIn')
        dispatch(userReducerActions.getStartedModalLogIn());
    };
    const CreateAccount = () => {
        console.log('GetStartedModal.CreateAccount')
        dispatch(userReducerActions.getStartedModalCreateAccount());
    };
    const RegistrationSuccess = () => {
        console.log('GetStartedModal.RegistrationSuccess')
        dispatch(userReducerActions.getStartedModalRegistrationSuccess());
    };
    const ResetPassword = () => {
        console.log('GetStartedModal.ResetPassword')
        dispatch(userReducerActions.getStartedModalResetPassword());
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