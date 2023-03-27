import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, fetchContactAdd, fetchContactDel } from "redux/contacts/operations";

const initialState = {
	contacts: {
		items: [],
		isLoading: false,
		error: null
	 }
}

const contactSlice = createSlice({
	name: 'contact',
	initialState,
	extraReducers: (builder) => {
		builder
		.addCase (fetchContacts.pending, (state) => {
			state.contacts.isLoading = true;
		})
		.addCase (fetchContacts.fulfilled, (state, {payload}) => {
			state.contacts.items = payload;
			state.contacts.isLoading = false;
		})
		.addCase (fetchContacts.rejected, (state, {payload}) => {
			state.contacts.error = payload;
			state.contacts.isLoading = false;
		})
		.addCase (fetchContactAdd.pending, (state) => {
			state.contacts.isLoading = true;
		})
		.addCase (fetchContactAdd.fulfilled, (state, {payload}) => {
			state.contacts.items.push(payload);
			state.contacts.isLoading = false;
		})
		.addCase (fetchContactAdd.rejected, (state, {payload}) => {
			state.contacts.error = payload;
			state.contacts.isLoading = false;
		})
		.addCase (fetchContactDel.pending, (state) => {
			state.contacts.isLoading = true;
		})
		.addCase (fetchContactDel.fulfilled, (state, {payload}) => {
			state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload.id);
			state.contacts.isLoading = false;
		})
		.addCase (fetchContactDel.rejected, (state, {payload}) => {
			state.contacts.error = payload;
			state.contacts.isLoading = false;
		})
		// addContact: (state, {payload}) => {
		// 	state.contacts.items.push(payload)
		// },
		// deleteContact: (state, {payload}) => {
		// 	state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload)
		// },
	}
})

export const {addContact, deleteContact} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;