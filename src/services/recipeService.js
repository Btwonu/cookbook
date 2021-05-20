import api from '../config/api';
import axios from 'axios';

const getAll = () => {
  return axios({ method: 'GET', url: '/recipes' });
};

export default {
  getAll,
};
