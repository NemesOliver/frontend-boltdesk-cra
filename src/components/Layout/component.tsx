import React, { FC } from "react";
import { Header, Modal } from "../../components";

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Modal />
    </div>
  );
};
