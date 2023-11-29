import { useState } from "react";

const useLogin = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };
  return {
    token,
    handleLogin,
    handleLogout,
  };
};

export default useLogin;
