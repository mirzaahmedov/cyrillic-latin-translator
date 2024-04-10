"use client";

import { forwardRef, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Copy } from "@phosphor-icons/react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [isCopied, setIsCopied] = useState(false);

    return (
      <div className="w-full relative">
        <textarea
          ref={ref}
          className={twMerge(
            "textarea textarea-lg textarea-bordered text-2xl w-full min-h-96 resize-none overflow-hidden",
            className
          )}
          spellCheck={false}
          {...props}
        ></textarea>
        <button
          type="button"
          className="btn btn-copy absolute bottom-5 right-5"
          onClick={() => {
            setIsCopied(true);

            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            if (!props?.value) {
              return;
            }

            navigator.clipboard.writeText(String(props?.value || ""));
            timeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
          }}
        >
          <Copy /> {isCopied ? "Copied" : ""}
        </button>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
