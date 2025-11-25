import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "subtle" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors gap-1 cursor-pointer m-2",
          "focus:outline-none focus:ring-1 focus:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none",

          // VARIANTS
          variant === "default" && "bg-primary text-white hover:bg-primary/90",
          variant === "outline" && "border border-border hover:bg-foreground/5",
          variant === "subtle" && "bg-foreground/5 hover:bg-foreground/10",
          variant === "danger" && "bg-red-500 text-white hover:bg-red-600",
          variant === "ghost" && "hover:bg-foreground/10",

          // SIZES
          size === "sm" && "h-8 px-3 text-sm",
          size === "md" && "h-10 px-4 text-sm",
          size === "lg" && "h-12 px-6 text-base",
          size === "icon" && "h-10 w-10 p-0",

          className
        )}
        {...props}
      >
        {loading ? (
          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
