import { useLocalization } from "../../context/LocalizationContext";
import s from "../LangControl/LangControl.module.css";
import en from "../../localization/en";
import ru from "../../localization/ru";

const LangControl = () => {
  const { changeLocalization } = useLocalization();
  const handleLanguageChange = (newLocalization) => {
    changeLocalization(newLocalization);
  };
  return (
    <>
      <button className={s.langBtn} onClick={() => handleLanguageChange(en)}>
        English
      </button>
      <button className={s.langBtn} onClick={() => handleLanguageChange(ru)}>
        Русский
      </button>
    </>
  );
};

export default LangControl;
