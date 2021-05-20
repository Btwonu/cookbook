import axios from 'axios';

const logout = () => {
  return axios.get('/auth/logout');
};

export default {
  logout,
};
