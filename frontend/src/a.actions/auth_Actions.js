import Cookies from 'js-cookie'
import axios from 'axios';
import { userReducerActions } from '../a.reducers/auth_Reducers';

export const login_APIAction = (username, password) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ username, password });
        const loginData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/login/`, body, config);
            return res;
        };
        try {
            dispatch(userReducerActions.loginRequest());
            const res = await loginData();
            dispatch(userReducerActions.loginSuccess(res.data));
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            localStorage.setItem('token', res.data.userData.token)

        } catch (error) {
            dispatch(userReducerActions.loginFail(error.response.data.Error[0]));
        };
    };
};
export const logout_APIAction = () => {
    return async (dispatch) => {
    try {
        console.log('auth_Actions.logout')
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('profInfo');
        dispatch(userReducerActions.logoutSuccess());
    } catch(err) {
        console.log('auth_Actions.logout')
        dispatch(userReducerActions.logoutFail());
    };  
    };
};
export const register_APIAction = (username, password) => { 
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ username, password });
        const registerData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/register/`, body, config);
            return res;
        };
        try {
            const res = await registerData();
            if (res.data.error) {
                dispatch(userReducerActions.registerFail());
                
            } else {
                dispatch(userReducerActions.registerSuccess(res.data));
                localStorage.setItem('userInfo', JSON.stringify(res.data.userData))
                localStorage.setItem('token', JSON.stringify(res.data.userData.token))
            }
        } catch (err) {
            dispatch(userReducerActions.registerFail(err.response.data.error));
        };
    };
};
export const verifyYourAccount_APIAction = (passCode) => { 
    return async (dispatch) => {
        const userInfoString = localStorage.getItem('userInfo');
        const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
        const email = userInfo ? userInfo.email : null;
        
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ email, passCode });
        const activateData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/verifyYourAccountView/`, body, config);
            return res;
        };
        try {
            const res = await activateData();
            if (res.data.error) {
                dispatch(userReducerActions.verifyYourAccountPinFail(res.data.error));
                
            } else {
                dispatch(userReducerActions.verifyYourAccountPinSuccess());
            }
        } catch (err) {
            dispatch(userReducerActions.verifyYourAccountPinFail(err.response.data.error));
        };
    };
};
export const verifyYourAccountResendPin_APIAction = () => { 
    return async (dispatch) => {
        const userInfoString = localStorage.getItem('userInfo');
        const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
        const email = userInfo ? userInfo.email : null;
        
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ email });
        const activateData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/verifyYourAccountResendPinView/`, body, config);
            return res;
        };
        try {
            const res = await activateData();
            console.log('resendPinAPIAction res.data.success: ', res.data.success)
            if (res.data.error) {
                dispatch(userReducerActions.verifyYourAccountPinResentFailure(res.data.error))
            } else {
                console.log('success')
                dispatch(userReducerActions.verifyYourAccountPinResent(res.data.success))
            }
        } catch (err) {
            console.log('err: ', err)
            dispatch(userReducerActions.verifyYourAccountPinResentFailure(err.response.data.error))
        };
    };
};
export const checkAuthenticated = () => {
    return async (dispatch) => {
        const accessToken = localStorage.getItem('token');
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': `Bearer ${accessToken}`,
            }
        };
        const checkAuth = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/accounts/authenticated/`, config);
            return res;
        };
        try {
            const res = await checkAuth();
            if (res.data.error || res.data.isAuthenticated === 'error') {
                dispatch(userReducerActions.authFail());
            } else if (res.data.isAuthenticated === 'success') {
                dispatch(userReducerActions.authSuccess());
            } else {
                dispatch(userReducerActions.authFail());
            }
        } catch (err) {
            dispatch(userReducerActions.authFail());
        };
    };
};
export const resetPasswordAPIAction = (email) => { 
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ email });
        const pwResetEmailPinData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/resetPasswordSendPin/`, body, config);
            return res;
        };
        try {
            const res = await pwResetEmailPinData();
            console.log('resendPinAPIAction res.data: ', res.data)
            if (res.data.error) {
                dispatch(userReducerActions.passwordResetPinEmailSentFailure(res.data.error))
            } else {
                console.log('success')
                dispatch(userReducerActions.passwordResetPinEmailSentSuccess(res.data.success))
                localStorage.setItem('email', JSON.stringify(email))
            }
        } catch (err) {
            console.log('err: ', err)
            dispatch(userReducerActions.passwordResetPinEmailSentFailure(err.response.data.error))
        };
    };
};
export const resetYourPasswordAPIAction = (passCode, password, passwordConfirm) => { verifyYourAccount_APIAction
    return async (dispatch) => {
        let email = JSON.parse(localStorage.getItem('email'));

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ email, passCode, password, passwordConfirm});
        const pwResetEmailPinData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/resetYourPassword/`, body, config);
            return res;
        };

        try {
            const res = await pwResetEmailPinData();
            console.log('resetYourPasswordAPIAction res.data: ', res.data)
            if (res.data.PasswordError) {
                dispatch(userReducerActions.passwordResetFailurePasswordIssue(res.data.PasswordError));
            } else if (res.data.PinError) {
                dispatch(userReducerActions.passwordResetFailurePassCodeIssue(res.data.PinError));
            }else if (res.data.error) {
                dispatch(userReducerActions.passwordResetFailurePassCodeIssue(res.data.error)); 
            }else {
                console.log('success')
                dispatch(userReducerActions.passwordResetSuccess());
            }
        } catch (err) {
            // console.log('err: ', err)
            // dispatch(userReducerActions.passwordResetFailure(err.response.data.error))
        };

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
//             dispatch(userReducerActions.deleteUserSuccess());
//             } else {
//                 console.log('DELETE_USER_FAIL-1')
//                 dispatch(userReducerActions.deleteUserFail());
//             }
//         } catch(err) {
//             console.log('DELETE_USER_FAIL-2');
//             dispatch(userReducerActions.deleteUserFail());
//         };  
//     };
// };