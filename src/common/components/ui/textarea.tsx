import { type VariantProps, cva } from "class-variance-authority";

import type { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const textAreaVariants = cva(
  "appearance-none px-5 py-4 border dark:border-slate-700 border-slate-200 hover:ring-slate-200 dark:hover:ring-slate-700 hover:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary rounded",
  {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
    },
  }
);

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textAreaVariants>;
const TextArea = ({ size, className, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={twMerge(textAreaVariants({ size }), className)}
      {...props}
    />
  );
};

export { TextArea };
export type { TextAreaProps };
