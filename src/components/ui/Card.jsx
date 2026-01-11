import { cn } from "@utils/cn";
import { forwardRef } from "react";

/**
 * Card Component
 *
 * A flexible card component with optional header, footer, and hover effects.
 *
 * @example
 * <Card>
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content here</Card.Body>
 *   <Card.Footer>Actions</Card.Footer>
 * </Card>
 */
const Card = forwardRef(
  (
    { children, variant = "default", hover = false, className, ...props },
    ref
  ) => {
    const baseStyles =
      "rounded-2xl overflow-hidden transition-all duration-300";

    const variants = {
      default: "bg-main-gray/60 border border-main-gray/30",
      elevated: "bg-main-gray/80 shadow-lg shadow-black/30",
      outline: "border-2 border-pri/30 bg-transparent",
      glass: "bg-main-gray/30 backdrop-blur-md border border-white/10",
    };

    const hoverStyles = hover
      ? "hover:scale-[1.02] hover:shadow-xl hover:shadow-pri/10 cursor-pointer"
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Card subcomponents
const CardHeader = ({ children, className, ...props }) => (
  <div
    className={cn("border-main-gray/30 border-b px-6 py-4", className)}
    {...props}
  >
    {children}
  </div>
);

const CardBody = ({ children, className, ...props }) => (
  <div className={cn("px-6 py-4", className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }) => (
  <div
    className={cn("border-main-gray/30 border-t px-6 py-4", className)}
    {...props}
  >
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
