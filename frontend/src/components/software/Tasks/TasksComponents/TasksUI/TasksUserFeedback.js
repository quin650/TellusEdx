import React from "react";
import classes from './TasksUserFeedback.module.css';

const TasksUserFeedback = (props) => {
    let errorMessage = ''
    if ((props.TaskName.length === 0) && (props.TaskPriority.length === 0)) {
        errorMessage = 'Please Enter a TaskName and TaskPriority.';                 /* if NAME is blank & if AGE is blank */
    } else if ((props.TaskName.length === 0)) {
        errorMessage ='Please Enter a TaskName.';                                   /* if NAME is blank */
    } else if ((props.TaskPriority.length === 0)) {
        errorMessage ='Please Enter an TaskPriority.';                              /* if AGE is blank */
    } else if ((Number(props.TaskPriority) === 0)) {
        errorMessage ='Please Enter an TaskPriority not equal to zero.';            /* if AGE is zero */
    } else if (isNaN(props.TaskPriority)) {
        errorMessage ='Please Enter a number for TaskPriority.';                    /* NAME is does not start with a number */
    } else if (isNaN(props.TaskName[0]) !== true) {
        errorMessage ='Please Enter a TaskName starting with an Alpha Character';   /* NAME is does not start with a number */
    } else {
        errorMessage = '';                                                          /*  NAME does not start with a letter*/
    };
    const onButtonClick = () => { props.onErrorCheck2('NoError');}

    return (
        <div className={classes.error_msg}>
            <div className={classes.head_Desc}>
                Invalid Input
            </div>
            <p>
                {errorMessage}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </p>
            <div className={classes.error_msg__button}>
                <button onClick={onButtonClick}>Ok</button>
            </div>
        </div>
    );
};

export default TasksUserFeedback;