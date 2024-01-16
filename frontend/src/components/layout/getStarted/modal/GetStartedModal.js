import React, { useState, Fragment, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import { login_APIAction, register_APIAction } from "../../../../a.actions/auth_Actions";
import CSRFToken from "../../../CSRFToken";
import XAuthButton from "./SocialAuthLogos/xAuthButton";
import DiscordAuthButton from "./SocialAuthLogos/discordAuthButton";
import GitHubAuthButton from "./SocialAuthLogos/gitHubAuthButton";
import PasswordSubModal from "./passwordSubModal/PasswordSubModal";
import classes from './GetStartedModal.module.css';
const GetStartedModal = () => {
    console.log('GetStartedModal1')
    const dispatch = useDispatch();
    const [modalStatus, setModalStatus] = useState("CreateAccount");
    const getStartedView = useSelector(({ user }) => user.getStartedView);
    const [isLogInVIew, setIsLogInVIew] = useState(false);
    const [passwordInputFieldStatus, setPasswordInputFieldStatus] = useState(true);
    const [headerText, setHeaderText] = useState("Create Account");
    const [buttonText, setButtonText] = useState("Create Account");

    const [formData, setFormData] = useState({email: '', password: ''});
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [userEmailFeedback, setUserEmailFeedback] = useState('');
    const [passwordFeedback, setPasswordFeedback] = useState('');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,63}$/;
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [checkEmailCommence, setCheckEmailCommence] = useState(false);
    const [checkPasswordCommence1, setCheckPasswordCommence1] = useState(false);
    const [checkPasswordCommence2, setCheckPasswordCommence2] = useState(false);
    const [checkBackendCredentialsCommence, setCheckBackendCredentialsCommence] = useState(false);

    const exitAction = () => {
        dispatch(userReducerActions.getStartedModalClose())
        enableScroll()
        setModalStatus("CreateAccount")
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Have an account?<a onClick={LogInPage} className={classes.PageLink}> Sign In Here</a></p></span>)
        document.removeEventListener("mousedown", closeModal);
    };
    const ExitButton = (
        <div onClick={exitAction} className={classes.exitButtonContainer}>
            <div className={classes.exitButton}>
                <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
            </div>
        </div>
    );
    useEffect(() => {
        window.addEventListener('keydown', onEscKey);
        document.addEventListener("mousedown", closeModal);
        if (getStartedView === 'LogIn'){
            LogInPage();
        }
        disableScroll()
    }, []);
    const handleOnEmailFocus = () => {
        dispatch(userReducerActions.loginErrorReset());
    };
    const handleOnPasswordFocus = () => {
        dispatch(userReducerActions.loginErrorReset());
        setCheckEmailCommence(true);
        if (emailPattern.test(email)){
                setIsValidEmail(true)
                setUserEmailFeedback('')
                setCheckPasswordCommence2(true)
                passwordInputRef.current.focus();
            }
    };
    // useEffect Explanation
    // The useEffect runs initially when the component mounts
    //      Concurrently, the return function is not initiated, i.e. the timeout is never cleared
    //      Concurrently, the setTimeout is set at the same time, but needs .5 seconds to run
    // If the email field changes before the .5 seconds are up, then the timeout is cleared and the
    // function inside the setTimeout never runs
    // In summary, the email is checked for validation only when the user does not key anything new into
    // this input field for the whole duration of .5 seconds. 
        //     Lesson 145 at 1:08 Explanation of code flow
    useEffect (() => {
        if (checkEmailCommence) {
            const identifier = setTimeout( () => { 
                if (email.length === 0){
                    setIsValidEmail(false);
                    setUserEmailFeedback('Email Field Required');
                    emailInputRef.current.focus();
                }
                else if (!emailPattern.test(email)){
                    setIsValidEmail(false);
                    setUserEmailFeedback('Invalid Email Format');
                    emailInputRef.current.focus();
                }
                else if (emailPattern.test(email) && registrationError != ''){
                    return;
                }
                else if (emailPattern.test(email) && registrationError === ''){
                    setIsValidEmail(true);
                    setUserEmailFeedback('');
                    setCheckEmailCommence(false);
                }
            },  500);
            return ()  => {
                clearTimeout(identifier)
            };
        }
    }, [email, checkEmailCommence]);

    useEffect (() => {
        if (headerText === "Create Account" && checkPasswordCommence2) {
            setPasswordFeedback('');
        } else if (headerText === "Login" && checkPasswordCommence1) {
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
    }, [password, checkPasswordCommence1, checkPasswordCommence2]);

    const loginError = useSelector(({ user }) => user.error);
    const registrationError = useSelector(({ user }) => user.registrationError);
    useEffect (() => {
        if (checkBackendCredentialsCommence) {
            if (registrationError != ''){
                setIsValidEmail(false)
                setUserEmailFeedback(registrationError)
            }
    }}, [checkBackendCredentialsCommence, registrationError]);

    const handleOnPasswordBlur = () => {
        dispatch(userReducerActions.loginErrorReset());
    };
    const [regSuccess, setRegSuccess] = useState(
        ""
    );
    const RegistrationSuccess = () => {
        setModalStatus("RegistrationSuccess");
    };
    const CreateAccountPage = () => {
        dispatch(userReducerActions.loginErrorReset());
        setModalStatus("CreateAccount");
        setIsLogInVIew(false);
        setHeaderText("Create Account");
        setButtonText("Create Account");
        setRegSuccess("");
        setSocialMediaSection(
            <Fragment>
                <span className={classes.orContinueWithContainer}><p className={classes.orContinueWithTextFormat}> or continue with </p></span>
                <div className={classes.socialAuthContainer}>
                    <XAuthButton />
                    <DiscordAuthButton />
                    <GitHubAuthButton />
                </div>
            </Fragment>
        )
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Have an account?<a onClick={LogInPage} className={classes.PageLink}> Sign In Here</a></p></span>);
        setCheckBackendCredentialsCommence(false)
    };
    const LogInPage = () => {
        setModalStatus("LogIn")
        setSocialMediaSection(
            <Fragment>
                <span className={classes.orContinueWithContainer}><p className={classes.orContinueWithTextFormat}> or continue with </p></span>
                <div className={classes.socialAuthContainer}>
                    <XAuthButton />
                    <DiscordAuthButton />
                    <GitHubAuthButton />
                </div>
            </Fragment>
        )
        setHeaderText("Login");
        setIsLogInVIew(true);
        setButtonText("Log In");
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>No Account?<a onClick={CreateAccountPage} className={classes.PageLink}> Register Here</a></p></span>);
        setRegSuccess("");
        setPasswordInputFieldStatus(true);
        setCheckBackendCredentialsCommence(false)
    };
    const ResetPasswordPage = () => {
        setSocialMediaSection('')
        setPasswordInputFieldStatus(false)
        setHeaderText("Reset Password")
        setButtonText("Send Reset Email")
        setRegSuccess("")
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}><a className={classes.PageLink} onClick={LogInPage}>Cancel</a></p></span>);
    };
    const ActionButton = (
        <button className={classes.actionButton} type='submit'>
            {buttonText}
        </button>
    );
    const onSubmit = (e) => {
        e.preventDefault();
        setCheckEmailCommence(true)
        setCheckPasswordCommence1(true)
        if (isValidEmail && isValidPassword){
            switch(modalStatus){
                case "CreateAccount":
                    dispatch(register_APIAction(email, password));
                    setCheckBackendCredentialsCommence(true);
                    break;
                case "LogIn":
                    dispatch(login_APIAction(email, password));
                    setCheckBackendCredentialsCommence(true);
                    break;
                case "Reset Password":
                    break;
            } 
        }
    };
    const [formOptions, setFormOptions] = useState(
        <span className={classes.optionSpan}><p className={classes.optionsText}>Have an account?<a onClick={LogInPage} className={classes.PageLink}> Sign In Here</a></p></span>
    );
    const [socialMediaSection, setSocialMediaSection] = useState(
        <Fragment>
                <span className={classes.orContinueWithContainer}><p className={classes.orContinueWithTextFormat}> or continue with </p></span>
                <div className={classes.socialAuthContainer}>
                    <XAuthButton />
                    <DiscordAuthButton />
                    <GitHubAuthButton />
                </div>
            </Fragment>
    );
    const disableScroll = () => {
        window.addEventListener('scroll', preventDefaultScroll, { passive: false });
        window.addEventListener('wheel', preventDefaultScroll, { passive: false });
        window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
        window.addEventListener('keydown', preventDefaultKeydown, { passive: false });
    };
    const enableScroll = () => {
        window.removeEventListener('scroll', preventDefaultScroll);
        window.removeEventListener('wheel', preventDefaultScroll);
        window.removeEventListener('touchmove', preventDefaultScroll);
        window.removeEventListener('keydown', preventDefaultKeydown);
    };
    const preventDefaultScroll = (e) => {
        e.preventDefault();
    };
    const preventDefaultKeydown = (e) => {
        // List of keys that can cause scrolling
        const keysThatScroll = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'];
        
        if (keysThatScroll.includes(e.key)) {
            e.preventDefault();
        }
    };
    const onEscKey = (e) => {
        if (e.key === 'Escape') {
            exitAction();
        }
    };
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            exitAction();
        }
    };
    return (
        <div className={classes.blurredBackgroundContainer} >
            <div className={classes.modal} ref={modalRef}>
                {ExitButton}
                <div className={classes.modalContentContainer}>
                    {regSuccess}
                    <form className={classes.modalForm} onSubmit={onSubmit}>
                        <CSRFToken />
                        <h1 className={classes.modalTitle}>{headerText}</h1>
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
                                onFocus={handleOnEmailFocus}
                            />
                            <div className={classes.emailInputFeedbackContainer}>
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
                                    onBlur={handleOnPasswordBlur}
                                />
                                <PasswordSubModal password={password} checkPasswordCommence2={checkPasswordCommence2} isValidEmail={isValidEmail} headerText={headerText}/>
                                <section className={classes.passwordInputFeedbackAndResetPasswordSection}>
                                    <div className={`${classes['passwordInputFeedbackContainer']} ${!isValidPassword && classes.isValidPassword}`}>
                                        <p className={`${classes['passwordInputFeedback']} ${!isValidPassword && classes.isValidPassword}`}>
                                            {passwordFeedback}
                                        </p>
                                    </div>
                                    <p className={`${classes['forgotPasswordLink']} ${isLogInVIew && !isValidPassword ? classes.isLogInVIew_isValidPassword : isLogInVIew ? classes.isLogInVIew : ''}`}><a onClick={ResetPasswordPage} className={classes.PageLink}>Forgot Password?</a></p>
                                </section>
                            </div>
                        )}
                        {ActionButton}
                    </form>
                    {socialMediaSection}
                    {formOptions}
                </div>
            </div>
        </div>
    )
}

export default GetStartedModal;