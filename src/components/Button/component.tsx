import { useContext, FC, HTMLAttributes } from "react";
import { Loader } from "./libs";

type Props = {
  isLoading?: boolean;
};

export const Button: FC<Props> = ({ children, isLoading }) => {
  return (
    <button className="bg-primary w-full grid place-content-center py-1 text-white text-[18px] rounded-sm uppercase hover:bg-primaryHover transition-all duration-300 active:scale-95">
      {isLoading ? <Loader /> : children}
    </button>
  );
};
