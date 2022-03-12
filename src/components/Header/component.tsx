import { FC, useContext } from "react";
import { AuthContext } from "../../context";
import { Logo } from "./libs";

export const Header: FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="bg-background shadow-md h-10 ">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto pr-2">
        <div className="w-20 h-10">
          <Logo />
        </div>
        {user && <p>{user.name}</p>}
      </div>
    </header>
  );
};
