import React, { useEffect, useState, Fragment } from 'react'
import classes from './TableOfContents_Section.modules.css'

const TableOfContents_Section = (props) => {
    const [isCurrent, setIsCurrent] = useState(false);

    useEffect(()=>{
        if (props.status){
            setIsCurrent(true)
        } else{
            setIsCurrent(false)
        }
    }, [props.status])

    const handleClickScroll = () => {
        console.log('section clicked')
        document.getElementById(props.goto).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div onClick={handleClickScroll} className={`${classes['tocSectionContainer']} ${isCurrent && classes.isCurrent}`}>
            <div className={classes.theTextContainer}>
                <p className={classes.theText}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default TableOfContents_Section;