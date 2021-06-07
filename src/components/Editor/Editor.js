import { useRef } from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './constants';
import './styles.scss';
import recipeService from '../../services/recipeService';

const Editor = ({ data }) => {
  const editorInstance = useRef();

  const saveHandler = () => {
    editorInstance.current
      .save()
      .then((output) => recipeService.createOne(output))
      .then((res) => console.log(res))
      .catch(console.error);
  };

  return (
    <div className="text-dark editor-wrapper bg-primary flex flex-col mx-10 py-5 px-5 border rounded-md max-w-screen-md md:m-auto">
      <EditorJs
        placeholder="Let`s write an awesome story!"
        instanceRef={(instance) => (editorInstance.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={data || []}
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
