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
    <>
      <button onClick={saveHandler}>Save</button>
      <EditorJs
        instanceRef={(instance) => (editorInstance.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={JSON.parse(data)}
      />
    </>
  );
};

export default Editor;
