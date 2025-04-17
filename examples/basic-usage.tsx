import React, { useState } from 'react';
import { 
  ShareButton, 
  ShareModal, 
  buttonVariants 
} from '../src';

// Example of using the shadcn-styled components
export default function BasicUsageExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = (platform: string) => {
    console.log(`Sharing on ${platform}`);
    setIsOpen(false);
  };

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Social Share UI Components</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Different Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <ShareButton 
            platform="Twitter" 
            onClick={() => setIsOpen(true)} 
            variant="default"
          />
          
          <ShareButton 
            platform="Facebook" 
            onClick={() => setIsOpen(true)} 
            variant="outline"
          />
          
          <ShareButton 
            platform="LinkedIn" 
            onClick={() => setIsOpen(true)} 
            variant="secondary"
          />
          
          <ShareButton 
            platform="Email" 
            onClick={() => setIsOpen(true)} 
            variant="ghost"
          />
          
          <button 
            className={buttonVariants({ variant: "destructive" })}
            onClick={() => setIsOpen(true)}
          >
            Custom Share Button
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Different Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <ShareButton 
            platform="Twitter" 
            onClick={() => setIsOpen(true)} 
            size="sm"
          />
          
          <ShareButton 
            platform="Facebook" 
            onClick={() => setIsOpen(true)} 
            size="default"
          />
          
          <ShareButton 
            platform="LinkedIn" 
            onClick={() => setIsOpen(true)} 
            size="lg"
          />
        </div>
      </div>
      
      {/* The ShareModal component */}
      <ShareModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onShare={handleShare}
        url="https://example.com"
        title="Amazing content title"
        shareContent="Check out this amazing content!"
        modalTitle="Share this content with your network"
        modalText="Choose your preferred platform to share"
      />
    </div>
  );
}