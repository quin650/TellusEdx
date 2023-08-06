import React, { useState } from "react";
import { login } from "../../../../actions/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../reducers/auth";
import CSRFToken from "../../../csrftoken";

import classes from './GetStartedModal.module.css';

const GetStartedModalLogIn = (props) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const exitAction = () => {
        dispatch(userActions.registerModalClose());
    }

    const onSubmit = e => {
        e.preventDefault();
        dispatch(login(username, password));
    }


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
                            type='text'
                            placeholder='Username*'
                            name='username'
                            onChange={e => onChange(e)}
                            value={username}
                            required
                            className={classes.formInputs}
                        />
                        <input
                            type='password'
                            placeholder='Password*'
                            name='password'
                            onChange={e => onChange(e)}
                            value={password}
                            minLength='6'
                            required
                            className={classes.formInputs}
                        />
                        <button className={classes.createAccountButton} type='submit'>
                            Log In
                        </button>
                        <p className={classes.haveAnAccount}>Don't have an Account? <a className={classes.logIn} onClick={props.LogInToggle}> Create account</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetStartedModalLogIn;