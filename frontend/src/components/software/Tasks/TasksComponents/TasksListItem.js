import React from "react";
import classes from './TasksListItem.module.css';

const TasksListItem = (props) => {
    console.log('TasksListItem')
    const getTaskId = () => {
        console.log('TasksListItem.getTaskID')
        props.StoreIdToUpdate(props.id);
    }

    return (
        <div className={classes.task_container} onClick={e => getTaskId(e)}>
            <li>
                {props.children}
            </li>
        </div>
    );
};

export default TasksListItem;