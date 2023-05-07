import React from "react";
import { useDispatch } from "react-redux"; 
import { delete_user_profile_task } from "../../../../../actions/profile";
import classes from  './DeleteTaskButton.module.css';


const DeleteTaskButton = (props) => {
    const dispatch = useDispatch();
    const updateID = props.updateID;

    const deleteTask = () => {
        console.log('Clicked delete button for taskID:', updateID);
        console.log('id datatype: ', typeof(updateID))
        dispatch(delete_user_profile_task(updateID));
    }

    return (
        <div className={classes.button_format} >
            <button onClick={e => deleteTask(e)}>
                Delete
            </button>
        </div>
    );
};

export default DeleteTaskButton;