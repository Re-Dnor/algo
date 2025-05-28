import Editor from "@monaco-editor/react";
import { useRef } from "react";

export type SolutionPropsType = {
  defaultValue: string;
};

export const Solution = ({ defaultValue }: SolutionPropsType) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor: any): void => {
    editorRef.current = editor;
  };

  return (
    <Editor
      height="90%"
      defaultLanguage="javascript"
      defaultValue={defaultValue}
      onMount={handleEditorDidMount}
      theme="vs-dark"
    />
  );
};
