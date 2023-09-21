import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonThemeEnum } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ButtonThemeEnum.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ButtonThemeEnum.OUTLINE,
  },
};
