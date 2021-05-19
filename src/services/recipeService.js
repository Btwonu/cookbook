import api from '../config/api';
import axios from 'axios';

const getAll = () => {
  return axios({ method: 'GET', url: '/recipes' })
    .then((res) => res.data)
    .catch(console.error);
  // return fetch(api.recipes).then((res) => res.json());
};

export default {
  getAll,
};
