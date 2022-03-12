import { createContext, useState, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { backend } from "../../libs";

export const AuthContext = createContext<any>({});

type User = {
  email: string;
  _id: string;
  name: string;
};

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    // if auth cookie exists, user should stay logged in, else we will log user out,
    // we are checking for auth cookie as jwt cookie is httpOnly, therefore can not be accesed by frontend js
    if (cookies.auth) {
      // If logged in fetch user

      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies.auth]);

  useEffect(() => {
    if (isLoggedIn) {
      getUser(cookies.user);
    }
  }, [isLoggedIn, cookies.user]);

  /**
   * Fetch user from backend
   *
   * @param id
   */
  const getUser = async (id: string) => {
    try {
      const { data } = await backend.get(`/users/${id}`);

      setUser({ email: data.email, _id: data._id, name: data.name });
    } catch (e) {
      console.warn(e);
    }
  };

  /**
   * Fire POST request to backend to log user in
   * @param email
   * @param password
   */
  const login = async (email: string, password: string) => {
    setError("");
    setIsloading(true);

    try {
      const { data } = await backend.post("/users/login", {
        email,
        password,
      });

      const options = {
        maxAge: 60 * 60 * 24 * 30, // 30 days
      };
      setCookie("jwt", data.jwt, options);
      setCookie("auth", true, options);
      setCookie("user", data.user._id, options);

      setUser({ email: data.user.email, _id: data.user._id, name: data.name });
      setIsLoggedIn(true);
      setIsloading(false);

      navigate("/");
    } catch (e) {
      console.warn(e);
      setIsloading(false);
      setError("Invalid Email or Password");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
