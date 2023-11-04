import Cookies from 'js-cookie';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { profReducerActions } from '../a.reducers/profile_Reducers';
import { tasksReducerActions } from '../a.reducers/tasks_Reducers';

export const create_user_profile = (first_name, last_name, phone, city)  => {
    return async (dispatch) => {
        console.log('create user 1')

        const accessToken = localStorage.getItem('token');
        console.log('accessToken works???(create): ', accessToken)
        // const tokenString = localStorage.getItem('token');
        // const accessToken = tokenString ? JSON.parse(tokenString) : null;

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': `Bearer ${accessToken}`,
            }
        };
        const body = JSON.stringify({first_name, last_name, phone, city});
        console.log('create_user_profile_1')
        const createProfile = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/profile/create_user_profile/`, body, config);
            return res;
        };
        try {
            console.log('create_user_profile_2')
            const res = await createProfile();
            console.log('res.data', res.data)
            if ( res.data.profile && res.data.username){
                console.log('create_user_profile_3')
                dispatch(profReducerActions.createUserProfileSuccess(res.data));
                localStorage.setItem('profInfo', JSON.stringify(res.data))
            } else {
                console.log('create_user_profile_4')
                dispatch(profReducerActions.createUserProfileFail());
            }
        } catch (err) {
            console.log('create_user_profile_5')
            console.log(err);
            dispatch(profReducerActions.createUserProfileFail());
        };
    };
};
export const load_user_profile = () => {
    return async (dispatch) => {
        console.log('load user 1')

        const accessToken = localStorage.getItem('token');
        console.log('accessToken works???(load): ', accessToken)
        // const tokenString = localStorage.getItem('token');
        // const accessToken = tokenString ? JSON.parse(tokenString) : null;

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': `Bearer ${accessToken}`,
            }
        };
        console.log('load user 2')
        console.log('config: ', config)
        const loadUser = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/profile/load_user_profile/`, config);
            return res;
        };
        try {
            console.log('load user 3')
            const res = await loadUser();
            console.log('res.data------->', res.data)
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
        console.log('update profile 1')

        const accessToken = localStorage.getItem('token');
        console.log('accessToken works???(update): ', accessToken)
        // const tokenString = localStorage.getItem('token');
        // const accessToken = tokenString ? JSON.parse(tokenString) : null;

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
        console.log('delete profile 1')

        const accessToken = localStorage.getItem('token');
        console.log('accessToken works???(update): ', accessToken)
        // const tokenString = localStorage.getItem('token');
        // const accessToken = tokenString ? JSON.parse(tokenString) : null;

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
            console.log('delete action - try')
            const res = await deleteProfile();

            if (res.data.error){
                dispatch(profReducerActions.deleteProfileFail());
                console.log('delete action - error 1')
            } else {
                dispatch(profReducerActions.deleteProfileSuccess());
                localStorage.removeItem('profInfo');
                console.log('delete action - success')
            }
        } catch (err) {
            console.log('err', err)
            console.log('delete action - error 2')
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
            console.log(err);
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
                // console.log('res.data.tasks[0]: ', res.data.tasks[0]);
                // console.log('res.data.tasks[0].task_id: ', res.data.tasks[0].task_id);
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
            console.log('err', err)
            dispatch(tasksReducerActions.deleteTaskFail());
        };
    };
};