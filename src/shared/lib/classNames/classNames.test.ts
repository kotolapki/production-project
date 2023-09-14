import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with first argument only', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expectedResult = 'someClass additional';

    expect(classNames('someClass', {}, ['additional'])).toBe(expectedResult);
  });

  test('with additional and mods', () => {
    const expectedResult = 'someClass additional hover scrollable';

    expect(
      classNames('someClass', { hover: true, scrollable: true }, [
        'additional',
      ]),
    ).toBe(expectedResult);
  });

  test('with additional and mods false', () => {
    const expectedResult = 'someClass additional hover';

    expect(
      classNames('someClass', { hover: true, scrollable: false }, [
        'additional',
      ]),
    ).toBe(expectedResult);
  });

  test('with additional and mods undefined', () => {
    const expectedResult = 'someClass additional hover';

    expect(
      classNames('someClass', { hover: true, scrollable: false }, [
        'additional',
      ]),
    ).toBe(expectedResult);
  });
});
