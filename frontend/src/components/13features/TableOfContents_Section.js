import React from 'react'
import classes from './TableOfContents_Section.modules.css'

const TableOfContents_Section = (props) => {
    const { id, text, goto, status } = props;
    const handleClickScroll = () => {
        document.getElementById(goto).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div id={id} onClick={handleClickScroll} className={`${classes['tocSectionContainer']} ${status && classes.isCurrent}`}>
            <div className={classes.theTextContainer}>
                <p className={classes.theText}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default TableOfContents_Section;