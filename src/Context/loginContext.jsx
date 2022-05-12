import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const token = localStorage.getItem("login");
  const checkLogin = () =>
    localStorage.getItem("login") ? setLogin(true) : setLogin(false);

  return (
    <LoginContext.Provider
      value={{ login, setLogin, showSignIn, setShowSignIn, checkLogin, token }}
    >
      {children}
    </LoginContext.Provider>
  );
}

const useAuth = () => useContext(LoginContext);

export { useAuth };
