import { memo } from "react";
import styles from "./styles.module.css";

export type SidebatItemPropsType = {
  name: string;
  link: string;
  handler: (link: string) => void;
};

export const SidebarItem = memo(({ name, link, handler }: SidebatItemPropsType) => {
  const handleSwitchPage = () => {
    handler(link);
  };

  return (
    <li className={styles.item} onClick={handleSwitchPage}>
      <p className={styles.link}>{name}</p>
    </li>
  );
});
