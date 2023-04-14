import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const Header = () => {
  const navigate = useNavigate();

  const relocate = () => {
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <a className={styles.title} onClick={relocate}>
        <span className={styles.js}>JS</span> Algo from small to large
      </a>
    </div>
  );
};
