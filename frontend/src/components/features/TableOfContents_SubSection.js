import React, { useEffect, useState } from 'react'
import classes from './TableOfContents_SubSection.modules.css'


const TableOfContents_SubSection = (props) => {

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

        </div>
    )
}

export default TableOfContents_SubSection;