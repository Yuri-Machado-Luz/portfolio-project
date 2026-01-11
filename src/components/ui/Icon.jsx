import { cn } from "@utils/cn";
import { isValidElement } from "react";

/**
 * Icon Component
 *
 * A wrapper for icons with consistent sizing and styling.
 * Works with lucide-react or any SVG icons.
 *
 * @example
 * <Icon icon={Menu} size="md" />
 * <Icon icon={<CustomSvg />} className="text-pri" />
 */
const Icon = ({
  icon: IconComponent,
  size = "md",
  className,
  label,
  ...props
}) => {
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-10 h-10",
  };

  // Check if it's a React component (function or forwardRef object)
  const isComponent =
    typeof IconComponent === "function" ||
    (typeof IconComponent === "object" &&
      IconComponent !== null &&
      (IconComponent.$$typeof || IconComponent.render));

  // If IconComponent is a React component (from lucide-react, etc.)
  if (isComponent) {
    return (
      <IconComponent
        className={cn(sizes[size], className)}
        aria-label={label}
        aria-hidden={!label}
        {...props}
      />
    );
  }

  // If it's already a rendered element (custom SVG)
  if (isValidElement(IconComponent)) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center",
          sizes[size],
          className
        )}
        aria-label={label}
        aria-hidden={!label}
        {...props}
      >
        {IconComponent}
      </span>
    );
  }

  // Fallback: return null if icon is invalid
  return null;
};

export default Icon;
