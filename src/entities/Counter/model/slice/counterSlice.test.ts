import { counterReducer, counterActions } from './counterSlice';
import { CounterScheme } from '../types/counterScheme';

describe('counterSlice', () => {
  test('increment', () => {
    const state: CounterScheme = {
      value: 1,
    };

    expect(counterReducer(state, counterActions.incremented())).toEqual({
      value: 2,
    });
  });

  test('decrement', () => {
    const state: CounterScheme = {
      value: 1,
    };

    expect(counterReducer(state, counterActions.decremented())).toEqual({
      value: 0,
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.incremented())).toEqual({
      value: 1,
    });
  });
});
