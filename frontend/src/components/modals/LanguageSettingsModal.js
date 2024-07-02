import React, { useState, Fragment, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../src/a.reducers/auth_Reducers";
import { login_APIAction } from "../../../src/a.actions/auth_Actions";
import data from "./LanguageOptionsData";
import classes from './LanguageSettingsModal.module.css';
import LanguageSettingsModalCard from "./LanguageSettingsModalCard";

const LanguageSettingsModal = () => { 
    const dispatch = useDispatch();
    const languageModalRef = useRef();
    const languageCurrent = useSelector(({ user }) => user.languageCurrent);
    const [languageStatus, setLanguageStatus] = useState('English');


    useEffect(() => {
        if (languageCurrent !== languageStatus) {
            setLanguageStatus(languageCurrent);
        }
    }, [languageCurrent]);
    // !General Page Settings/Event listeners -- Scrolling rules + Exit Rules
    useEffect(() => {  
        window.addEventListener('keydown', onEscKey_ExitModal);
        document.addEventListener("mousedown", onClickOutsideModal_closeModal);
    }, []);
    const disableScroll = () => {
        window.addEventListener('scroll', preventDefaultScroll, { passive: false });
        window.addEventListener('wheel', preventDefaultScroll, { passive: false });
        window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
        window.addEventListener('keydown', preventScroll, { passive: false });
    };
    const enableScroll = () => {
        window.removeEventListener('scroll', preventDefaultScroll);
        window.removeEventListener('wheel', preventDefaultScroll);
        window.removeEventListener('touchmove', preventDefaultScroll);
        window.removeEventListener('keydown', preventScroll);
    };
    const preventDefaultScroll = (e) => {
        e.preventDefault();
    };
    const preventScroll = (e) => {
        const keysThatScroll = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'];
        if (keysThatScroll.includes(e.key)) {
            e.preventDefault();
        }
    };
    const exitLanguageSettingsModalAction = () => {
        enableScroll();
        dispatch(userReducerActions.languageSettingsModalClose());
        window.removeEventListener('keydown', onEscKey_ExitModal);
        document.removeEventListener("mousedown", onClickOutsideModal_closeModal);
    };
    const ExitButton = (
        <div onClick={exitLanguageSettingsModalAction} className={classes.exitButtonContainer}>
            <div className={classes.exitButton}>
                <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
            </div>
        </div>
    );
    const onEscKey_ExitModal = (e) => {
        if (e.key === 'Escape') {
            exitLanguageSettingsModalAction();
        }
    };
    const onClickOutsideModal_closeModal = (e) => {
        if (languageModalRef.current && !languageModalRef.current.contains(e.target)) { 
            exitLanguageSettingsModalAction();
        }
    };

    const [isCheckedEnglish, setIsCheckedEnglish] = useState(false);
    const handleEnglishCheckboxChange = () => {
        setIsCheckedEnglish(!isCheckedEnglish);
    };
    const [isCheckedSpanish, setIsCheckedSpanish] = useState(false);
    const handleSpanishCheckboxChange = () => {
        setIsCheckedSpanish(!isCheckedSpanish);
    };

    return (
        <div className={classes.blurredBackgroundContainer} >
            <div className={classes.languageModal} ref={languageModalRef}>
                {ExitButton}
                <div className={classes.languageModalContentContainer} >
                    {data.map((language)=>(
                        <LanguageSettingsModalCard 
                            key={language.id} 
                            id={language.id} 
                            name={language.name} 
                            flag={language.flag}
                            />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LanguageSettingsModal;