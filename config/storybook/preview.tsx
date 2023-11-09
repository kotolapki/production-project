import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeEnum, ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={createReduxStore()}>
        <ThemeProvider>
          <BrowserRouter>
            <div className={`app ${ThemeEnum.LIGHT} storybook-wrapper`}>
              <Story />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    ),
  ],
};

export default preview;
