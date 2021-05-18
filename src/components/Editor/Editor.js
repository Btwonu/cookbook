import { useRef } from 'react';

import EditorJs from 'react-editor-js';

import { EDITOR_JS_TOOLS } from './constants';

import './styles.scss';

const Editor = ({ data }) => {
  const editorInstance = useRef();

  const saveHandler = () => {
    editorInstance.current
      .save()
      .then((output) => {
        console.log(output);
        console.log(JSON.stringify(output));
      })
      .catch(console.error);
  };

  return (
    <div className="text-dark editor-wrapper bg-primary flex flex-col mx-10 py-5 px-5 border rounded-md max-w-screen-md lg:m-auto">
      <EditorJs
        instanceRef={(instance) => (editorInstance.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={JSON.parse(data) || []}
      />
      <button
        className="btn w-4/5 mx-auto md:w-2/3 lg:w-2/4"
        onClick={saveHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default Editor;
