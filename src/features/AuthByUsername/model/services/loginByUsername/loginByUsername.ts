import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';

interface Args {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  Args,
  { rejectValue: string }
>('login/loginByUsername', async (args, thunkApi) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      args,
    );

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem('user', JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue(e.response.data.message);
  }
});
