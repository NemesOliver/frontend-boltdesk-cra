import { FC } from "react";
import { Header, Modal } from "../../components";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Modal />
    </>
  );
};
