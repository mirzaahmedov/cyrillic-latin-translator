import * as Primitive from "@radix-ui/react-dialog";

import { PropsWithChildren } from "react";

const Dialog = ({ children }: PropsWithChildren) => {
  return <Primitive.Root>{children}</Primitive.Root>;
};

const DialogContent = ({ children }: PropsWithChildren) => {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="bg-black/20 fixed inset-0 backdrop-blur-sm" />
      <Primitive.Content className="p-5 rounded absolute top-1/2 left-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-base-100 z-10">
        {children}
      </Primitive.Content>
    </Primitive.Portal>
  );
};

const DialogTitle = ({ children }: PropsWithChildren) => {
  return (
    <Primitive.Title className="px-3.5 text-xl font-bold text-primary">
      {children}
    </Primitive.Title>
  );
};

const DialogDescription = ({ children }: PropsWithChildren) => {
  return (
    <Primitive.Description className="text-sm opacity-50">
      {children}
    </Primitive.Description>
  );
};

Dialog.Trigger = Primitive.Trigger;
Dialog.Close = Primitive.Close;

Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Content = DialogContent;

export { Dialog };
