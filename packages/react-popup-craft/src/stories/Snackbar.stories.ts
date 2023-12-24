import type { Meta, StoryObj } from '@storybook/react';

import { Snackbar as SnackbarComponent } from '@react-popup-craft/snackbar';

const meta = {
  title: 'Components/Snackbar',
  component: SnackbarComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SnackbarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Snackbar: Story = {
  args: {},
};
