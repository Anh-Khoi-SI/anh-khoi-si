import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const MarkdownEditor = ({ value, onChange }) => {
  return (
    <MDEditor
      value={value}
      onChange={onChange}
      previewOptions={{
        transformImageUri: (src) => (src ? src : null),
      }}
      height={500}
    />
  );
};

export default MarkdownEditor;
