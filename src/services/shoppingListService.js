import axios from 'axios';

const save = (data) => {
  return axios({ method: 'POST', url: '/shopping', data });
};

const get = () => {
  return axios('/shopping');
};

const shoppingListService = {
  save,
  get,
};

export default shoppingListService;
