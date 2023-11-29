// import Typography from "../Typography/Typography";
import styles from "./LoginScreen.module.css";
import LangControl from "../LangControl/LangControl";
import PasswordInput from "../PasswordInput/PasswordInput";
import ButtonSubmit from "../Button/ButtonSubmit";
import { useLocalization } from "../../context/LocalizationContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const LoginScreen = () => {
  const { localization } = useLocalization();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://dull-pear-haddock-belt.cyclic.app/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
          redirect: "follow",
        }
      );

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.token);
        console.log("All good");
        navigate("/personal");
        context.setIsAuth(true);
      } else {
        console.error("Login error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleLogout = async () => {
    context.setIsAuth(false);
    console.log("isAuth", context.isAuth);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  return (
    <>
      <LangControl />
      <div className={styles.screen_wrap}>
        <div className={styles.card}>
          <h1>{localization.log_in}</h1>
          <PasswordInput
            username={username}
            password={password}
            onPasswordChange={handlePasswordChange}
            setUsername={setUsername}
            setPassword={setPassword}
          />
          <ButtonSubmit
            password={password}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
          />
        </div>
      </div>
    </>
  );
};
export default LoginScreen;
