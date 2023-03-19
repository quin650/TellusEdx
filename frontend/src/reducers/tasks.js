import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    tasks: [],
};
const todoSlice = createSlice({
	name: 'todo',
	initialState,
reducers: {
    addTask: (state, action) => {
        const todo = {
            id: Math.random().toString(),
            task_title: action.payload.task_title,
            task_description: action.payload.task_description,
            task_tags: action.payload.task_tags,
            task_order: action.payload.task_order,
            task_priority_level: action.payload.task_priority_level,
            task_links: action.payload.task_links,
            // task_due_date: action.payload.task_due_date
            };
        state.tasks.push(todo);
        state.count += 1;
        },
    removeTask: (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
        state.count -= 1;
        },
    updateUserProfileTasksFail(state) {
        state;
        },
    },
});

export const tasksActions  = todoSlice.actions;
export default todoSlice;