import Layout from '../pages/layouts/Layout';
import Editor from '../components/Editor/Editor';

import recipeService from '../services/recipeService';
import Spacer from '../components/Spacer';

// const DATA = `{"time":1621261671717,"blocks":[{"id":"ra-vXMnMLo","type":"paragraph","data":{"text":"Start editing..."}}],"version":"2.21.0"}`;

// const DATA = {
//   time: 1621946566333,
//   blocks: [
//     {
//       id: 'eAxwXQkHf1',
//       type: 'header',
//       data: { text: 'Michigan Hot Dog', level: 1 },
//     },
//     {
//       id: 'ytMxSTeq1s',
//       type: 'paragraph',
//       data: {
//         text: "This regional specialty has a unique sauce which is typically slightly chunkier and thicker than most hot dog sauces. You'll often find this served on top-split buns, but regular hot dog buns will work. There are many versions of this sauce, but this is the way we like ours.",
//       },
//     },
//     {
//       id: 'EYb71Z58d1',
//       type: 'list',
//       data: {
//         style: 'unordered',
//         items: [
//           '1 pound ground beef',
//           '⅔ cup finely chopped onion, divided',
//           '1 (15 ounce) can tomato sauce',
//           '⅓ cup ketchup',
//           '2 tablespoons chili powder',
//           '1 tablespoon cider vinegar',
//           '1 tablespoon garlic powder',
//           "1 teaspoon hot sauce (such as Frank's® RedHot®)",
//           'salt and freshly ground black pepper to taste',
//           '1 tablespoon water, or as needed',
//           '10 hot dog buns',
//           '10 all beef hot dogs',
//           '5 teaspoons prepared yellow mustard',
//         ],
//       },
//     },
//     {
//       id: '23Tsc8bsuv',
//       type: 'header',
//       data: { text: 'Directions', level: 2 },
//     },
//     {
//       id: 'GIWyYFFOJn',
//       type: 'list',
//       data: {
//         style: 'ordered',
//         items: [
//           'Brown ground beef and 1/3 cup onion in a large skillet over medium heat, until the meat is no longer pink, 5 to 7 minutes. Drain, and return the skillet to the stove.',
//           'Stir tomato sauce and ketchup into the ground beef mixture. Add chili powder, vinegar, garlic powder, hot sauce, salt, and pepper; stir until well combined. Reduce heat to low and simmer uncovered until sauce has thickened, 8 to 10 minutes. If sauce gets too thick, add water to thin it out.',
//           'Meanwhile steam or simmer hot dogs in hot water until hot.',
//           'Assemble hot dogs: Place a hot dog in a bun and spoon 2 to 3 tablespoons sauce on top. Sprinkle with remaining onions and drizzle with yellow mustard.',
//         ],
//       },
//     },
//   ],
//   version: '2.21.0',
// };

const CreateRecipe = () => {
  const createRecipeHandler = (editorInstance) => {
    editorInstance.current
      .save()
      .then((output) => recipeService.createOne(output))
      .then((res) => console.log(res))
      .catch(console.error);
  };

  return (
    <Layout>
      <h2 className="text-center text-2xl p-6">Share your recipe</h2>
      <Editor mode="create" createHandler={createRecipeHandler} />
      <Spacer y={4} />
    </Layout>
  );
};

export default CreateRecipe;
