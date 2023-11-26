import { useContext } from "react";
import { MyContext } from "../../MyContext/MyContext";

const LangControl = () => {
  const { locale, messages, changeLocale } = useContext(MyContext);
  return (
    <>
      <button onClick={() => changeLocale("en")}>English</button>
      <button onClick={() => changeLocale("ru")}>Русский</button>
    </>
  );
};

export default LangControl;
