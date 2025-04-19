import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const testResultsFromStorage = localStorage.getItem("testResults") ? JSON.parse(localStorage.getItem("testResults")) : {};
const systemColor = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const localStorageColor = localStorage.getItem("prefers-color-scheme");
const isDarkMode = localStorageColor ? localStorageColor : systemColor;
const userComputerTypeFromStorage = localStorage.getItem("computerType") ? JSON.parse(localStorage.getItem("computerType")) : null;

const initialState = {
	//! High Level
	userComputerType_rdx: userComputerTypeFromStorage,
	//! SideBars
	pageNum_current_reader_rdx: 1,
	pageNum_input_reader_rdx: 1,
	pagesLength_rdx: 0,
	PDF_currentPageNum_rdx: 1,
	PDF_inputPageNum_rdx: 1,
	PDF_pagesLength_rdx: 92,
	sideBar_R_QuestionsStatus_rdx: null,
	//!Questions
	sideBar_R_Questions_CurrentTestNumber_rdx: 1,
	sideBar_R_Questions_CurrentTestNumberToComplete_rdx: 1,
	sideBar_R_Questions_CurrentQuestionNumber_rdx: 1,
	sideBar_R_Questions_CurrentAttempt_rdx: 0,
	sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt_rdx: null,
	//! ReAttempted Questions
	sideBar_R_Questions_retakeFailed_isOpen_rdx: false,
	setRetakeFailedQuestions_moduleIsActive_rdx: false,
	// First
	sideBar_R_Questions_FirstTestNumber_idx_reAttempted_rdx: null,
	sideBar_R_Questions_FirstTestNumber_num_reAttempted_rdx: null,
	sideBar_R_Questions_FirstQuestionNumber_idx_reAttempted_rdx: null,
	sideBar_R_Questions_FirstQuestionNumber_num_reAttempted_rdx: null,
	// Recent
	sideBar_R_Questions_RecentTestNumber_idx_reAttempted_rdx: null,
	sideBar_R_Questions_RecentTestNumber_num_reAttempted_rdx: null,
	sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted_rdx: null,
	sideBar_R_Questions_RecentQuestionNumber_num_reAttempted_rdx: null,
	// Current
	sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt_rdx: null,
	sideBar_R_Questions_CurrentTestNumber_num_toReAttempt_rdx: null,
	sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt_rdx: null,
	sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx: null,
	// Last
	sideBar_R_Questions_LastTestNumber_idx_toReAttempt_rdx: null,
	sideBar_R_Questions_LastTestNumber_num_toReAttempt_rdx: null,
	sideBar_R_Questions_LastQuestionNumber_idx_toReAttempt_rdx: null,
	sideBar_R_Questions_LastQuestionNumber_num_toReAttempt_rdx: null,

	sideBar_R_QuestionLastPageNum_rdx: 0,
	sideBar_R_QuestionTestResults_rdx: testResultsFromStorage,
	sideBar_R_Questions_wrongAnswers_num_rdx: {},
	submittedQuestionsList_rdx: [],
	sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx: false,

	sideBar_L_isOpen_rdx: true,
	sideBar_L_AllowCollapse_OnWindowResize_rdx: true,
	sideBar_R_Main_isOpen_rdx: false,
	sideBar_R_Notes_isOpen_rdx: false,
	sideBar_R_Questions_isOpen_rdx: false,
	sideBar_R_SearchBar_isActive_rdx: false,
	sideBar_ViewStack_rdx: ["SideBar_L"],

	//! Modals
	getStarted_ModalStatus_rdx: false,
	getStartedView_rdx: "",
	languageSettings_ModalStatus_rdx: false,
	resetThisTest_ModalStatus_rdx: false,

	//! General
	isAuthenticated_rdx: false,
	loading_rdx: false,
	activeFlag_rdx: "../../../../static/images/countries/1UnitedStates.png",
	modal_languageSettings_currentLanguage_rdx: "English",
	isDarkMode_rdx: isDarkMode,
	isDemoView_rdx: false,
	isDashboardFullScreen_rdx: true,
	activePanel_rdx: "main",

	//! User Info
	loginError_rdx: "",
	profile_id_rdx: "",
	username_rdx: "",
	email_rdx: "",
	name_rdx: "",
	isAdmin_rdx: "",
	token_rdx: "",
	userInfo_rdx: userInfoFromStorage,

	//! Registration
	passwordResetPassCodeEmail_rdx: 0,
	registered_rdx: false,
	registrationError_rdx: "",
	verificationEmail_rdx: 0,
	verificationEmailFailureStatus_rdx: "",
	generalFeedback_rdx: "",

	//! Verify Account
	verifyAccountPassCodeStatus_rdx: true,
	verifyAccountPassCodeFeedback_rdx: "Verification Code sent to your email_rdx.",

	//! Reset Password Email PassCode
	resetPasswordEmailPassCodeStatus_rdx: true,
	resetPasswordEmailPassCodeFeedback_rdx: "Enter your email_rdx to receive a reset code.",

	//! Reset Your Password
	resetPasswordChangeStatus_rdx: true,
	resetPasswordChangeFeedback_rdx: "Enter Verification Code and New Password",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserComputerType(state, action) {
			state.userComputerType_rdx = action.payload;
			localStorage.setItem("computerType", JSON.stringify(action.payload));
		},
		//! NavBar
		setDemoView(state) {
			state.isDemoView_rdx = true;
		},
		setRegularView(state) {
			state.isDemoView_rdx = false;
		},
		setDemoCurrentPageNum(state, action) {
			state.pageNum_current_reader_rdx = action.payload;
			state.pageNum_input_reader_rdx = action.payload;
		},
		setDemoInputPageNum(state, action) {
			state.pageNum_input_reader_rdx = action.payload;
		},
		setDemoPageLength(state, action) {
			state.pagesLength_rdx = action.payload;
		},
		//! PDF
		PDF_setDemoCurrentPageNum(state, action) {
			state.PDF_currentPageNum_rdx = action.payload;
			state.PDF_inputPageNum_rdx = action.payload;
		},
		PDF_setDemoInputPageNum(state, action) {
			state.PDF_inputPageNum_rdx = action.payload;
		},
		//! General
		setActivePanel(state, action) {
			state.activePanel_rdx = action.payload;
		},
		//! SideBar L
		sideBar_L_Toggle_Visibility(state) {
			if (state.sideBar_L_isOpen_rdx) {
				state.sideBar_L_isOpen_rdx = false;
				state.sideBar_ViewStack_rdx.shift(); // 					remove from beginning of stack
			} else {
				state.sideBar_L_isOpen_rdx = true;
				state.sideBar_ViewStack_rdx.unshift("SideBar_L"); // 		push to beginning of stack
			}
		},
		sideBar_L_Open(state) {
			state.sideBar_L_isOpen_rdx = true;
			state.sideBar_ViewStack_rdx.unshift("SideBar_L"); // 			push to beginning of stack
		},
		sideBar_L_Close(state) {
			state.sideBar_L_isOpen_rdx = false;
			state.sideBar_ViewStack_rdx.shift(); // 						remove from beginning of stack
		},
		sideBar_L_NotAllowCollapse_OnWindowResize(state) {
			state.sideBar_L_AllowCollapse_OnWindowResize_rdx = false;
		},
		sideBar_L_YesAllowCollapse_OnWindowResize(state) {
			state.sideBar_L_AllowCollapse_OnWindowResize_rdx = true;
		},
		//! Notes SideBar
		sideBar_R_Open_Notes(state) {
			state.sideBar_R_Notes_isOpen_rdx = true;
		},
		sideBar_R_Close_Notes(state) {
			state.sideBar_R_Notes_isOpen_rdx = false;
		},
		//! R Main SideBar
		sideBar_R_Open_Main(state) {
			state.sideBar_R_Main_isOpen_rdx = true;
		},
		sideBar_R_Close_Main(state) {
			state.sideBar_R_Main_isOpen_rdx = false;
		},
		//! R Questions SideBar
		sideBar_R_Open_Questions(state) {
			state.sideBar_R_Questions_isOpen_rdx = true;
			state.sideBar_R_QuestionsStatus_rdx = "QuestionsOptions";
			state.sideBar_ViewStack_rdx.push("QuestionsOptions");
		},
		sideBar_R_Close_Questions(state) {
			state.sideBar_R_Questions_isOpen_rdx = false;
			// state.sideBar_ViewStack_rdx = [];
		},
		//! NavigationStack
		sideBar_R_Questions_GoToPrev(state) {
			const prevIndex = state.sideBar_ViewStack_rdx.length - 2;
			const prevView = state.sideBar_ViewStack_rdx[prevIndex];
			const currIndex = state.sideBar_ViewStack_rdx.length - 1;
			const currView = state.sideBar_ViewStack_rdx[currIndex];
			console.log("currView", currView);
			if (currIndex >= 0) {
				if (currView === "QuestionsOptions") {
					console.log("1");
					state.sideBar_R_Questions_isOpen_rdx = false;
					state.activePanel_rdx = "main";
				} else if (currView === "SideBar_L") {
					console.log("2");
					state.sideBar_L_isOpen_rdx = false;
					state.sideBar_L_AllowCollapse_OnWindowResize_rdx = false;
				} else {
					console.log("3");
					state.sideBar_R_QuestionsStatus_rdx = prevView;
				}
				console.log("4");
				state.sideBar_ViewStack_rdx.pop();
			}
		},
		sideBar_R_Questions_GoTo_Landing(state) {
			state.sideBar_R_QuestionsStatus_rdx = "QuestionsOptions";
			state.sideBar_ViewStack_rdx.push("QuestionsOptions");
		},
		sideBar_R_Questions_GoTo_Test(state, action) {
			state.sideBar_R_QuestionsStatus_rdx = "Questions";
			state.sideBar_R_Questions_CurrentTestNumber_rdx = action.payload;
			state.sideBar_ViewStack_rdx.push("Questions");
			state.sideBar_R_Questions_retakeFailed_isOpen_rdx = false;
		},
		sideBar_R_Questions_GoBackTo_Test(state) {
			state.sideBar_R_QuestionsStatus_rdx = "Questions";
			state.sideBar_ViewStack_rdx.push("Questions");
		},
		sideBar_R_Questions_GoTo_TestResultsForTestNum(state, action) {
			state.sideBar_R_Questions_CurrentTestNumber_rdx = action.payload;
			state.sideBar_R_QuestionsStatus_rdx = "TestResults";
			state.sideBar_ViewStack_rdx.push("TestResults");
		},
		sideBar_R_Questions_GoTo_TestResults(state) {
			state.sideBar_R_QuestionsStatus_rdx = "TestResults";
			state.sideBar_ViewStack_rdx.push("TestResults");
		},
		sideBar_R_Questions_GoTo_ProbabilityOfPassing(state) {
			state.sideBar_R_QuestionsStatus_rdx = "ProbabilityOfPassingPage";
			state.sideBar_ViewStack_rdx.push("ProbabilityOfPassingPage");
		},
		sideBar_R_Questions_GoTo_RetakeFailedQuestions(state) {
			state.sideBar_R_Questions_retakeFailed_isOpen_rdx = true;
			state.sideBar_R_QuestionsStatus_rdx = "Questions";
			state.sideBar_ViewStack_rdx.push("Questions");
			state.sideBar_R_Questions_CurrentTestNumber_rdx = state.sideBar_R_Questions_CurrentTestNumber_num_toReAttempt_rdx;
			state.sideBar_R_Questions_CurrentQuestionNumber_rdx = state.sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx;
		},
		sideBar_R_Questions_GoTo_QuestionNumber(state, action) {
			state.sideBar_R_Questions_CurrentQuestionNumber_rdx = action.payload;
		},
		sideBar_R_Questions_setQuestionNumber(state, action) {
			state.sideBar_R_Questions_CurrentQuestionNumber_rdx = action.payload;
		},
		sideBar_R_Questions_setCurrentTestNumberToComplete_rdx(state, action) {
			state.sideBar_R_Questions_CurrentTestNumberToComplete_rdx = action.payload;
		},
		sideBar_R_Questions_FooterTaskBar_Toggle_OpenClose(state) {
			state.sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx = !state.sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx;
		},
		//! not failed
		updateQuestionResults(state, action) {
			const { testNumber, questionNumber, answerData } = action.payload;
			if (!state.sideBar_R_QuestionTestResults_rdx[testNumber]) {
				state.sideBar_R_QuestionTestResults_rdx[testNumber] = {};
			}
			if (!state.sideBar_R_QuestionTestResults_rdx[testNumber][questionNumber]) {
				state.sideBar_R_QuestionTestResults_rdx[testNumber][questionNumber] = { attempts: [] };
			}

			state.sideBar_R_QuestionTestResults_rdx[testNumber][questionNumber].attempts.unshift(answerData);
			localStorage.setItem("testResults", JSON.stringify(state.sideBar_R_QuestionTestResults_rdx));
		},
		deleteTestResults(state, action) {
			if (state.sideBar_R_QuestionTestResults_rdx[action.payload]) {
				delete state.sideBar_R_QuestionTestResults_rdx[action.payload];
			}
			localStorage.setItem("testResults", JSON.stringify(state.sideBar_R_QuestionTestResults_rdx));
			state.sideBar_R_Questions_CurrentTestNumber_rdx = null;
			state.sideBar_R_Questions_CurrentQuestionNumber_rdx = 1;
			state.sideBar_R_QuestionLastPageNum_rdx = 0;
		},
		resetQuestionResults(state) {
			state.sideBar_R_QuestionTestResults_rdx = {};
			localStorage.removeItem("testResults");
		},
		// !First Attempt Questions

		sideBar_R_Questions_setCurrentQuestionNumber_toAttempt(state, action) {
			state.sideBar_R_Questions_CurrentQuestionNumber_num_toAttempt_rdx = action.payload;
		},

		// !ReAttempted Questions
		// First
		sideBar_R_Questions_setFirstTestNumber_reAttempted(state, action) {
			const { idx, num } = action.payload;
			state.sideBar_R_Questions_FirstTestNumber_idx_reAttempted_rdx = idx;
			state.sideBar_R_Questions_FirstTestNumber_num_reAttempted_rdx = num;
		},
		sideBar_R_Questions_setFirstQuestionNumber_reAttempted(state, action) {
			const { idx, num } = action.payload;
			state.sideBar_R_Questions_FirstQuestionNumber_idx_reAttempted_rdx = idx;
			state.sideBar_R_Questions_FirstQuestionNumber_num_reAttempted_rdx = num;
		},
		//Recent
		sideBar_R_Questions_setRecentTestNumber_reAttempted(state, action) {
			const { idx, num } = action.payload;
			state.sideBar_R_Questions_RecentTestNumber_idx_reAttempted_rdx = idx;
			state.sideBar_R_Questions_RecentTestNumber_num_reAttempted_rdx = num;
		},
		sideBar_R_Questions_setRecentQuestionNumber_reAttempted(state, action) {
			const { idx, num } = action.payload;
			state.sideBar_R_Questions_RecentQuestionNumber_idx_reAttempted_rdx = idx;
			state.sideBar_R_Questions_RecentQuestionNumber_num_reAttempted_rdx = num;
		},
		//Current
		sideBar_R_Questions_setCurrentTestNumber_toReAttempt(state, action) {
			const { idx, num } = action.payload;
			state.sideBar_R_Questions_CurrentTestNumber_idx_toReAttempt_rdx = idx;
			state.sideBar_R_Questions_CurrentTestNumber_num_toReAttempt_rdx = num;
			//TODO state.sideBar_R_Questions_CurrentTestNumber_rdx = num;
		},
		sideBar_R_Questions_setCurrentQuestionNumber_toReAttempt(state, action) {
			const { idx, num } = action.payload;
			state.sideBar_R_Questions_CurrentQuestionNumber_idx_toReAttempt_rdx = idx;
			state.sideBar_R_Questions_CurrentQuestionNumber_num_toReAttempt_rdx = num;
			//TODO state.sideBar_R_Questions_CurrentQuestionNumber_rdx = num;
		},
		// last
		sideBar_R_Questions_setLastTestNumber_toReAttempt(state, action) {
			const { idx, num } = action.payload;
			state.sideBar_R_Questions_LastTestNumber_idx_toReAttempt_rdx = idx;
			state.sideBar_R_Questions_LastTestNumber_num_toReAttempt_rdx = num;
		},
		sideBar_R_Questions_setLastQuestionNumber_toReAttempt(state, action) {
			const { idx, num } = action.payload;
			state.sideBar_R_Questions_LastQuestionNumber_idx_toReAttempt_rdx = idx;
			state.sideBar_R_Questions_LastQuestionNumber_num_toReAttempt_rdx = num;
		},
		sideBar_R_Questions_setWrongAnswers(state, action) {
			state.sideBar_R_Questions_wrongAnswers_num_rdx = action.payload;
		},
		sideBar_R_Questions_setRetakeFailedQuestions_moduleIsActive(state, action) {
			state.setRetakeFailedQuestions_moduleIsActive_rdx = action.payload;
		},
		//! searchBar
		sideBar_R_SearchBar_isActive(state, action) {
			state.sideBar_R_SearchBar_isActive_rdx = action.payload;
		},
		//! Get Started Modal
		modal_action_getStarted_logIn_open_rdx(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_R_Main_isOpen_rdx = false;
			state.getStartedView_rdx = "LogInModal";
		},
		modal_action_getStarted_createAccount_open_rdx(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_R_Main_isOpen_rdx = false;
			state.getStartedView_rdx = "CreateAccountModal";
		},
		modal_action_getStarted_open_rdx(state) {
			state.getStarted_ModalStatus_rdx = true;
			state.sideBar_R_Main_isOpen_rdx = false;
		},
		modal_action_getStarted_close_rdx(state) {
			state.getStarted_ModalStatus_rdx = false;
			state.sideBar_R_Main_isOpen_rdx = false;
		},
		//! Registration
		modal_action_registration_close_rdx(state) {
			state.getStarted_ModalStatus_rdx = false;
		},
		modal_action_registration_success_rdx(state, action) {
			state.registered_rdx = true;
			state.isAuthenticated_rdx = false;
			state.loading_rdx = false;
			state.getStartedView_rdx = "VerifyAccountModal";
			state.userInfo_rdx = action.payload;
		},
		modal_action_registration_fail_rdx(state, action) {
			state.registered_rdx = false;
			state.isAuthenticated_rdx = false;
			state.loading_rdx = false;
			state.registrationError_rdx = action.payload;
		},
		modal_action_registration_errorReset_rdx(state) {
			state.registrationError_rdx = "";
		},
		//! Verify Your Account
		modal_action_verificationPassCode_success_rdx(state) {
			state.getStartedView_rdx = "VerificationSuccessModal";
			state.generalFeedback_rdx = "";
		},
		modal_action_verificationPassCode_fail_rdx(state, action) {
			state.verifyAccountPassCodeStatus_rdx = false;
			state.verifyAccountPassCodeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
		},
		modal_action_verificationPassCode_reset_rdx(state) {
			state.verifyAccountPassCodeStatus_rdx = true;
		},
		modal_action_verificationPassCode_resent_rdx(state, action) {
			state.verifyAccountPassCodeStatus_rdx = true;
			state.verifyAccountPassCodeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
			state.verificationEmail_rdx += 1;
		},
		modal_action_verificationPassCode_resentFail_rdx(state) {
			state.verifyAccountPassCodeStatus_rdx = false;
			state.verifyAccountPassCodeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
			state.verificationEmailFailureStatus_rdx = "Failed";
		},
		//! Verification Success
		GoTo_LogInModal_rdx(state) {
			state.getStartedView_rdx = "LogInModal";
		},
		//! Log In
		modal_action_login_request_rdx(state) {
			state.loading_rdx = true;
		},
		modal_action_login_success_rdx(state, action) {
			state.isAuthenticated_rdx = true;
			state.loading_rdx = false;
			state.userInfo_rdx = action.payload;
			state.getStarted_ModalStatus_rdx = false;
		},
		modal_action_login_fail_rdx(state, action) {
			state.loading_rdx = false;
			state.loginError_rdx = action.payload;
		},
		modal_action_login_errorReset_rdx(state) {
			state.loginError_rdx = "";
		},
		//! Log Out
		modal_action_logout_success_rdx(state) {
			state.isAuthenticated_rdx = false;
		},
		modal_action_logout_fail_rdx(state) {
			state;
		},
		//! Authentication
		authSuccess(state) {
			state.isAuthenticated_rdx = true;
		},
		authFail(state) {
			state.isAuthenticated_rdx = false;
		},
		token_rdxSuccess(state, action) {
			state.token_rdx = action.payload;
		},
		//! Reset Password - Email PassCode
		modal_action_passwordReset_passCodeEmail_sentSuccess_rdx(state, action) {
			state.passwordResetPassCodeEmail_rdx += 1;
			state.resetPasswordEmailPassCodeStatus_rdx = true;
			state.resetPasswordEmailPassCodeFeedback_rdx = action.payload;
			state.getStartedView_rdx = "ResetPasswordEnterPassCodeModal";
		},
		modal_action_passwordReset_passCodeEmail_sentFail_rdx(state, action) {
			state.resetPasswordEmailPassCodeStatus_rdx = false;
			state.resetPasswordEmailPassCodeFeedback_rdx = action.payload;
		},
		modal_action_passwordReset_passCodeEmail_resetStatus_rdx(state) {
			state.resetPasswordEmailPassCodeStatus_rdx = true;
		},
		//! Reset Password - Change
		modal_action_passwordReset_success_rdx(state) {
			state.resetPasswordChangeStatus_rdx = true;
			state.resetPasswordChangeFeedback_rdx = "";
			state.passCodeStatus_rdx = true;
			state.passCodeFeedback_rdx = "";
			state.getStartedView_rdx = "PasswordChangedSuccessfullyModal";
		},
		modal_action_passwordReset_fail_passwordIssue_rdx(state, action) {
			state.resetPasswordChangeStatus_rdx = false;
			state.resetPasswordChangeFeedback_rdx = action.payload; //gets fed into general feedback in frontend
		},
		modal_action_passwordReset_fail_passCodeIssue_rdx(state, action) {
			state.resetPasswordChangeStatus_rdx = false;
			state.resetPasswordChangeFeedback_rdx = action.payload;
		},
		modal_action_passwordReset_fail_rdx(state, action) {
			state.resetPasswordChangeStatus_rdx = false;
			state.resetPasswordChangeFeedback_rdx = action.payload;
			state.generalFeedback_rdx = action.payload;
		},
		modal_action_passwordReset_passwordChange_resetStatus_rdx(state) {
			state.resetPasswordChangeStatus_rdx = true;
		},
		//! Delete - User
		modal_action_deleteUser_success_rdx(state) {
			state.isAuthenticated_rdx = false;
		},
		modal_action_deleteUser_fail_rdx(state) {
			state;
		},
		//! Language Modal Settings
		languageSettingsModalOpen(state) {
			state.languageSettings_ModalStatus_rdx = true;
		},
		modal_reducerAction_languageSettings_close(state) {
			state.languageSettings_ModalStatus_rdx = false;
		},
		modal_action_languageSettings_changeLanguage_rdx(state, action) {
			state.modal_languageSettings_currentLanguage_rdx = action.payload;
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
			state.modal_languageSettings_currentLanguage_rdx = "English";
		},
		languageSettingsSpanish(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Spanish";
		},
		languageSettingsMandarin(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Mandarin";
		},
		languageSettingsFrench(state) {
			state.modal_languageSettings_currentLanguage_rdx = "French";
		},
		languageSettingsGerman(state) {
			state.modal_languageSettings_currentLanguage_rdx = "German";
		},
		languageSettingsJapanese(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Japanese";
		},
		languageSettingsPortuguese(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Portuguese";
		},
		languageSettingsRussian(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Russian";
		},
		languageSettingsArabic(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Arabic";
		},
		languageSettingsItalian(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Italian";
		},
		languageSettingsKorean(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Korean";
		},
		languageSettingsHindi(state) {
			state.modal_languageSettings_currentLanguage_rdx = "Hindi";
		},
		modal_action_resetThisTest_open_rdx(state) {
			state.resetThisTest_ModalStatus_rdx = true;
		},
		modal_action_resetThisTest_close_rdx(state) {
			state.resetThisTest_ModalStatus_rdx = false;
		},
		//! Dark/Light Settings
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
