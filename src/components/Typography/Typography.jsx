import styles from "./Typography.module.css";
import PasswordInput from "../PasswordInput/PasswordInput";
import ButtonSubmit from "../Button/ButtonSubmit";
import ErrorElement from "../Error/ErrorElement";
const Typography = () => {
  return (
    <>
      <div className={styles.card}>
        <h1>Login</h1>
        <PasswordInput />
        <ButtonSubmit />
        <ErrorElement />
      </div>
    </>
  );
};
export default Typography;
