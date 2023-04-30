import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { load_user_profile_tasks } from "../../../../actions/profile";
import TasksListItem from "./TasksListItem";
import classes from './TasksList.module.css';

const TasksList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(load_user_profile_tasks());
    }, []);

    const tasks = useSelector(state => state.task.tasks);

    let tasksListIsEmpty = true;
    tasksListIsEmpty = !tasks[0]?.length; //Optional Chaining: The syntax for optional chaining is the question mark (?) followed by a dot (.) after the property name or method call. If the property or method exists, it will be accessed normally. However, if the property or method does not exist, the code will not throw an error and instead return undefined.

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