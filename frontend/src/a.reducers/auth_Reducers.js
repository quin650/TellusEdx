import { createSlice } from '@reduxjs/toolkit';

const userInfoFromStorage = localStorage.getItem('userInfo') ?
	JSON.parse(localStorage.getItem('userInfo')) : null	

const initialState = {
	navbarMenuStatus: false,
	getStartedModalStatus: false,
	getStartedView: '',
	isAuthenticated: false,
	registered: false,
	registrationFeedback: '',
	loading: false,
    userInfo: userInfoFromStorage,
    error:'',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {

		navBarMenuOpen(state) {
			state.navbarMenuStatus = true;
		},
		navBarMenuClose(state) {
			state.navbarMenuStatus = false;
		},


		getStartedModalLogIn(state) {
			state.getStartedModalStatus = true;
			state.navbarMenuStatus = false;
			state.getStartedView = 'LogIn';
		},

		getStartedModalOpen(state) {
			state.getStartedModalStatus = true;
			state.navbarMenuStatus = false;
		},
		getStartedModalClose(state) {
			state.getStartedModalStatus = false;
			state.navbarMenuStatus = false;
		},



		registerModalClose(state) {
			state.getStartedModalStatus = false;
		},
		registerFail(state) {
			state.registered = false;
			state.isAuthenticated = false;
		},
		registerSuccess(state){
			state.registered = true;
			state.isAuthenticated = false;
			state.getStartedView = 'RegistrationSuccess'
		},
		registerFeedback(state){
			state.registrationFeedback = payload.success;
			console.log(payload.success);
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
        loginRequest(state){
            state.loading = true;
        },
        loginSuccess(state, action){
			state.isAuthenticated = true;
            state.loading = false;
            state.userInfo = action.payload
        },
        loginFail(state, action){
            state.loading = false;
            state.error = action.payload;
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

export const userReducerActions = userSlice.actions;
export default userSlice;