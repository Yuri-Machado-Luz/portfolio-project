/**
 * Navbar Animation Variants
 *
 * Framer Motion animation configurations for the navigation.
 * Nav items are now imported from @constants/routes
 */

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 2, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { when: "afterChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6, transition: { delay: 0.6 } },
};

export { itemVariants, menuVariants };
