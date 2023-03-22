import React from "react";
import { useDispatch } from "react-redux"; 
import { tasksActions } from "../../../../reducers/tasks";
import classes from './TasksListItem.module.css';

const TasksListItem = props => {
    const dispatch = useDispatch();
    const remove = (id) => {
        dispatch(tasksActions.removeTask(props.id))
    }

    return (
        <div className={classes.task_container} onClick={e => remove(e)}>
            <li>
                {props.children}
            </li>
        </div>
    );
};

export default TasksListItem;