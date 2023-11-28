import { useLocalization } from "../../context/LocalizationContext";
import { useNavigate } from "react-router-dom";

const ButtonSubmit = () => {
  const { localization } = useLocalization();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/personal");
  };
  return (
    <button onClick={handleSubmit} type="button">
      {localization.log_in}
    </button>
  );
};
export default ButtonSubmit;
