import type { Meta, StoryObj } from '@storybook/react';
import { AppError } from './AppError';

const meta = {
  title: 'widgets/AppError',
  component: AppError,
  tags: ['autodocs'],
} satisfies Meta<typeof AppError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {};
