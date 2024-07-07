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
    const handleCheckboxChange = () => {
        console.log('section clicked')
    }

    return (
        <div onClick={handleCheckboxChange} className={`${classes['tocCardContainer']} ${isCurrent && classes.isCurrent}`}>
            <span className={classes.theTextContainer}>
                <p className={classes.theText}>
                    Show child element blah blah blah
                </p>
            </span>
        </div>
    )
}

export default TableOfContents_Section;