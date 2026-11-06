import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-xs uppercase tracking-widest font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#1c1917] text-[#faf8f5] hover:bg-[#322e2b] shadow-xs",
        secondary:
          "bg-[#f0ebe3] text-[#1c1917] hover:bg-[#e4ded5] border border-[#e2dcd4]",
        outline:
          "border border-[#d6d0c7] bg-transparent text-[#1c1917] hover:bg-[#f0ebe3]",
        ghost:
          "text-[#1c1917] hover:bg-[#f0ebe3]",
        clay:
          "bg-[#8c4830] text-[#ffffff] hover:bg-[#783c27] shadow-xs",
        link:
          "text-[#1c1917] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-12 px-7 text-xs",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
