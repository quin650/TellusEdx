import React, { useState, Fragment } from 'react'
import classes from './LanguageSettingsModalCard.module.css';

const LanguageSettingsModalCard = (props)=>{
    const [isCheckedEnglish, setIsCheckedEnglish] = useState(false);
    const handleEnglishCheckboxChange = () => {
        setIsCheckedEnglish(!isCheckedEnglish);
    };

    return (
        <Fragment>
            <div onClick={handleEnglishCheckboxChange} className={`${classes['optionEnglish']} ${isCheckedEnglish && classes.isCheckedEnglish}`} >
                <span>{props.name}</span>
                <img src={props.flag} alt='Logo' className={classes.flag}></img> 
                <input
                    className={classes.optionInputBox}
                    type="checkbox"
                    checked={isCheckedEnglish}
                    onChange={handleEnglishCheckboxChange}
                />
            </div>
            <hr className={classes.break}></hr>
        </Fragment>
    )
}

export default LanguageSettingsModalCard