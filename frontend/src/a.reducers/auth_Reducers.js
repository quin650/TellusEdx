import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
	navbarMenuStatus: false,
	navbarSearchMenuStatus: false,
	navbarNotesMenuStatus: false,

	getStartedModalStatus: false,
	getStartedView: "",
	sideBar_Left_TOC_isOpen_Rdx: true,
	SideBar_Left_TOC_AllowWindowResize_rdx: true,
	languageSettingsModalStatus: false,
	languageCurrent_rdx: "English",
	activeFlag: "../../../../static/images/countries/1UnitedStates.png",
	isDarkMode: false,
	isAuthenticated: false,
	isDemoView: false,
	isDashboardFullScreen: true,
	registered: false,
	registrationError: "",
	verificationEmail: 0,
	verificationEmailFailureStatus: "",
	loading: false,
	loginError: "",
	profile_id: "",
	username: "",
	email: "",
	name: "",
	isAdmin: "",
	token: "",
	passwordResetPassCodeEmail: 0,
	userInfo: userInfoFromStorage,

	//Verify Account
	verifyAccountPassCodeStatus_rdx: true,
	verifyAccountPassCodeFeedback_rdx: "Verification Code sent to your email.",

	//Reset Password Email PassCode
	resetPasswordEmailPassCodeStatus_rdx: true,
	resetPasswordEmailPassCodeFeedback_rdx: "Enter your email to receive a reset code.",

	//Reset Your Password
	resetPasswordChangeStatus_rdx: true,
	resetPasswordChangeFeedback_rdx: "Enter Verification Code and New Password",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		// NavBar
		setDemoView(state) {
			state.isDemoView = true;
		},
		setRegularView(state) {
			state.isDemoView = false;
		},
		navBarMenuToggleOpenClose(state) {
			state.navbarMenuStatus = !state.navbarMenuStatus;
		},

		navBarMenuOpen(state) {
			state.navbarMenuStatus = true;
		},
		navBarMenuClose(state) {
			state.navbarMenuStatus = false;
		},

		navBarSearchMenuOpen(state) {
			state.navbarSearchMenuStatus = true;
			state.navbarMenuStatus = false;
		},
		navBarSearchMenuClose(state) {
			state.navbarSearchMenuStatus = false;
		},

		navBarNotesMenuOpen(state) {
			state.navbarNotesMenuStatus = true;
			state.navbarMenuStatus = false;
		},
		navBarNotesMenuClose(state) {
			state.navbarNotesMenuStatus = false;
		},

		// Modal
		getStartedModalLogIn(state) {
			state.getStartedModalStatus = true;
			state.navbarMenuStatus = false;
			state.getStartedView = "LogInModal";
		},
		getStartedModalCreateAccount(state) {
			state.getStartedModalStatus = true;
			state.navbarMenuStatus = false;
			state.getStartedView = "CreateAccountModal";
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
		registerSuccess(state, action) {
			state.registered = true;
			state.isAuthenticated = false;
			state.loading = false;
			state.getStartedView = "VerifyAccountModal";
			state.userInfo = action.payload;
		},
		registerFail(state, action) {
			state.registered = false;
			state.isAuthenticated = false;
			state.loading = false;
			state.registrationError = action.payload;
		},
		registerErrorReset(state) {
			state.registrationError = "";
		},

		// Verify Your Account
		verifyAccountPassCodeSuccess(state) {
			state.getStartedView = "VerificationSuccessModal";
			state.generalFeedback_rdx = "";
		},
		verifyAccountPassCodeFail(state, action) {
			state.verifyAccountPassCodeStatus_rdx = false;
			state.verifyAccountPassCodeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
		},
		verifyAccountPassCodeReset(state) {
			state.verifyAccountPassCodeStatus_rdx = true;
		},
		verifyAccountPassCodeResent(state, action) {
			state.verifyAccountPassCodeStatus_rdx = true;
			state.verifyAccountPassCodeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
			state.verificationEmail += 1;
		},
		verifyAccountPassCodeResentFailure(state) {
			state.verifyAccountPassCodeStatus_rdx = false;
			state.verifyAccountPassCodeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
			state.verificationEmailFailureStatus = "Failed";
		},

		// Verification Success
		GoTo_LogInModal_rdx(state) {
			state.getStartedView = "LogInModal";
		},

		// Log In
		loginRequest(state) {
			state.loading = true;
		},
		loginSuccess(state, action) {
			state.isAuthenticated = true;
			state.loading = false;
			state.userInfo = action.payload;
			state.getStartedModalStatus = false;
		},
		loginFail(state, action) {
			state.loading = false;
			state.loginError = action.payload;
		},
		loginErrorReset(state) {
			state.loginError = "";
		},

		// Log Out
		logoutSuccess(state) {
			state.isAuthenticated = false;
		},
		logoutFail(state) {
			state;
		},

		// Authentication
		authSuccess(state) {
			state.isAuthenticated = true;
		},
		authFail(state) {
			state.isAuthenticated = false;
		},
		tokenSuccess(state, action) {
			state.token = action.payload;
		},

		// Reset Password - Email PassCode
		passwordResetPassCodeEmailSentSuccess(state, action) {
			state.passwordResetPassCodeEmail += 1;
			state.resetPasswordEmailPassCodeStatus_rdx = true;
			state.resetPasswordEmailPassCodeFeedback_rdx = action.payload;
			state.getStartedView = "ResetPasswordEnterPassCodeModal";
		},
		passwordResetPassCodeEmailSentFailure(state, action) {
			state.resetPasswordEmailPassCodeStatus_rdx = false;
			state.resetPasswordEmailPassCodeFeedback_rdx = action.payload;
		},
		passwordResetPassCodeEmailResetStatus(state) {
			state.resetPasswordEmailPassCodeStatus_rdx = true;
		},

		// Reset Password - Change
		passwordResetSuccess(state) {
			state.resetPasswordChangeStatus_rdx = true;
			state.resetPasswordChangeFeedback_rdx = "";
			state.passCodeStatus_rdx = true;
			state.passCodeFeedback_rdx = "";
			state.getStartedView = "PasswordChangedSuccessfullyModal";
		},
		passwordResetFailurePasswordIssue(state, action) {
			state.resetPasswordChangeStatus_rdx = false;
			state.resetPasswordChangeFeedback_rdx = action.payload; //gets fed into general feedback in frontend
		},
		passwordResetFailurePassCodeIssue(state, action) {
			state.resetPasswordChangeStatus_rdx = false;
			state.resetPasswordChangeFeedback_rdx = action.payload;
		},
		passwordResetFailureIssue(state, action) {
			state.resetPasswordChangeStatus_rdx = false;
			state.resetPasswordChangeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
		},
		passwordResetPasswordChangeResetStatus(state) {
			state.resetPasswordChangeStatus_rdx = true;
		},

		//Delete - User
		deleteUserSuccess(state) {
			state.isAuthenticated = false;
		},
		deleteUserFail(state) {
			state;
		},

		//General Settings
		toggleTocStatus(state, action) {
			state.sideBar_Left_TOC_isOpen_Rdx = action.payload;
		},
		sideBar_Left_TOC_Open(state) {
			state.sideBar_Left_TOC_isOpen_Rdx = true;
		},
		sideBar_Left_TOC_Close(state) {
			state.sideBar_Left_TOC_isOpen_Rdx = false;
		},
		SideBar_Left_TOC_NotAllowWindowResize(state) {
			state.SideBar_Left_TOC_AllowWindowResize_rdx = false;
		},

		languageSettingsModalOpen(state) {
			state.languageSettingsModalStatus = true;
		},
		languageSettingsModalClose(state) {
			state.languageSettingsModalStatus = false;
		},
		languageSettingsChange(state, action) {
			state.languageCurrent_rdx = action.payload;
			switch (action.payload) {
				case "English":
					state.activeFlag = "../../../../static/images/countries/1UnitedStates.png";
					break;
				case "Spanish":
					state.activeFlag = "../../../../static/images/countries/2Mexico.png";
					break;
				case "Chinese":
					state.activeFlag = "../../../../static/images/countries/3China.png";
					break;
				case "French":
					state.activeFlag = "../../../../static/images/countries/4France.png";
					break;
				case "German":
					state.activeFlag = "../../../../static/images/countries/5Germany.png";
					break;
				case "Japanese":
					state.activeFlag = "../../../../static/images/countries/6Japan.png";
					break;
				case "Portuguese":
					state.activeFlag = "../../../../static/images/countries/7Portugal.png";
					break;
				case "Russian":
					state.activeFlag = "../../../../static/images/countries/8Russia.png";
					break;
				case "Arabic":
					state.activeFlag = "../../../../static/images/countries/9UnitedArabEmirates.png";
					break;
				case "Italian":
					state.activeFlag = "../../../../static/images/countries/10Italy.png";
					break;
				case "Korean":
					state.activeFlag = "../../../../static/images/countries/11Korea.png";
					break;
				case "Hindu":
					state.activeFlag = "../../../../static/images/countries/12India.png";
					break;
				default:
					state.activeFlag = "../../../../static/images/countries/1UnitedStates.png";
			}
		},
		languageSettingsEnglish(state) {
			state.languageCurrent_rdx = "English";
		},
		languageSettingsSpanish(state) {
			state.languageCurrent_rdx = "Spanish";
		},
		languageSettingsMandarin(state) {
			state.languageCurrent_rdx = "Mandarin";
		},
		languageSettingsFrench(state) {
			state.languageCurrent_rdx = "French";
		},
		languageSettingsGerman(state) {
			state.languageCurrent_rdx = "German";
		},
		languageSettingsJapanese(state) {
			state.languageCurrent_rdx = "Japanese";
		},
		languageSettingsPortuguese(state) {
			state.languageCurrent_rdx = "Portuguese";
		},
		languageSettingsRussian(state) {
			state.languageCurrent_rdx = "Russian";
		},
		languageSettingsArabic(state) {
			state.languageCurrent_rdx = "Arabic";
		},
		languageSettingsItalian(state) {
			state.languageCurrent_rdx = "Italian";
		},
		languageSettingsKorean(state) {
			state.languageCurrent_rdx = "Korean";
		},
		languageSettingsHindi(state) {
			state.languageCurrent_rdx = "Hindi";
		},
		setDarkLightMode(state, action) {
			state.isDarkMode = action.payload;
		},
		setDarkLightModeToTrue(state) {
			state.isDarkMode = true;
		},
		setDarkLightModeToFalse(state) {
			state.isDarkMode = false;
		},
	},
});

export const userReducerActions = userSlice.actions;
export default userSlice;
