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
	verificationEmail: 0,
	verificationEmailFailureStatus: '',
	loading: false,
    loginError:'',
	profile_id: '',
    username: '',
	email: '',
    name: '',
    isAdmin: '',
    token: '',
	isActive: false,
	pinActivationFeedback_rdx: 'Check your email to confirm your account.',
	pinActivationStatus_rdx: true,
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
		registerFail(state, action){
			state.registered = false;
			state.isAuthenticated = false;
			state.loading = false;
			state.registrationError = action.payload;
		},
		registerErrorReset(state){
			state.registrationError = "";
		},



		verificationEmailSent(state, action){
			state.verificationEmail += 1;
			state.pinActivationFeedback_rdx = action.payload
			state.pinActivationStatus_rdx = false;
		},
		verificationEmailSentFailure(state){
			state.verificationEmailFailureStatus = 'Failed'
		},



		verifyPinSuccess(state, action){
			state.isActive = true;
			state.getStartedView = 'VerificationSuccess';
		},
		verifyPinFail(state, action){
			state.isActive = false;
			state.pinActivationFeedback_rdx = action.payload;
			state.pinActivationStatus_rdx = false;
		},
		verifyPinReset(state){
			state.pinActivationFeedback_rdx = 'Check your email to confirm your account.';
			state.pinActivationStatus_rdx = true;
		},
		verifyPinStatusReset(state){
			state.pinActivationStatus_rdx = true;
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
		authSuccess(state){
			state.isAuthenticated = true;
		},
		authFail(state){
			state.isAuthenticated = false;
		},
		tokenSuccess(state, action){
			state.token = action.payload;
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