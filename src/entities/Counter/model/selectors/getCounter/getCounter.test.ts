import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { StateScheme } from 'app/providers/StoreProvider';

describe('getCounter', () => {
  test('should return counter reducer value', () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 0 },
    };

    expect(getCounter(state as StateScheme)).toEqual({ value: 0 });
  });
});
