import { Editor } from "@monaco-editor/react";

export type TaskSolutionPropsType = {
  solution: string;
};

export const TaskSolution = ({ solution }: TaskSolutionPropsType) => {
  return <Editor height='50%' defaultLanguage='javascript' defaultValue={solution} theme='vs-dark' />;
};
