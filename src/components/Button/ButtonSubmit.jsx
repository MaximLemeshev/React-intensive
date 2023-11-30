import { useLocalization } from "../../context/LocalizationContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import s from "../Button/ButtonSubmit.module.css";

const ButtonSubmit = ({ password }) => {
  const { localization } = useLocalization();

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
    } else {
      setError("");
      event.preventDefault();
      navigate("/personal");
    }
  };
  return (
    <>
      {error && <div className={s.error}>{error}</div>}
      <button className={s.submitBtn} onClick={handleSubmit} type="button">
        {localization.log_in}
      </button>
    </>
  );
};
export default ButtonSubmit;
