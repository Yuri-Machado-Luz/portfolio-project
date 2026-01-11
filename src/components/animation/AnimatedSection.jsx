import { cn } from "@utils/cn";
import { motion as Motion } from "framer-motion";

/**
 * AnimatedSection Component
 *
 * A section wrapper with entrance animations.
 *
 * @example
 * <AnimatedSection animation="fadeUp">
 *   <h2>Title</h2>
 * </AnimatedSection>
 */
const AnimatedSection = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
  ...props
}) => {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  };

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Motion.div>
  );
};

export default AnimatedSection;
