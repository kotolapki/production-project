import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Link',
    to: '',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Inverted: Story = {
  args: {
    children: 'Link',
    to: '',
    theme: AppLinkTheme.INVERTED,
  },
};
