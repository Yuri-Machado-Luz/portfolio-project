import { useSyncExternalStore } from "react";

/**
 * useMediaQuery Hook
 *
 * Detects if a media query matches.
 * Uses useSyncExternalStore for proper React 18+ compatibility.
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
 */
export function useMediaQuery(query) {
  const subscribe = (callback) => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  };

  const getSnapshot = () => window.matchMedia(query).matches;

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Preset breakpoint hooks
export const useIsMobile = () => useMediaQuery("(max-width: 640px)");
export const useIsTablet = () =>
  useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
export const useIsDesktop = () => useMediaQuery("(min-width: 1025px)");

export default useMediaQuery;
