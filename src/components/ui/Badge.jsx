import { cn } from "@utils/cn";

/**
 * Badge Component
 *
 * A small label component for tags, status, or categories.
 *
 * @example
 * <Badge variant="primary">New</Badge>
 * <Badge variant="success" size="sm">Active</Badge>
 */
const Badge = ({
  children,
  variant = "default",
  size = "md",
  animated = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full";

  const variants = {
    default: "bg-main-gray text-main-white border border-main-gray/50",
    primary: "bg-pri/20 text-pri border border-pri/30",
    secondary: "bg-sec/20 text-sec border border-sec/30",
    success: "bg-green-500/20 text-green-400 border border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    error: "bg-red-500/20 text-red-400 border border-red-500/30",
    outline: "bg-transparent text-main-white border border-main-white/30",
    primaryOutline: "bg-pri/10 text-pri/80 border border-pri/30 ",
  };

  const sizes = {
    xs: "px-2 py-0.5 text-xxs",
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  const animatedStyles = animated ? "animatedBadge" : "";

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        animatedStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
