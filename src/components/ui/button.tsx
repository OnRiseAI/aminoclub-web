import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "xl" | "icon";

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900/30 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<Variant, string> = {
  default: "bg-ink-900 text-white hover:bg-ink-800 shadow-sm",
  outline: "border border-ink-200 bg-white text-ink-900 hover:bg-ink-50",
  ghost: "hover:bg-ink-50 text-ink-900",
  link: "text-ink-900 underline-offset-4 hover:underline rounded-none",
};

const sizeClasses: Record<Size, string> = {
  default: "h-11 px-6 py-2",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-7 text-[15px]",
  xl: "h-14 px-8 text-base",
  icon: "h-10 w-10",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

export function buttonClasses(variant: Variant = "default", size: Size = "default") {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size]);
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(buttonClasses(variant, size), child.props.className, className),
        ...props,
      } as React.HTMLAttributes<HTMLElement>);
    }
    return (
      <button
        className={cn(buttonClasses(variant, size), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
