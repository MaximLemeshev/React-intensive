import { useState } from "react";
import styles from "./PasswordInput.module.css";
import { MyContext } from "../../MyContext/MyContext";
import { useContext } from "react";

const PasswordInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { locale, messages, changeLocale } = useContext(MyContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.input_wrap}>
      <label>
        <div className={styles.label_disc}>Email:</div>
        <input
          className={styles.input__name}
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <br />
      <label>
        <div className={styles.label_disc}> {messages[locale].password}</div>
        <input
          className={styles.input__password}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <span onClick={handleTogglePassword}>{showPassword ? "🙈" : "👁️"}</span>
      </label>
    </div>
  );
};

export default PasswordInput;
