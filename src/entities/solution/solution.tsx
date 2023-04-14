import Editor from "@monaco-editor/react";
import { useRef } from "react";

export type SolutionPropsType = {
  defaultValue: string;
  setTextSolution: (value: string) => void;
};

export const Solution = ({ defaultValue, setTextSolution }: SolutionPropsType) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor: any): void => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value: any) => {
    setTextSolution(value);
  };

  return (
    <Editor
      height='90%'
      defaultLanguage='javascript'
      defaultValue={defaultValue}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
      theme='vs-dark'
    />
  );
};
