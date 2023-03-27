import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// const setAuthHeader = token => {
//   axios.defaults.headers.common['Authorization'] = `${token}`;
// };

export const fetchContacts = createAsyncThunk("contact/fetchAll",
async (_, thunkAPI) => {
	try {
	  const response = await axios.get("/contacts");
	  return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message)
	}
 }
)
 
export const fetchContactAdd = createAsyncThunk("contact/addContact",
async (text, thunkAPI) => {
	try {
	const response = await axios.post("/contacts", {...text});
	return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message)
	}
}
)

export const fetchContactDel = createAsyncThunk("contact/deleteContact",
async (id, thunkAPI) => {
	try {
	const response = await axios.delete(`/contacts/${id}`);
	return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message)
	}
}
)
