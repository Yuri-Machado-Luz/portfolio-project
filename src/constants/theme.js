/**
 * Theme Constants
 *
 * Design tokens and theme configuration.
 */

export const COLORS = {
  // Primary palette
  PRIMARY: {
    DEFAULT: "#ff0040",
    LIGHT: "#ff3366",
    DARK: "#cc0033",
    RED: "#d90020",
  },

  // Secondary palette
  SECONDARY: {
    DEFAULT: "#00ffff",
    DULL: "#49dfb9",
    DARK: "#083026",
  },

  // Neutral palette
  NEUTRAL: {
    WHITE: "#f2f4f3",
    GRAY: "#1a1a1a",
    BLACK: "#0c090d",
  },
};

export const FONTS = {
  SANS: '"Josefin Sans", sans-serif',
  LOGO: '"Changa", sans-serif',
  ACCENT: '"Tenor Sans", sans-serif',
};

export const SHADOWS = {
  SM: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  MD: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  LG: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  XL: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  GLOW_PRIMARY: "0 0 20px 5px rgba(255, 0, 64, 0.3)",
  GLOW_SECONDARY: "0 0 20px 5px rgba(0, 255, 255, 0.3)",
};

export const Z_INDEX = {
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  POPOVER: 60,
  TOOLTIP: 70,
  TOAST: 100,
};
