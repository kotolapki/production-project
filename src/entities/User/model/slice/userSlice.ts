import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserScheme } from '../types/user';

const initialState: UserScheme = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem('user');

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.authData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
