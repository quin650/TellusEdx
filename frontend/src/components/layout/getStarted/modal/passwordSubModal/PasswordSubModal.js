import React, { useState, useEffect } from 'react'
import classes from './PasswordSubModal.module.css'
const PasswordSubModal = (props) => {
    const [isValidLower, setIsValidLower] = useState(false);
    const [isValidUpper, setIsValidUpper] = useState(false);
    const [isValidNumber, setIsValidNumber] = useState(false);
    const [isValidSpecial, setIsValidSpecial] = useState(false);
    const [isValidEight, setIsValidEight] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const lowerCasePattern = /[a-z]/;
    const upperCasePattern = /[A-Z]/;
    const numberPattern = /\d/;
    const specialCharacterPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const minimumEightPattern = /.{8,}/
    useEffect(() => {
        setIsValidLower(lowerCasePattern.test(props.password));
        setIsValidUpper(upperCasePattern.test(props.password));
        setIsValidNumber(numberPattern.test(props.password));
        setIsValidSpecial(specialCharacterPattern.test(props.password));
        setIsValidEight(minimumEightPattern.test(props.password));
    }, [props.password])
    useEffect(() =>{
        // this if section can be removed after testing the Reset your password modal
        if (props.headerText === 'Reset your Password' && props.checkPasswordCommence2 ) {
            if (props.password.length === 0){
                setIsValidPassword(true);
            } else if (isValidLower && isValidUpper && isValidNumber && isValidSpecial && isValidEight){
                setIsValidPassword(true);
            } else if (!isValidLower || !isValidUpper || !isValidNumber || !isValidSpecial || !isValidEight){
                setIsValidPassword(false);
            }
        }else if (props.headerText !== 'Login' && props.checkPasswordCommence2 && props.isValidEmail) {
            if (props.password.length === 0){
                setIsValidPassword(true);
            } else if (isValidLower && isValidUpper && isValidNumber && isValidSpecial && isValidEight){
                setIsValidPassword(true);
            } else if (!isValidLower || !isValidUpper || !isValidNumber || !isValidSpecial || !isValidEight){
                setIsValidPassword(false);
            }
        }
        else if(props.headerText === 'Login'){
            setIsValidPassword(true);
        }
    }, [props.password, props.headerText, isValidLower, isValidUpper, isValidNumber, isValidSpecial, isValidEight])

    return (
        <div className={`${classes['subModal']} ${isValidPassword && classes.isValidPassword}`}>
            <div className={classes.subModalContainer}>
                <span>Password Requirements: </span>
                    <ul className={classes.row}>
                        
                        <li className={`${classes['lower']} ${isValidLower && classes.isValidLower}`}>
                            <a className={`${classes['lowerX']} ${isValidLower && classes.isValidLower}`}>
                                Ｘ
                            </a>
                            <a className={`${classes['lowerCheck']} ${isValidLower && classes.isValidLower}`}>
                                ✓
                            </a> 
                            &nbsp;lowercase letter
                        </li>
                        <li className={`${classes['upper']} ${isValidUpper && classes.isValidUpper}`}>
                            <a className={`${classes['upperX']} ${isValidUpper && classes.isValidUpper}`}>
                                Ｘ
                            </a>
                            <a className={`${classes['upperCheck']} ${isValidUpper && classes.isValidUpper}`}>
                                ✓
                            </a> 
                            &nbsp;uppercase letter
                        </li>
                    </ul>
                    <ul className={classes.row}>
                        <li className={`${classes['number']} ${isValidNumber && classes.isValidNumber}`}>
                            <a className={`${classes['numberX']} ${isValidNumber && classes.isValidNumber}`}>
                                Ｘ
                            </a>
                            <a className={`${classes['numberCheck']} ${isValidNumber && classes.isValidNumber}`}>
                                ✓
                            </a> 
                            &nbsp;number
                        </li>
                        <li className={`${classes['special']} ${isValidSpecial && classes.isValidSpecial}`}>
                            <a className={`${classes['specialX']} ${isValidSpecial && classes.isValidSpecial}`}>
                                Ｘ
                            </a>
                            <a className={`${classes['specialCheck']} ${isValidSpecial && classes.isValidSpecial}`}>
                                ✓
                            </a> 
                            &nbsp;special character
                        </li>
                    </ul>
                    <ul className={classes.row}>
                        <li className={`${classes['eight']} ${isValidEight && classes.isValidEight}`}>
                            <a className={`${classes['eightX']} ${isValidEight && classes.isValidEight}`}>
                                Ｘ
                            </a>
                            <a className={`${classes['eightCheck']} ${isValidEight && classes.isValidEight}`}>
                                ✓
                            </a> 
                            &nbsp;at least 8 characters
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default PasswordSubModal
