import Cookies from "js-cookie";
import axios from "axios";
import { userReducerActions } from "../a.reducers/auth_Reducers";

export const login_APIAction = (username, password) => {
	return async (dispatch) => {
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": Cookies.get("csrftoken"),
			},
		};
		const body = JSON.stringify({ username, password });
		const loginData = async () => {
			const res = await axios.post(`http://127.0.0.1:8000/accounts/login/`, body, config);
			return res;
		};
		try {
			dispatch(userReducerActions.modal_action_login_request_rdx());
			const res = await loginData();
			dispatch(userReducerActions.modal_action_login_success_rdx(res.data));
			localStorage.setItem("userInfo", JSON.stringify(res.data));
			localStorage.setItem("token", res.data.userData.token);
		} catch (error) {
			dispatch(userReducerActions.modal_action_login_fail_rdx(error.response.data.Error[0]));
		}
	};
};
export const logout_APIAction = () => {
	return async (dispatch) => {
		try {
			console.log("auth_Actions.logout");
			localStorage.removeItem("token");
			localStorage.removeItem("userInfo");
			localStorage.removeItem("profInfo");
			dispatch(userReducerActions.modal_action_logout_success_rdx());
		} catch (err) {
			console.log("auth_Actions.logout");
			dispatch(userReducerActions.modal_action_logout_fail_rdx());
		}
	};
};
export const register_APIAction = (username, password) => {
	return async (dispatch) => {
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": Cookies.get("csrftoken"),
			},
		};
		const body = JSON.stringify({ username, password });
		const registerData = async () => {
			const res = await axios.post(`http://127.0.0.1:8000/accounts/register/`, body, config);
			return res;
		};
		try {
			const res = await registerData();
			if (res.data.error) {
				dispatch(userReducerActions.modal_action_registration_fail_rdx(res.data.error));
			} else {
				dispatch(userReducerActions.modal_action_registration_success_rdx(res.data));
				localStorage.setItem("userInfo", JSON.stringify(res.data.userData));
				localStorage.setItem("token", JSON.stringify(res.data.userData.token));
			}
		} catch (err) {
			dispatch(userReducerActions.modal_action_registration_fail_rdx(err.response.data.error));
		}
	};
};
export const verifyAccount_APIAction = (passCode) => {
	return async (dispatch) => {
		const userInfoString = localStorage.getItem("userInfo");
		const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
		const email = userInfo ? userInfo.email : null;

		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": Cookies.get("csrftoken"),
			},
		};
		const body = JSON.stringify({ email, passCode });
		const activateData = async () => {
			const res = await axios.post(`http://127.0.0.1:8000/accounts/verifyAccountView/`, body, config);
			return res;
		};
		try {
			const res = await activateData();
			if (res.data.error) {
				dispatch(userReducerActions.modal_action_verificationPassCode_fail_rdx(res.data.error));
			} else {
				dispatch(userReducerActions.modal_action_verificationPassCode_success_rdx());
			}
		} catch (err) {
			dispatch(userReducerActions.modal_action_verificationPassCode_fail_rdx(err.response.data.error));
		}
	};
};
export const verifyAccountResendPassCode_APIAction = () => {
	return async (dispatch) => {
		const userInfoString = localStorage.getItem("userInfo");
		const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
		const email = userInfo ? userInfo.email : null;

		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": Cookies.get("csrftoken"),
			},
		};
		const body = JSON.stringify({ email });
		const activateData = async () => {
			const res = await axios.post(`http://127.0.0.1:8000/accounts/verifyAccountResendPassCodeView/`, body, config);
			return res;
		};
		try {
			const res = await activateData();
			if (res.data.error) {
				dispatch(userReducerActions.modal_action_verificationPassCode_resentFail_rdx(res.data.error));
			} else {
				dispatch(userReducerActions.modal_action_verificationPassCode_resent_rdx(res.data.success));
			}
		} catch (err) {
			dispatch(userReducerActions.modal_action_verificationPassCode_resentFail_rdx(err.response.data.error));
		}
	};
};
export const checkAuthenticated_APIAction = () => {
	return async (dispatch) => {
		const accessToken = localStorage.getItem("token");
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": Cookies.get("csrftoken"),
				Authorization: `Bearer ${accessToken}`,
			},
		};
		const checkAuth = async () => {
			const res = await axios.get(`http://127.0.0.1:8000/accounts/authenticated/`, config);
			return res;
		};
		try {
			const res = await checkAuth();
			if (res.data.error || res.data.isAuthenticated === "error") {
				dispatch(userReducerActions.authFail());
			} else if (res.data.isAuthenticated === "success") {
				dispatch(userReducerActions.authSuccess());
			} else {
				dispatch(userReducerActions.authFail());
			}
		} catch (err) {
			dispatch(userReducerActions.authFail());
		}
	};
};
export const resetPasswordSendPassCode_APIAction = (email) => {
	return async (dispatch) => {
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": Cookies.get("csrftoken"),
			},
		};
		const body = JSON.stringify({ email });
		const pwResetEmailPassCodeData = async () => {
			const res = await axios.post(`http://127.0.0.1:8000/accounts/resetPasswordSendPassCode/`, body, config);
			return res;
		};
		try {
			const res = await pwResetEmailPassCodeData();
			if (res.data.error) {
				dispatch(userReducerActions.modal_action_passwordReset_passCodeEmail_sentFail_rdx(res.data.error));
			} else {
				dispatch(userReducerActions.modal_action_passwordReset_passCodeEmail_sentSuccess_rdx(res.data.success));
				localStorage.setItem("email", JSON.stringify(email));
			}
		} catch (err) {
			dispatch(userReducerActions.modal_action_passwordReset_passCodeEmail_sentFail_rdx(err.response.data.error));
		}
	};
};
export const resetPasswordChange_APIAction = (passCode, password, passwordConfirm) => {
	return async (dispatch) => {
		let email = JSON.parse(localStorage.getItem("email"));

		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": Cookies.get("csrftoken"),
			},
		};
		const body = JSON.stringify({ email, passCode, password, passwordConfirm });
		const passwordResetChangeData = async () => {
			const res = await axios.post(`http://127.0.0.1:8000/accounts/resetPasswordChange/`, body, config);
			return res;
		};

		try {
			const res = await passwordResetChangeData();
			console.log("res.data: ", res.data);
			if (res.data.error) {
				dispatch(userReducerActions.modal_action_passwordReset_fail_rdx(res.data.error));
			} else {
				dispatch(userReducerActions.modal_action_passwordReset_success_rdx());
			}
		} catch (err) {
			console.log("Error response data:", err.response.data);
			if (err.response.data.PasswordError) {
				dispatch(userReducerActions.modal_action_passwordReset_fail_passwordIssue_rdx(err.response.data.PasswordError));
			} else if (err.response.data.PassCodeError) {
				dispatch(userReducerActions.modal_action_passwordReset_fail_passCodeIssue_rdx(err.response.data.PassCodeError));
			} else {
				dispatch(userReducerActions.modal_action_passwordReset_fail_rdx(err.response.data.error));
			}
		}
	};
};
// export const delete_account = () => {
//     return async (dispatch) => {
//         const config = {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': Cookies.get('csrftoken')
//             }
//         };

//     const body = JSON.stringify({'withCredentials': true});

//         const deleteAccount = async () => {
//             const res = await axios.delete(`http://127.0.0.1:8000/accounts/delete`, config, body);
//             return res;
//         };

//         try {
//             const res = await deleteAccount();

//             if(res.data.success){
//                 console.log('DELETE_USER_SUCCESS')
//             dispatch(userReducerActions.modal_action_deleteUser_success_rdx());
//             } else {
//                 console.log('DELETE_USER_FAIL-1')
//                 dispatch(userReducerActions.modal_action_deleteUser_fail_rdx());
//             }
//         } catch(err) {
//             console.log('DELETE_USER_FAIL-2');
//             dispatch(userReducerActions.modal_action_deleteUser_fail_rdx());
//         };
//     };
// };
