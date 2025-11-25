import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, icon, label, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="text-sm font-medium text-foreground/80">
            {label}
          </label>
        )}

        <div
          className={cn(
            "flex items-center gap-2 rounded-lg border bg-background px-3 py-2",
            error
              ? "border-red-500"
              : "border-border hover:border-foreground/40",
            "focus-within:ring-1 focus-within:ring-primary/30"
          )}
        >
          {icon && <span className="text-foreground/60">{icon}</span>}

          <input
            type={type}
            className={cn(
              "flex-1 bg-transparent outline-none text-sm placeholder:text-foreground/40",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>

        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
