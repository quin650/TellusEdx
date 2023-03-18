import React from "react";
import { useSelector } from 'react-redux';
import TasksListItem from "./TasksListItem";
import classes from './TasksList.module.css';

const TasksList = () => {

const tasks = useSelector(state => state.todo.tasks);
const count = useSelector(state => state.todo.count);

    return (
        <ul className={classes.tasks_container}>
            {count > 0 && 
            tasks.map(task => (
                <TasksListItem
                    key={task.id}
                    id={task.id}
                    task_title={task.task_title}
                >
                    <div>
                        <div className={classes.task_name__section}>
                            <div className={classes.task_name__header}>
                                Task Title
                            </div>
                            <div className={classes.task_name}>
                                {task.task_title}
                            </div>
                        </div>
                    </div>
                </TasksListItem>
            ))}
            {count === 0 && <p>No todos</p>}
        </ul>
    );
};

export default TasksList;

// <div className={classes.task_name__section}>
// <div className={classes.task_name__header}>
//     Task Description
// </div>
// <div className={classes.task_name}>
//     {task.ta8sk_description}
// </div>
// </div>
// <div className={classes.task_name__section}>
// <div className={classes.task_name__header}>
//     Task Tags
// </div>
// <div className={classes.task_name}>
//     {task.task_tags}
// </div>
// </div>
// <div className={classes.task_name__section}>
// <div className={classes.task_name__header}>
//     Task Order
// </div>
// <div className={classes.task_name}>
//     {task.task_order}
// </div>
// </div>
// <div className={classes.task_name__section}>
// <div className={classes.task_name__header}>
//     Task Priority Level
// </div>
// <div className={classes.task_name}>
//     {task.task_priority_level}
// </div>
// </div>
// <div className={classes.task_name__section}>
// <div className={classes.task_name__header}>
//     Task Links
// </div>
// <div className={classes.task_name}>
//     {task.task_links}
// </div>
// </div>
// <div className={classes.task_name__section}>
// <div className={classes.task_name__header}>
//     Task Due Date
// </div>
// <div className={classes.task_name}>
//     {task.task_due_date}
// </div>
// </div>