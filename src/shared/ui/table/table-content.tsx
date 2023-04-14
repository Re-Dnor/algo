import { navigationListType } from "../../constants/navigation";
import styles from "./styles.module.css";

export type TableContentPropsType = {
  contents: navigationListType[];
  onCLick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const TableContent = ({ contents, onCLick }: TableContentPropsType) => {
  return (
    <div className={styles.wrapper}>
      {contents.map((content) => (
        <div key={content.link} className={styles.content} onClick={onCLick} data-content={content.link}>
          {content.name}
        </div>
      ))}
    </div>
  );
};
