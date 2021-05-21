import axios from 'axios';

const logout = () => {
  return axios.get('/auth/logout');
};

const authService = {
  logout,
};

export default authService;
