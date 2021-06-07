import { useState, useEffect } from 'react';

import Layout from '../pages/layouts/Layout';
import Editor from '../components/Editor/Editor';

import recipeService from '../services/recipeService';

const RecipeDetails = ({ match }) => {
  const [editorData, setEditorData] = useState(null);
  let { recipeId } = match.params;

  useEffect(() => {
    console.log(editorData);
    recipeService
      .getOne(recipeId)
      .then((res) => setEditorData(res.data.editorData))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <h2 className="text-center text-2xl p-6">Recipe Details</h2>;
      {editorData && <Editor data={editorData} />}
    </Layout>
  );
};

export default RecipeDetails;
