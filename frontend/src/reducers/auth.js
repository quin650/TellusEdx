	import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	navbarMenuStatus: false,
	getStartedModalStatus: false,
	//logIn_True_CreateAccount_False: false,
	getStartedView: 'CreateAccount',
	isAuthenticated: false,
	user: null,
	loading: false,
	registered: false,
	registrationFeedback: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// navBarAsGuestOpenClose(state) {
		// 	state.navbarModalStatus = !state.navbarModalStatus;
		// },
		navBarMenuOpen(state) {
			state.navbarMenuStatus = true;
		},
		navBarMenuClose(state) {
			state.navbarMenuStatus = false;
		},
		//getStartedModalInnerToggle_logInTrue_CreateAccountFalse
		getStartedModalCreateAccount(state) {
			state.getStartedView = 'CreateAccount';
		},
		getStartedModalLogIn(state) {
			state.getStartedView = 'LogIn';
		},
		getStartedModalRegistrationSuccess(state) {
			state.getStartedView = 'RegistrationSuccess'
		},
		getStartedModalResetPassword(state) {
			state.getStartedView = 'ResetPassword'
		},
		getStartedModalOpen(state) {
			state.getStartedModalStatus = true;
		},
		getStartedModalClose(state) {
			state.getStartedModalStatus = false;
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