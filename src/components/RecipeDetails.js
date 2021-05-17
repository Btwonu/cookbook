import Editor from './Editor/Editor';

const DATA = `{"time":1621261671717,"blocks":[{"id":"ca4_8NHGs_","type":"header","data":{"text":"Recipe Title","level":2}},{"id":"ra-vXMnMLo","type":"paragraph","data":{"text":"This is a recipe:"}},{"id":"xBJMlCkKW8","type":"list","data":{"style":"ordered","items":["ingr","ingr","ingr"]}}],"version":"2.21.0"}`;

const RecipeDetails = () => {
  console.log(JSON.parse(DATA));
  return <Editor data={DATA} />;
};

export default RecipeDetails;
