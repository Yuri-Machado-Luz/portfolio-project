/**
 * Validation Utilities
 *
 * Common validation functions for forms and data.
 */

/**
 * Validate email format
 *
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate required field (non-empty)
 *
 * @param {*} value - Value to check
 * @returns {boolean} True if value is not empty
 */
export function validateRequired(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") return Object.keys(value).length > 0;
  return true;
}

/**
 * Validate minimum length
 *
 * @param {string} value - String to validate
 * @param {number} min - Minimum length
 * @returns {boolean} True if string meets minimum length
 */
export function validateMinLength(value, min) {
  return typeof value === "string" && value.length >= min;
}

/**
 * Validate maximum length
 *
 * @param {string} value - String to validate
 * @param {number} max - Maximum length
 * @returns {boolean} True if string is within maximum length
 */
export function validateMaxLength(value, max) {
  return typeof value === "string" && value.length <= max;
}

/**
 * Validate URL format
 *
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL format
 */
export function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate phone number (Brazilian format)
 *
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone format
 */
export function validatePhone(phone) {
  const phoneRegex = /^\(?[1-9]{2}\)?\s?(?:9\d{4}|\d{4})-?\d{4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}
