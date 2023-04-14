import { useState } from "react";
import styles from "./styles.module.css";
import { TaskDescription } from "./task-description";
import { TaskSolution } from "./task-solution";

export type TaskPropsType = {
  title: string;
  description?: string;
  task: string;
  examples: Record<string, string[]>;
  solution: string;
};

export const Task = ({ title, description, task, examples, solution }: TaskPropsType) => {
  const [activeTab, setActiveTab] = useState("description");
  const handleSwitchToDescription = () => setActiveTab("description");
  const handleSwitchToSolution = () => setActiveTab("solution");

  return (
    <div className={styles.task}>
      <nav className={styles.header}>
        <button
          className={`${styles.button} ${activeTab === "description" && styles.active}`}
          onClick={handleSwitchToDescription}>
          Описание
        </button>
        <button
          className={`${styles.button} ${activeTab === "solution" && styles.active}`}
          onClick={handleSwitchToSolution}>
          Решение
        </button>
      </nav>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {activeTab === "description" ? (
          <TaskDescription description={description} task={task} examples={examples} />
        ) : (
          <TaskSolution solution={solution} />
        )}
      </div>
    </div>
  );
};
