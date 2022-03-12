import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export const Paper: FC<Props> = ({ children }) => {
  return (
    <div className="bg-background rounded-sm shadow-md mb-2 py-2 px-4">
      {children}
    </div>
  );
};
