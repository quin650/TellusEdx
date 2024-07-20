import React, { useState, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from '../../a.reducers/auth_Reducers';
import classes from './LanguageSettingsModalCard.module.css';

const LanguageSettingsModalCard = (props)=>{
    const dispatch = useDispatch();
    const languageCurrent_rdx = useSelector(({ user }) => user.languageCurrent_rdx);
    const [isChecked, setIsChecked] = useState(false)
    useEffect(()=>{
        if (languageCurrent_rdx === props.language){
            setIsChecked(true)
        } else if (isChecked && languageCurrent_rdx !== props.language){
            setIsChecked(false)
        }
    },[languageCurrent_rdx])
    const handleCheckboxChange = () => {
        if (isChecked){
            setIsChecked(false)
            dispatch(userReducerActions.languageSettingsChange(''))
        } else if (!isChecked && languageCurrent_rdx !== props.language){
            setIsChecked(true)
            dispatch(userReducerActions.languageSettingsChange(props.language))
        }
    }
    return (
        <Fragment>
            <div onClick={handleCheckboxChange} className={`${classes['languageOption']} ${isChecked && classes.isChecked}`} >
                <span>{props.language}</span>
                <img src={props.flag} alt='Logo' className={classes.flag}></img> 
                <input
                    className={classes.optionInputBox}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </div>
            <hr className={classes.break}></hr>
        </Fragment>
    )
}

export default LanguageSettingsModalCard;