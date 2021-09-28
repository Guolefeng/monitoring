const userJsonStr = localStorage.getItem('user');
const userInfo = userJsonStr ? JSON.parse(userJsonStr) : null;

export default {
  state: {
    token: userInfo?.token,
    user: userInfo,
  },
  mutations: {
    token(state, token) {
      state.token = token;
    },
    user(state, user) {
      state.user = user;
    },
  },
};
