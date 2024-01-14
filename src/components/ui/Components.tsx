import { ReactNode } from "react";

const Components = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full  max-w-[1250px] mx-auto">{children}</div>
  );
};

export default Components;
