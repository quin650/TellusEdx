import React from "react";

import classes from './GetStartedModal.module.css';

const GetStartedModal = () => {

    return(
        <div className={classes.modalOuterContainer}> 
            <div className={classes.modalInnerContainer}> 
                <div className={classes.modalContentContainer}>
                    <form>
                        <button>Continue with Google</button>
                        <p>or</p>
                        <input 
                            type='text'
                            placeholder='Username*'
                            name='Username'
                        />
                        <input 
                            type='text'
                            placeholder='Password*'
                            name='Password'
                        />
                        <button>Create account</button>
                        <p>Have an Account? <a>Log in</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetStartedModal;