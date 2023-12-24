import type { Meta, StoryObj } from '@storybook/react';

import { Dialog as DialogComponent } from '@react-popup-craft/dialog';

const meta = {
  title: 'Components/Dialog',
  component: DialogComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DialogComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dialog: Story = {
  args: {},
};
