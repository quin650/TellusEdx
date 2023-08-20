import React, { useEffect, useState } from "react";
import { register } from "../../../../actions/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../reducers/auth";
import CSRFToken from "../../../csrftoken";
import classes from './GetStartedModal.module.css';
const GetStartedModalCreateAccount = (props) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        re_password: ''
    });
    const { email, password, re_password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const [isValidEmail, SetIsValidEmail] = useState(true);
    const [userEmailFeedback, setUserEmailFeedback] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [isValidPassword, SetIsValidPassword] = useState(true);
    const [passwordFeedback, setPasswordFeedback] = useState('');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z]).{8,}$/;
     // const [formIsValid, setFormIsValid] = useState(false);

    const UserEmailValidity = (email) => {
        if (!email === null && emailPattern.test(email)){
            SetIsValidEmail(true);
            setUserEmailFeedback('');
        }
        else if (!email || email === null ){
        }
        else if (!emailPattern.test(email)){
            SetIsValidEmail(false);
            setUserEmailFeedback('Invalid Email');
        }
        else if (emailPattern.test(email)){
            SetIsValidEmail(true);
            setUserEmailFeedback('');
        }
        else {
            setUserEmailFeedback('Email is required???');
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
    useEffect ( ( ) => {
        const identifier = setTimeout( () => { 
            UserEmailValidity(email);
        },  500); 
        return ( )  => {
            clearTimeout(identifier)
        };
    }, [email, isValidEmail]);



    const handleEmailBlur = () => {
        if (!email || email === null){
        SetIsValidEmail(false);
        setUserEmailFeedback('Email is required');
        }
    }




    // const PasswordValidity = (password) => {
    //     if (!password || password === null) {} 
    //     else if (!password || !password.trim().length > 8) {
    //         setPasswordIsValid(false);
    //         // setPasswordFeedback('Make password > 8');
    //     } else if (!passwordPattern.test(password)){
    //         setPasswordIsValid(false);
    //         // setPasswordFeedback('Password must contain 1 uppercase, 1 special character, and contain at least 8 characters');
    //     } else if (passwordPattern.test(password)){
    //         setPasswordIsValid(true);
    //         // setPasswordFeedback('');
    //     }
    // }
    // useEffect ( (password) => {
    //     const identifier = setTimeout( () => { 
    //         // console.log('PasswordValidity | testing PasswordValidity')
    //         PasswordValidity(password);
    //     },  500); 
    //     return ( )  => {
    //         // console.log('PasswordValidity | timeout cleared')
    //         clearTimeout(identifier)
    //     };
    // }, [password, isValidPassword]);

    // const handlePasswordBlur1 = () => {
    //     console.log('PasswordValidity | password_1 blur - check Password Validity');
    //     if(!PasswordValidity(email)){
    //         setPasswordIsValid(false);
    //     }
    // };
    // const handlePasswordBlur2 = () => {
    //     console.log('PasswordValidity | password_2 blur - check Password Validity');
    //     if(!PasswordValidity(email)){
    //         setPasswordIsValid(false);
    //     }
    // };

    // useEffect(() => {
    //     setFormIsValid(
    //         userEmailIsValid && passwordIsValid
    //     );
    // }, [formIsValid, userEmailIsValid, isValidPassword])
    function exitAction() {   
        dispatch(userActions.registerModalClose());
    };
    const onSubmit = e => {
        e.preventDefault();
        dispatch(register(email, password, re_password));
        dispatch(userActions.registerModalClose());
        dispatch(userActions.navBarAsGuestOpenClose());
    };
    return (
        <div className={classes.blurredBackgroundContainer}>
            <div className={classes.modalContainer}>
                <div onClick={exitAction} className={classes.exitButtonContainer}>
                    <div className={classes.exitButton}>
                        <svg className={classes.svg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
                    </div>
                </div>
                <div className={classes.modalContentContainer}>
                    <form className={classes.modalFormContainer} onSubmit={e => onSubmit(e)}>
                        <CSRFToken />
                        <button className={classes.continueWithXButton}>
                            <a>
                                Continue with
                                <i className={classes.XIcon}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                                </i>
                            </a>
                        </button>
                        <p className={classes.or}> or</p>
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={e => onChange(e)}
                            value={email}
                            required
                            className={`${classes['formInputEmail']} ${!isValidEmail && classes.isValidEmail}`}
                            onBlur={handleEmailBlur}
                        />
                        <div className={`${classes['emailFeedbackLabel']} ${!isValidEmail && classes.isValidEmail}`}>{userEmailFeedback}</div>



                        <input
                            type='password'
                            placeholder='Password*'
                            name='password'
                            onChange={e => onChange(e)}
                            value={password}
                            minLength='6'
                            required
                            className={`${classes['formInputPassword']} ${!isValidPassword && classes.isValidPassword}`}
                            // onBlur={handlePasswordBlur1}
                        />
                        <input
                            type='password'
                            placeholder='Repeat Password*'
                            name='re_password'
                            onChange={e => onChange(e)}
                            value={re_password}
                            minLength='6'
                            required
                            className={`${classes['formInputPassword']} ${!isValidPassword && classes.isValidPassword}`}
                            // onBlur={handlePasswordBlur2}
                        />
                        <div className={`${classes['passwordFeedbackLabel']} ${!isValidPassword && classes.isValidPassword}`}>{passwordFeedback}</div>



                        <button className={classes.createAccountButton} type='submit'>
                            Create account
                        </button>
                        <p className={classes.haveAnAccount}>Have an account? <a className={classes.logIn} onClick={props.LogInToggle}> Log In</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetStartedModalCreateAccount;