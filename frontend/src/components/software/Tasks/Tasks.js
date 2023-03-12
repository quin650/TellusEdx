import React, { useState }  from "react";
import TaskForm from "./TasksComponents/TasksForm";
import TasksUserFeedback from "./TasksComponents/TasksUI/TasksUserFeedback";
import TasksList from "./TasksComponents/TasksList";
import classes from "./Tasks.module.css";

const Tasks = () =>{
//List handling
    const [tasksList, SetTasksList] = useState([
        { taskName: 'Tasks Module CSS Layout/state', taskPriority: '1', id: 'h1' },
        { taskName: 'Tasks Module Redux', taskPriority: '2', id: 'h2' },
        { taskName: 'Tasks Module CRUD', taskPriority: '3', id: 'h3' }
    ])
    const addTaskHandler = (enteredTaskName, enteredTaskPriority) => {
        SetTasksList(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks.unshift({ taskName: enteredTaskName, taskPriority: enteredTaskPriority, id: Math.random().toString() });
            return updatedTasks;
        });
    };
    const deleteTaskHandler = taskId => {
        SetTasksList(prevTasks => {
            const updatedTasks = prevTasks.filter(task => task.id !== taskId);
            return updatedTasks;
        });
    };
//Error Handling
    const [errTaskName, SetErrTaskName] = useState('');
    const [errTaskPriority, SetErrTaskPriority] = useState('');
    const addInfoHandler = (enteredTaskName, enteredTaskPriority) => {
        SetErrTaskName(enteredTaskName);
        SetErrTaskPriority(enteredTaskPriority);
    };
    const [displayError, SetDisplayError] = useState('');
    const errorMessageHandler = (i) => {SetDisplayError(i);}
    const errorMessageHandler2 = (i) => {SetDisplayError(i);}
    const errorMessageHandler3 = () => {SetDisplayError('NoError');}
    let TasksUserFeedbackPopUP = '';
    if (displayError === 'Error') {
        TasksUserFeedbackPopUP = <TasksUserFeedback TaskName={errTaskName} TaskPriority={errTaskPriority} onErrorCheck2={errorMessageHandler2} />
    }
//Content handling
    let content = (<p className={classes.noContent}>No Tasks found. Maybe add one?</p>);
    if (tasksList.length > 0) {content = (<TasksList taskItems={tasksList} onDeleteTask={deleteTaskHandler} />)}
    return (
    <div className={classes.form_container} onClick={errorMessageHandler3}>
        <div className={classes.form_containers}>
            {TasksUserFeedbackPopUP}
            < TaskForm onAddTask={addTaskHandler} onAddInfo={addInfoHandler} onErrorCheck={errorMessageHandler} />
        </div>
        <div className={classes.form_containers}>
            {content}
        </div>
    </div>
    );
}

export default Tasks;