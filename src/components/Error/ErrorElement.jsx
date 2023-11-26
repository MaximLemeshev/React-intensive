import { useState } from "react";
import styles from "./Error.module.css";

const ErrorElement = () => {
  const [error, setError] = useState(false);

  return <>{error && <div className={styles.error__block}>Some Error</div>}</>;
};

export default ErrorElement;
