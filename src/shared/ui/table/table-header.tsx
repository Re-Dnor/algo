import styles from "./styles.module.css";

export type TableHeaderPropsType = {
  title: string;
};

export const TableHeader = ({ title }: TableHeaderPropsType) => {
  return (
    <div className={styles.header}>
      <h5 className={styles.title}>{title}</h5>
    </div>
  );
};
