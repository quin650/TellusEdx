import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    tasks: [],
};
const taskSlice = createSlice({
	name: 'task',
	initialState,
    reducers: {
        addTaskSuccess: (state, action) => {
            const task = {
                task_id: action.payload.tasks.task_id,
                task_title: action.payload.tasks.task_title,
                task_description: action.payload.tasks.task_description,
                task_tags: action.payload.tasks.task_tags,
                task_order: action.payload.tasks.task_order,
                task_priority_level: action.payload.tasks.task_priority_level,
                task_links: action.payload.tasks.task_links,
                task_due_date: action.payload.tasks.task_due_date
                };
            console.log('task: ', task)
            state.tasks[0].push(task);
        },
        addTaskFail(state) {
            state;
        },
        loadTaskSuccess(state, action) {
            state.tasks.push(action.payload.tasks);
        },
        loadTaskFail(state) {
            state;
        },
        deleteTaskSuccess: (state, action) => {
        //The resulting array from .filter() is assigned back to state.tasks, effectively removing the task with the specified ID from the Redux state.
            state.tasks[0] = state.tasks[0].filter(task => task.task_id !== action.payload);
        },
        deleteTaskFail(state) {
            state;
        },
        updateTaskSuccess: (state, action) => {
            const task = {
                task_id: action.payload.tasks[0].task_id,
                task_title: action.payload.tasks[0].task_title,
                task_description: action.payload.tasks[0].task_description,
                task_tags: action.payload.tasks[0].task_tags,
                task_order: action.payload.tasks[0].task_order,
                task_priority_level: action.payload.tasks[0].task_priority_level,
                task_links: action.payload.tasks[0].task_links,
                task_due_date: action.payload.tasks[0].task_due_date
                };
            

            // The issue is here...
            // console.log('JSON.parse(JSON.stringify(state.tasks[0]))', JSON.parse(JSON.stringify(state.tasks[0])));
            const taskIndex = state.tasks[0].findIndex(task => task.task_id === action.payload.tasks[0].task_id)
            console.log('taskIndex: ', taskIndex);
            console.log('action.payload.tasks[0].task_id: ', action.payload.tasks[0].task_id);
            console.log('Task, pre-change: ', JSON.parse(JSON.stringify(state.tasks[0][taskIndex])));
            console.log('task: ', task);
            state.tasks[0][taskIndex] = task;
        },
        updateTaskFail(state) {
            state;
        },
    },
});

export const tasksActions  = taskSlice.actions;
export default taskSlice;