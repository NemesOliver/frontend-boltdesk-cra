import { createContext, FC, useState, Dispatch, SetStateAction } from "react";

type DateProps = {
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
};

export const DateContext = createContext({} as DateProps);

export const DateContextProvider: FC = ({ children }) => {
  const [date, setDate] = useState("2022-03-07"); // For demo set date to 2022-03-07

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};
