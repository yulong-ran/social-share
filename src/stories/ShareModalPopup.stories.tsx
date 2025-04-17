import type { Meta, StoryObj } from '@storybook/react';
import { ShareModalPopup } from '../components/ShareModalPopup';

const meta: Meta<typeof ShareModalPopup> = {
  title: 'Components/ShareModalPopup',
  component: ShareModalPopup,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ShareModalPopup>;

export const Default: Story = {
  args: {
    url: 'https://example.com',
    title: 'Check out this awesome content!',
    shareContent: 'This is some amazing content you should check out.',
    probability: 1, // Always show in storybook for demonstration
    minMinutesInterval: 0, // No time restriction in storybook
  },
};

export const LowProbability: Story = {
  args: {
    ...Default.args,
    probability: 0.2, // 20% chance to show
    minMinutesInterval: 5, // Show every 5 minutes if probability check passes
  },
};