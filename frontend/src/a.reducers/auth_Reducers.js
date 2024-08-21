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

	sideBar_L_isOpen_Rdx: true,
	sideBar_L_AllowCollapse_OnWindowResize_rdx: true,
	sideBar_R_Main_ModalStatus_rdx: false,
	sideBar_R_Search_ModalStatus_rdx: false,
	sideBar_R_Notes_ModalStatus_rdx: false,
	sideBar_R_Questions_ModalStatus_rdx: false,

	getStarted_ModalStatus_rdx: false,
	getStartedView_rdx: "",
	languageSettings_ModalStatus_rdx: false,

	//General
	isAuthenticated_rdx: false,
	loading_rdx: false,
	activeFlag_rdx: "../../../../static/images/countries/1UnitedStates.png",
	languageCurrent_rdx: "English",
	isDarkMode_rdx: isDarkMode,
	isDemoView_rdx: false,
	isDashboardFullScreen_rdx: true,

	//User Info
	loginError_rdx: "",
	profile_id_rdx: "",
	username_rdx: "",
	email_rdx: "",
	name_rdx: "",
	isAdmin_rdx: "",
	token_rdx: "",
	userInfo_rdx: userInfoFromStorage,

	//Registration
	passwordResetPassCodeEmail_rdx: 0,
	registered_rdx: false,
	registrationError_rdx: "",
	verificationEmail_rdx: 0,
	verificationEmailFailureStatus_rdx: "",
	generalFeedback_rdx: "",

	//Verify Account
	verifyAccountPassCodeStatus_rdx: true,
	verifyAccountPassCodeFeedback_rdx: "Verification Code sent to your email_rdx.",

	//Reset Password Email PassCode
	resetPasswordEmailPassCodeStatus_rdx: true,
	resetPasswordEmailPassCodeFeedback_rdx: "Enter your email_rdx to receive a reset code.",

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
			state.isDemoView_rdx = true;
		},
		setRegularView(state) {
			state.isDemoView_rdx = false;
		},

		// L Side Modal
		setDemoCurrentPageNum(state, action) {
			state.currentPageNum_rdx = action.payload;
		},
		setDemoInputPageNum(state, action) {
			state.inputPageNum_rdx = action.payload;
		},
		setDemoPageLength(state, action) {
			state.pagesLength_rdx = action.payload;
		},

		sideBar_L_Toggle_ModalVisibility(state) {
			state.sideBar_L_isOpen_Rdx = !state.sideBar_L_isOpen_Rdx;
		},
		sideBar_L_Open(state) {
			state.sideBar_L_isOpen_Rdx = true;
		},
		sideBar_L_Close(state) {
			state.sideBar_L_isOpen_Rdx = false;
		},
		sideBar_L_NotAllowCollapse_OnWindowResize(state) {
			state.sideBar_L_AllowCollapse_OnWindowResize_rdx = false;
		},
		sideBar_L_YesAllowCollapse_OnWindowResize(state) {
			state.sideBar_L_AllowCollapse_OnWindowResize_rdx = true;
		},
		// R Side Modals
		// Search Modal
		sideBar_R_Toggle_Search_ModalVisibility(state) {
			state.sideBar_R_Search_ModalStatus_rdx = !state.sideBar_R_Search_ModalStatus_rdx;
		},
		sideBar_R_Open_Search_Modal(state) {
			state.sideBar_R_Search_ModalStatus_rdx = true;
		},
		sideBar_R_Close_Search_Modal(state) {
			state.sideBar_R_Search_ModalStatus_rdx = false;
		},
		// Notes Modal
		sideBar_R_Toggle_Notes_ModalVisibility(state) {
			state.sideBar_R_Notes_ModalStatus_rdx = !state.sideBar_R_Notes_ModalStatus_rdx;
		},
		sideBar_R_Open_Notes_Modal(state) {
			state.sideBar_R_Notes_ModalStatus_rdx = true;
		},
		sideBar_R_Close_Notes_Modal(state) {
			state.sideBar_R_Notes_ModalStatus_rdx = false;
		},
		// R Main Modal
		sideBar_R_Toggle_Main_ModalVisibility(state) {
			state.sideBar_R_Main_ModalStatus_rdx = !state.sideBar_R_Main_ModalStatus_rdx;
		},
		sideBar_R_Open_Main_Modal(state) {
			state.sideBar_R_Main_ModalStatus_rdx = true;
		},
		sideBar_R_Close_Main_Modal(state) {
			state.sideBar_R_Main_ModalStatus_rdx = false;
		},

		// R Questions Modal
		sideBar_R_Toggle_Questions_ModalVisibility(state) {
			state.sideBar_R_Questions_ModalStatus_rdx = !state.sideBar_R_Questions_ModalStatus_rdx;
		},
		sideBar_R_Open_Questions_Modal(state) {
			state.sideBar_R_Questions_ModalStatus_rdx = true;
		},
		sideBar_R_Close_Questions_Modal(state) {
			state.sideBar_R_Questions_ModalStatus_rdx = false;
		},

		// Get Started Modal
		getStartedModalLogIn(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_R_Main_ModalStatus_rdx = false;
			state.getStartedView_rdx = "LogInModal";
		},
		getStartedModalCreateAccount(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_R_Main_ModalStatus_rdx = false;
			state.getStartedView_rdx = "CreateAccountModal";
		},
		getStartedModalOpen(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_R_Main_ModalStatus_rdx = false;
		},
		getStartedModalClose(state) {
			state.getStarted_ModalStatus_rdx = false;
			state.sideBar_R_Main_ModalStatus_rdx = false;
		},
		// Registration
		registerModalClose(state) {
			state.getStarted_ModalStatus_rdx = false;
		},
		registerSuccess(state, action) {
			state.registered_rdx = true;
			state.isAuthenticated_rdx = false;
			state.loading_rdx = false;
			state.getStartedView_rdx = "VerifyAccountModal";
			state.userInfo_rdx = action.payload;
		},
		registerFail(state, action) {
			state.registered_rdx = false;
			state.isAuthenticated_rdx = false;
			state.loading_rdx = false;
			state.registrationError_rdx = action.payload;
		},
		registerErrorReset(state) {
			state.registrationError_rdx = "";
		},
		// Verify Your Account
		verifyAccountPassCodeSuccess(state) {
			state.getStartedView_rdx = "VerificationSuccessModal";
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
			state.verificationEmail_rdx += 1;
		},
		verifyAccountPassCodeResentFailure(state) {
			state.verifyAccountPassCodeStatus_rdx = false;
			state.verifyAccountPassCodeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
			state.verificationEmailFailureStatus_rdx = "Failed";
		},
		// Verification Success
		GoTo_LogInModal_rdx(state) {
			state.getStartedView_rdx = "LogInModal";
		},
		// Log In
		loginRequest(state) {
			state.loading_rdx = true;
		},
		loginSuccess(state, action) {
			state.isAuthenticated_rdx = true;
			state.loading_rdx = false;
			state.userInfo_rdx = action.payload;
			state.getStarted_ModalStatus_rdx = false;
		},
		loginFail(state, action) {
			state.loading_rdx = false;
			state.loginError_rdx = action.payload;
		},
		loginError_rdxReset(state) {
			state.loginError_rdx = "";
		},
		// Log Out
		logoutSuccess(state) {
			state.isAuthenticated_rdx = false;
		},
		logoutFail(state) {
			state;
		},
		// Authentication
		authSuccess(state) {
			state.isAuthenticated_rdx = true;
		},
		authFail(state) {
			state.isAuthenticated_rdx = false;
		},
		token_rdxSuccess(state, action) {
			state.token_rdx = action.payload;
		},
		// Reset Password - Email PassCode
		passwordResetPassCodeEmailSentSuccess(state, action) {
			state.passwordResetPassCodeEmail_rdx += 1;
			state.resetPasswordEmailPassCodeStatus_rdx = true;
			state.resetPasswordEmailPassCodeFeedback_rdx = action.payload;
			state.getStartedView_rdx = "ResetPasswordEnterPassCodeModal";
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
			state.getStartedView_rdx = "PasswordChangedSuccessfullyModal";
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
			state.isAuthenticated_rdx = false;
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
					state.activeFlag_rdx = "../../../../static/images/countries/1UnitedStates.png";
					break;
				case "Spanish":
					state.activeFlag_rdx = "../../../../static/images/countries/2Mexico.png";
					break;
				case "Chinese":
					state.activeFlag_rdx = "../../../../static/images/countries/3China.png";
					break;
				case "French":
					state.activeFlag_rdx = "../../../../static/images/countries/4France.png";
					break;
				case "German":
					state.activeFlag_rdx = "../../../../static/images/countries/5Germany.png";
					break;
				case "Japanese":
					state.activeFlag_rdx = "../../../../static/images/countries/6Japan.png";
					break;
				case "Portuguese":
					state.activeFlag_rdx = "../../../../static/images/countries/7Portugal.png";
					break;
				case "Russian":
					state.activeFlag_rdx = "../../../../static/images/countries/8Russia.png";
					break;
				case "Arabic":
					state.activeFlag_rdx = "../../../../static/images/countries/9UnitedArabEmirates.png";
					break;
				case "Italian":
					state.activeFlag_rdx = "../../../../static/images/countries/10Italy.png";
					break;
				case "Korean":
					state.activeFlag_rdx = "../../../../static/images/countries/11Korea.png";
					break;
				case "Hindu":
					state.activeFlag_rdx = "../../../../static/images/countries/12India.png";
					break;
				default:
					state.activeFlag_rdx = "../../../../static/images/countries/1UnitedStates.png";
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
