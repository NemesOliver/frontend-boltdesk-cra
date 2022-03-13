import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Button, Input } from "../components";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  const loginAsGuest = (e: FormEvent) => {
    e.preventDefault();
    login("guest@gmail.com", "guest123");
  };

  return (
    <main className="max-w-[340px] mx-auto px-1 mt-6 grid items-center h-[calc(90vh-70px)]">
      <section>
        <h2 className="text-[30px] text-center my-4">Fake company ltd.</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-6">
            <Input
              label="email"
              type="text"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="my-6">
            <Input
              label="password"
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button className="mb-2" isLoading={isLoading}>
            log in
          </Button>
          <Button
            onClick={loginAsGuest}
            className="bg-blue-500"
            isLoading={isLoading}
          >
            Continue as Guest
          </Button>
        </form>
        <div className="h-[20px] mt-4 text-center text-red-800">{error}</div>
      </section>
    </main>
  );
};
