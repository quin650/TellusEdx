import Cookies from 'js-cookie';
import axios from 'axios';
import { profReducerActions } from '../a.reducers/profile_Reducers';
import { tasksReducerActions } from '../a.reducers/tasks_Reducers';

export const create_user_profile = (first_name, last_name, phone, city)  => {
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
        const body = JSON.stringify({first_name, last_name, phone, city});
        const createProfile = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/profile/create_user_profile/`, body, config);
            return res;
        };
        try {
            const res = await createProfile();
            if ( res.data.profile && res.data.username){
                dispatch(profReducerActions.createUserProfileSuccess(res.data));
                localStorage.setItem('profInfo', JSON.stringify(res.data))
            } else {
                dispatch(profReducerActions.createUserProfileFail());
            }
        } catch (err) {
            dispatch(profReducerActions.createUserProfileFail());
        };
    };
};
export const load_user_profile = () => {
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
        const loadUser = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/profile/load_user_profile/`, config);
            return res;
        };
        try {
            const res = await loadUser();
            if (res.data.error) {
                dispatch(profReducerActions.loadUserProfileFail());
            } else {
                dispatch(profReducerActions.loadUserProfileSuccess(res.data));
                localStorage.setItem('profInfo', JSON.stringify(res.data))
            }
        } catch (err) {
            dispatch(profReducerActions.loadUserProfileFail());
        };
    };
};
export const update_user_profile = (first_name, last_name, phone, city)  => {
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

        const body = JSON.stringify({first_name, last_name, phone, city});
        const updateProfile = async () => {
            const res = await axios.put(`http://127.0.0.1:8000/profile/update_user_profile/`, body, config)
            return res;
        };

        try {
            const res = await updateProfile();
            if (res.data.profile && res.data.username){
                dispatch(profReducerActions.updateUserProfileSuccess(res.data));
                localStorage.setItem('profInfo', JSON.stringify(res.data))
            } else {
                dispatch(profReducerActions.updateUserProfileFail());
            }
        } catch (err) {
            dispatch(profReducerActions.updateUserProfileFail());
        };
    };
};
export const delete_user_profile = () => {
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
        const deleteProfile = async () => {
            const res = await axios.delete(`http://127.0.0.1:8000/profile/delete_user_profile/`, config);
            return res;
        };
        try {
            const res = await deleteProfile();
            if (res.data.error){
                dispatch(profReducerActions.deleteProfileFail());
            } else {
                dispatch(profReducerActions.deleteProfileSuccess());
                localStorage.removeItem('profInfo');
            }
        } catch (err) {
            dispatch(profReducerActions.deleteProfileFail());
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
        let task_due_date = data['task_due_date']

        const body = JSON.stringify({task_title, task_description, task_tags, task_order, task_priority_level, task_links, task_due_date});
        const createTask = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/profile/create_user_profile_tasks/`, body, config);
            return res;
        };
        try {
            const res = await createTask();
            if ( res.data.tasks && res.data.username){
                dispatch(tasksActions.addTaskSuccess(res.data));
            } else {
                dispatch(tasksActions.addTaskFail());
            }
        } catch (err) {
            dispatch(tasksActions.addTaskFail());
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
        const loadTasks = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/profile/load_user_profile_tasks/`, config);
            return res;
        };
        try {
            const res = await loadTasks();
            if (res.data.error) {
                dispatch(tasksReducerActions.loadTaskFail());
            } else {
                dispatch(tasksReducerActions.loadTaskSuccess(res.data));
                
            }
        } catch (err) {
            dispatch(tasksReducerActions.loadTaskFail());
        };
    };
};
export const update_user_profile_tasks = (data)  => {
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
        let task_due_date = data['task_due_date']
        let task_id = data['task_id']

        const body = JSON.stringify({task_title, task_description, task_tags, task_order, task_priority_level, task_links, task_due_date, task_id});
        const updateTasks = async () => {
            const res = await axios.put(`http://127.0.0.1:8000/profile/update_user_profile_tasks/`, body, config)
            return res;
        };
        try {
            const res = await updateTasks();
            if (res.data.tasks){
                dispatch(tasksReducerActions.updateTaskSuccess(res.data));
            } else {
                dispatch(tasksReducerActions.updateTaskFail());
            }
        } catch (err) {
            dispatch(tasksReducerActions.updateTaskFail());
        };
    };
};
export const delete_user_profile_task = (task_id) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({task_id});
        const deleteTasks = async () => {
            const res = await axios.delete(`http://127.0.0.1:8000/profile/delete_user_profile_task/`, { data: body, headers: config.headers })
            return res;
        };

        try {
            const res = await deleteTasks();
            if (res.data.error){
                dispatch(tasksReducerActions.deleteTaskFail());
            } else {
                dispatch(tasksReducerActions.deleteTaskSuccess(task_id));
            }
        } catch (err) {
            dispatch(tasksReducerActions.deleteTaskFail());
        };
    };
};