import React from "react";
import TasksListItem from "./TasksListItem";
import classes from './TasksList.module.css';

const TasksList = props => {
    return (
        <ul className={classes.tasks_container}>
            {props.taskItems.map(task => (
                <TasksListItem
                    key={task.id}
                    id={task.id}
                    onDelete={props.onDeleteTask}
                >
                    <div>
                        <div className={classes.task_name__section}>
                            <div className={classes.task_name__header}>
                                Task Name
                            </div>
                            <div className={classes.task_name}>
                                {task.taskName}
                            </div>
                        </div>

                        <div className={classes.task_pri__section}>
                            <div className={classes.task_pri__header}>
                                Task Priority
                            </div>
                            <div className={classes.task_pri}>
                                {task.taskPriority}
                            </div>
                        </div>
                    </div>
                </TasksListItem>
            ))}
        </ul>
    );
};

export default TasksList;