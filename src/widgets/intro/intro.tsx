import cool from "../../shared/assets/cool.png";
import { Button } from "../../shared/ui";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const Intro = () => {
  const navigate = useNavigate();

  const handleSwitchToNavigation = () => {
    navigate("/navigation");
  };

  return (
    <div className={styles.intro}>
      <img className={styles.img} src={cool} alt='Алгосики' />
      <h5 className={styles.title}>Изучай алгоритмы и практикуйся прямо тут!</h5>
      <Button title='Начинаем' handler={handleSwitchToNavigation} />
    </div>
  );
};
