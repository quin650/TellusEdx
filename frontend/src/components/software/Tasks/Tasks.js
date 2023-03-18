import React from "react";
import TaskForm from "./TasksComponents/TasksForm";
import TasksList from "./TasksComponents/TasksList";
import classes from "./Tasks.module.css";

const Tasks = () =>{
    return (
    <div className={classes.form_container}>
        <div className={classes.form_containers}>
            < TaskForm />
        </div>
        <div className={classes.form_containers}>
            <TasksList/>
        </div>
    </div>
    );
}

export default Tasks;