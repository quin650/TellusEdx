import Cookies from 'js-cookie'
import axios from 'axios';
import { load_user } from './profile';
import { userActions } from '../reducers/auth';

export const checkAuthenticated = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
    
        const checkAuth = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/accounts/authenticated`, config);
            return res;
        };

        try {
            const res = await checkAuth();

            if (res.data.error || res.data.isAuthenticated === 'error') {
                console.log('AUTHENTICATED_FAIL-1');
                dispatch(userActions.authFail());
            } else if (res.data.isAuthenticated === 'success') {
                console.log('AUTHENTICATED_SUCCESS');
                dispatch(userActions.authSuccess());
            } else {
                console.log('AUTHENTICATED_FAIL-2');
                dispatch(userActions.authFail());
            }
        } catch (err) {
            console.log('AUTHENTICATED_FAIL-3');
            dispatch(userActions.authFail());
        };
    };
};
export const register = (username, password, re_password) => { 
    return async (dispatch) => {
        
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
    
        const body = JSON.stringify({ username, password, re_password });

        const registerData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/register`, body, config);
            return res;
        };

        try {
            const res = await registerData();
            console.log('res: ');
            console.log(res);
            if (res.data.error) {
                console.log('REGISTER_FAIL-1');
                dispatch(userActions.registerFail());
            } else {
                console.log('REGISTER_SUCCESS');
                dispatch(userActions.registerSuccess());
            }
        } catch (err) {
            console.log('REGISTER_FAIL-2');
            dispatch(userActions.registerFail());
        };
    };
};
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
            const res = await axios.post(`http://127.0.0.1:8000/accounts/login`, body, config);
            return res;
        };

        try {
            const res = await loginData();

            if (res.data.success) {
                console.log('LOGIN_SUCCESS')
                dispatch(userActions.loginSuccess());
                // console.log('dispatch(load_user());')
                // dispatch(load_user());
            } else {
                console.log('LOGIN_FAIL-1')
                dispatch(userActions.loginFail());
            }
        } catch (err) {
            console.log('LOGIN_FAIL-2')
            dispatch(userActions.loginFail());
        };
    };
};
export const logout = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };

    const body = JSON.stringify({'withCredentials': true});

        const logoutUser = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/logout`, body, config);
            return res;
        };

        try {
            const res = await logoutUser();

            if(res.data.success){
            console.log('LOGOUT_SUCCESS');
            dispatch(userActions.logoutSuccess());
            } else {
                console.log('LOGOUT_FAIL-1');
                dispatch(userActions.logoutFail());
            }
        } catch(err) {
            console.log('LOGOUT_FAIL-2');
            dispatch(userActions.logoutFail());
        };  
    };
};
export const delete_account = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };

    const body = JSON.stringify({'withCredentials': true});
    
        const deleteAccount = async () => {
            const res = await axios.delete(`http://127.0.0.1:8000/accounts/delete`, config, body);
            return res;
        };

        try {
            const res = await deleteAccount();

            if(res.data.success){
                console.log('DELETE_USER_SUCCESS')
            dispatch(userActions.deleteUserSuccess());
            } else {
                console.log('DELETE_USER_FAIL-1')
                dispatch(userActions.deleteUserFail());
            }
        } catch(err) {
            console.log('DELETE_USER_FAIL-2');
            dispatch(userActions.deleteUserFail());
        };  
    };
};