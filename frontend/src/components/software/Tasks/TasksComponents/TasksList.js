import React from "react";
import { useSelector } from 'react-redux';
import TasksListItem from "./TasksListItem";
import classes from './TasksList.module.css';

const TasksList = () => {

const tasks = useSelector(state => state.task.tasks);
// console.log('tasks: ', tasks)
const tasksListIsEmpty = tasks.length == 0;
// console.log('tasksListIsEmpty: ', tasksListIsEmpty)

    return (
        <ul className={classes.tasks_container}>
            {!tasksListIsEmpty && 
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
                    </div>
                </TasksListItem>
            ))}
            {tasksListIsEmpty === 0 && <p>No todos</p>}
        </ul>
    );
};  

export default TasksList;

