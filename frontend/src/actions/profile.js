import Cookies from 'js-cookie';
import axios from 'axios';
import { profActions } from '../reducers/profile';
import { profTasksActions } from '../reducers/profile_tasks';
import { tasksActions } from '../reducers/tasks';
export const load_user_profile = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
    
        const loadUser = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/profile/user_profile`, config);
            return res;
        };

        try {
            const res = await loadUser();

            if (res.data.error) {
                console.log('LOAD_USER_PROFILE_FAIL');
                dispatch(profActions.loadUserProfileFail());
            } else {
                console.log('LOAD_USER_PROFILE_SUCCESS');
                dispatch(profActions.loadUserProfileSuccess(res.data));
                
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
            const res = await axios.put(`http://127.0.0.1:8000/profile/update_user_profile`, body, config)
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
export const load_user_profile_tasks = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
    
        const loadUser = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/profile/user_profile_tasks`, config);
            return res;
        };

        try {
            const res = await loadUser();

            if (res.data.error) {
                console.log('LOAD_USER_PROFILE_TASKS_FAIL');
                dispatch(profTasksActions.loadUserProfileTasksFail());
            } else {
                console.log('LOAD_USER_PROFILE_TASKS_SUCCESS');
                dispatch(profTasksActions.loadUserProfileTasksSuccess(res.data));
                
            }
        } catch (err) {
            console.log('LOAD_USER_PROFILE_TASKS_FAIL');
            dispatch(profTasksActions.loadUserProfileTasksFail());
        };

    };
};
export const update_user_profile_tasks = (task_title, task_description, task_tags, task_order, task_priority_level, task_links)  => {
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
            const res = await axios.put(`http://127.0.0.1:8000/profile/update_user_profile_tasks`, body, config)
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
                dispatch(profTasksActions.updateUserProfileTasksSuccess(res.data));
            } else {
                console.log('tasks res');
                console.log(res.data);
                console.log('UPDATE_USER_PROFILE_TASKS_FAIL-1');
                dispatch(profTasksActions.updateUserProfileTasksFail());
            }
        } catch (err) {
            console.log(err);
            console.log('UPDATE_USER_PROFILE_TASKS_FAIL-2');
            dispatch(profTasksActions.updateUserProfileTasksFail());
        };
    };
};
export const create_user_profile_tasks = (data) => { 
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        let task_title = data['task_title']
        let task_description = data['task_description']
        let task_tags = data['task_tags']
        let task_order = data['task_order']
        let task_priority_level = data['task_priority_level']
        let task_links = data['task_links']
        console.log('task_title: ', task_title)
        console.log('task_description: ', task_description)
        console.log('task_tags:', task_tags )
        console.log('task_order:', task_order )
        console.log('task_priority_level:', task_priority_level )
        console.log('task_links:', task_links )

        const body = JSON.stringify({ 'withCredentials': true, task_title, task_description, task_tags, task_order, task_priority_level, task_links});
        const createTask = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/profile/create_user_profile_tasks`, body, config);
            return res;
        };
        try {
            const res = await createTask();
            console.log('res: ', res);


            
            console.log('res tasks: ', res.data.tasks);
            if ( res.data.tasks && res.data.username){
                console.log('UPDATE_USER_PROFILE_TASKS_SUCCESS');
                dispatch(tasksActions.addTask(res.data));
            } else {
                console.log('tasks res');
                console.log(res.data);
                console.log('UPDATE_USER_PROFILE_TASKS_FAIL-1');
                dispatch(tasksActions.updateUserProfileTasksFail());
            }
        } catch (err) {
            console.log(err);
            console.log('UPDATE_USER_PROFILE_TASKS_FAIL-2');
            dispatch(tasksActions.updateUserProfileTasksFail());
        };
    };
};