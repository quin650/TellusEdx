import Cookies from 'js-cookie'
import axios from 'axios';
import { userActions } from '../reducers/auth';
// import { load_user } from './profile';

export const login = (username, password) => {
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
            dispatch(userActions.loginRequest());
            const res = await loginData();
            dispatch(userActions.loginSuccess(res.data));
            localStorage.setItem('userInfo', JSON.stringify(res.data))
        } catch (error) {
            dispatch(userActions.loginFail(error.message));
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
//                 // console.log('AUTHENTICATED_FAIL-1');
//                 dispatch(userActions.authFail());
//             } else if (res.data.isAuthenticated === 'success') {
//                 // console.log('AUTHENTICATED_SUCCESS');
//                 dispatch(userActions.authSuccess());
//             } else {
//                 // console.log('AUTHENTICATED_FAIL-2');
//                 dispatch(userActions.authFail());
//             }
//         } catch (err) {
//             // console.log('AUTHENTICATED_FAIL-3');
//             dispatch(userActions.authFail());
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
//                 dispatch(userActions.registerFail());
//             } else {
//                 dispatch(userActions.registerSuccess());
//                 dispatch(userActions.registerFeedback(res.data.success));
//             }
//         } catch (err) {
//             dispatch(userActions.registerFail());
//         };
//     };
// };

// export const logout = () => {
//     return async (dispatch) => {
//         const config = {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': Cookies.get('csrftoken')
//             }
//         };

//     const body = JSON.stringify({'withCredentials': true});

//         const logoutUser = async () => {
//             const res = await axios.post(`http://127.0.0.1:8000/accounts/logout`, body, config);
//             return res;
//         };

//         try {
//             const res = await logoutUser();

//             if(res.data.success){
//             console.log('LOGOUT_SUCCESS');
//             dispatch(userActions.logoutSuccess());
//             } else {
//                 console.log('LOGOUT_FAIL-1');
//                 dispatch(userActions.logoutFail());
//             }
//         } catch(err) {
//             console.log('LOGOUT_FAIL-2');
//             dispatch(userActions.logoutFail());
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
//             dispatch(userActions.deleteUserSuccess());
//             } else {
//                 console.log('DELETE_USER_FAIL-1')
//                 dispatch(userActions.deleteUserFail());
//             }
//         } catch(err) {
//             console.log('DELETE_USER_FAIL-2');
//             dispatch(userActions.deleteUserFail());
//         };  
//     };
// };