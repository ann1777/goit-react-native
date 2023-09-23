import {createAsyncThunk} from '@reduxjs/toolkit';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../config';

export const signin = createAsyncThunk(
  'signin',
  async ({email, password}, thunkAPI) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return credentials.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const signout = createAsyncThunk('signout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
