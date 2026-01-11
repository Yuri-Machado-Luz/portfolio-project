/**
 * Date Utilities
 *
 * Functions for formatting and manipulating dates.
 */

/**
 * Format a date to a localized string
 *
 * @param {Date|string|number} date - The date to format
 * @param {Intl.DateTimeFormatOptions} options - Formatting options
 * @param {string} locale - Locale string (default: 'pt-BR')
 * @returns {string} Formatted date string
 */
export function formatDate(date, options = {}, locale = "pt-BR") {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  };

  return new Date(date).toLocaleDateString(locale, defaultOptions);
}

/**
 * Format a date as relative time (e.g., "2 days ago")
 *
 * @param {Date|string|number} date - The date to format
 * @param {string} locale - Locale string (default: 'pt-BR')
 * @returns {string} Relative time string
 */
export function formatRelativeTime(date, locale = "pt-BR") {
  const now = new Date();
  const then = new Date(date);
  const diffInSeconds = Math.floor((now - then) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return rtf.format(-count, interval.label);
    }
  }

  return rtf.format(0, "second");
}
