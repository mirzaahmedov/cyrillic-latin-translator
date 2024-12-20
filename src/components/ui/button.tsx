import { VariantProps, cva } from "class-variance-authority";

import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("appearance-none px-5 py-2.5", {
  variants: {
    variant: {
      primary:
        "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full",
      secondary:
        "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded",
    },
  },
});

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
