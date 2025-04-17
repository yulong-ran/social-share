import * as React from "react";
import { ShareModal } from "./ShareModal";
import { shouldShowPopup, setLastShownTime } from "../lib/utils/storage";

interface ShareModalPopupProps extends Omit<React.ComponentProps<typeof ShareModal>, 'isOpen' | 'onClose'> {
  probability?: number; // Value between 0 and 1, default 0.5
  minMinutesInterval?: number; // Minimum minutes before showing again, default 60
  onPopupShown?: () => void; // Callback when popup is shown
  onPopupClosed?: () => void; // Callback when popup is closed
}

export function ShareModalPopup({
  probability = 0.5,
  minMinutesInterval = 60,
  onPopupShown,
  onPopupClosed,
  ...shareModalProps
}: ShareModalPopupProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (shouldShowPopup(probability, minMinutesInterval)) {
      setIsOpen(true);
      setLastShownTime();
      onPopupShown?.();
    }
  }, [probability, minMinutesInterval, onPopupShown]);

  const handleClose = () => {
    setIsOpen(false);
    onPopupClosed?.();
  };

  return (
    <ShareModal
      {...shareModalProps}
      isOpen={isOpen}
      onClose={handleClose}
    />
  );
}