import React, { useState } from "react";
import AddTaskButton from "./TasksUI/AddTaskButton";
import classes from './TasksForm.module.css';

const TaskForm = props => {
    const [enteredTask, setEnteredTask] = useState('');
    const [enteredPriority, SetEnteredPriority] = useState('');
    const [isValid, SetIsValid] = useState(true);
    const taskInputChangeHandler = event => {setEnteredTask(event.target.value);};
    const taskPriorityChangeHandler = event => {SetEnteredPriority(event.target.value);};
    const Task = enteredTask;
    const Priority = enteredPriority;

    //If any of this logic results in a false, the form does not submit 
    // console.log('If any of this logic results in a false, the form does not submit')
    // console.log((Task.length === 0) + '   [NAME is blank]');
    // console.log((Priority.length === 0) + '    [AGE is  blank]');
    // console.log((Math.sign(Priority) !== -1) + '   [AGE is not a negative number]');
    // console.log((isNaN(Task[0]) === true) + '   [NAME does not start with a number]');
    // console.log(!isNaN(Priority) + '   [AGE is a number]');
    const formSubmitHandler = event => {
        event.preventDefault();
        if (
            (Task.length !== 0)                     /* NAME is not blank */
            && (Priority.length !== 0)              /* AGE is not blank */
            && (Number(Priority) !== 0)             /* AGE is not zero */
            && (Math.sign(Priority) !== -1)         /* AGE is not a negative number */
            && (isNaN(Task[0]) === true)            /* NAME does not start with a number */
            && (!isNaN(Priority))                   /* AGE is a number  */
        ) {
            SetIsValid(true);
            props.onAddTask(Task, Priority);
            props.onAddInfo(Task, Priority);
            props.onErrorCheck('NoError');
        } else {
            SetIsValid(false);
            props.onAddInfo(Task, Priority);
            props.onErrorCheck('Error');
        }
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={classes.inputForm_container}>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> TaskName </label>
                    <input
                        type="text"
                        onChange={taskInputChangeHandler}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Priority (1-5) </label>
                    <input
                        type="text"
                        max="100"
                        onChange={taskPriorityChangeHandler}
                    />
                    <div className={classes["input_button__section"]}>
                        <AddTaskButton />
                    </div>
                </section>
            </div>
        </form >
    );
};

export default TaskForm;