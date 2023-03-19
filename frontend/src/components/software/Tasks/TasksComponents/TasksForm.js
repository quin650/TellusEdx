import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux"; 
// import { tasksActions } from "../../../../reducers/tasks";
import { create_user_profile_tasks } from "../../../../actions/profile";
import AddTaskButton from "./TasksUI/AddTaskButton";
import classes from './TasksForm.module.css';

const TaskForm = () => {
    const isValid = useState(true)
    const dispatch = useDispatch();
    const task_title = useRef('');
    const task_description = useRef('');
    const task_tags = useRef('');
    const task_order = useRef('');
    const task_priority_level = useRef('');
    const task_links = useRef('');
    // const task_due_date = useRef('');

    function submitHandler(event) {
        event.preventDefault();
        const tasks = {
            task_title: task_title.current.value,
            task_description: task_description.current.value,
            task_tags: task_tags.current.value,
            task_order: task_order.current.value,
            task_priority_level: task_priority_level.current.value,
            task_links: task_links.current.value,
            // task_due_date: task_due_date.current.value
        }
        console.log('tasks submitted via action', tasks);


        // dispatch(tasksActions.addTask(tasks));
        dispatch(create_user_profile_tasks(tasks));
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.inputForm_container}>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Title </label>
                    <input
                        type='text'
                        name='task_title'
                        ref={task_title}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Description </label>
                    <input
                        type='text'
                        name='task_description'
                        ref={task_description}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Tags </label>
                    <input
                        type='text'
                        name='task_tags'
                        ref={task_tags}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Order </label>
                    <input
                        type='text'
                        name='task_order'
                        ref={task_order}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Priority Level </label>
                    <input
                        type='text'
                        name='task_priority_level'
                        ref={task_priority_level}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Links </label>
                    <input
                        type='text'
                        name='task_links'
                        ref={task_links}
                    />
                </section>
                {/* <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Due Date </label>
                    <input
                        type='text'
                        name='task_due_date'
                        ref={task_due_date}
                    />
                </section> */}
                    <div className={classes["input_button__section"]}>
                        <AddTaskButton />
                    </div>
            </div>
        </form >
    );
};

export default TaskForm;