import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	registered: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		registerFail(state) {
			state.registered = false;
			state.isAuthenticated = false;
		},
		registerSuccess(state){
			state.registered = true;
			state.isAuthenticated = false;
		},
		authSuccess(state){
			state.isAuthenticated = true;
		},
		authFail(state){
			state.isAuthenticated = false;
		},
		loginSuccess(state){
			state.isAuthenticated = true;
		},
		loginFail(state){
			state.isAuthenticated = false;
		},
		logoutSuccess(state){
			state.isAuthenticated = false;
			state.registered = false;
		},
		logoutFail(state){
			state;
		},
		deleteUserSuccess(state){
			state.isAuthenticated = false;
		},
		deleteUserFail(state){
			state;
		},
	},
});

export const userActions = userSlice.actions;
export default userSlice;