import React from "react";
import classes from './TasksListItem.module.css';

const TasksListItem = props => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <div className={classes.task_container}>
            <li onClick={deleteHandler}>
                {props.children}
            </li>
        </div>
    );
};

export default TasksListItem;