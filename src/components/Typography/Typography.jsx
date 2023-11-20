import styles from "./Typography.module.css";
const Typography = () => {
  return (
    <>
      <div className={styles.card}>
        <h1>Your name</h1>
        <div className={styles.title}>Title:</div>
        <div className={styles.info}>Info:</div>
      </div>
    </>
  );
};
export default Typography;
