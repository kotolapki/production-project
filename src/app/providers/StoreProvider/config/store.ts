import {
  AnyAction,
  Dispatch,
  ThunkDispatch,
  configureStore,
} from '@reduxjs/toolkit';
import { StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { useDispatch } from 'react-redux';

export const createReduxStore = (initialState?: StateScheme) => {
  return configureStore<StateScheme>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      login: loginReducer,
    },
    devTools: _IS_DEV_,
    preloadedState: initialState,
  });
};

type AppDispatch = ThunkDispatch<StateScheme, undefined, AnyAction> &
  Dispatch<AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
