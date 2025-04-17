import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
  DialogPortal,
  DialogOverlay
} from "./ui/dialog";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon
} from "react-share";

interface ShareModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  url: string;
  title?: string;
  shareContent?: string;
  className?: string;
  modalTitle?: string;
  modalText?: string;
  triggerClassName?: string;
  triggerText?: string;
  triggerAriaLabel?: string;
}

const shareButtons = [
  {
    Button: TwitterShareButton,
    Icon: TwitterIcon,
    name: 'Twitter',
    ariaLabel: 'Share on Twitter'
  },
  {
    Button: FacebookShareButton,
    Icon: FacebookIcon,
    name: 'Facebook',
    ariaLabel: 'Share on Facebook'
  },
  {
    Button: LinkedinShareButton,
    Icon: LinkedinIcon,
    name: 'LinkedIn',
    ariaLabel: 'Share on LinkedIn'
  },
  {
    Button: WhatsappShareButton,
    Icon: WhatsappIcon,
    name: 'WhatsApp',
    ariaLabel: 'Share on WhatsApp'
  },
  {
    Button: TelegramShareButton,
    Icon: TelegramIcon,
    name: 'Telegram',
    ariaLabel: 'Share on Telegram'
  },
  {
    Button: EmailShareButton,
    Icon: EmailIcon,
    name: 'Email',
    ariaLabel: 'Share via Email'
  },
  {
    Button: RedditShareButton,
    Icon: RedditIcon,
    name: 'Reddit',
    ariaLabel: 'Share on Reddit'
  }
];

export function ShareModal({
  isOpen,
  onClose,
  url,
  title,
  shareContent,
  className,
  modalTitle = "Share this content",
  modalText = "Choose a platform to share this content",
  triggerClassName,
  triggerText = "Share",
  triggerAriaLabel = "Open share dialog"
}: ShareModalProps) {
  const [open, setOpen] = React.useState(isOpen ?? false);
  
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      onClose?.();
    }
  };

  React.useEffect(() => {
    if (isOpen !== undefined) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const [firstShareButtonRef, setFirstShareButtonRef] = React.useState<HTMLButtonElement | null>(null);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
            triggerClassName
          )}
          aria-label={triggerAriaLabel}
        >
          {triggerText}
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent 
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] sm:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-2 sm:gap-4 border bg-background p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            className
          )}
          onEscapeKeyDown={() => onClose?.()}
          onInteractOutside={(event) => {
            event.preventDefault();
            onClose?.();
          }}
        >
          <DialogHeader className="p-4 sm:p-6 pb-2">
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogDescription>{modalText}</DialogDescription>
          </DialogHeader>

          <div className="p-4 sm:p-6 pt-2" role="group" aria-label="Share options">
            <div className="grid grid-cols-4 md:grid-cols-7 gap-4 items-center justify-items-center">
              {shareButtons.map(({ Button, Icon, name, ariaLabel }, index) => {
                let buttonProps = {
                  url,
                  title,
                };
                
                switch (name) {
                  case 'Twitter':
                    Object.assign(buttonProps, {
                      title: shareContent ? `${title} - ${shareContent}` : title,
                    });
                    break;
                  case 'Facebook':
                    Object.assign(buttonProps, {
                      quote: shareContent,
                    });
                    break;
                  case 'LinkedIn':
                    Object.assign(buttonProps, {
                      summary: shareContent,
                    });
                    break;
                  case 'Email':
                    Object.assign(buttonProps, {
                      subject: title,
                      body: shareContent,
                    });
                    break;
                  case 'WhatsApp':
                  case 'Telegram':
                    Object.assign(buttonProps, {
                      title: shareContent ? `${title} - ${shareContent}` : title,
                    });
                    break;
                }

                return (
                  <div key={name} className="relative group">
                    <Button
                      {...buttonProps}
                      className="inline-flex items-center justify-center transition-colors hover:opacity-80 hover:bg-muted h-12 w-12 sm:h-14 sm:w-14 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      aria-label={ariaLabel}
                      ref={index === 0 ? setFirstShareButtonRef : undefined}
                      tabIndex={0}
                    >
                      <Icon size={28} round />
                    </Button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <DialogClose 
            ref={closeButtonRef}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            aria-label="Close share dialog"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}