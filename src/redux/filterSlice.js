import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filter: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		addFilter: (state, {payload}) => {
			state.filter = payload
		},
	}
})

export const {addFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;