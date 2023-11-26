import styles from "./Typography.module.css";
import PasswordInput from "../PasswordInput/PasswordInput";
import ButtonSubmit from "../Button/ButtonSubmit";
import ErrorElement from "../Error/ErrorElement";
import { MyContext } from "../../MyContext/MyContext";
import { useContext } from "react";

export const Typography = () => {
  const { locale, messages } = useContext(MyContext);
  return (
    <>
      <div className={styles.card}>
        <h1>{messages[locale].log_in}</h1>
        <PasswordInput />
        <ButtonSubmit />
        <ErrorElement />
      </div>
    </>
  );
};
export default Typography;
