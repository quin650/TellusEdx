import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import GetStartedModal_InnerButton from "./GetStartedModal_InnerButton";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";

const GetStartedModal = () => {
    console.log('GetStartedModal')
    const dispatch = useDispatch();
    const { getStartedView } = useSelector(state => state.user);
    
    const LogIn = () => {dispatch(userReducerActions.getStartedModalLogIn());};
    const CreateAccount = () => {dispatch(userReducerActions.getStartedModalCreateAccount());};
    const RegistrationSuccess = () => {dispatch(userReducerActions.getStartedModalRegistrationSuccess());};
    const ResetPassword = () => {dispatch(userReducerActions.getStartedModalResetPassword());};

    switch(getStartedView) {
        case "LogIn":
            InnerButtonText = "LogIn"
            FormOptions = (<Fragment><p className={classes.option_1}><a className={classes.link} onClick={props.ResetPassword}> Reset Password</a></p>
            <p className={classes.option_2}>No Account? <a className={classes.link} onClick={props.CreateAccount}> Create One</a></p></Fragment>)
            break;
        case "CreateAccount":
            InnerButtonText = "CreateAccount"
            FormOptions = (<p className={classes.option_1}>Have an account? <a className={classes.link} onClick={props.LogIn}> Log In</a></p>)
            break;
        case "RegistrationSuccess":
            FormOptions = (<Fragment><p> Account Created Successfully</p>
            <p className={classes.option_1}>Click here to continue? <a className={classes.link} onClick={props.LogIn}> Log In</a></p></Fragment>)
            break;
        case "ResetPassword":
            InnerButtonText = "ResetPassword"
            FormOptions = (<p className={classes.option_1}><a className={classes.link} onClick={props.LogIn}>Cancel</a></p>)
            break;
    }

    const fixed_all = (
        <div onClick={exitAction} className={classes.exitButtonContainer}>
            <div className={classes.exitButton}>
                <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
            </div>
        </div>
    )

    const fixed_create_and_register = (
        <Fragment>
            <button className={classes.continueWithXButton}>
                    <span>Continue with</span>
                    <i className={classes.XIconContainer}>
                        <svg className={classes.XIcon} xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                            </path>
                        </svg>
                    </i>
            </button>
            <p className={classes.or}> or</p>
        </Fragment>
    )

    const regSuccess = (
        <Fragment>
            <div onClick={exitAction} className={classes.exitButtonContainer}>
                <div className={classes.exitButton}>
                    <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
                </div>
            </div>
            <div className={classes.modalContentContainer}>
                <p> Account Created Successfully</p>
                <p className={classes.option_1}>Click here to continue? <a className={classes.link} onClick={props.LogIn}> Log In</a></p>
            </div>
        </Fragment>
    )

    const emailInput_login_create_reset = (
        <div className={classes.inputContainer}>
            <input
                type='email'
                id='email'
                placeholder='Email'
                name='email'
                onChange={e => onChange(e)}
                value={email}
                required
                className={`${classes['formInputEmail']}`}
                autoComplete='email'
            />
        </div>
    )

    const passwordInput_login_create = (
        <div className={classes.inputContainer}>
            <input
                type='password'
                id='password'
                placeholder='Password'
                name='password'
                onChange={e => onChange(e)}
                value={password}
                minLength='8'
                required
                className={`${classes['formInputPassword']}`}
                autoComplete='current-password'
            />
        </div>
    )

    return (
        <div className={classes.blurredBackgroundContainer}>
            <div className={classes.modalContainer}>
                {fixed_all}
                <div className={classes.modalContentContainer}>


                {/* if getStartedView === "RegistrationSuccess" (regSuccess) else the below form */}
                    <form className={classes.modalFormContainer} onSubmit={onSubmit}>
                        {fixed_create_and_register}
                        {emailInput_login_create_reset}
                        {passwordInput_login_create}
                        <GetStartedModal_InnerButton InnerButtonText={InnerButtonTex} />
                    </form>


                    {FormOptions}
                </div>
            </div>
        </div>
    )
}


export default GetStartedModal;