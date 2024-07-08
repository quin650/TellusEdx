import React, { useState }  from 'react'
import TableOfContents_Section from './TableOfContents_section'
// import classes from './1TableOfContents.modules.css'
import classes from './TableOfContents_Section.modules.css'
import data from './tocData'



const TableOfContents = () => {
    document.addEventListener('keydown', function(event) {
        if (event.altKey || event.key === 'Alt' || event.key === 'Option') {
            console.log('Alt/Option key is pressed.');
            setIsPressed(true)
        }
    });

    document.addEventListener('keyup', function(event) {
        if (!event.altKey || event.key === 'Alt' || event.key === 'Option') {
            console.log('Alt/Option key is released.');
            setIsPressed(false)
        }
    });


    const [isPressed, setIsPressed] = useState(false);
    return (
        <div className={`${classes['tocContainer']} ${isPressed && classes.isPressed}`}>
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