import { FC, HTMLAttributes, useContext } from "react";
import { DateContext } from "../../context";

type Props = HTMLAttributes<HTMLInputElement>;

export const DatePicker: FC<Props> = () => {
  const { date, setDate } = useContext(DateContext);

  return (
    <>
      <input
        className="w-full px-2 cursor-text rounded-sm shadow-md text-center uppercase outline-1 focus:outline-primary"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </>
  );
};
