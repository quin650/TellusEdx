
import React from "react";
import classes from './GetStartedModal.module.css';
const GetStartedModal_InnerButton = (props) => {

    const InnerButtonText = 'Test'
return(
    <button className={`${classes['createAccountButton']}`}type='submit'>
        {InnerButtonText}
    </button>
)
}
export default GetStartedModal_InnerButton;