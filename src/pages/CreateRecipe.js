import Layout from '../pages/layouts/Layout';
import Editor from '../components/Editor/Editor';

const DATA = `{"time":1621261671717,"blocks":[{"id":"ra-vXMnMLo","type":"paragraph","data":{"text":"Start editing..."}}],"version":"2.21.0"}`;

const CreateRecipe = () => {
  return (
    <Layout>
      <h2 className="text-center text-2xl p-6">Share your recipe</h2>
      <Editor data={DATA} />
    </Layout>
  );
};

export default CreateRecipe;
