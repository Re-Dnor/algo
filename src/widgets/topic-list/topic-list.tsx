import { useNavigate } from "react-router-dom";
import { TableContent, TableHeader } from "../../shared/ui";
import { ListType } from "../../shared/constants/topics/types";
import styles from "./styles.module.css";

export type TopicListPropsType = {
  title: string;
  list: ListType[];
};

export const TopicList = ({ title, list }: TopicListPropsType) => {
  const navigate = useNavigate();

  const handlerSwitchPage = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const path = target.getAttribute("data-content") || "/";
    navigate(path);
  };

  return (
    <div className={styles.topic}>
      <TableHeader title={title} />
      <TableContent contents={list} onCLick={handlerSwitchPage} />
    </div>
  );
};
