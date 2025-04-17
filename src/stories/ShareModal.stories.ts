import type { Meta, StoryObj } from '@storybook/react';
import { ShareModal } from '../components/ShareModal';

const meta: Meta<typeof ShareModal> = {
  title: 'Components/ShareModal',
  component: ShareModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    url: { control: 'text' },
    title: { control: 'text' },
    shareContent: { control: 'text' }, // Updated from description
    modalTitle: { control: 'text' },
    modalText: { control: 'text' }, // Added modalText control
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
    url: 'https://example.com',
    title: 'Example Share Content',
    shareContent: 'This is an example of sharing content', // Updated from description
    onClose: () => console.log('Modal closed'),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    url: 'https://example.com',
    title: 'Example Share Content',
    shareContent: 'This is an example of sharing content', // Updated from description
    onClose: () => console.log('Modal closed'),
  },
};