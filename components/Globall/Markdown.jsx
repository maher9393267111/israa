import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import draftToHtml from "draftjs-to-html";
import {
  ContentState,
  EditorState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
//import { Editor } from "react-draft-wysiwyg";
//import htmlToDraft from "html-to-draftjs";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor({ desc, setCourse ,type }) {
  // Setting editors state, session, router, id
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    // Redirect if not authenticated




    import("html-to-draftjs").then((htmlToDraft) => {
      const blocksFromHtml = htmlToDraft.default(desc);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      setEditorState(EditorState.createWithContent(contentState));
    });
  }, []); // Add `status` to dependencies

  const onEditorStateChange = (state) => {
    setEditorState(state);

    const description = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    //setDesc(description);
    setCourse((prevState) => ({
        ...prevState,
        [type]:description
    }))


  

  };

  return (
    <div className="bg-[#F1F3F4] border border-2 border-gray-300 dark:bg-dark-extra !min-h-[100px] pb-16 print:pb-0 ">
      <Editor
        editorState={editorState}
        onEditorStateChange={
         // setEditorState
          onEditorStateChange
        }
        toolbarClassName="flex sticky top-0 z-50 sm:!justify-center print:!hidden dark:!bg-dark-mid !border-0"
        editorClassName="mt-4 print:!m-0 print:!mx-auto sm:mt-6 py-1 sm:py-5 px-4 sm:px-10 bg-white shadow-md print:!shadow-none max-w-[90%] sm:max-w-3xl !min-h-[300px] mx-auto ring-1 print:ring-0 ring-gray-300 print:block"
      />
    </div>
  );
}

export default TextEditor;

