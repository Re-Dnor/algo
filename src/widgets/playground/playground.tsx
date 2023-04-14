import { useState } from "react";
import { useLocation } from "react-router-dom";
import { leetcodeTopics, searchTopics, sortingTopics, interviewTopics, treeTopics } from "../../shared/topics";
import { TopicsType } from "../../shared/topics/types";
import { SendSolution } from "../../features";
import { Solution, Task } from "../../entities";
import styles from "./styles.module.css";

export const Playground = () => {
  const [textSolution, setTextSolution] = useState("");
  const { pathname } = useLocation();
  const data: TopicsType = { ...searchTopics, ...sortingTopics, ...treeTopics, ...interviewTopics, ...leetcodeTopics };
  const { answer, description, name, task, examples, defaultSolution } = data[pathname];

  return (
    <div className={styles.playground}>
      <Task title={name} description={description} task={task} solution={answer} examples={examples} />
      <div className={styles.solution}>
        <Solution defaultValue={defaultSolution} setTextSolution={setTextSolution} />
        <SendSolution textSolution={textSolution} />
      </div>
    </div>
  );
};
