import { cn } from "@utils/cn";
import { motion as Motion } from "framer-motion";

/**
 * FadeIn Component
 *
 * A simple fade-in animation wrapper.
 *
 * @example
 * <FadeIn delay={0.2}>
 *   <p>This fades in</p>
 * </FadeIn>
 */
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
  ...props
}) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  return (
    <Motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Motion.div>
  );
};

export default FadeIn;
