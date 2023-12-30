import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as React from "react";

const messageVariants = cva("", {
  variants: {
    variant: {
      default: "bg-blue-100 text-blue-500",
      error: "bg-red-100 text-red-500",
      info: "bg-gray-100 text-gray-500",
      success: "bg-green-100 text-green-500",
      warning: "bg-yellow-100 text-yellow-500",
    },
    size: {
      default: "p-2",
      lg: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface MessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof messageVariants> {
  message?: string;
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, variant, size, message, ...props }, ref) => {
    return (
      <div
        className={cn(messageVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div>
          {message && (
            <p className={`font-bold ${messageVariants({ variant, size })}`}>
              {message}
            </p>
          )}
          {props.children}
        </div>
      </div>
    );
  }
);

Message.displayName = "Message";

export { Message, messageVariants };
