import cool from "../../shared/assets/cool.png";
import styles from "./styles.module.css";

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <img className={styles.img} src={cool} alt='Алгосики' />
      <h5 className={styles.title}>Изучай алгоритмы и практикуйся прямо тут!</h5>
    </div>
  );
};
