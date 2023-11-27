// import { useContext } from "react";
import { useLocalization } from "../../context/LocalizationContext";
// import { MyContext } from "../../MyContext/MyContext";

const ButtonSubmit = () => {
  const { localization } = useLocalization();
  return <button type="button">{localization.log_in}</button>;
};
export default ButtonSubmit;
