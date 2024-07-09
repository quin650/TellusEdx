import React, { useState }  from 'react'
import TableOfContents_Section from './TableOfContents_section'
import classes from './TableOfContents_Section.modules.css'
import data from './tocData'

const TableOfContents = () => {

    // Event Listeners
    const altOptionPressedKeyDown = (event) => {
        if (event.altKey || event.key === 'Alt' || event.key === 'Option') {
            setAltOptionKeyPressed(true)
        }
    };
    const altOptionPressedKeyUp = (event) => {
        if (!event.altKey || event.key === 'Alt' || event.key === 'Option') {
            setAltOptionKeyPressed(false)
        }
    };
    document.addEventListener('keydown', altOptionPressedKeyDown)
    document.addEventListener('keyup', altOptionPressedKeyUp)

    const [altOptionKeyPressed, setAltOptionKeyPressed] = useState(false);
    return (
        <div className={`${classes['tocContainer']} ${altOptionKeyPressed && classes.altOptionKeyPressed}`}>
            <TableOfContents_Section id={1} goto={'landingPage'} text={'Landing Page'} status={true}/>
            <TableOfContents_Section id={2} goto={'learn/Contribute'} text={'Learn/Contribute'} status={false}/>
            <TableOfContents_Section id={3} goto={'footer'} text={'Footer'} status={false}/>
        </div>
    )
}

export default TableOfContents;

// <div className={classes.tocContainer} >
// {data.map((content)=> (
//     <tableOfContents_linesCard id={content.id} text={content.text}/>
// ))}
// </div>