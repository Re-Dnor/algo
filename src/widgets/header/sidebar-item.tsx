import { memo } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export type SidebatItemPropsType = {
  name: string;
  link: string;
  handler: () => void;
};

export const SidebarItem = memo(
  ({ name, link, handler }: SidebatItemPropsType) => {
    const navigate = useNavigate();

    const handleSwitchPage = () => {
      navigate(link);
      handler();
    };

    return (
      <li className={styles.item} onClick={handleSwitchPage}>
        <p className={styles.link}>{name}</p>
      </li>
    );
  }
);
