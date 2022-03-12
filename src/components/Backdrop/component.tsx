import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export const Backdrop: FC<Props> = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-backdrop z-40 text-white grid place-items-center ">
      <div className="flex flex-col items-center">
        <div className="border-2 border-t-secondary h-[30px] w-[30px] rounded-full animate-spin ml-[-5px] mb-1"></div>
        <span className="text-[16px]">Loading...</span>
      </div>
    </div>
  );
};
