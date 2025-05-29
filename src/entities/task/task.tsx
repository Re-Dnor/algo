import { useState } from "react";
import styles from "./styles.module.css";
import { TaskDescription } from "./task-description";
import { TaskSolution } from "./task-solution";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ExamplesType } from "../../shared/topics/types";

export type TaskPropsType = {
  title: string;
  description?: string;
  task: string;
  examples?: ExamplesType;
  solution: string;
  defaultValue: string;
};

export const Task = ({
  title,
  description,
  task,
  examples,
  solution,
  defaultValue,
}: TaskPropsType) => {
  const [activeTab, setActiveTab] = useState("description");
  const handleSwitchToDescription = () => setActiveTab("description");
  const handleSwitchToSolution = () => setActiveTab("solution");
  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      activeTab === "description" ? defaultValue : solution
    );
  };

  return (
    <div className={styles.task}>
      <nav className={styles.header}>
        <button
          className={`${styles.button} ${
            activeTab === "description" && styles.active
          }`}
          onClick={handleSwitchToDescription}
        >
          Описание
        </button>
        <button
          className={`${styles.button} ${
            activeTab === "solution" && styles.active
          }`}
          onClick={handleSwitchToSolution}
        >
          Решение
        </button>
      </nav>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <button onClick={handleCopy} className={styles.copy}>
          <ContentCopyIcon />
        </button>

        {activeTab === "description" ? (
          <TaskDescription
            description={description}
            task={task}
            examples={examples}
          />
        ) : (
          <TaskSolution solution={solution} />
        )}
      </div>
    </div>
  );
};
