import "./styles.css";

import * as Primitive from "@radix-ui/react-dialog";

import { PropsWithChildren } from "react";

const Dialog = ({ children }: PropsWithChildren) => {
  return <Primitive.Root>{children}</Primitive.Root>;
};

const DialogContent = ({ children }: PropsWithChildren) => {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="DialogOverlay" />
      <Primitive.Content className="DialogContent">
        {children}
      </Primitive.Content>
    </Primitive.Portal>
  );
};

Dialog.Trigger = Primitive.Trigger;
Dialog.Title = Primitive.Title;
Dialog.Description = Primitive.Description;
Dialog.Content = DialogContent;

export { Dialog };
