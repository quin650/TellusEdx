import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    task_title: '',
    task_description: '',
    task_tags: '',
    task_order: '',
    task_priority_level: '',
    task_links: '',
    task_due_date: '',
};

const profTasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		loadUserProfileTasksSuccess(state, action) {
			state.username = action.payload.username;
            state.task_title = action.payload.tasks.task_title;
            state.task_description = action.payload.tasks.task_description;
            state.task_tags = action.payload.tasks.task_tags;
            state.task_order = action.payload.tasks.task_order;
            state.task_priority_level = action.payload.tasks.task_priority_level;
            state.task_links = action.payload.tasks.task_links;
            state.task_due_date = action.payload.tasks.task_due_date;
		},
        updateUserProfileTasksSuccess(state, action) {
			state.username = action.payload.username;
            state.task_title = action.payload.tasks.task_title;
            state.task_description = action.payload.tasks.task_description;
            state.task_tags = action.payload.tasks.task_tags;
            state.task_order = action.payload.tasks.task_order;
            state.task_priority_level = action.payload.tasks.task_priority_level;
            state.task_links = action.payload.tasks.task_links;
            state.task_due_date = action.payload.tasks.task_due_date;
		},
        loadUserProfileTasksFail(state) {
            state.username = '',
            state.task_title = '',
            state.task_description = '',
            state.task_tags = '',
            state.task_order = '',
            task_priority_level = '',
            task_links = '',
            task_due_date = ''
		},
        updateUserProfileTasksFail(state) {
			state;
		},
	},
});

export const profTasksActions  = profTasksSlice.actions;
export default profTasksSlice;