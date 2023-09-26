import { configureStore } from '@reduxjs/toolkit';
import { StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateScheme) => {
  return configureStore<StateScheme>({
    reducer: { counter: counterReducer },
    devTools: _IS_DEV_,
    preloadedState: initialState,
  });
};
