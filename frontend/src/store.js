import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/auth';
import profSlice from './reducers/profile';
import todoSlice from './reducers/tasks';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		prof: profSlice.reducer,
		todo: todoSlice.reducer
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;