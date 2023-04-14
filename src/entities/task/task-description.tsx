import styles from "./styles.module.css";

export type TaskDescriptionPropsType = {
  description?: string;
  task: string;
  examples: Record<string, string[]>;
};

export const TaskDescription = ({ description, examples, task }: TaskDescriptionPropsType) => {
  const taskExaples = Object.entries(examples);

  return (
    <div>
      <h5>{description}</h5>
      <p>
        <b>Задание:</b>
      </p>
      <p>{task}</p>
      <div>
        {taskExaples.map(([titleExample, contentExample]) => (
          <div key={titleExample} className={styles.example}>
            <code>
              <p>{titleExample}</p>
              {contentExample.map((exmpl) => (
                <p key={exmpl}>{exmpl}</p>
              ))}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
};
