import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import AddTaskButton from "./TasksUI/AddTaskButton";
import DeleteTaskButton from "./TasksUI/DeleteTaskButton";
import { create_user_profile_tasks } from "../../../../a.actions/profile_Actions";
import { update_user_profile_tasks } from "../../../../a.actions/profile_Actions";
import classes from './TasksForm.module.css';

const TaskForm = (props) => {
    console.log('TaskForm')
    const isValid = useState(true);
    const dispatch = useDispatch();

    const updateID = props.updateID;
    const buttonText = props.buttonText;
    const deleteButton= props.deleteButton;
    // console.log('deleteButton: ', deleteButton)
    let buttonContent = "";
    if (deleteButton){
        console.log('TaskForm.if')
        buttonContent = <DeleteTaskButton updateID={props.updateID}/>
    } else {
        buttonContent ="";
    }


    const tasks_global_all = useSelector(state => state.task.tasks[0]);
    const tasks_global_by_ID = tasks_global_all?.filter(task => task.task_id == updateID);                                      //Optional Chaining: The syntax for optional chaining is the question mark (?) followed by a dot (.) after the property name or method call. If the property or method exists, it will be accessed normally. However, if the property or method does not exist, the code will not throw an error and instead return undefined.

    const task_title_global = tasks_global_by_ID?.[0]?.task_title || '';                                                        //This uses the nullish coalescing operator || to return an empty string '' if task_title is null or undefined.
    const task_description_global = tasks_global_by_ID?.[0]?.task_description || '';
    const task_tags_global = tasks_global_by_ID?.[0]?.task_tags || '';
    const task_order_global = tasks_global_by_ID?.[0]?.task_order || '';
    const task_priority_level_global = tasks_global_by_ID?.[0]?.task_priority_level || '';
    const task_links_global = tasks_global_by_ID?.[0]?.task_links || '';
    const task_due_date_global = tasks_global_by_ID?.[0]?.task_due_date || '';

    const task_title = useRef('');
    const task_description = useRef('');
    const task_tags = useRef('');
    const task_order = useRef('');
    const task_priority_level = useRef('');
    const task_links = useRef('');
    const task_due_date = useRef('');

    function submitHandler(e) {
        e.preventDefault();
        const tasks = {
            task_title: task_title.current.value,
            task_description: task_description.current.value,
            task_tags: task_tags.current.value,
            task_order: task_order.current.value,
            task_priority_level: task_priority_level.current.value,
            task_links: task_links.current.value,
            task_due_date: task_due_date.current.value,
            task_id: updateID                                                                                   //Task Due Date: YYYY-MM-DD (Only accepted format)
        }
        if (!updateID){
            console.log('TaskForm.if2')
            dispatch(create_user_profile_tasks(tasks));
            // console.log('clicked');
        } else {
            dispatch(update_user_profile_tasks(tasks));
            // console.log('clicked');
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.inputForm_container}>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Title </label>
                    <input
                        type='text'
                        placeholder={`${task_title_global}`}
                        name='task_title'
                        ref={task_title}
                        defaultValue={`${task_title_global}`}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Description </label>
                    <input
                        type='text'
                        placeholder={`${task_description_global}`}
                        name='task_description'
                        ref={task_description}
                        defaultValue={`${task_description_global}`}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Tags </label>
                    <input
                        type='text'
                        placeholder={`${task_tags_global}`}
                        name='task_tags'
                        ref={task_tags}
                        defaultValue={`${task_tags_global}`}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Order </label>
                    <input
                        type='text'
                        placeholder={`${task_order_global}`}
                        name='task_order'
                        ref={task_order}
                        defaultValue={`${task_order_global}`}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Priority Level </label>
                    <input
                        type='text'
                        placeholder={`${task_priority_level_global}`}
                        name='task_priority_level'
                        ref={task_priority_level}
                        defaultValue={`${task_priority_level_global}`}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Links </label>
                    <input
                        type='text'
                        placeholder={`${task_links_global}`}
                        name='task_links'
                        ref={task_links}
                        defaultValue={`${task_links_global}`}
                    />
                </section>
                <section className={`${classes['input_section']} ${!isValid && classes.invalid}`}>
                    <label> Task Due Date </label>
                    <input
                        type='text'
                        placeholder={`${task_due_date_global}`}
                        name='task_due_date'
                        ref={task_due_date}
                        defaultValue={`${task_due_date_global}`}
                    />
                </section>
                    <div className={classes["input_button__section"]}>
                        <AddTaskButton buttonText={buttonText}/>
                        {buttonContent}
                    </div>
            </div>
        </form >
    );
};

export default TaskForm;