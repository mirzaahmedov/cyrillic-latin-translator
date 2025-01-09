import { type VariantProps, cva } from "class-variance-authority";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const DEFAULT_TEXTAREA_HEIGHT = 400;

export const textAreaVariants = cva(
  "overflow-hidden appearance-none px-5 py-4 pb-24 md:pb-14 border dark:border-slate-700 border-slate-200 hover:ring-slate-200 dark:hover:ring-slate-700 hover:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary rounded",
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

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textAreaVariants> & {
    height?: number;
  };
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ size, className, height = DEFAULT_TEXTAREA_HEIGHT, ...props }, ref) => {
    return (
      <div>
        <textarea
          style={{ height }}
          ref={(elementRef) => {
            if (typeof ref === "function") {
              ref(elementRef);
            } else if (ref) {
              ref.current = elementRef;
            }

            if (!elementRef) {
              return;
            }
            elementRef.style.height = `${Math.max(
              height,
              measureHeight(elementRef)
            )}px`;
          }}
          onResize={(e) => {
            e.currentTarget.style.height = `${Math.max(
              height,
              measureHeight(e.currentTarget)
            )}px`;
            props.onResize?.(e);
          }}
          className={twMerge(textAreaVariants({ size }), className)}
          {...props}
        />
      </div>
    );
  }
);

const measureHeight = (element: HTMLTextAreaElement) => {
  const tempElement = document.createElement("div");
  const width = element.offsetWidth;

  const computedStyle = window.getComputedStyle(element);

  tempElement.style.width = `${width}px`;
  tempElement.innerText = element.value;
  tempElement.style.padding = computedStyle.padding;
  tempElement.style.font = computedStyle.font;
  tempElement.style.lineHeight = computedStyle.lineHeight;
  tempElement.style.whiteSpace = "pre-wrap";
  tempElement.style.wordBreak = "break-all";
  tempElement.style.visibility = "hidden";

  document.body.appendChild(tempElement);
  const height = tempElement.offsetHeight;
  document.body.removeChild(tempElement);

  return height;
};

TextArea.displayName = "TextArea";
