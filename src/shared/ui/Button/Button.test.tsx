/* eslint-disable i18next/no-literal-string */

import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('render test', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('with theme clear', () => {
    render(<Button theme={ButtonThemeEnum.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});
