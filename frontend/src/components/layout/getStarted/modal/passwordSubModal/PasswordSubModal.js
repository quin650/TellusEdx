import React from 'react'
import classes from './PasswordSubModal.module.css'


const PasswordSubModal = () => {

    return (
        <div className={classes.subModal}>
            <div className={classes.subModalContainer}>
                <span>At least one: </span>
                
                    <ul className={classes.row}>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <ul className={classes.row}>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                    <ul className={classes.row}>
                        <li>5</li>
                    </ul>
            </div>
        </div>
    )
}

export default PasswordSubModal
