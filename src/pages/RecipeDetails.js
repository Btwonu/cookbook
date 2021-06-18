import Layout from '../pages/layouts/Layout';
import Editor from '../components/Editor/Editor';
import { withRouter } from 'react-router-dom';

import recipeService from '../services/recipeService';
import useRecipeRequest from '../hooks/useRecipeRequest';
import Spacer from '../components/Spacer';

const RecipeDetails = ({ match, history }) => {
  const { recipeId } = match.params;

  const [editorData, isCreator] = useRecipeRequest(recipeId);

  const editRecipeHandler = (editorInstance) => {
    editorInstance.current
      .save()
      .then((output) => recipeService.editOne(recipeId, output))
      .then((res) => console.log(res))
      .catch(console.error);
  };

  const deleteRecipeHandler = () => {
    recipeService
      .deleteOne(recipeId)
      .then((res) => {
        console.log(res);
        history.push('/');
      })
      .catch(console.error);
  };

  return (
    <Layout>
      <h2 className="text-center text-2xl p-6">Recipe Details</h2>
      {editorData && (
        <Editor
          data={editorData}
          mode={isCreator ? 'edit' : 'preview'}
          editHandler={editRecipeHandler}
          deleteHandler={deleteRecipeHandler}
        />
      )}
      <Spacer y={4} />
    </Layout>
  );
};

export default withRouter(RecipeDetails);
