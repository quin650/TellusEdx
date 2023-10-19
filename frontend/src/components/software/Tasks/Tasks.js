import React, {useState} from "react";
import TaskForm from "./TasksComponents/TasksForm";
import TasksList from "./TasksComponents/TasksList";
import classes from "./Tasks.module.css";

const Tasks = () =>{
    console.log('Tasks')
    const [updateID, setUpdateID] = useState("");
    const [ buttonText, SetButtonText ] = useState('Add Task');
    const [ deleteButton, SetDeleteButton ] = useState(false);
    const StoreIdToUpdate = (taskID) => {
        console.log('Tasks.StoreIdToUpdate')
        setUpdateID(taskID);
        SetButtonText('Update');
        SetDeleteButton(true);
    }

    return (
    <div className={classes.form_container}>
        <div className={classes.form_containers}>
            < TaskForm updateID={updateID} buttonText={buttonText} deleteButton={deleteButton}/>
        </div>
        <div className={classes.form_containers}>
            <TasksList StoreIdToUpdate={StoreIdToUpdate} />
        </div>
    </div>
    );
}

export default Tasks;