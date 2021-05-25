import axios from 'axios';

const getAll = () => {
  return axios({ method: 'GET', url: '/recipes' });
};

const createOne = (recipe) => {
  // console.log(typeof recipe);
  return axios({
    method: 'POST',
    url: '/recipes',
    data: { recipe },
  });
};

const recipeService = {
  getAll,
  createOne,
};

export default recipeService;
