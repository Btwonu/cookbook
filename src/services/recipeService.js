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

const editOne = (recipeId, recipe) => {
  return axios({
    method: 'PATCH',
    url: `/recipes/${recipeId}`,
    data: { recipe },
  });
};

const deleteOne = (recipeId) => {
  return axios({ method: 'DELETE', url: `/recipes/${recipeId}` });
};

const recipeService = {
  getAll,
  createOne,
  getOne,
  editOne,
  deleteOne,
};

export default recipeService;
