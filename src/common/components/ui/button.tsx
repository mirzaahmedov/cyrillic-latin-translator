import { VariantProps, cva } from "class-variance-authority";

import type { ButtonHTMLAttributes } from "react";
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

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant }), className)}
    >
      {children}
    </button>
  );
};

export { Button };
export type { ButtonProps };
