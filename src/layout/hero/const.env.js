// Variants

const badgeVariants = {
  hidden: { opacity: 0, x: -1000 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.4 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: 1000 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 },
  },
};

export { badgeVariants, titleVariants };
