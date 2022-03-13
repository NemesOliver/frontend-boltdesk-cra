import { FC } from "react";
import { Loader } from "./libs";
import { Props } from "./props";

export const Button: FC<Props> = ({
  children,
  isLoading,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary w-full grid place-content-center py-1 text-white text-[18px] rounded-sm uppercase hover:bg-primaryHover transition-all duration-300 active:scale-95`}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
