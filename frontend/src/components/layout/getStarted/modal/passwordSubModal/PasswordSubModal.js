import React, { useState } from 'react'
import classes from './PasswordSubModal.module.css'
const PasswordSubModal = () => {
    const [isValidLower, setIsValidLower] = useState(false);
    const [isValidUpper, setIsValidUpper] = useState(false);
    const [isValidNumber, setIsValidNumber] = useState(false);
    const [isValidSpecial, setIsValidSpecial] = useState(false);
    const [isValidEight, setIsValidEight] = useState(false);



    
    return (
        <div className={classes.subModal}>
            <div className={classes.subModalContainer}>
                <span>Should Contain: </span>
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
