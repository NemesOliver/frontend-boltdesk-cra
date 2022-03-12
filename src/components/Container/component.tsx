import React, { FC } from "react";
import { Props } from "./props";

export const Container: FC<Props> = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto px-2">{children}</div>;
};
