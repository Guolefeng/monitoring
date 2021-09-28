import axios from '@/utils/http';
import base from './base';

export default {
  login(form) {
    return axios.get(`${base.core}/${form.username}/${form.password}`);
  },
};
