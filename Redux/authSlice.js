import {createSlice} from '@reduxjs/toolkit';
import {
  createpost,
  getposts,
  signin,
  signout,
  signup,
  updateuser,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  userId: null,
  nickname: null,
  stateChange: false,
  email: null,
  avatar: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStateChanged: (state, {payload}) => ({
      ...state,
      userId: payload.userId,
      nickname: payload.nickname,
      email: payload.email,
      stateChange: true,
      avatar: payload.avatar,
    }),
  },

  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.rejected, handleRejected)
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
        console.log('registr');
      })
      .addCase(signin.pending, handlePending)
      .addCase(signin.rejected, handleRejected)
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.uid;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateuser.pending, handlePending)
      .addCase(updateuser.rejected, handleRejected)
      .addCase(updateuser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signout.pending, handlePending)
      .addCase(signout.rejected, handleRejected)
      .addCase(signout.fulfilled, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getposts.pending, handlePending)
      .addCase(getposts.rejected, handleRejected)
      .addCase(getposts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.error = null;
        console.log('GetedPosts');
      })
      .addCase(addcomment.pending, handlePending)
      .addCase(addcomment.rejected, handleRejected)
      .addCase(addcomment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('comment added');
      })
      .addCase(createpost.pending, handlePending)
      .addCase(createpost.rejected, handleRejected)
      .addCase(createpost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('post created');
      });
  },
});

export const authReducer = slice.reducer;
