/**
 * Breakpoint Constants
 *
 * Matches Tailwind's default breakpoints.
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
};

export const MEDIA_QUERIES = {
  SM: `(min-width: ${BREAKPOINTS.SM}px)`,
  MD: `(min-width: ${BREAKPOINTS.MD}px)`,
  LG: `(min-width: ${BREAKPOINTS.LG}px)`,
  XL: `(min-width: ${BREAKPOINTS.XL}px)`,
  "2XL": `(min-width: ${BREAKPOINTS["2XL"]}px)`,
  MOBILE: `(max-width: ${BREAKPOINTS.SM - 1}px)`,
  TABLET: `(min-width: ${BREAKPOINTS.SM}px) and (max-width: ${BREAKPOINTS.LG - 1}px)`,
  DESKTOP: `(min-width: ${BREAKPOINTS.LG}px)`,
};
