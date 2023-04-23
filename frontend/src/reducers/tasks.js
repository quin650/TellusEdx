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
            state.tasks[0].push(task);
        },
        addTasksFail(state) {
            state;
        },
        loadTasksSuccess(state, action) {
            state.tasks.push(action.payload.tasks);
        },
        loadTasksFail(state) {
            state;
        },
        deleteTaskSuccess: (state, action) => {
            state.tasks = state.tasks[0].filter(task => task.id !== action.payload);
        },
        deleteTaskFail(state) {
            state;
        },
        updateTasksSuccess(state, action) {
            state.tasks.push(action.payload.tasks);
        },
        updateTasksFail(state) {
            state;
        },
    },
});

export const tasksActions  = taskSlice.actions;
export default taskSlice;