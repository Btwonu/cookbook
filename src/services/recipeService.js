import api from '../config/api';

const getAll = () => {
  return fetch(api.recipes).then((res) => res.json());
};

export default {
  getAll,
};
