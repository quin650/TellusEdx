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
            console.log('error 1: ', error)
            console.log('error 2:', error.response.data)
            dispatch(userReducerActions.loginFail(error.response.data));
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
            const res = await axios.post(`http://127.0.0.1:8000/accounts/register`, body, config);
            return res;
        };

        try {
            const res = await registerData();
            if (res.data.error) {
                console.log('res.data.error: ', res.data.error)
                dispatch(userReducerActions.registerFail());
            } else {
                console.log('register action success')
                dispatch(userReducerActions.registerSuccess());
                console.log('res.data.success: ', res.data)
                dispatch(userReducerActions.registerFeedback(res.data));
            }
        } catch (err) {
            dispatch(userReducerActions.registerFail());
        };
    };
};

// export const checkAuthenticated = () => {
//     return async (dispatch) => {
//         const config = {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         };
//         const checkAuth = async () => {
//             const res = await axios.get(`http://127.0.0.1:8000/accounts/authenticated`, config);
//             return res;
//         };
//         try {
//             const res = await checkAuth();
//             if (res.data.error || res.data.isAuthenticated === 'error') {
//                 dispatch(userReducerActions.authFail());
//             } else if (res.data.isAuthenticated === 'success') {
//                 dispatch(userReducerActions.authSuccess());
//             } else {
//                 dispatch(userReducerActions.authFail());
//             }
//         } catch (err) {
//             dispatch(userReducerActions.authFail());
//         };
//     };
// };
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