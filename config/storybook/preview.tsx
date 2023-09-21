import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
        <div className={`app ${ThemeEnum.LIGHT} storybook-wrapper`}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export default preview;
