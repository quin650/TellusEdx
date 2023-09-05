import React, { useState } from "react";
import { login } from "../../../../actions/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../reducers/auth";
import CSRFToken from "../../../csrftoken";
import classes from './GetStartedModal.module.css';
const GetStartedModalLogIn = (props) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({email: '', password: '',});
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const exitAction = () => {
        dispatch(userActions.getStartedModalClose());
        dispatch(userActions.getStartedModalCreateAccount());
    };
    const onSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));
        dispatch(userActions.getStartedModalClose());
        dispatch(userActions.navBarMenuClose());
    }

    return (
        <div className={classes.blurredBackgroundContainer}>
            <div className={classes.modalContainer}>
                <div onClick={exitAction} className={classes.exitButtonContainer}>
                    <div className={classes.exitButton}>
                        <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
                    </div>
                </div>
                <div className={classes.modalContentContainer}>
                    <form className={classes.modalFormContainer} onSubmit={onSubmit}>
                    <CSRFToken />
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


                        <button className={`${classes['createAccountButton']}`}type='submit'>
                            Log In
                        </button>
                        <p className={classes.option_1}><a className={classes.link} onClick={props.ResetPassword}> Reset Password</a></p>
                        <p className={classes.option_2}>No Account? <a className={classes.link} onClick={props.CreateAccount}> Create One</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetStartedModalLogIn;