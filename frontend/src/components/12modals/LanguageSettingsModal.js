import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { userReducerActions } from "../../a.reducers/auth_Reducers";
import data from "./LanguageOptionsData";
import classes from './LanguageSettingsModal.module.css';
import LanguageSettingsModalCard from "./LanguageSettingsModalCard";

const LanguageSettingsModal = () => { 
    const dispatch = useDispatch();
    const languageModalRef = useRef();
    const [headerText, setHeaderText] = useState("Select Language");

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
    const languageIcon = (
        <svg className={classes.languageIcon} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" >
            <path d="M13.33 6c-1 2.42-2.22 4.65-3.57 6.52l2.98 2.94-.7.71-2.88-2.84c-.53.67-1.06 1.28-1.61 1.83l-3.19 3.19-.71-.71 3.19-3.19c.55-.55 1.08-1.16 1.6-1.83l-.16-.15c-1.11-1.09-1.97-2.44-2.49-3.9l.94-.34c.47 1.32 1.25 2.54 2.25 3.53l.05.05c1.2-1.68 2.29-3.66 3.2-5.81H2V5h6V3h1v2h7v1h-2.67zM22 21h-1l-1.49-4h-5.02L13 21h-1l4-11h2l4 11zm-2.86-5-1.86-5h-.56l-1.86 5h4.28z" 
            stroke="currentColor" />
        </svg>
    );

    return (
        <div className={classes.blurredBackgroundContainer} >
            <div className={classes.languageModal} ref={languageModalRef}>
                {ExitButton}
                <div className={classes.languageModalContentContainer} >
                    <h1 className={classes.modalHeader}>{languageIcon}{headerText}</h1>
                    {data.map((languageOption)=>(
                        <LanguageSettingsModalCard 
                            key={languageOption.id} 
                            id={languageOption.id} 
                            language={languageOption.language} 
                            flag={languageOption.flag}
                            />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LanguageSettingsModal;