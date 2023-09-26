import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Counter', () => {
  test('render test', () => {
    renderComponent(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('increment test', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 1 } } });

    const incrementButton = screen.getByTestId('counter-increment-button');

    fireEvent.click(incrementButton);

    const value = screen.getByTestId('counter-value');

    expect(value).toHaveTextContent('2');
  });

  test('decrement test', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 1 } } });

    const incrementButton = screen.getByTestId('counter-decrement-button');

    fireEvent.click(incrementButton);

    const value = screen.getByTestId('counter-value');

    expect(value).toHaveTextContent('0');
  });
});
