import styles from "./styles.module.css";

export const Fallback = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.fallback} />
    </div>
  );
};
