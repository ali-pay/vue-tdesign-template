const state = {
  username: '',
  password: '',
};

const getters = {
  user(state) {
    return `${state.username} ${state.password}`;
  },
};

const mutations = {
  syncUser(state, payload) {
    state.username = payload.username;
    state.password = payload.password;
  },
};

const actions = {
  asyncUser({ state, commit }, payload) {
    if (state.username !== payload.username) commit('syncUser', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
