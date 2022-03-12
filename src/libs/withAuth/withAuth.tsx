import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { Backdrop } from "../../components";

export const withAuth = (Component: FunctionComponent) => {
  return function Wrapper(props: any) {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);

    console.log(isLoggedIn);

    //Check if we are on client
    if (typeof window !== "undefined") {
      // if loading show loader
      if (isLoggedIn === null) {
        return <Backdrop />;
      }

      // if no user redirect to /login
      if (!isLoggedIn) {
        navigate("/login", { replace: true });
        return null;
      }

      // if logged in
      return <Component {...props} />;
    }
  };
};
