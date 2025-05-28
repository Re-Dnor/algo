import { ExamplesType } from "../../shared/topics/types";
import styles from "./styles.module.css";

export type TaskDescriptionPropsType = {
  description?: string;
  task: string;
  examples?: ExamplesType;
};

export const TaskDescription = ({
  description,
  examples,
  task,
}: TaskDescriptionPropsType) => {
  return (
    <div>
      <h5>{description}</h5>
      <p>
        <b>Задание:</b>
      </p>
      <p>{task}</p>
      <div>
        {examples &&
          Object.entries(examples).map(([titleExample, contentExample]) => (
            <div key={titleExample} className={styles.example}>
              <code>
                <p>{titleExample}</p>
                {contentExample?.map((exmpl) => (
                  <p key={exmpl}>{exmpl}</p>
                ))}
              </code>
            </div>
          ))}
      </div>
    </div>
  );
};
