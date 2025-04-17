import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ShareModal } from '../components/ShareModal';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  WhatsappIcon,
} from "react-share";

const SocialShareIntegration = () => {
  const shareUrl = 'https://example.com';
  const title = 'Example Share Content';

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h1>Social Share Component Demo</h1>
      
      <ShareModal 
        url={shareUrl}
        title={title}
        triggerText="Share this page"
      />

      <div style={{ marginTop: '20px' }}>
        <h3>Individual Share Buttons:</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {[
            { Button: TwitterShareButton, Icon: TwitterIcon, name: 'Twitter' },
            { Button: FacebookShareButton, Icon: FacebookIcon, name: 'Facebook' },
            { Button: LinkedinShareButton, Icon: LinkedinIcon, name: 'LinkedIn' },
            { Button: WhatsappShareButton, Icon: WhatsappIcon, name: 'WhatsApp' },
            { Button: EmailShareButton, Icon: EmailIcon, name: 'Email' },
          ].map(({ Button, Icon, name }) => (
            <Button
              key={name}
              url={shareUrl}
              title={title}
              className="inline-flex items-center justify-center transition-colors hover:opacity-80 h-10 w-10"
            >
              <Icon size={32} round />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Examples/CompleteIntegration',
  component: SocialShareIntegration,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SocialShareIntegration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};