import { VariantProps, cva } from "class-variance-authority";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "appearance-none px-5 py-2.5 rounded-full font-bold transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
        outline:
          "bg-white dark:bg-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-700 border border-slate-200 dark:border-neutral-600 text-slate-400",
      },
    },
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={twMerge(buttonVariants({ variant }), className)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
