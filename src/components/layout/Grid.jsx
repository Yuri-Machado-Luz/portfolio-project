import { cn } from "@utils/cn";

/**
 * Grid Component
 *
 * A flexible grid layout component.
 *
 * @example
 * <Grid cols={3} gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 */
const Grid = ({
  children,
  cols = 1,
  gap = "md",
  responsive = true,
  className,
  ...props
}) => {
  const gaps = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  // Responsive column classes
  const colClasses = responsive
    ? {
        1: "grid-cols-1",
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
        6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
      }
    : {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
      };

  return (
    <div
      className={cn(
        "grid",
        colClasses[cols] || colClasses[1],
        gaps[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
