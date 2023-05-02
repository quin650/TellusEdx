import React from "react";
import classes from './TasksListItem.module.css';

const TasksListItem = (props) => {
    const getTaskId = () => {
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