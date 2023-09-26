import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface renderComponentProps {
  route?: string;
  initialState?: DeepPartial<StateScheme>;
}

export const renderComponent = (
  component: ReactNode,
  { route = '', initialState }: renderComponentProps = {},
) => {
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};
