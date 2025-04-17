const STORAGE_KEY = 'share-modal-popup-last-shown';

export const getLastShownTime = (): number | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? parseInt(stored, 10) : null;
  } catch {
    return null;
  }
};

export const setLastShownTime = (): void => {
  try {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  } catch {
    // Silently fail if localStorage is not available
  }
};

export const shouldShowPopup = (probability: number, minMinutesInterval: number): boolean => {
  // First check probability
  if (Math.random() > probability) {
    return false;
  }

  // Then check time interval
  const lastShown = getLastShownTime();
  if (!lastShown) {
    return true;
  }

  const minutesPassed = (Date.now() - lastShown) / (1000 * 60);
  return minutesPassed >= minMinutesInterval;
};