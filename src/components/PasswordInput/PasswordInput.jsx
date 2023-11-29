import { useState } from "react";
import styles from "./PasswordInput.module.css";
import { useLocalization } from "../../context/LocalizationContext";

const PasswordInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { localization } = useLocalization();

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
      <label>
        <div className={styles.label_disc}> {localization.password}</div>
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
