import React, { useState, Fragment, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from './GetStartedModal.module.css';

const GetStartedModal = () => {
    const dispatch = useDispatch();
    const modalStatus2 = useSelector(({ user }) => user.getStartedView)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonText, setButtonText] = useState("CreateAccount")
    const [modalStatus, setModalStatus] = useState("CreateAccount")
    const emailChangeHandler =  (e) => {
        console.log('email input', e.target.value)
        setEmail(e.target.value)
    }
    console.log('email state:', email)
    
    const passwordChangeHandler =  (e) => {
        console.log('pw input', e.target.value)
        setPassword(e.target.value)
    }
    // const emailChangeHandler = useCallback((event) => {setEmail(event.target.value)},[])
    // const passwordChangeHandler = useCallback((event) =>{setPassword(event.target.value)}, [])
    const [emailInputField, setEmailInputField] = useState(
        <div className={classes.inputContainer}>
            <input
                type='email'
                id='email'
                placeholder='Email111'
                name='email'
                onChange={e => (emailChangeHandler(e))}
                value={email}
                required
                className={`${classes['formInputEmail']}`}
                autoComplete='email'
            />
        </div>
    )
    const [passwordInputField, setPasswordInputField] = useState(
        <div className={classes.inputContainer}>
            <input
                type='password'
                id='password'
                placeholder='Password111'
                name='password'
                onChange={passwordChangeHandler}
                value={password}
                minLength='8'
                required
                className={`${classes['formInputPassword']}`}
                autoComplete='current-password'
            />
        </div>
    )
    const LogIn = () => {setModalStatus("LogIn")};   
    const [formOptions, setFormOptions] = useState(<span className={classes.optionSpan}><p className={classes.option_1}>Have an account? <a className={classes.link} onClick={LogIn}> Log In</a></p></span>)
    const exitAction = () => {
        dispatch(userReducerActions.getStartedModalClose())
        dispatch(userReducerActions.getStartedModalReset())
    };
    const CreateAccount = () => {setModalStatus("CreateAccount")};
    const RegistrationSuccess = () => {setModalStatus("RegistrationSuccess")};
    const ResetPassword = () => {
        setModalStatus("ResetPassword")
        console.log('reset pw clicked')
    } ;
    const ExitButton = (
        <div onClick={exitAction} className={classes.exitButtonContainer}>
            <div className={classes.exitButton}>
                <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
            </div>
        </div>
    )
    const CreateAccount_and_LogIn = (
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
                <p className={classes.option_1}>Click here to continue? <a className={classes.link} onClick={LogIn}> Log In</a></p>
            </div>
        </Fragment>
    )
    const GetStartedModal_InnerButton = (
        <button className={`${classes['createAccountButton']}`}type='submit'>
            {buttonText}
        </button>
    )
    let SubmitAction = 'test1'
    let xButton = CreateAccount_and_LogIn
    const onSubmit = e => {
        e.preventDefault();
        SubmitAction();
    };
    useEffect(() => {
        ( modalStatus2 !== '') && 
        setButtonText("Log In")
                setFormOptions(<Fragment>
                                    <span className={classes.optionSpan}><p className={classes.option_1}><a className={classes.link} onClick={ResetPassword}>Reset Password</a></p></span>
                                    <span className={classes.optionSpan}><p className={classes.option_2}>No Account? <a className={classes.link} onClick={CreateAccount}>Create One</a></p></span>
                                </Fragment>);
                setPasswordInputField(<div className={classes.inputContainer}>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password222'
                        name='password'
                        onChange={passwordChangeHandler}
                        value={password}
                        minLength='8'
                        required
                        className={`${classes['formInputPassword']}`}
                        autoComplete='current-password'
                    />
                </div>)
    },[modalStatus2])
    useEffect(() =>{
        switch(modalStatus) {
            case "LogIn":
                setButtonText("Log In")
                setFormOptions(<Fragment>
                                    <span className={classes.optionSpan}><p className={classes.option_1}><a className={classes.link} onClick={ResetPassword}>Reset Password</a></p></span>
                                    <span className={classes.optionSpan}><p className={classes.option_2}>No Account? <a className={classes.link} onClick={CreateAccount}>Create One</a></p></span>
                                </Fragment>);
                setPasswordInputField(<div className={classes.inputContainer}>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password333'
                        name='password'
                        onChange={passwordChangeHandler}
                        value={password}
                        minLength='8'
                        required
                        className={`${classes['formInputPassword']}`}
                        autoComplete='current-password'
                    />
                </div>)
                // SubmitAction = () => {
                //     dispatch(login_APIAction(email, password));
                //     dispatch(userReducerActions.getStartedModalClose());
                // }
                break;
            case "ResetPassword":
                setButtonText("Reset Password")
                setFormOptions(<span className={classes.optionSpan}><p className={classes.option_1}><a className={classes.link} onClick={LogIn}>Cancel</a></p></span>);
                console.log('test-------------------')
                xButton = ''
                setPasswordInputField('')
                // SubmitAction = () => {
                //     console.log('dispatch(resetPassword(email, password))')
                // }
            break;
            case "CreateAccount":
                setButtonText("CreateAccount")
                // SubmitAction = () => {console.log('dispatch(register(email, password))')}
                setFormOptions(<span className={classes.optionSpan}><p className={classes.option_1}>Have an account? <a className={classes.link} onClick={LogIn}> Log In</a></p></span>)
                setPasswordInputField(<div className={classes.inputContainer}>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password444'
                        name='password'
                        onChange={passwordChangeHandler}
                        value={password}
                        minLength='8'
                        required
                        className={`${classes['formInputPassword']}`}
                        autoComplete='current-password'
                    />
                </div>)
                break;
            case "RegistrationSuccess":
            setFormOptions(<Fragment><span className={classes.optionSpan}><p> Account Created Successfully</p>
                <p className={classes.option_1}>Click here to continue? <a className={classes.link} onClick={LogIn}> Log In</a></p></span></Fragment>);
                // SubmitAction = () => {
                //     console.log('success')
                // }
                xButton = ''
                setEmailInputField('')
                setPasswordInputField('')
                break;
        }
    }, [modalStatus])
    return (
        <div className={classes.blurredBackgroundContainer}>
            <div className={classes.modalContainer}>
                {ExitButton}
                <div className={classes.modalContentContainer}>
                    {modalStatus == "RegistrationSuccess" && (regSuccess)}
                    <form className={classes.modalFormContainer} onSubmit={onSubmit}>
                        {xButton}
                        {emailInputField}
                        {passwordInputField}
                        {GetStartedModal_InnerButton}
                    </form>
                    {formOptions}
                </div>
            </div>
        </div>
    )
}

export default React.memo(GetStartedModal);