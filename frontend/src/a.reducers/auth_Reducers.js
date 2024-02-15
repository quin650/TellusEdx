import { createSlice } from '@reduxjs/toolkit';

const userInfoFromStorage = localStorage.getItem('userInfo') ?
	JSON.parse(localStorage.getItem('userInfo')) : null	

const initialState = {
	navbarMenuStatus: false,
	getStartedModalStatus: false,
	getStartedView: '',
	isAuthenticated: false,
	registered: false,
	registrationError: '',
	loading: false,
    loginError:'',
	profile_id: '',
    username: '',
	email: '',
    name: '',
    isAdmin: '',
    token: '',
	isActive: false,
	activateFeedback: '',
	userInfo: userInfoFromStorage,
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
		registerSuccess(state, action){
			state.registered = true;
			state.isAuthenticated = false;
			state.loading = false;
			state.getStartedView = 'VerifyYourAccount';
			state.userInfo = action.payload
		},
		activateSuccess(state, action){
			state.isActive = true;
			state.activateFeedback = action.payload.success;
			state.getStartedView = 'VerificationSuccess';
		},
		activateFail(state, action){
			state.isActive = false;
			state.activateFeedback = action.payload.error;
		},
		registerFail(state, action){
			state.registered = false;
			state.isAuthenticated = false;
			state.loading = false;
			state.registrationError = action.payload
		},
		registerErrorReset(state){
			state.registrationError = ""
		},
		authSuccess(state){
			state.isAuthenticated = true;
		},
		authFail(state){
			state.isAuthenticated = false;
		},
		tokenSuccess(state, action){
			state.token = action.payload;
		},
        loginRequest(state){
            state.loading = true;
        },
        loginSuccess(state, action){
			state.isAuthenticated = true;
            state.loading = false;
            state.userInfo = action.payload;
			state.getStartedModalStatus = false;
        },
        loginFail(state, action){
            state.loading = false;
            state.loginError = action.payload;
        },
		loginErrorReset(state){
			state.loginError = '';
		},
		logoutSuccess(state){
			state.isAuthenticated = false;
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