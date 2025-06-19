import Editor from "@monaco-editor/react";

interface Props {
  code: string;
  setCode: (value: string) => void;
}

export default function CodeEditor({ code, setCode }: Props) {
  return (
    <Editor
      height="100%"
      defaultLanguage="html"
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || "")}
      options={{
        fontSize: 16,
        minimap: { enabled: false },
        wordWrap: "on",
        scrollBeyondLastLine: false,
        fontFamily: "'Courier New', monospace",
        autoClosingBrackets: "always",
        formatOnType: true,
        automaticLayout: true,
        wordWrap: "on",
      }}
    />
  );
}
