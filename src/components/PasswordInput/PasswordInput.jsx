import { useState } from "react";
import styles from "./PasswordInput.module.css";

const PasswordInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          className={styles.show_btn}
          type="button"
          onClick={handleTogglePassword}
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>
      </label>
    </div>
  );
};

export default PasswordInput;
