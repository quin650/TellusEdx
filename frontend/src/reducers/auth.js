	import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	navbarModalStatus: false,
	registrationModalStatus: false,
	isAuthenticated: false,
	user: null,
	loading: false,
	registered: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		navBarAsGuestOpenClose(state) {
			state.navbarModalStatus = !state.navbarModalStatus;
		},
		registerModalOpen(state) {
			state.registrationModalStatus = !state.registrationModalStatus;
		},
		registerModalClose(state) {
			state.registrationModalStatus = !state.registrationModalStatus;
		},
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