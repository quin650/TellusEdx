import React, { useState, Fragment } from 'react'
import classes from './LanguageSettingsModalCard.module.css';

const LanguageSettingsModalCard = (props)=>{
    const [isChecked, setIsChecked] = useState(false);
    const handleEnglishCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Fragment>
            <div onClick={handleEnglishCheckboxChange} className={`${classes['languageOption']} ${isChecked && classes.isChecked}`} >
                <span>{props.name}</span>
                <img src={props.flag} alt='Logo' className={classes.flag}></img> 
                <input
                    className={classes.optionInputBox}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleEnglishCheckboxChange}
                />
            </div>
            <hr className={classes.break}></hr>
        </Fragment>
    )
}

export default LanguageSettingsModalCard;