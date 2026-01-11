/**
 * cn - Class Names Utility
 *
 * Merges class names conditionally. A lightweight alternative to clsx/classnames.
 * Filters out falsy values and joins remaining classes.
 *
 * @example
 * cn("base", condition && "conditional", "always")
 * // → "base conditional always" (if condition is true)
 * // → "base always" (if condition is false)
 *
 * @param {...(string|undefined|null|false)} classes - Class names to merge
 * @returns {string} Merged class string
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default cn;
