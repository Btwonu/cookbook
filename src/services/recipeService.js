import axios from 'axios';

const getAll = () => {
  return axios({ method: 'GET', url: '/recipes' });
};

const recipeService = {
  getAll,
};

export default recipeService;
