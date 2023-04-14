import { useNavigate } from "react-router-dom";
import { TableContent, TableHeader } from "../../shared/ui";
import { navigationHeader, navigationList } from "../../shared/constants/navigation";
import styles from "./styles.module.css";

export const Navigation = () => {
  const navigate = useNavigate();

  const handlerSwitchPage = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const path = target.getAttribute("data-content") || "/";
    navigate(path);
  };

  return (
    <div className={styles.navigation}>
      <h1>Навигация</h1>
      <TableHeader title={navigationHeader} />
      <TableContent contents={navigationList} onCLick={handlerSwitchPage} />
    </div>
  );
};
