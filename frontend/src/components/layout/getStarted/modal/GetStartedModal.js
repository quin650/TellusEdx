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
                        <button className={classes.continueWithXButton}>
                            <a>
                                Continue with 
                                <i className={classes.XIcon}>
                                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                                </i>
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