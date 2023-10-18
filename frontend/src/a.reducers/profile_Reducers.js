import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile_id: '',
    username: '',
    first_name: '',
    last_name: '',
    phone: '',
    city: '',
};

const profSlice = createSlice({
	name: 'prof',
	initialState,
	reducers: {
        createUserProfileSuccess(state, action) {
			state.username = action.payload.username;
            state.profile_id = action.payload.profile.id;
            state.first_name = action.payload.profile.first_name;
            state.last_name = action.payload.profile.last_name;
            state.phone = action.payload.profile.phone;
            state.city = action.payload.profile.city;
		},
        createUserProfileFail(state) {
            state.username = '';
            state.profile_id = '';
            state.first_name = '';
            state.last_name = '';
            state.phone = '';
            state.city = '';
		},
		loadUserProfileSuccess(state, action) {
			state.username = action.payload.username;
            state.profile_id = action.payload.profile.id;
            state.first_name = action.payload.profile.first_name;
            state.last_name = action.payload.profile.last_name;
            state.phone = action.payload.profile.phone;
            state.city = action.payload.profile.city;
		},
        updateUserProfileSuccess(state, action) {
			state.username = action.payload.username;
            state.profile_id = action.payload.profile.id;
            state.first_name = action.payload.profile.first_name;
            state.last_name = action.payload.profile.last_name;
            state.phone = action.payload.profile.phone;
            state.city = action.payload.profile.city;
		},
        loadUserProfileFail(state) {
            state.profile_id = '';
            state.username = '';
            state.first_name = '';
            state.last_name = '';
            state.phone = '';
            state.city = '';
		},
        updateUserProfileFail(state) {
			state;
		},
	},
});

export const profReducerActions  = profSlice.actions;
export default profSlice;