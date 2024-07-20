import React, { useState, useEffect }  from 'react'
import TableOfContents_Section from './TableOfContents_section'
import classes from './TableOfContents_Section.modules.css'

const TableOfContents = (props) => {

    // Event Listeners
    useEffect(() => {
        const altOptionPressedKeyDown = (event) => {
            if (event.altKey || event.key === 'Alt' || event.key === 'Option') {
                setAltOptionKeyPressed(true);
            }
        };
        const altOptionPressedKeyUp = (event) => {
            if (!event.altKey || event.key === 'Alt' || event.key === 'Option') {
                setAltOptionKeyPressed(false);
            }
        };

        document.addEventListener('keydown', altOptionPressedKeyDown);
        document.addEventListener('keyup', altOptionPressedKeyUp);

        // Clean up the event listeners on component unmount
        return () => {
            document.removeEventListener('keydown', altOptionPressedKeyDown);
            document.removeEventListener('keyup', altOptionPressedKeyUp);
        };
    }, []);

    const [altOptionKeyPressed, setAltOptionKeyPressed] = useState(false);
    const { contents, activePage } = props;

    return (
        <div className={`${classes['tocContainer']} ${altOptionKeyPressed && classes.altOptionKeyPressed}`}>
            {contents.map((content, index) => (
                <TableOfContents_Section 
                    key={index}
                    id={index} 
                    text={content} 
                    goto={content} 
                    status={activePage === content}
                />
            ))}
        </div>
    )
}

export default TableOfContents;

