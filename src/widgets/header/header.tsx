import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./sidebar";
import menu from "../../shared/assets/menu.png";
import styles from "./styles.module.css";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();

  const handleChangeShowMenu = () => setShowMenu((prev) => !prev);

  const handleSwitchPage = useCallback((link: string) => {
    navigate(link);
    setShowMenu(false);
  }, []);

  const relocateToHome = () => {
    navigate("/");
    setShowMenu(false);
  };

  return (
    <>
      <div className={styles.header}>
        <button className={styles.menu} onClick={handleChangeShowMenu}>
          <img src={menu} alt='Иконка меню' />
        </button>
        <a className={styles.title} onClick={relocateToHome}>
          <span className={styles.js}>JS</span> Algo from small to large
        </a>
      </div>
      {showMenu && <Sidebar handler={handleSwitchPage} />}
    </>
  );
};
