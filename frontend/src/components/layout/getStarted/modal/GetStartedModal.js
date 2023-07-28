import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../reducers/auth";
import classes from './GetStartedModal.module.css';

const GetStartedModal = () => {
    
    const dispatch = useDispatch();
    const exitAction = () => {
        dispatch(userActions.registerModalClose());
    }

    return(
        <div className={classes.blurredBackgroundContainer}>    
            <div className={classes.modalContainer}> 
                <div onClick={exitAction} className={classes.exitButtonContainer}>
                    <div className={classes.exitButton}>
                        <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
                    </div>
                </div>
                <div className={classes.modalContentContainer}>
                    <form className={classes.modalFormContainer}>
                        <button className={classes.continueWithGoogleButton}>
                            <i className={classes.googleIcon}>
                                <svg className="svg" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fillRule="evenodd" fillOpacity="1" fill="#4285f4" stroke="none"></path><path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fillRule="evenodd" fillOpacity="1" fill="#34a853" stroke="none"></path><path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fillRule="evenodd" fillOpacity="1" fill="#fbbc05" stroke="none"></path><path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fillRule="evenodd" fillOpacity="1" fill="#ea4335" stroke="none"></path></svg>
                            </i>
                            <a>
                                Continue with Google
                            </a>
                        </button>
                        <p className={classes.or}> or</p>
                        <input 
                            type='text'
                            placeholder='Email'
                            name='Email'
                            className={classes.formInputs}
                        />
                        <input 
                            type='text'
                            placeholder='Password'
                            name='Password'
                            className={classes.formInputs}
                        />
                        <button className={classes.createAccountButton}>
                            Create account
                        </button>
                        <p className={classes.haveAnAccount}>Have an Account? <a className={classes.logIn}>Log in</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetStartedModal;