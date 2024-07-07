import React from 'react'
import TableOfContents_Section from './TableOfContents_section'
import classes from './1TableOfContents.modules.css'
import data from './tocData'



const TableOfContents = () => {

    return (
        <div className={classes.tocContainer}>
            <TableOfContents_Section id={1} text={'Landing Page'} status={true}/>
            <TableOfContents_Section id={2} text={'Learn/Contribute'} status={false}/>
            <TableOfContents_Section id={3} text={'Footer'} status={false}/>
        </div>
    )
}

export default TableOfContents;

// <div className={classes.tocContainer} >
// {data.map((content)=> (
//     <tableOfContents_linesCard id={content.id} text={content.text}/>
// ))}
// </div>