import React, { useState, Fragment, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import { login_APIAction, register_APIAction, activate_APIAction, resendPinAPIAction, passwordResetSendPinAPIAction } from "../../../../a.actions/auth_Actions";
import CSRFToken from "../../../CSRFToken";
import XAuthButton from "./SocialAuthLogos/xAuthButton";
import DiscordAuthButton from "./SocialAuthLogos/discordAuthButton";
import GitHubAuthButton from "./SocialAuthLogos/gitHubAuthButton";
import PasswordSubModal from "./passwordSubModal/PasswordSubModal";
import classes from './GetStartedModal.module.css';
const GetStartedModal = () => {
    const dispatch = useDispatch();
    const [modalStatus, setModalStatus] = useState("CreateAccount");
    //const [modalStatus, setModalStatus] = useState("VerifyYourAccount");

    const getStartedView = useSelector(({ user }) => user.getStartedView);
    const registrationError = useSelector(({ user }) => user.registrationError);

    const [isLogInVIew, setIsLogInVIew] = useState(false);
    const [emailInputFieldStatus, setEmailInputFieldStatus] = useState(true);
    const [passwordInputFieldStatus, setPasswordInputFieldStatus] = useState(true);
    const [passCodeInputFieldStatus, setPassCodeInputFieldStatus] = useState(false);
    const [headerText, setHeaderText] = useState("Create Account");
    const [buttonText, setButtonText] = useState("Create Account");

    const [formData, setFormData] = useState({email: '', password: ''});
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const passCodeInputRef = useRef();
    const modalRef = useRef();

    const [userEmailFeedback, setUserEmailFeedback] = useState('');
    const [passwordFeedback, setPasswordFeedback] = useState('');
    const [registrationSuccessFeedback, setRegistrationSuccessFeedback] = useState('');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,63}$/;
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [checkEmailCommence, setCheckEmailCommence] = useState(false);
    const [checkPasswordCommence1, setCheckPasswordCommence1] = useState(false);
    const [checkPasswordCommence2, setCheckPasswordCommence2] = useState(false);
    const [checkBackendCredentialsCommence, setCheckBackendCredentialsCommence] = useState(false);

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
    }, [email, checkEmailCommence, registrationError]);

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
    useEffect (() => {
        if (checkBackendCredentialsCommence) {
            if (registrationError != ''){
                setIsValidEmail(false)
                setUserEmailFeedback(registrationError)
            }
            
    }}, [checkBackendCredentialsCommence, registrationError]);
    useEffect(() => {  //Load Event listeners 
        window.addEventListener('keydown', onEscKey_ExitModal);
        document.addEventListener("mousedown", onClickOutsideModal_closeModal);
        setUserEmailFeedback(registrationError)
        disableScroll()
    }, []);
    useEffect(() =>{
        if (modalStatus === 'LogIn'){
            LogInPage();
        } else if (modalStatus === 'ResetPasswordPage'){
            ResetPasswordPage();
        } else if (modalStatus === 'CreateAccount'){
            CreateAccountPage(); 
        } else if (modalStatus === 'VerifyYourAccount'){
            VerifyYourAccount();
        } else if (modalStatus === 'VerificationSuccess'){
            VerificationSuccess();
        } 
    }, [modalStatus])
    useEffect(() => {
        if (getStartedView !== ''){
            setModalStatus(getStartedView)
        } 
    }, [getStartedView]);
    const handleOnPasswordFocus = () => {
        setCheckEmailCommence(true);
        if (emailPattern.test(email)){
                setIsValidEmail(true)
                setUserEmailFeedback('')
                setCheckPasswordCommence2(true)
                passwordInputRef.current.focus();
            }
    };
    const handleOnPasswordBlur = () => {
        // dispatch(userReducerActions.loginErrorReset());
    };
    const LogInPage = () => {
        setEmailInputFieldStatus(true);
        setPasswordInputFieldStatus(true);
        setPassCodeInputFieldStatus(false);
        setCheckPasswordCommence2(false);
        setCheckBackendCredentialsCommence(false);
        dispatch(userReducerActions.registerErrorReset());
        setModalStatus("LogIn");
        setHeaderText("Login");
        setIsLogInVIew(true);
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>No Account? <a onClick={CreateAccountPage} className={classes.PageLink}>Register Here </a></p></span>);
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
        setButtonText("Log In");
    };
    const CreateAccountPage = () => {
        setEmailInputFieldStatus(true);
        setPasswordInputFieldStatus(true);
        setPassCodeInputFieldStatus(false);
        // dispatch(userReducerActions.loginErrorReset());
        setCheckPasswordCommence2(true)
        setCheckBackendCredentialsCommence(false)
        setModalStatus("CreateAccount");
        setHeaderText("Create Account");
        setIsLogInVIew(false);
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Have an account? <a onClick={LogInPage} className={classes.PageLink}>Sign In Here </a></p></span>);
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
        setButtonText("Create Account");
    };
    const VerifyYourAccount = () => {
        setModalStatus("VerifyYourAccount");
        setHeaderText("Account created successfully!");
        setEmailInputFieldStatus(false)
        setPasswordInputFieldStatus(false)
        setPassCodeInputFieldStatus(true)
        setButtonText("Verify");
        setSocialMediaSection('')
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Didn't get code?<a onClick={ResendPinLink} className={classes.PageLink}> Resend </a></p></span>);
    };
    const VerificationSuccess = () => {
        setModalStatus("VerificationSuccess");
        setHeaderText("Verification Success!");
        setEmailInputFieldStatus(false)
        setPasswordInputFieldStatus(false)
        setPassCodeInputFieldStatus(false)
        setButtonText("Continue to Sign In");
        setSocialMediaSection('')
        setFormOptions('');
    };
    const ResetPasswordPage = () => {
        setModalStatus("ResetPassword");
        setHeaderText("Reset Password")
        setPasswordInputFieldStatus(false)
        setButtonText("Send Reset Email")
        setSocialMediaSection('')
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}><a className={classes.PageLink} onClick={LogInPage}>Cancel</a></p></span>);
    };
    const ActionButton = (
        <button className={classes.actionButton} type='submit'>
            {buttonText}
        </button>
    );
    const onSubmit = (e) => {
        e.preventDefault();
        if (modalStatus === "VerificationSuccess"){
            LogInPage();
        }else if (modalStatus === "VerifyYourAccount"){
            dispatch(activate_APIAction(passCodeInputRef.current.value));
        }else{
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
                    case "ResetPassword":
                        dispatch(passwordResetSendPinAPIAction(email));
                } 
            }
        }
    };
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
    const [formOptions, setFormOptions] = useState(
        <span className={classes.optionSpan}><p className={classes.optionsText}>Have an account? <a onClick={LogInPage} className={classes.PageLink}>Sign In Here</a></p></span>
    );
    const disableScroll = () => {
        window.addEventListener('scroll', preventDefaultScroll, { passive: false });
        window.addEventListener('wheel', preventDefaultScroll, { passive: false });
        window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
        window.addEventListener('keydown', preventScroll, { passive: false });
    };
    const enableScroll = () => {
        window.removeEventListener('scroll', preventDefaultScroll);
        window.removeEventListener('wheel', preventDefaultScroll);
        window.removeEventListener('touchmove', preventDefaultScroll);
        window.removeEventListener('keydown', preventScroll);
    };
    const preventDefaultScroll = (e) => {
        e.preventDefault();
    };
    const preventScroll = (e) => {
        const keysThatScroll = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'];
        if (keysThatScroll.includes(e.key)) {
            e.preventDefault();
        }
    };
    const exitModalAction = () => {
        dispatch(userReducerActions.getStartedModalClose())
        enableScroll()
        setModalStatus("CreateAccount")
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Have an account? <a onClick={LogInPage} className={classes.PageLink}>Sign In Here </a></p></span>);
        document.removeEventListener("mousedown", onClickOutsideModal_closeModal);
    };
    const ExitButton = (
        <div onClick={exitModalAction} className={classes.exitButtonContainer}>
            <div className={classes.exitButton}>
                <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
            </div>
        </div>
    );

    const pinActivationFeedback_rdx = useSelector(({ user }) => user.pinActivationFeedback_rdx);
    const pinActivationStatus_rdx = useSelector(({ user }) => user.pinActivationStatus_rdx);
    const [pinActivationFeedback, setPinActivationFeedback] = useState('Four-digit code sent to your email.');
    const [pinActivationStatus, setPinActivationStatus] = useState(true);
    const [animationKey, setAnimationKey] = useState(0); 

    useEffect(() => {
        setPinActivationFeedback(pinActivationFeedback_rdx);
        setPinActivationStatus(pinActivationStatus_rdx);
        setAnimationKey(prevKey => prevKey + 1);
    },[pinActivationFeedback_rdx,pinActivationStatus_rdx])

    let VerifyYourAccountHeaderSection = (
        <div key={animationKey}>
            <h1 className={classes.modalTitle2}>{headerText}</h1>
            <h1 className={`${classes['modalSubTitle']} ${!pinActivationStatus && classes.pinActivationStatus}`}>{pinActivationFeedback}</h1>
        </div>
    );

    const handleOnPassCodeFocus = () => {
        console.log('handleOnPassCodeFocus');
        dispatch(userReducerActions.verifyPinStatusReset());
    };

    let OriginalHeaderSection = (<h1 className={classes.modalTitle}>{headerText}</h1>)
    let HeaderSection = OriginalHeaderSection
    modalStatus === "VerifyYourAccount" ? HeaderSection =  VerifyYourAccountHeaderSection : HeaderSection = OriginalHeaderSection
    const ResendPinLink = () =>{
        console.log('resendPinAPIAction()')
        dispatch(resendPinAPIAction());
    }
    const onEscKey_ExitModal = (e) => {
        if (e.key === 'Escape') {
            exitModalAction();
        }
    };
    const onClickOutsideModal_closeModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) { 
            exitModalAction();
        }
    };
    return (
        <div className={classes.blurredBackgroundContainer} >
            <div className={classes.modal} ref={modalRef}>
                {ExitButton}
                <div className={classes.modalContentContainer}>
                    <form className={classes.modalForm} onSubmit={onSubmit}>
                        <CSRFToken />
                        {HeaderSection}
                        {passCodeInputFieldStatus && (
                            <div className={classes.inputContainer}>
                                <input
                                    type='number'
                                    id='code'
                                    placeholder='Four-digit Code'
                                    name='code'
                                    ref={passCodeInputRef}
                                    className={`${classes['emailInput']}`}
                                    onFocus={handleOnPassCodeFocus}
                                />
                                <div className={classes.emailInputFeedbackContainer}>
                                    <p className={classes.passCodeInputFeedback}>
                                        {registrationSuccessFeedback} 
                                    </p>
                                </div>
                            </div>
                        )}
                        {emailInputFieldStatus && (
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
                                <div className={classes.emailInputFeedbackContainer}>
                                    <p className={`${classes['emailInputFeedback']} ${!isValidEmail && classes.isValidEmail}`}>
                                        {userEmailFeedback} 
                                    </p>
                                </div>
                            </div>
                        )}
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