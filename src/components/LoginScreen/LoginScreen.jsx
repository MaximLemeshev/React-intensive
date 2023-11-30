import Typography from "../Typography/Typography";
import styles from "./LoginScreen.module.css";
import LangControl from "../LangControl/LangControl";

const LoginScreen = () => {
  return (
    <>
      <LangControl />
      <div className={styles.screen_wrap}>
        <Typography />
      </div>
    </>
  );
};
export default LoginScreen;
