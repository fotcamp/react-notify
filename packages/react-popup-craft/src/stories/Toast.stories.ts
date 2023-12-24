import type { Meta, StoryObj } from '@storybook/react';

import { Toast as ToastComponent } from '@react-popup-craft/toast';

const meta = {
  title: 'Components/Toast',
  component: ToastComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ToastComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toast: Story = {
  args: {},
};
