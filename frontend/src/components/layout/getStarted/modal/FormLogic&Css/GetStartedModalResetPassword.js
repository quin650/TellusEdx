import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CSRFToken from "../../../csrftoken";
import { login_APIAction } from "../../../../a.actions/auth_Actions";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import classes from './GetStartedModal.module.css';
const GetStartedModalResetPassword = (props) => {
    console.log('GetStartedModalResetPassword')
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({email: '', password: '',});
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const exitAction = () => {
        console.log('GetStartedModalResetPassword.exitAction')
        dispatch(userReducerActions.getStartedModalClose());
        dispatch(userReducerActions.getStartedModalCreateAccount());
    };
    const onSubmit = e => {
        console.log('GetStartedModalResetPassword.onSubmit')
        e.preventDefault();
        dispatch(login_APIAction(email, password));
        dispatch(userReducerActions.getStartedModalClose());
        dispatch(userReducerActions.navBarMenuClose());
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
                    {/* <CSRFToken /> */}


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


                        <button className={`${classes['createAccountButton']}`}type='submit'>
                            Reset Password
                        </button>
                        <p className={classes.option_1}><a className={classes.link} onClick={props.LogIn}>Cancel</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetStartedModalResetPassword;