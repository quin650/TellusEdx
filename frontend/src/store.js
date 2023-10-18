import { configureStore } from '@reduxjs/toolkit';
import userSlice from './a.reducers/auth_Reducers';
import profSlice from './a.reducers/profile_Reducers';
import taskSlice from './a.reducers/tasks_Reducers';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		prof: profSlice.reducer,
		task: taskSlice.reducer
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;