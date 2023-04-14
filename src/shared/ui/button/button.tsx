import styles from "./styles.module.css";

export type ButtonPropsType = {
  title: string;
  handler: () => void;
};

export const Button = ({ title, handler }: ButtonPropsType) => {
  return (
    <button className={styles.button} onClick={handler}>
      {title}
    </button>
  );
};
