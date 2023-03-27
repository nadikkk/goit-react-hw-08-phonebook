import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `${token}`;
};
const cleanAuthHeader = token => {
	axios.defaults.headers.common['Authorization'] = '';
}

export const registerUser = createAsyncThunk(
  'user/register',
  async (arg, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', arg);
		setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginOnUser = createAsyncThunk(
	'user/loginOn',
	async (arg, thunkAPI) => {
		try {
			const res = await axios.post('/users/login', arg)
			setAuthHeader(res.data.token);
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
)

export const logOutUser = createAsyncThunk(
	'user/logOut', 
	async (_, thunkAPI) => {
		try {
			await axios.post('/users/logout')
			cleanAuthHeader()
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
)

export const refreshUser = createAsyncThunk(
	'user/refreshUser',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState()
		const persistedToken = state.user.token
		// console.log(thunkAPI);
		// console.log(state);
		if (persistedToken === null) {
			return thunkAPI.rejectWithValue('Unable to fetch user');
		} 
		try {
			setAuthHeader(persistedToken);
			const res = await axios.get('/users/current');
			return res.data;
		 } catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		 }
	}
)

