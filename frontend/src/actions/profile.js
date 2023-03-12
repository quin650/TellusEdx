import Cookies from 'js-cookie';
import axios from 'axios';
import { profActions } from '../reducers/profile';

export const load_user = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
    
        const loadUser = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/profile/user`, config);
            return res;
        };

        try {
            const res = await loadUser();

            if (res.data.error) {
                console.log('LOAD_USER_PROFILE_FAIL');
                dispatch(profActions.loadUserProfileFail());
            } else {
                console.log('LOAD_USER_PROFILE_SUCCESS');
                dispatch(profActions.loadUserProfileSuccess());
            }
        } catch (err) {
            console.log('LOAD_USER_PROFILE_FAIL');
            dispatch(profActions.loadUserProfileFail);
        };
    };
};

export const update_user_profile = (first_name, last_name, phone, city)  => {
    return async (dispatch) => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };

        const body = JSON.stringify({ 'withCredentials': true, first_name, last_name, phone, city});

        const updateProfile = async () => {
            const res = await axios.put(`http://127.0.0.1:8000/profile/update`, body, config)
            // console.log(res.data);
            return res;
        };

        try {
            const res = await updateProfile();

            if ( res.data.profile && res.data.username){
                console.log('UPDATE_USER_PROFILE_SUCCESS');
                dispatch(profActions.updateUserProfileSuccess(res.data));
            } else {
                console.log('UPDATE_USER_PROFILE_FAIL-1');
                dispatch(profActions.updateUserProfileFail());
            }
        } catch (err) {
            console.log(err);
            console.log('UPDATE_USER_PROFILE_FAIL-2');
            dispatch(profActions.updateUserProfileFail());
        };
    };
};

export const update_user_tasks = (task_title, task_description, task_tags, task_order, task_priority_level, task_links)  => {
    return async (dispatch) => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };

        const body = JSON.stringify({ 'withCredentials': true, task_title, task_description, task_tags, task_order, task_priority_level, task_links});

        const updateTasks = async () => {
            const res = await axios.put(`http://127.0.0.1:8000/profile/updateUserProfileTasks`, body, config)
            // console.log('res data: ', res.data);
            // console.log('res data tasks: ', res.data.tasks);
            return res;
        };

        try {
            const res = await updateTasks();
            console.log('tasks res');
            console.log(res.data.tasks);
            if ( res.data.tasks && res.data.username){
                console.log('UPDATE_USER_PROFILE_TASKS_SUCCESS');
                dispatch(profActions.updateUserProfileNotesSuccess(res.data));
            } else {
                console.log('tasks res');
                console.log(res.data);
                console.log('UPDATE_USER_PROFILE_TASKS_FAIL-1');
                dispatch(profActions.updateUserProfileNotesFail());
            }
        } catch (err) {
            console.log(err);
            console.log('UPDATE_USER_PROFILE_TASKS_FAIL-2');
            dispatch(profActions.updateUserProfileNotesFail());
        };
    };
};