import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TopicsType } from "../../shared/topics/types";
import { Solution, Task } from "../../entities";
import styles from "./styles.module.css";
import { searchTopics } from "../../shared/topics/search";
import { interviewTopics } from "../../shared/topics/interview";
import { leetcodeTopics } from "../../shared/topics/leetcode";
import { prototypeTopics } from "../../shared/topics/prototype";
import { sortingTopics } from "../../shared/topics/sorting";
import { treeTopics } from "../../shared/topics/tree";

export const Playground = () => {
  const { pathname } = useLocation();

  const parts = pathname.split("/");
  const [, route, index] = parts;
  const indexJson = Number(index);

  const data: TopicsType = {
    search: searchTopics,
    interview: interviewTopics,
    leetcode: leetcodeTopics,
    prototype: prototypeTopics,
    sorting: sortingTopics,
    tree: treeTopics,
  };

  const { answer, description, name, task, examples, defaultSolution } =
    data[route][indexJson];

  return (
    <div className={styles.playground}>
      <Task
        title={name}
        description={description}
        task={task}
        solution={answer}
        examples={examples}
        defaultValue={defaultSolution}
      />
      <div className={styles.solution}>
        <Solution defaultValue={defaultSolution} />
      </div>
    </div>
  );
};
