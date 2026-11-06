import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-xs px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-ring",
  {
    variants: {
      variant: {
        default:
          "border border-[#1c1917] bg-[#1c1917] text-[#faf8f5]",
        secondary:
          "border border-[#e4ded6] bg-[#f2ede6] text-[#44403c]",
        outline:
          "border border-[#d6d0c7] bg-transparent text-[#1c1917]",
        clay:
          "border border-[#8c4830]/30 bg-[#8c4830]/10 text-[#8c4830]",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
