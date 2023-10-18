import Cookies from 'js-cookie'
import axios from 'axios';
import { userReducerActions } from '../a.reducers/auth_Reducers';
// import { load_user } from './profile';

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
        } catch (error) {
            dispatch(userReducerActions.loginFail(error.message));
        };
    };
};
export const logout = () => {
    return async (dispatch) => {
    try {
        localStorage.removeItem('userInfo');
        dispatch(userReducerActions.logoutSuccess());
    } catch(err) {
        dispatch(userReducerActions.logoutFail());
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

// export const register = (email, password) => { 
//     return async (dispatch) => {
        
//         const config = {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': Cookies.get('csrftoken')
//             }
//         };
    
//         const body = JSON.stringify({ email, password });

//         const registerData = async () => {
//             const res = await axios.post(`http://127.0.0.1:8000/accounts/register`, body, config);
//             return res;
//         };

//         try {
//             const res = await registerData();
//             if (res.data.error) {
//                 dispatch(userReducerActions.registerFail());
//             } else {
//                 dispatch(userReducerActions.registerSuccess());
//                 dispatch(userReducerActions.registerFeedback(res.data.success));
//             }
//         } catch (err) {
//             dispatch(userReducerActions.registerFail());
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