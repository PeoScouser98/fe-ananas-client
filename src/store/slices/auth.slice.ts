import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	authenticated: false,
	accessToken: null
};

const authSlice = createSlice({
	name: 'auth',
	reducers: {},
	initialState,
	extraReducers: (builder) => {}
});

export { authSlice as default };
