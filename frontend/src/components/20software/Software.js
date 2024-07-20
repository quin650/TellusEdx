import React from "react";
import Tasks from "./Tasks/Tasks";
import classes from './Software.module.css';

const Software = () => {
    console.log('Software')
    return (
        <div className={classes.software_container}>
            <div className={classes.tasks_container}>
                <Tasks />
            </div>
        </div>
    );
};

export default Software;