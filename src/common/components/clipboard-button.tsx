import { Button, ButtonProps } from "./ui";
import { IconClipboardCheck, IconClipboardPlus } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

import { twMerge } from "tailwind-merge";

type ClipboardButtonProps = ButtonProps & {
  text: string;
};
const ClipboardButton = ({
  text,
  className,
  ...props
}: ClipboardButtonProps) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);

    const timeout = timeoutRef.current;
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className={twMerge(
        "flex items-center justify-center gap-1",
        isCopied &&
          "text-emerald-500 bg-emerald-50 hover:bg-emerald-50 border-emerald-500",
        className
      )}
      {...props}
    >
      {isCopied ? <IconClipboardCheck /> : <IconClipboardPlus />}
      {isCopied ? <span className="text-xs">Bufferga saqlandi</span> : null}
    </Button>
  );
};

export { ClipboardButton };
