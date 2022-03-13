import { MouseEvent } from "react";

export type Props = {
  isLoading?: boolean;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
