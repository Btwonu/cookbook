import { useRef } from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './constants';
import './styles.scss';

import Button from '../Button';

const Editor = ({ data, mode, editHandler, createHandler, deleteHandler }) => {
  const editorInstance = useRef();

  return (
    <div className="text-dark editor-wrapper bg-primary flex flex-col mx-10 py-5 px-5 border rounded-md max-w-screen-md md:m-auto">
      <EditorJs
        placeholder="Give me a recipe.."
        instanceRef={(instance) => (editorInstance.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={data || []}
      />

      {mode === 'edit' && (
        <div className="flex justify-between">
          {/* <button
            className="btn w-4/5 mx-auto md:w-2/3 lg:w-2/4"
            onClick={() => editHandler(editorInstance)}
          >
            Edit
          </button> */}
          <Button onClick={() => editHandler(editorInstance)}>Save</Button>
          <Button onClick={deleteHandler}>Delete</Button>
        </div>
      )}

      {mode === 'create' && (
        <button
          className="btn w-4/5 mx-auto md:w-2/3 lg:w-2/4"
          onClick={() => createHandler(editorInstance)}
        >
          Create
        </button>
      )}
    </div>
  );
};

export default Editor;
