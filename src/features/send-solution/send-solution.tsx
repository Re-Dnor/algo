import { useState } from "react";
import { Spinner } from "../../shared/ui";
import { fetchData, fetchToken } from "../../shared/api";
import styles from "./styles.module.css";

export type SendSolutionPropsType = {
  textSolution: string;
};

export const SendSolution = ({ textSolution }: SendSolutionPropsType) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const showValue = async () => {
    setIsLoading(true);

    try {
      const data = await fetchToken(textSolution);
      const token = await data.json();
      const response = await fetchData(token.token);
      const result = await response.json();
      setInput(atob(result.stdout));
    } catch (e) {
      setInput("Ошибочка вышла");
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.input}>
      <button className={styles.button} onClick={showValue}>
        Submit
      </button>
      <div className={styles.wrapperText}>{isLoading ? <Spinner /> : <p className={styles.text}>{input}</p>}</div>
    </div>
  );
};
