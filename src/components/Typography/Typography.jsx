import styles from "./Typography.module.css";
import PasswordInput from "../PasswordInput/PasswordInput";
import ButtonSubmit from "../Button/ButtonSubmit";
import ErrorElement from "../Error/ErrorElement";
import { useLocalization } from "../../context/LocalizationContext";

export const Typography = () => {
  const { localization } = useLocalization();
  return (
    <>
      <div className={styles.card}>
        <h1>{localization.log_in}</h1>
        <PasswordInput />
        <ButtonSubmit />
        <ErrorElement />
      </div>
    </>
  );
};
export default Typography;
