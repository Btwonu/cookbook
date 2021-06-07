import axios from 'axios';
import api from '../config/api';

export const uploadByFile = (file) => {
  let formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'fbl82nnu');

  return axios({
    method: 'POST',
    url: api.cloudinary,
    data: formData,
    withCredentials: false,
  }).then((res) => {
    let { url } = res.data;

    return {
      success: 1,
      file: {
        url,
      },
    };
  });
};
