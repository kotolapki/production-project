import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import { StateScheme } from 'app/providers/StoreProvider';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 0 },
    };

    expect(getCounterValue(state as StateScheme)).toBe(0);
  });
});
