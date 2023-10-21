
import React from "react";
import classes from './GetStartedModal.module.css';
const GetStartedModal_InnerButton = ({buttonText}) => {

return(
    <button className={`${classes['createAccountButton']}`}type='submit'>
        {buttonText}
    </button>
)
}
export default GetStartedModal_InnerButton;