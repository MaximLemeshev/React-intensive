import PasswordInput from "../PasswordInput/PasswordInput";
import ButtonSubmit from "../Button/ButtonSubmit";
import ErrorElement from "../Error/ErrorElement";
import Typography from "../Typography/Typography";

const LoginScreen = () => {
  return (
    <>
      <PasswordInput />
      <ButtonSubmit />
      <ErrorElement />
      <Typography />
    </>
  );
};
export default LoginScreen;
