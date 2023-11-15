import React, { useState, Fragment, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import { login_APIAction, register_APIAction } from "../../../../a.actions/auth_Actions";
import CSRFToken from "../../../CSRFToken";
import classes from './GetStartedModal.module.css';
const GetStartedModal = () => {
    console.log('GetStartedModal1')
    const dispatch = useDispatch();
    const [modalStatus, setModalStatus] = useState(
        "CreateAccount"
    );
    const [buttonText, setButtonText] = useState(
        "CreateAccount"
    );
    const [passwordInputFieldStatus, setPasswordInputFieldStatus] = useState(true);

    const [formData, setFormData] = useState({email: '', password: ''});
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [userEmailFeedback, setUserEmailFeedback] = useState('');
    const [passwordFeedback, setPasswordFeedback] = useState('');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,63}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z]).{8,}$/;

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const [checkEmailCommence, setCheckEmailCommence] = useState(false);
    const [checkPasswordCommence, setCheckPasswordCommence] = useState(false);

    const handleOnPasswordFocus = () => {
        setCheckEmailCommence(true);
        if (email.length === 0 ){
            setIsValidEmail(false)
            setUserEmailFeedback('Email Field Required')
            emailInputRef.current.focus(); 
        }
        else if (!emailPattern.test(email)){
            setIsValidEmail(false)
            setUserEmailFeedback('Invalid Email Format')
            emailInputRef.current.focus();
        }
        else if (emailPattern.test(email)){
            setIsValidEmail(true)
            setUserEmailFeedback('')
            passwordInputRef.current.focus();
        }
    }

    //     Lesson 145 at 1:08 Explanation of code flow
    // The useEffect runs initially when the component mounts
    //      Concurrently, the return function is not initiated, i.e. the timeout is never cleared
    //      Concurrently, the setTimeout is set at the same time, but needs .5 seconds to run
    // If the email field changes before the .5 seconds are up, then the timeout is cleared and the
    // function inside the setTimeout never runs
    // In summary, the email is checked for validation only when the user does not key anything new into
    // this input field for the whole duration of .5 seconds. 
    useEffect (() => {
        if (checkEmailCommence) {
            const identifier = setTimeout( () => { 
                if (email.length === 0 ){
                    setIsValidEmail(false)
                    setUserEmailFeedback('Email Field Required')
                    emailInputRef.current.focus(); 
                }
                else if (!emailPattern.test(email)){
                    setIsValidEmail(false)
                    setUserEmailFeedback('Invalid Email Format')
                    emailInputRef.current.focus();
                }
                else if (emailPattern.test(email)){
                    setIsValidEmail(true)
                    setUserEmailFeedback('')
                    passwordInputRef.current.focus();
                }
            },  500); 
            return ()  => {
                clearTimeout(identifier)
            };
        }
    }, [email]);

    useEffect (() => {
        if (checkPasswordCommence) {
            const identifier = setTimeout( () => { 
                if (password.length === 0 ){
                    setIsValidPassword(false)
                    setPasswordFeedback('Password Field Required')
                } else if (password.length < 8 ){
                    setIsValidPassword(false)
                    setPasswordFeedback('At least 8 Characters Required')
                } else if (password.length > 7 ){
                    setIsValidPassword(true)
                    setPasswordFeedback('')
                }
            },  500); 

            return ()  => {
                clearTimeout(identifier)
            };
        }
    }, [password]);

    const handleOnBlurPassword = () => {
        setCheckPasswordCommence(true);
        if (password.length < 8 ){
            setIsValidPassword(false)
            setPasswordFeedback('At least 8 Characters Required')
            passwordInputRef.current.focus(); 
            return false
        } else {
            setIsValidPassword(true)
            setPasswordFeedback('')
            return true
        }
    };

    const [xButton, setXButton] = useState(
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
            <span className={classes.orContainer}><p className={classes.or}> or</p></span>
        </Fragment>
    );
    const [regSuccess, setRegSuccess] = useState(
        ""
    );
    const LogInLink = () => {
        setModalStatus("LogIn")
        setXButton(
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
                <span className={classes.orContainer}><p className={classes.or}> or</p></span>
            </Fragment>
        )
        setButtonText("Log In")
        setFormOptions(<Fragment>
                            <span className={classes.optionSpan}><p className={classes.option_1}><a className={classes.link} onClick={ResetPassword}>Reset Password</a></p></span>
                            <span className={classes.optionSpan}><p className={classes.option_2}>No Account? <a className={classes.link} onClick={CreateAccount}>Create One</a></p></span>
                        </Fragment>);
        setRegSuccess("")
        setPasswordInputFieldStatus(true)
    };
    const CreateAccount = () => {
        setModalStatus("CreateAccount")
        setXButton(
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
                <span className={classes.orContainer}><p className={classes.or}> or</p></span>
            </Fragment>
        )
        setButtonText("Create Account")
        setRegSuccess("")
        setFormOptions(<span className={classes.optionSpan}><p className={classes.option_1}>Have an account? <a className={classes.link} onClick={LogInLink}> Log In</a></p></span>)
    };
    const ResetPassword = () => {
        setXButton('')
        setPasswordInputFieldStatus(false)
        setButtonText("Reset Password")
        setRegSuccess("")
        setFormOptions(
            <span className={classes.optionSpan}>
                <p className={classes.option_1}>
                    <a className={classes.link} onClick={LogInLink}>
                        Cancel
                    </a>
                </p>
            </span>);
    };
    const [formOptions, setFormOptions] = useState(
        <span className={classes.optionSpan}><p className={classes.option_1}>Have an account? <a className={classes.link} onClick={LogInLink}> Log In</a></p></span>
    );
    const exitAction = () => {
        dispatch(userReducerActions.getStartedModalClose())
        setModalStatus("CreateAccount")
        setFormOptions(<span className={classes.optionSpan}><p className={classes.option_1}>Have an account? <a className={classes.link} onClick={LogInLink}> Log In</a></p></span>)
    };
    const RegistrationSuccess = () => {
        setModalStatus("RegistrationSuccess")
    };
    const ExitButton = (
        <div onClick={exitAction} className={classes.exitButtonContainer}>
            <div className={classes.exitButton}>
                <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
            </div>
        </div>
    );
    const GetStartedModal_InnerButton = (
        <button className={`${classes['createAccountButton']}`} type='submit'>
            {buttonText}
        </button>
    );
    const onSubmit = (e) => {
        e.preventDefault();
        handleOnBlurPassword();
        setCheckPasswordCommence(true)
        if (handleOnBlurPassword == true && isValidEmail && isValidPassword){
            switch(modalStatus){
                case "CreateAccount":
                    dispatch(register_APIAction(email, password));
                    break;
                case "LogIn":
                    dispatch(login_APIAction(email, password));
                    break;
                case "Reset Password":
                    break;
                } 
        }
    };

    return (
        <div className={classes.blurredBackgroundContainer}>
            <div className={classes.modalContainer}>
                {ExitButton}
                <div className={classes.modalContentContainer}>
                    {regSuccess}
                    <form className={classes.modalFormContainer} onSubmit={onSubmit}>
                        <CSRFToken />
                        {xButton}
                        <div className={classes.inputContainer}>
                            <input
                                type='email'
                                id='email'
                                placeholder='Email'
                                name='email'
                                onChange={e => onChange(e)}
                                ref={emailInputRef}
                                className={`${classes['emailInput']} ${!isValidEmail && classes.isValidEmail}`}
                                autoComplete='email'
                            />
                            <div className={classes.InputFeedbackContainer}>
                                <p className={`${classes['emailInputFeedback']} ${!isValidEmail && classes.isValidEmail}`}>
                                    {userEmailFeedback} 
                                </p>
                            </div>
                        </div>
                        {passwordInputFieldStatus && (
                            <div className={classes.inputContainer}>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Password'
                                    name='password'
                                    onChange={e => onChange(e)}
                                    ref={passwordInputRef}
                                    className={`${classes['passwordInput']} ${!isValidPassword && classes.isValidPassword}`}
                                    autoComplete='current-password'
                                    onFocus={handleOnPasswordFocus}
                                />
                                <div className={classes.InputFeedbackContainer}>
                                    <p className={`${classes['passwordInputFeedback']} ${!isValidPassword && classes.isValidPassword}`}>
                                        {passwordFeedback}
                                    </p>
                                </div>
                            </div>
                        )}
                        {GetStartedModal_InnerButton}
                    </form>
                    {formOptions}
                </div>
            </div>
        </div>
    )
}

export default GetStartedModal;