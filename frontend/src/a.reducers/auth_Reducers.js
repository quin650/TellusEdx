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
	passwordResetPassCodeEmail: 0,
	userInfo: userInfoFromStorage,

	//Verify Account
	verifyAccountPassCodeStatus_rdx: true,
	verifyAccountPassCodeFeedback_rdx: 'Verification Code sent to your email.',
	
	//Reset Password Email PassCode
	resetPasswordEmailPassCodeStatus_rdx: true,
	resetPasswordEmailPassCodeFeedback_rdx: 'Enter your email to receive a reset code.',
	
	//Reset Your Password
	resetPasswordChangeStatus_rdx: true,
	resetPasswordChangeFeedback_rdx: 'Enter Verification Code and New Password',
	passCodeStatus_rdx: true,
	passCodeFeedback_rdx: '',
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
			state.getStartedView = 'LogInModal';
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
			state.getStartedView = 'VerifyAccountModal';
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
		verifyAccountPassCodeSuccess(state){
			state.getStartedView = 'VerificationSuccessModal';
			state.generalFeedback_rdx = '';
		},		
		verifyAccountPassCodeFail(state, action){
			state.verifyAccountPassCodeStatus_rdx = false;
			state.verifyAccountPassCodeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
		},
		verifyAccountPassCodeReset(state){
			state.verifyAccountPassCodeStatus_rdx = true;
		},
		verifyAccountPassCodeResent(state, action){
			state.verifyAccountPassCodeStatus_rdx = true;
			state.verifyAccountPassCodeFeedback_rdx = action.payload
			state.generalFeedback_rdx = action.payload;
			state.verificationEmail += 1;
		},
		verifyAccountPassCodeResentFailure(state){
			state.verifyAccountPassCodeStatus_rdx = false;
			state.verifyAccountPassCodeFeedback_rdx = action.payload
			state.generalFeedback_rdx = action.payload;
			state.verificationEmailFailureStatus = 'Failed'
		},
		// Verification Success
		GoTo_LogInModal_rdx(state){
			state.getStartedView = 'LogInModal';
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
		passwordResetPassCodeEmailSentSuccess(state, action){
			state.passwordResetPassCodeEmail += 1;
			state.resetPasswordEmailPassCodeStatus_rdx = true;
			state.resetPasswordEmailPassCodeFeedback_rdx = action.payload;
			state.getStartedView = 'ResetPasswordEnterPassCodeModal';
		},
		passwordResetPassCodeEmailSentFailure(state, action){
			state.resetPasswordEmailPassCodeStatus_rdx = false;
			state.resetPasswordEmailPassCodeFeedback_rdx = action.payload;
		},
		passwordResetPassCodeEmailResetStatus(state){
			state.resetPasswordEmailPassCodeStatus_rdx = true;
		},

		// ResetYourPassword
		passwordResetSuccess(state){
			state.resetPasswordChangeStatus_rdx = true;
			state.resetPasswordChangeFeedback_rdx = '';
			state.passCodeStatus_rdx = true;
			state.passCodeFeedback_rdx = '';
			state.getStartedView = 'PasswordChangedSuccessfullyModal';
		},
		passwordResetFailurePasswordIssue(state, action){
			state.resetPasswordChangeStatus_rdx = false;
			state.resetPasswordChangeFeedback_rdx = action.payload;
		},
		passwordResetFailurePassCodeIssue(state, action){
			state.passCodeStatus_rdx = false;
			state.passCodeFeedback_rdx = action.payload;
		},
		passwordResetFailureIssue(state, action){
			state.resetPasswordChangeStatus_rdx = false;
			state.passCodeStatus_rdx = false;
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