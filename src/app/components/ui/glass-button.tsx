import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

const glassButtonVariants = cva(
  "relative isolate all-unset cursor-pointer rounded-xl transition-all h-12",
  {
    variants: {
      size: {
        default: "text-sm font-medium",
        sm: "text-sm font-medium h-10",
        lg: "text-base font-medium h-14",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const glassButtonTextVariants = cva(
  "glass-button-text relative block select-none",
  {
    variants: {
      size: {
        default: "px-6",
        sm: "px-4",
        lg: "px-8",
        icon: "flex h-10 w-10 items-center justify-center",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof glassButtonVariants> {
  contentClassName?: string;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, size, contentClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          "glass-button-wrap cursor-pointer rounded-xl group relative overflow-hidden",
          className
        )}
      >
        <button
          className={cn("glass-button relative z-10", glassButtonVariants({ size }))}
          ref={ref}
          {...props}
        >
          <span
            className={cn(
              "relative z-20",
              glassButtonTextVariants({ size }),
              contentClassName
            )}
          >
            {children}
          </span>
          
          {/* Background Hover Effect (Black to Green) - Left to Right */}
          <div className="absolute inset-0 bg-[#4EA62F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-0" />
        </button>
        <div className="glass-button-shadow rounded-xl"></div>
      </div>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };