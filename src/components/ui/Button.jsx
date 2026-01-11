import { cn } from "@utils/cn";
import { forwardRef } from "react";

/**
 * Button Component
 *
 * A flexible button component with multiple variants and sizes.
 *
 * @example
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" disabled>Disabled</Button>
 */
const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      as: Component = "button",
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-pri text-white hover:bg-pri-dark focus:ring-pri active:scale-95",
      secondary:
        "bg-sec text-main-black hover:bg-sec-dull focus:ring-sec active:scale-95",
      outline:
        "border-2 border-pri text-pri hover:bg-pri hover:text-white focus:ring-pri active:scale-95",
      ghost:
        "text-main-white hover:bg-main-gray/50 focus:ring-main-gray active:scale-95",
      link: "text-pri underline-offset-4 hover:underline focus:ring-pri",
    };

    const sizes = {
      xs: "px-2 py-1 text-xs rounded",
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-4 py-2 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-xl",
      xl: "px-8 py-4 text-xl rounded-2xl",
    };

    // Only pass disabled to button elements
    const componentProps =
      Component === "button" ? { disabled: disabled || loading } : {};

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...componentProps}
        {...props}
      >
        {loading && <Spinner className="mr-2 h-4 w-4" />}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Component>
    );
  }
);

Button.displayName = "Button";

// Simple inline spinner for loading state
const Spinner = ({ className }) => (
  <svg
    className={cn("animate-spin", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export default Button;
