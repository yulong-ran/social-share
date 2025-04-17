import * as React from "react";
import { cn } from "../../lib/utils";

interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export function ShareButton({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ShareButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        // Variant styles
        variant === 'default' && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === 'outline' && "border border-input hover:bg-accent hover:text-accent-foreground",
        variant === 'ghost' && "hover:bg-accent hover:text-accent-foreground",
        // Size styles
        size === 'default' && "h-10 py-2 px-4",
        size === 'sm' && "h-9 px-3",
        size === 'lg' && "h-11 px-8",
        className
      )}
      {...props}
    />
  );
}