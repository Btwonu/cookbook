import { useState, useEffect } from 'react';

import Layout from '../pages/layouts/Layout';
import Editor from '../components/Editor/Editor';

import recipeService from '../services/recipeService';

const RecipeDetails = ({ match }) => {
  const [editorData, setEditorData] = useState(null);
  const [isCreator, setIsCreator] = useState(false);
  let { recipeId } = match.params;

  useEffect(() => {
    console.log(editorData);
    recipeService
      .getOne(recipeId)
      .then((res) => {
        setIsCreator(res.data.isCreator);
        setEditorData(res.data.editorData);
      })
      .catch(console.error);
  }, []);

  const editRecipeHandler = () => {
    recipeService.editOne();
  };

  return (
    <Layout>
      <h2 className="text-center text-2xl p-6">Recipe Details</h2>;
      {editorData && (
        <Editor
          data={editorData}
          mode={isCreator ? 'edit' : 'preview'}
          editorHandler={editRecipeHandler}
        />
      )}
    </Layout>
  );
};

export default RecipeDetails;
