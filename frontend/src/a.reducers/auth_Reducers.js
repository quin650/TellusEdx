import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const systemColor = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const localStorageColor = localStorage.getItem("prefers-color-scheme");
const isDarkMode = localStorageColor ? localStorageColor : systemColor;

const initialState = {
	//Modals
	currentPageNum_rdx: 1,
	inputPageNum_rdx: 1,
	pagesLength_rdx: 0,

	sideBar_Left_isOpen_Rdx: true,
	SideBar_Left_AllowCollapse_OnWindowResize_rdx: true,
	sideBar_Right_Main_ModalStatus_rdx: false,
	sideBar_Right_Search_ModalStatus_rdx: false,
	sideBar_Right_Notes_ModalStatus_rdx: false,
	getStarted_ModalStatus_rdx: false,
	getStartedView: "",
	languageSettings_ModalStatus_rdx: false,

	//General
	isAuthenticated: false,
	loading: false,
	activeFlag: "../../../../static/images/countries/1UnitedStates.png",
	languageCurrent_rdx: "English",
	isDarkMode_rdx: isDarkMode,
	isDemoView: false,
	isDashboardFullScreen: true,

	//User Info
	loginError: "",
	profile_id: "",
	username: "",
	email: "",
	name: "",
	isAdmin: "",
	token: "",
	userInfo: userInfoFromStorage,

	//Registration
	passwordResetPassCodeEmail: 0,
	registered: false,
	registrationError: "",
	verificationEmail: 0,
	verificationEmailFailureStatus: "",
	registered: false,
	registrationError: "",
	verificationEmail: 0,

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

		// Left Side Modal
		setDemoCurrentPageNum(state, action) {
			state.currentPageNum_rdx = action.payload;
		},
		setDemoInputPageNum(state, action) {
			state.inputPageNum_rdx = action.payload;
		},
		setDemoPageLength(state, action) {
			state.pagesLength_rdx = action.payload;
		},

		sideBar_Left_Toggle_ModalVisibility(state) {
			state.sideBar_Left_isOpen_Rdx = !state.sideBar_Left_isOpen_Rdx;
		},
		sideBar_Left_Open(state) {
			state.sideBar_Left_isOpen_Rdx = true;
		},
		sideBar_Left_Close(state) {
			state.sideBar_Left_isOpen_Rdx = false;
		},
		SideBar_Left_NotAllowCollapse_OnWindowResize(state) {
			state.SideBar_Left_AllowCollapse_OnWindowResize_rdx = false;
		},
		// Search Modal
		sideBar_Right_Toggle_Search_ModalVisibility(state) {
			state.sideBar_Right_Search_ModalStatus_rdx = !state.sideBar_Right_Search_ModalStatus_rdx;
		},
		sideBar_Right_Open_Search_Modal(state) {
			state.sideBar_Right_Search_ModalStatus_rdx = true;
		},
		sideBar_Right_Close_Search_Modal(state) {
			state.sideBar_Right_Search_ModalStatus_rdx = false;
		},
		// Notes Modal
		sideBar_Right_Toggle_Notes_ModalVisibility(state) {
			state.sideBar_Right_Notes_ModalStatus_rdx = !state.sideBar_Right_Notes_ModalStatus_rdx;
		},
		sideBar_Right_Open_Notes_Modal(state) {
			state.sideBar_Right_Notes_ModalStatus_rdx = true;
		},
		sideBar_Right_Close_Notes_Modal(state) {
			state.sideBar_Right_Notes_ModalStatus_rdx = false;
		},
		// Right Main Modal
		sideBar_Right_Toggle_Main_ModalVisibility(state) {
			state.sideBar_Right_Main_ModalStatus_rdx = !state.sideBar_Right_Main_ModalStatus_rdx;
		},
		sideBar_Right_Open_Main_Modal(state) {
			state.sideBar_Right_Main_ModalStatus_rdx = true;
		},
		sideBar_Right_Close_Main_Modal(state) {
			state.sideBar_Right_Main_ModalStatus_rdx = false;
		},
		// Get Started Modal
		getStartedModalLogIn(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_Right_Main_ModalStatus_rdx = false;
			state.getStartedView = "LogInModal";
		},
		getStartedModalCreateAccount(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_Right_Main_ModalStatus_rdx = false;
			state.getStartedView = "CreateAccountModal";
		},
		getStartedModalOpen(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_Right_Main_ModalStatus_rdx = false;
		},
		getStartedModalClose(state) {
			state.getStarted_ModalStatus_rdx = false;
			state.sideBar_Right_Main_ModalStatus_rdx = false;
		},
		// Registration
		registerModalClose(state) {
			state.getStarted_ModalStatus_rdx = false;
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
			state.getStarted_ModalStatus_rdx = false;
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
		// Language Modal Settings
		languageSettingsModalOpen(state) {
			state.languageSettings_ModalStatus_rdx = true;
		},
		languageSettingsModalClose(state) {
			state.languageSettings_ModalStatus_rdx = false;
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
		//Dark/Light Settings
		setDarkLightMode(state, action) {
			state.isDarkMode_rdx = action.payload;
			localStorage.setItem("prefers-color-scheme", action.payload);
		},
		setDarkLightModeToTrue(state) {
			state.isDarkMode_rdx = "dark";
			localStorage.setItem("prefers-color-scheme", "dark");
		},
		setDarkLightModeToFalse(state) {
			state.isDarkMode_rdx = "light";
			localStorage.setItem("prefers-color-scheme", "light");
		},
	},
});

export const userReducerActions = userSlice.actions;
export default userSlice;
