import { configureStore } from '@reduxjs/toolkit';
import { StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export const createReduxStore = (initialState?: StateScheme) => {
  return configureStore<StateScheme>({
    reducer: { counter: counterReducer, user: userReducer },
    devTools: _IS_DEV_,
    preloadedState: initialState,
  });
};
