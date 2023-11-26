import { useContext } from "react";
import { MyContext } from "../../MyContext/MyContext";

const ButtonSubmit = () => {
  const { locale, messages, changeLocale } = useContext(MyContext);
  return <button type="button">{messages[locale].log_in}</button>;
};
export default ButtonSubmit;
