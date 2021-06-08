import Layout from '../pages/layouts/Layout';
import Editor from '../components/Editor/Editor';

import recipeService from '../services/recipeService';
import useRecipeRequest from '../hooks/useRecipeRequest';

const RecipeDetails = ({ match }) => {
  const { recipeId } = match.params;

  const [editorData, isCreator] = useRecipeRequest(recipeId);

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
