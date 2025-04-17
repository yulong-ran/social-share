import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../components/ShareButton";

export type ButtonVariant = "default" | "ghost";
export type ButtonSize = "default" | "sm" | "lg";

export interface Platform {
  id: string;
  name: string;
  icon: string;
  // Add any other properties your platforms have
}

// Make ShareButtonProps extend ButtonVariantProps to ensure type safety
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  platform: string;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare?: (platform: string) => void;
  className?: string;
  title?: string;
}

export interface SocialIcon {
  name: string;
  icon: string;
}