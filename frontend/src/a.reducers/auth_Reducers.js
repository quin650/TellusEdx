import { createSlice } from '@reduxjs/toolkit';

const userInfoFromStorage = localStorage.getItem('userInfo') ?
	JSON.parse(localStorage.getItem('userInfo')) : null	

const initialState = {
	navbarMenuStatus: false,
	getStartedModalStatus: false,
	getStartedView: 'CreateAccount',
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
        // logoutSuccess(state){
        //     state;
        // }, 



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