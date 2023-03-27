const { createSlice } = require('@reduxjs/toolkit');
const {
  registerUser,
  loginOnUser,
  logOutUser,
  refreshUser,
} = require('./operations');

const initialState = {
  token: null,
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
	 .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
		.addCase(registerUser.rejected, handleRejected)
		.addCase(loginOnUser.pending, handlePending)
      .addCase(loginOnUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
		.addCase(loginOnUser.rejected, handleRejected)
		.addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        state.token = null;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
      })
		.addCase(logOutUser.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
		  state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user.name = payload.name;
		  state.user.email = payload.email;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
		  state.error = payload;
		  state.isLoading = false;
      });
  },
});

export const userReducers = userSlice.reducer;
