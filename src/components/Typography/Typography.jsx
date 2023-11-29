import styles from "./Typography.module.css";
import PasswordInput from "../PasswordInput/PasswordInput";
import ButtonSubmit from "../Button/ButtonSubmit";
import ErrorElement from "../Error/ErrorElement";
import { useLocalization } from "../../context/LocalizationContext";
import { useState } from "react";

export const Typography = () => {
  const { localization } = useLocalization();
  const [password, setPassword] = useState("");

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  return (
    <>
      <div className={styles.card}>
        <h1>{localization.log_in}</h1>
        <PasswordInput onPasswordChange={handlePasswordChange} />
        <ButtonSubmit password={password} />
        <ErrorElement />
      </div>
    </>
  );
};
export default Typography;
