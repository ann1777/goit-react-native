import { createSlice } from "@reduxjs/toolkit";
import { signin, signout } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: null,
  posts: null,
  error: null,
  isLoading: false,
};

const slice = createSlice({
  name: "main",
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(signin.pending, handlePending)
      .addCase(signin.rejected, handleRejected)
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.uid;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signout.pending, handlePending)
      .addCase(signout.rejected, handleRejected)
      .addCase(signout.fulfilled, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const rootReducer = slice.reducer;
