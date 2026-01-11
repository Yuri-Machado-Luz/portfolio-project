import { useEffect, useRef } from "react";

/**
 * useClickOutside Hook
 *
 * Detects clicks outside of a referenced element.
 *
 * @example
 * const ref = useClickOutside(() => setIsOpen(false));
 * return <div ref={ref}>Dropdown content</div>;
 */
export function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [callback]);

  return ref;
}

export default useClickOutside;
