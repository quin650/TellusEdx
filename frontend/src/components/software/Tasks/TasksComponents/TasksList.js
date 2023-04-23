import React from "react";
import { useSelector } from 'react-redux';
import TasksListItem from "./TasksListItem";
import classes from './TasksList.module.css';

const TasksList = () => {
    const tasks = useSelector(state => state.task.tasks);
    let tasksListIsEmpty = true;
    try{
        if (typeof tasks[0] === 'undefined' || !Array.isArray(tasks[0]) || tasks[0].length === 0) {
            tasksListIsEmpty = true;
        } else {
            tasksListIsEmpty = false;
        }
    } catch(error){
        if (typeof tasks[0] === 'undefined') {
            tasksListIsEmpty = true;
        }
    }

    return (
        <ul className={classes.tasks_container}>
        {tasksListIsEmpty ? (
            <p>No todos</p>
        ) : (
            tasks[0].map(task => (
                <TasksListItem
                    key={task.task_id}
                    id={task.task_id}
                    task_title={task.task_title}
                    user={task.user}
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
                        <div className={classes.task_name__section}>
                            <div className={classes.task_name__header}>
                                Task Description
                            </div>
                            <div className={classes.task_name}>
                                {task.task_description}
                            </div>
                        </div>
                        <div className={classes.task_name__section}>
                            <div className={classes.task_name__header}>
                                Task Tags
                            </div>
                            <div className={classes.task_name}>
                                {task.task_tags}
                            </div>
                        </div>
                            <div className={classes.task_name__header}>
                                Task Order
                            </div>
                            <div className={classes.task_name}>
                                {task.task_order}
                            </div>
                            <div className={classes.task_name__header}>
                                Task Priority Level
                            </div>
                            <div className={classes.task_name}>
                                {task.task_priority_level}
                            </div>
                            <div className={classes.task_name__header}>
                                Task Links
                            </div>
                            <div className={classes.task_name}>
                                {task.task_links}
                            </div>
                            <div className={classes.task_name__header}>
                                Task Due Date
                            </div>
                            <div className={classes.task_name}>
                                {task.task_due_date}
                            </div>
                        </div>
                </TasksListItem>
            ))
        )}
    </ul>
    )
};  

export default TasksList;

