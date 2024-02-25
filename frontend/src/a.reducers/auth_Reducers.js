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
	userInfo: userInfoFromStorage,

	//Verify Your Account
	verifyYourAccountPinStatus_rdx: true,
	verifyYourAccountPinFeedback_rdx: 'Verification Code sent to your email.',
	
	//Reset Password
	resetPasswordStatus_rdx: true,
	resetPasswordFeedback_rdx: 'Enter your email to receive a reset code.',
	
	//Reset Your Password
	resetYourPasswordStatus_rdx: true,
	ResetYourPasswordFeedback_rdx: '',
	pinStatus_rdx: true,
	pinFeedback_rdx: '',

};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {

		// NavBar 
		navBarMenuOpen(state) {
			state.navbarMenuStatus = true;
		},
		navBarMenuClose(state) {
			state.navbarMenuStatus = false;
		},
		// Modal
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
		// Registration
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
		// Verify Your Account
		verifyYourAccountPinSuccess(state){
			state.getStartedView = 'VerificationSuccess';
			state.generalFeedback_rdx = '';
		},

		
		verifyYourAccountPinFail(state, action){
			state.verifyYourAccountPinStatus_rdx = false;
			state.verifyYourAccountPinFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
		},
		verifyYourAccountPinReset(state){
			state.verifyYourAccountPinStatus_rdx = true;
		},

		verifyYourAccountPinResent(state, action){
			state.verifyYourAccountPinStatus_rdx = true;
			state.verifyYourAccountPinFeedback_rdx = action.payload
			state.generalFeedback_rdx = action.payload;
			state.verificationEmail += 1;
		},
		verifyYourAccountPinResentFailure(state){
			state.verifyYourAccountPinStatus_rdx = false;
			state.verifyYourAccountPinFeedback_rdx = action.payload
			state.generalFeedback_rdx = action.payload;
			state.verificationEmailFailureStatus = 'Failed'
		},
		// Log In
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
		// Authentication
		authSuccess(state){
			state.isAuthenticated = true;
		},
		authFail(state){
			state.isAuthenticated = false;
		},
		tokenSuccess(state, action){
			state.token = action.payload;
		},
		// ResetPassword
		passwordResetPinEmailSentSuccess(state){
			state.passwordResetPinEmail += 1;
			state.resetPasswordStatus_rdx = true;
			state.resetPasswordFeedback_rdx = action.payload
			state.getStartedView = 'ResetPasswordPageReceivedPin';
		},
		passwordResetPinEmailSentFailure(state, action){
			state.resetPasswordStatus_rdx = false;
			state.resetPasswordFeedback_rdx = action.payload;
		},
		passwordResetPinEmailResetStatus(state){
			state.resetPasswordStatus_rdx = true;
		},

		// ResetYourPassword
		passwordResetSuccess(state){
			state.resetYourPasswordStatus_rdx = true;
			state.ResetYourPasswordFeedback_rdx = '';
			state.pinStatus_rdx = true;
			state.pinFeedback_rdx = '';
			state.getStartedView = 'PasswordChanged';
		},
		passwordResetFailurePasswordIssue(state, action){
			state.resetYourPasswordStatus_rdx = false;
			state.ResetYourPasswordFeedback_rdx = action.payload;
		},
		passwordResetFailurePassCodeIssue(state, action){
			state.pinStatus_rdx = false;
			state.pinFeedback_rdx = action.payload;
		},
		passwordResetFailurePassCodeIssue(state, action){
			state.resetYourPasswordStatus_rdx = false;
			state.pinStatus_rdx = false;
			state.generalFeedback_rdx = action.payload;
		},

		//Delete User
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