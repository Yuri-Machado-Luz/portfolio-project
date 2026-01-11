import { useEffect, useState } from "react";

/**
 * useScrollPosition Hook
 *
 * Tracks the current scroll position of the window.
 *
 * @example
 * const { scrollY, scrollX, scrollDirection } = useScrollPosition();
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
    scrollDirection: "none",
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction =
        currentScrollY > lastScrollY
          ? "down"
          : currentScrollY < lastScrollY
            ? "up"
            : "none";

      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: currentScrollY,
        scrollDirection: direction,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
