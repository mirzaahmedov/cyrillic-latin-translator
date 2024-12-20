import { type VariantProps, cva } from "class-variance-authority";

import type { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const textAreaVariants = cva(
  "appearance-none px-5 py-2.5 border border-slate-200",
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
