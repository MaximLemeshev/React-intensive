// import { useContext } from "react";
// import { MyContext } from "../../MyContext/MyContext";
import { useLocalization } from "../../context/LocalizationContext";
import en from "../../localization/en";
import ru from "../../localization/ru";

const LangControl = () => {
  const { changeLocalization } = useLocalization();
  const handleLanguageChange = (newLocalization) => {
    changeLocalization(newLocalization);
  };
  return (
    <>
      <button onClick={() => handleLanguageChange(en)}>English</button>
      <button onClick={() => handleLanguageChange(ru)}>Русский</button>
    </>
  );
};

export default LangControl;
