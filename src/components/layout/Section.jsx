import { cn } from "@utils/cn";
import { forwardRef } from "react";

/**
 * Section Component
 *
 * A semantic section element with consistent spacing.
 *
 * @example
 * <Section id="about" spacing="lg">Content</Section>
 */
const Section = forwardRef(
  (
    { children, id, as = "section", spacing = "default", className, ...props },
    ref
  ) => {
    const spacings = {
      none: "py-0",
      sm: "py-8 sm:py-12",
      default: "py-12 sm:py-16 lg:py-20",
      lg: "py-16 sm:py-24 lg:py-32",
      xl: "py-24 sm:py-32 lg:py-40",
    };

    const Tag = as;

    return (
      <Tag
        ref={ref}
        id={id}
        className={cn(
          `container mx-auto flex min-w-full flex-col items-center
          justify-center`,
          spacings[spacing],
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Section.displayName = "Section";

export default Section;
