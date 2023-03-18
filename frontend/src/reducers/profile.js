import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
		loadUserProfileSuccess(state, action) {
			state.username = action.payload.username;
            state.first_name = action.payload.profile.first_name;
            state.last_name = action.payload.profile.last_name;
            state.phone = action.payload.profile.phone;
            state.city = action.payload.profile.city;
		},
        updateUserProfileSuccess(state, action) {
			state.username = action.payload.username;
            state.first_name = action.payload.profile.first_name;
            state.last_name = action.payload.profile.last_name;
            state.phone = action.payload.profile.phone;
            state.city = action.payload.profile.city;
		},
        loadUserProfileFail(state) {
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

export const profActions  = profSlice.actions;
export default profSlice;