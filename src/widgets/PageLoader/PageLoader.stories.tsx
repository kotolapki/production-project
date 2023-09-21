import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';

const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {};
