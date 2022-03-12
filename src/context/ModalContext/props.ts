import { SetStateAction, Dispatch } from "react";

export type ContextProps = {
  open: boolean;
  onClose: () => void;
  triggerModal: (msg: string, deskID: string) => void;
  desk: string;
  message: string;
};
