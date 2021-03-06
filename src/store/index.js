/**
 * store
 */

import { createStore } from 'vuex';
import auth from './auth';

export default createStore({
  state: () => ({}),
  mutations: {},
  modules: {
    auth,
  },
});
