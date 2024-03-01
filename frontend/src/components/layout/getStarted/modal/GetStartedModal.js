import React, { useState, Fragment, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import { login_APIAction, register_APIAction, verifyAccount_APIAction, verifyAccountResendPassCode_APIAction, resetPasswordSendPassCode_APIAction, resetPasswordEmailPassCode_APIAction } from "../../../../a.actions/auth_Actions";
import CSRFToken from "../../../CSRFToken";
import XAuthButton from "./SocialAuthLogos/xAuthButton";
import DiscordAuthButton from "./SocialAuthLogos/discordAuthButton";
import GitHubAuthButton from "./SocialAuthLogos/gitHubAuthButton";
import PasswordSubModal from "./passwordSubModal/PasswordSubModal";
import classes from './GetStartedModal.module.css';
const GetStartedModal = () => { 
    const dispatch = useDispatch();
    const [modalStatus, setModalStatus] = useState("CreateAccountModal");
    //const [modalStatus, setModalStatus] = useState("VerifyAccountModal");
    //const [modalStatus, setModalStatus] = useState("VerificationSuccess");
    //const [modalStatus, setModalStatus] = useState("ResetPasswordEmailPassCodeModal");
    //const [modalStatus, setModalStatus] = useState("ResetPasswordEnterPassCodeModal");
    //const [modalStatus, setModalStatus] = useState("ResetPasswordChange");
    //const [modalStatus, setModalStatus] = useState("PasswordChangedModal");

    const getStartedView = useSelector(({ user }) => user.getStartedView);
    const registrationError = useSelector(({ user }) => user.registrationError);
    const verifyAccountPassCodeStatus_rdx = useSelector(({ user }) => user.verifyAccountPassCodeStatus_rdx);
    const verifyAccountPassCodeFeedback_rdx = useSelector(({ user }) => user.verifyAccountPassCodeFeedback_rdx);
    
    const resetPasswordEmailPassCodeStatus_rdx = useSelector(({ user }) => user.resetPasswordEmailPassCodeStatus_rdx);
    const resetPasswordEmailPassCodeFeedback_rdx = useSelector(({ user }) => user.resetPasswordEmailPassCodeFeedback_rdx);
    
    const resetPasswordChangeStatus_rdx = useSelector(({ user }) => user.resetPasswordChangeStatus_rdx);
    const resetPasswordChangeFeedback_rdx = useSelector(({ user }) => user.resetPasswordChangeFeedback_rdx);
    
    const passCodeStatus_rdx = useSelector(({ user }) => user.passCodeStatus_rdx);
    const passCodeFeedback_rdx = useSelector(({ user }) => user.passCodeFeedback_rdx);

    const [formData, setFormData] = useState({email: '', password: '', passCode: '', passwordConfirm: ''});
    const { email, password, passCode, passwordConfirm } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const passwordConfirmInputRef = useRef();
    const passCodeInputRef = useRef();
    const modalRef = useRef();

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState(true);
    const [isValidPassCode, setIsValidPassCode] = useState(true);

    const [emailInputFieldStatus, setEmailInputFieldStatus] = useState(true);
    const [passwordInputFieldStatus, setPasswordInputFieldStatus] = useState(true);
    const [passwordConfirmInputFieldStatus, setPasswordConfirmInputFieldStatus] = useState(false);
    const [passCodeInputFieldStatus, setPassCodeInputFieldStatus] = useState(false);
    
    // TODO need to change these names
    const [resetPasswordEmailPassCodeStatus, setResetPasswordEmailPassCodeStatus] = useState(true);

    const [resetPasswordChangeStatus, setResetPasswordChangeStatus] = useState(true); 
    const [resetPasswordChangeFeedback, setResetPasswordChangeFeedback] = useState('');

    const [refresh_VerifyAccountHeader, setRefresh_VerifyAccountHeader] = useState(0);
    const [refresh_ResetPasswordHeader, setRefresh_ResetPasswordHeader] = useState(0);
    const [refreshYourPasswordHeader, setRefreshYourPasswordHeader] = useState(0);

    const [headerText, setHeaderText] = useState("Create Account");
    const [buttonText, setButtonText] = useState("Create Account");
    const [generalFeedback, setGeneralFeedback] = useState('');
    const [userEmailFeedback, setUserEmailFeedback] = useState('');
    const [passwordFeedback, setPasswordFeedback] = useState('');
    const [passwordConfirmFeedback, setPasswordConfirmFeedback] = useState('');

    const [checkEmailCommence, setCheckEmailCommence] = useState(false);
    const [checkPasswordCommence, setCheckPasswordCommence] = useState(false); //*Action --> Commence checking regular password UI (aka not passwordSubModal) //*set to true OnSubmit-> create account | log in | reset Your Password 
    const [checkPasswordSubModalCommence, setCheckPasswordSubModalCommence] = useState(false); //*Action --> Commence checking passwordSubModal UI (i.e. also removes regular passwordFeedback) //*set to false --> GoTo_LogInModal | //*set to true  --> GoTo_CreateAccountModal | GoTo_ResetPasswordChangeModal | ResetPasswordChangeCheckPriorToSubmission | handleOnPasswordFocus (if email meets pattern)
    const [checkPasswordConfirmCommence, setCheckPasswordConfirmCommence] = useState(false); 
    const [checkPassCodeCommence, setCheckPassCodeCommence] = useState(false); 
    const [checkBackendCredentialsCommence, setCheckBackendCredentialsCommence] = useState(false);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,63}$/;

    // !useEffects
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
        if (checkBackendCredentialsCommence) {
            if (registrationError != ''){
                setIsValidEmail(false)
                setUserEmailFeedback(registrationError)
            }
            
    }}, [checkBackendCredentialsCommence, registrationError]);

    // !Actions
    useEffect(() => {
        if (getStartedView !== ''){
            setModalStatus(getStartedView)
        } 
    }, [getStartedView]);
    useEffect(() =>{
        switch(modalStatus){
            case "CreateAccountModal":
                GoTo_CreateAccountModal();
                break;
            case "VerifyAccountModal":
                GoTo_VerifyAccountModal();
                break;
            case "VerificationSuccessModal":
                GoTo_VerificationSuccessModal();
                break;
            case "LogInModal":
                GoTo_LogInModal();
                break;              
            case "ResetPasswordEmailPassCodeModal":
                GoTo_ResetPasswordEmailPassCodeModal();
                break;
            case "ResetPasswordEnterPassCodeModal":
                GoTo_ResetPasswordEnterPassCodeModal();
                break;
            case "ResetPasswordChangeModal":
                GoTo_ResetPasswordChangePage();
                break;
            case "PasswordChanged":
                GoTo_PasswordChangedPage();
                break;
            default:
                GoTo_CreateAccountModal();
                disableScroll();
    }}, [modalStatus])
    const GoTo_LogInModal = () => {
        setEmailInputFieldStatus(true);
        setPasswordInputFieldStatus(true);
        setPassCodeInputFieldStatus(false);
        setCheckPasswordSubModalCommence(false);
        setPasswordConfirmInputFieldStatus(false);
        setCheckBackendCredentialsCommence(false);
        dispatch(userReducerActions.registerErrorReset());
        setModalStatus("LogInModal");
        setHeaderText("Login");
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>No Account? <a onClick={GoTo_CreateAccountModal} className={classes.PageLink}>Register Here </a></p></span>);
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
    const GoTo_CreateAccountModal = () => {
        setEmailInputFieldStatus(true);
        setPasswordInputFieldStatus(true);
        setPassCodeInputFieldStatus(false);
        setCheckPasswordSubModalCommence(true);
        setPasswordConfirmInputFieldStatus(false);
        setCheckBackendCredentialsCommence(false);
        setModalStatus("CreateAccountModal");
        setHeaderText("Create Account");
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Have an account? <a onClick={GoTo_LogInModal} className={classes.PageLink}>Sign In Here </a></p></span>);
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
    const GoTo_VerifyAccountModal = () => {
        setModalStatus("VerifyAccountModal");
        setHeaderText("Account created successfully!");
        setEmailInputFieldStatus(false);
        setPassCodeInputFieldStatus(true);
        setPasswordInputFieldStatus(false);
        setPasswordConfirmInputFieldStatus(false);
        setButtonText("Verify");
        setSocialMediaSection('');
        setGeneralFeedback('Verification Code sent to your email.')
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Didn't get code?<a onClick={ResendPassCodeLink} className={classes.PageLink}> Resend </a></p></span>);
    };
    const GoTo_VerificationSuccessModal = () => {
        setModalStatus("VerificationSuccessModal");
        setHeaderText("Verification Success!");
        setEmailInputFieldStatus(false);
        setPassCodeInputFieldStatus(false);
        setPasswordInputFieldStatus(false);
        setPasswordConfirmInputFieldStatus(false);
        setButtonText("Continue to Sign In");
        setSocialMediaSection('')
        setFormOptions('');
    };
    const GoTo_PasswordChangedPage = () => {
        setModalStatus("PasswordChanged");
        setHeaderText("Password Changed!");
        setEmailInputFieldStatus(false);
        setPassCodeInputFieldStatus(false);
        setPasswordInputFieldStatus(false);
        setPasswordConfirmInputFieldStatus(false);
        setButtonText("Continue to Sign In");
        setSocialMediaSection('')
        setFormOptions('');
    };
    const GoTo_ResetPasswordEmailPassCodeModal = () => {
        setModalStatus("ResetPasswordEmailPassCodeModal");
        setHeaderText("Reset Password");
        setEmailInputFieldStatus(true);
        setPasswordInputFieldStatus(false);
        setPasswordConfirmInputFieldStatus(false);
        setButtonText("Send Email");
        setSocialMediaSection('');
        setGeneralFeedback('Enter your email to receive a reset code.');
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}><a className={classes.PageLink} onClick={GoTo_LogInModal}>Cancel</a></p></span>);
    };
    const GoTo_ResetPasswordEnterPassCodeModal = () => {
        setModalStatus("ResetPasswordEnterPassCodeModal");
        setHeaderText("Check your email");
        setEmailInputFieldStatus(false);
        setPassCodeInputFieldStatus(false);
        setPasswordInputFieldStatus(false);
        setPasswordConfirmInputFieldStatus(false);
        setButtonText("I have the code");
        setSocialMediaSection('')
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Didn't receive an email? Check spam filters</p></span>);
    };
    const GoTo_ResetPasswordChangeModal = () => {
        setModalStatus("ResetPasswordChangeModal");
        setHeaderText("Reset Your Password");
        setGeneralFeedback("Enter Verification Code and New Password")
        setEmailInputFieldStatus(false)
        setPassCodeInputFieldStatus(true)
        setPasswordInputFieldStatus(true)
        setPasswordConfirmInputFieldStatus(true)
        setButtonText("Reset Password");
        setSocialMediaSection('')
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Didn't get code?<a onClick={ResendPassCodeLink} className={classes.PageLink}> Resend </a></p></span>);
        setIsValidEmail(true);
        setCheckPasswordSubModalCommence(true);
    };
    const ResendPassCodeLink = () =>{
        dispatch(verifyAccountResendPassCode_APIAction());
        passCodeInputRef.current.value = ''
    }
    const getPWValidity = (x) => {
        setIsValidPassword(x)
    }

    // !Submit Calls
    const ActionButton = (
        <button className={classes.actionButton} type='submit'>
            {buttonText}
        </button>
    );
    const onSubmit = (e) => {
        e.preventDefault();
        if (modalStatus === "VerifyAccountModal"){
            dispatch(verifyAccount_APIAction(passCode));
        }
        else if (modalStatus === "VerificationSuccessModal"){
            GoTo_LogInPage();
            dispatch(userReducerActions.GoTo_LogInModal_rdx());
        }else if (modalStatus === "ResetPasswordEmailPassCodeModal"){
            setCheckEmailCommence(true);
            console.log(email)
            if (!email) {
                dispatch(userReducerActions.passwordResetPassCodeEmailSentFailure('Email Field Required'));
                return;
            }else {
                dispatch(resetPasswordEmailPassCode_APIAction(email));
            }
        }else if (modalStatus === "ResetPasswordReceivedPassCodePage"){
            GoTo_ResetPasswordChangeModal();
        }else if (modalStatus === "ResetPasswordChangeModal"){
            ResetPasswordChangeCheckPriorToSubmission(passCode, password, passwordConfirm);
        }else if (modalStatus === "PasswordChanged"){
            GoTo_LogInPage();
        }else{
            setCheckEmailCommence(true)
            setCheckPasswordCommence(true)
            if (isValidEmail && isValidPassword){
                switch(modalStatus){
                    case "CreateAccountModal":
                        dispatch(register_APIAction(email, password));
                        setCheckBackendCredentialsCommence(true);
                        break;
                    case "LogInModal":
                        dispatch(login_APIAction(email, password));
                        setCheckBackendCredentialsCommence(true);
                        break;
                } 
            }
        }
    };
    const ResetPasswordChangeCheckPriorToSubmission = (passCode, password, passwordConfirm) =>{
        setCheckPasswordCommence(true);//*For regular checking password correctness
        setCheckPasswordSubModalCommence(true);//*For PasswordSubModal Initiation purposes
        setCheckPassCodeCommence(true);
        if (passCode.length === 0){
            setIsValidPassCode(false);
            setResetPasswordChangeStatus(false);
            setGeneralFeedback('Verification Code Required');
        } else if (password !== passwordConfirm){
            setGeneralFeedback('Passwords do not match');
            setIsValidPassword(false);
            setIsValidPasswordConfirm(false);
            setResetPasswordChangeStatus(false);
        }
        dispatch(resetPasswordEmailPassCode_APIAction(passCode, password, passwordConfirm));
    }

    // !Input Field Handling -- On Focus + On Blur
    const handleOnEmailFocus = () => {
        // if modalstatus === "Reset Password " ....?
        dispatch(userReducerActions.passwordResetPassCodeEmailResetStatus());
    };
    const handleOnEmailBlur = () => {
        setCheckEmailCommence(true);
        if (emailPattern.test(email)){
                setIsValidEmail(true)
                setUserEmailFeedback('')
            }
    };
    const handleOnPasswordFocus = () => {
        if (emailInputRef.current) {
            setCheckEmailCommence(true);
            setCheckPassCodeCommence(true)
            if (emailPattern.test(email)){
                setIsValidEmail(true)
                setUserEmailFeedback('')
                setCheckPasswordSubModalCommence(true)
                passwordInputRef.current.focus();
            }
        }
    };
    const handleOnPasswordBlur = () => {
        if (!isValidPassword){
            passwordInputRef.current.focus();
        }
    };
    const handleOnPasswordConfirmFocus = () => {
        setCheckPasswordConfirmCommence(true);
        if (isValidPassword){
            setCheckPassCodeCommence(false);
        }
        
    };
    const handleOnPassCodeFocus = () => {
        dispatch(userReducerActions.verifyAccountPassCodeReset());
        // isn't working?
        if (modalStatus==="ResetPasswordChangeModal" && !isValidPassCode){
            passCodeInputRef.current.focus();
        };
    };
    const handleOnPassCodeBlur = () => {
        setCheckPassCodeCommence(true)
    };

    // !General Page Settings/Event listeners -- Scrolling rules + Exit Rules
    useEffect(() => {  
        window.addEventListener('keydown', onEscKey_ExitModal);
        document.addEventListener("mousedown", onClickOutsideModal_closeModal);
        setUserEmailFeedback(registrationError)
    }, []);
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
        enableScroll();
        dispatch(userReducerActions.getStartedModalClose());
        setModalStatus("CreateAccountModal");
        setFormOptions(<span className={classes.optionSpan}><p className={classes.optionsText}>Have an account? <a onClick={GoTo_LogInModal} className={classes.PageLink}>Sign In Here </a></p></span>);
        document.removeEventListener("mousedown", onClickOutsideModal_closeModal);
    };
    const ExitButton = (
        <div onClick={exitModalAction} className={classes.exitButtonContainer}>
            <div className={classes.exitButton}>
                <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
            </div>
        </div>
    );
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

    // !Conditional JSX 
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
        <span className={classes.optionSpan}><p className={classes.optionsText}>Have an account? <a onClick={GoTo_LogInModal} className={classes.PageLink}>Sign In Here</a></p></span>
    );
    useEffect (() => {
        if (headerText === "Create Account" && checkPasswordSubModalCommence) {
            setPasswordFeedback('');
        } else if (headerText === "Login" && checkPasswordCommence) {
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
        } else if (headerText === "Reset Your Password" && checkPassCodeCommence) {
            console.log('test2')
            const identifier = setTimeout( () => { 
                if (passCode.length === 0 ){
                    setIsValidPassCode(false)
                    passCodeInputRef.current.focus();
                    setGeneralFeedback('Verification Code Required')
                    setResetPasswordChangeStatus(false);
                    setRefreshYourPasswordHeader(prevKey => prevKey + 1);
                }else if (passCode.length > 0 ){
                    setIsValidPassCode(true)
                    setGeneralFeedback('Enter Verification Code and New Password')
                    setResetPasswordChangeStatus(true);
                    setRefreshYourPasswordHeader(prevKey => prevKey + 1);
                } 
            },  500);
            return ()  => {
                clearTimeout(identifier)
            };
        } else if (headerText === "Reset Your Password" && checkPasswordConfirmCommence) {
            console.log('test3')
            const identifier = setTimeout( () => { 
                if (passwordConfirm.length === 0 ){
                    setResetPasswordChangeStatus(false)
                    setIsValidPasswordConfirm(false)
                    setGeneralFeedback('Confirm Password Field Required')
                } else if (passwordConfirm !== password){
                    setResetPasswordChangeStatus(false)
                    setIsValidPasswordConfirm(false)
                    setGeneralFeedback('Passwords do not match')
                } else if (passwordConfirm === password){
                    setResetPasswordChangeStatus(true)
                    setIsValidPasswordConfirm(true)
                    setGeneralFeedback('Passwords match √')
                }
            },  1500);
            return ()  => {
                clearTimeout(identifier)
            };
    }}, [password, passwordConfirm, checkPasswordCommence, checkPasswordSubModalCommence, checkPassCodeCommence, checkPasswordConfirmCommence, passCode]);
    let VerifyAccountHeaderSection = (
        <div key={refresh_VerifyAccountHeader}>
            <h1 className={classes.modalTitle2}>{headerText}</h1>
            <h1 className={`${classes['modalSubTitle']} ${!isValidPassCode && classes.isValidPassCode}`}>{generalFeedback}</h1>
        </div>
    );
    let ResetPasswordEmailPassCodeModalHeaderSection = (
        <div key={refresh_ResetPasswordHeader}>
            <h1 className={classes.modalTitle2}>{headerText}</h1>
            <h1 className={`${classes['modalSubTitle']} ${!resetPasswordEmailPassCodeStatus && classes.isValidPassCode}`}>{generalFeedback}</h1>
        </div>
    );
    let ResetPasswordEnterPassCodeModalHeaderSection = (
        <div key={refresh_ResetPasswordHeader}>
            <h1 className={classes.modalTitle2}>{headerText}</h1>
            <h1 className={`${classes['modalSubTitle']} ${!resetPasswordEmailPassCodeStatus && classes.isValidPassCode}`}>Enter your email to receive a reset code.</h1>
        </div>
    );
    let ResetPasswordChangeHeaderSection = (
        <div key={refreshYourPasswordHeader}>
            <h1 className={classes.modalTitle2}>{headerText}</h1>
            <h1 className={`${classes['modalSubTitle']} ${!resetPasswordChangeStatus && classes.isValidPassCode}`}>{generalFeedback}</h1>
        </div>
    );
    let OriginalHeaderSection = (<h1 className={classes.modalTitle}>{headerText}</h1>);
    let HeaderSection = OriginalHeaderSection;
    switch(modalStatus){
        case "VerifyAccountModal":
            HeaderSection =  VerifyAccountHeaderSection;
            break;
        case "ResetPasswordEmailPassCodeModal":
            HeaderSection =  ResetPasswordEmailPassCodeModalHeaderSection;
            break;
        case "ResetPasswordEnterPassCodeModal":
            HeaderSection =  ResetPasswordEnterPassCodeModalHeaderSection;
            break;
        case "ResetPasswordChangeModal":
            HeaderSection =  ResetPasswordChangeHeaderSection;
            break;
        default:
            HeaderSection =  OriginalHeaderSection;
            break;
    };
    useEffect(() => {
        setIsValidPassCode(verifyAccountPassCodeStatus_rdx);
        setGeneralFeedback(verifyAccountPassCodeFeedback_rdx)
        setRefresh_VerifyAccountHeader(prevKey => prevKey + 1);
    },[verifyAccountPassCodeStatus_rdx, verifyAccountPassCodeFeedback_rdx])
    useEffect(() => {
        setResetPasswordStatus(resetPasswordEmailPassCodeStatus_rdx);
        setGeneralFeedback(resetPasswordEmailPassCodeFeedback_rdx)
        setRefresh_ResetPasswordHeader(prevKey => prevKey + 1);
    },[resetPasswordEmailPassCodeStatus_rdx, resetPasswordEmailPassCodeFeedback_rdx,])
    useEffect(() => {
        setResetPasswordChangeStatus(resetPasswordChangeStatus_rdx);
        setGeneralFeedback(resetPasswordChangeFeedback_rdx)
        setRefreshYourPasswordHeader(prevKey => prevKey + 1);
    },[resetYourPasswordStatus_rdx,resetPasswordChangeFeedback_rdx])
    // !JSX
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
                                    id='passCode'
                                    placeholder='Verification Code'
                                    name='passCode'
                                    onChange={e => onChange(e)}
                                    ref={passCodeInputRef}
                                    className={`${classes['passCodeInput']} ${!isValidPassCode && classes.isValidPassCode}`}
                                    onFocus={handleOnPassCodeFocus}
                                    onBlur={handleOnPassCodeBlur}
                                />
                                <div className={`${classes['passCodeInputFeedbackContainer']} ${modalStatus === 'VerifyAccountModal' && classes.VerifyAccountModal}`}>
                                    <p className={`${classes['passCodeInputFeedback']} ${!isValidPassCode && classes.isValidPassCode}`}>
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
                                    onFocus={handleOnEmailFocus}
                                    onBlur={handleOnEmailBlur}
                                />
                                <div className={`${classes['emailInputFeedbackContainer']} ${modalStatus === 'ResetPasswordEmailPassCodeModal' && classes.ResetPasswordEmailPassCodeModal}`}>
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
                                    placeholder={modalStatus === "ResetPasswordChangeModal" ? 'New Password' : 'Password'}
                                    name='password'
                                    onChange={e => onChange(e)}
                                    ref={passwordInputRef}
                                    className={`${classes['passwordInput']} ${!isValidPassword && classes.isValidPassword}`}
                                    autoComplete='current-password'
                                    onFocus={handleOnPasswordFocus}
                                    onBlur={handleOnPasswordBlur}
                                />
                                <PasswordSubModal password={password} checkPasswordSubModalCommence={checkPasswordSubModalCommence} isValidEmail={isValidEmail} headerText={headerText} getPWValidity = {getPWValidity}/>
                                <section className={`${classes['passwordInputFeedbackSection']} ${modalStatus === 'ResetPasswordChangeModal' ? classes.ResetPasswordChangeModal : modalStatus === 'ResetPasswordEmailPassCodeModal' ? classes.ResetPasswordEmailPassCodeModal : ''} `}>
                                    <div className={`${classes['passwordInputFeedbackContainer']} ${!isValidPassword && classes.isValidPassword}`}>
                                        <p className={`${classes['passwordInputFeedback']} ${!isValidPassword && classes.isValidPassword}`}>
                                            {passwordFeedback}
                                        </p>
                                    </div>
                                    <p className={`${classes['forgotPasswordLink']} ${modalStatus === "LogInModal" ? (!isValidPassword ? classes.LogInModal_isValidPassword : classes.LogInModal) : ''}`}>
                                        <a onClick={GoTo_ResetPasswordPage} className={classes.PageLink}>Forgot Password?</a>
                                    </p>
                                </section>
                            </div>
                        )}
                        {passwordConfirmInputFieldStatus && (
                            <div className={classes.inputContainer}>
                                <input
                                    type='password'
                                    id='passwordConfirm'
                                    placeholder='Confirm Password'
                                    name='passwordConfirm'
                                    onChange={e => onChange(e)}
                                    ref={passwordConfirmInputRef}
                                    className={`${classes['passwordInput']} ${!isValidPasswordConfirm && classes.isValidPasswordConfirm}`}
                                    autoComplete='current-password'
                                    onFocus={handleOnPasswordConfirmFocus}
                                />
                                <section className={classes.passwordConfirmInputFeedbackSection}>
                                    <div className={`${classes['passwordConfirmInputFeedbackContainer']} ${!isValidPasswordConfirm && classes.isValidPasswordConfirm}`}>
                                        <p className={`${classes['passwordConfirmInputFeedback']} ${!isValidPasswordConfirm && classes.isValidPasswordConfirm}`}>
                                            {passwordConfirmFeedback} 
                                        </p>
                                    </div>
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