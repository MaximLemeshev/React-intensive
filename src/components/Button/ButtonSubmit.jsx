import { useLocalization } from "../../context/LocalizationContext";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import s from "../Button/ButtonSubmit.module.css";

const ButtonSubmit = ({ handleLogin, handleLogout }) => {
  const { localization } = useLocalization();

  const context = useContext(AuthContext);

  return (
    <>
      {context.isAuth ? (
        <button className={s.submitBtn} onClick={handleLogout} type="button">
          {localization.log_out}
        </button>
      ) : (
        <button className={s.submitBtn} onClick={handleLogin} type="button">
          {localization.log_in}
        </button>
      )}
    </>
  );
};
export default ButtonSubmit;
