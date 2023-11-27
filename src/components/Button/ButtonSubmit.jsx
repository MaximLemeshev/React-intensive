import { useLocalization } from "../../context/LocalizationContext";

const ButtonSubmit = () => {
  const { localization } = useLocalization();
  return <button type="button">{localization.log_in}</button>;
};
export default ButtonSubmit;
