import axios from 'axios';

const getAll = () => {
  return axios({ method: 'GET', url: '/recipes' });
};

const getOne = (recipeId) => {
  return axios({ method: 'GET', url: `/recipes/${recipeId}` });
};

const createOne = (recipe) => {
  return axios({
    method: 'POST',
    url: '/recipes',
    data: { recipe },
  });
};

const editOne = () => {
  console.log('Editing...');
};

const recipeService = {
  getAll,
  createOne,
  getOne,
  editOne,
};

export default recipeService;
