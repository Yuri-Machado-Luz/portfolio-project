import { cn } from "@utils/cn";

/**
 * Container Component
 *
 * A responsive container with max-width constraints.
 *
 * @example
 * <Container size="lg">Content</Container>
 */
const Container = ({
  children,
  size = "default",
  centered = true,
  className,
  ...props
}) => {
  const sizes = {
    sm: "max-w-4xl", // 896px
    default: "max-w-6xl", // 1152px
    lg: "max-w-7xl", // 1280px
    xl: "max-w-[1400px]", // 1400px custom
    "2xl": "max-w-[1600px]", // 1600px custom
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20",
        sizes[size],
        centered && "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
