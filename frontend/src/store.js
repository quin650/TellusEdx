import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/auth';
import profSlice from './reducers/profile';
import taskSlice from './reducers/tasks';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		prof: profSlice.reducer,
		task: taskSlice.reducer
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;