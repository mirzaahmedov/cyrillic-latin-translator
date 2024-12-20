import { Suspense, type PropsWithChildren } from "react";

const SuspenseProvider = ({ children }: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

export { SuspenseProvider };
