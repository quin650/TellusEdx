import React from "react";
import { useDispatch } from "react-redux"; 
import { delete_user_profile_task } from "../../../../actions/profile";
import classes from './TasksListItem.module.css';

const TasksListItem = props => {
    const dispatch = useDispatch();
    const remove = () => {
        dispatch(delete_user_profile_task(props.id))
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