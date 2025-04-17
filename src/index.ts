import './globals.css';

import { ShareButton, buttonVariants } from './components/ShareButton';
import ShareModal from './components/ShareModal';
import SocialIcons from './components/SocialIcons';
import { ShareButtonProps, ShareModalProps, SocialIcon, ButtonVariant, ButtonSize } from './types';
import type { Platform } from './components/SocialIcons';
import useShare from './hooks/useShare';

export {
    ShareButton,
    ShareModal,
    SocialIcons,
    buttonVariants,
    useShare
};

export type {
    ShareButtonProps,
    ShareModalProps,
    SocialIcon,
    Platform,
    ButtonVariant,
    ButtonSize
};