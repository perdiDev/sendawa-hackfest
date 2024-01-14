import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "w-full bg-navy text-white font-semibold py-3 rounded-lg hover:bg-blue-950",
      disable:
        "w-full bg-gray text-black font-semibold py-2 rounded-lg hover:bg-gray-400"
    },
    size: {
      default: "yesh-10 yespx-4 yespy-2",
      sm: "yesh-9 yesrounded-md yespx-3",
      lg: "yesh-11 yesrounded-md yespx-8",
      icon: "yesh-10 yesw-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

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
