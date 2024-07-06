import React from 'react'
import TableOfContents_SubSection from './TableOfContents_SubSection'
import classes from './TableOfContents.modules.css'
import data from './tocData'



const TableOfContents = () => {

    return (
        <div className={classes.tocContainer} >
            <TableOfContents_SubSection id={1} text={'Landing Page'} status={true}/>
            <TableOfContents_SubSection id={2} text={'Learn/Contribute'} status={false}/>
            <TableOfContents_SubSection id={3} text={'Footer'} status={false}/>
        </div>
    )
}

export default TableOfContents;

// <div className={classes.tocContainer} >
// {data.map((content)=> (
//     <tableOfContents_linesCard id={content.id} text={content.text}/>
// ))}
// </div>