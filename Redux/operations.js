import {createAsyncThunk} from '@reduxjs/toolkit';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../config';

export const signup = createAsyncThunk(
  'signup',
  async ({email, password}, thunkAPI) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
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

export const updateuser = createAsyncThunk(
  'updateuser',
  async ({login}, thunkAPI) => {
    const user = auth.currentUser;

    if (user) {
      try {
        const result = await updateProfile(user, {
          displayName: login,
        });
        console.log(result);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
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

export const createpost = createAsyncThunk(
  'createpost',
  async ({name, location, photo, locationName, likes, comments}, thunkAPI) => {
    try {
      await addDoc(collection(db, 'posts'), {
        name,
        location,
        photo,
        locationName,
        likes,
        comments,
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getposts = createAsyncThunk('getposts', async (_, thunkAPI) => {
  try {
    const snapshot = await getDocs(collection(db, 'posts'));
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data(),
    }));
    return posts;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
