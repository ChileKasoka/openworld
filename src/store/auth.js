const state = {
    accessToken: null,
    refreshToken: null,
    user: null,
  };
  
  const mutations = {
    SET_TOKENS(state, { accessToken, refreshToken }) {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  };
  
  const actions = {
    saveTokens({ commit }, tokens) {
      commit("SET_TOKENS", tokens);
    },
    saveUser({ commit }, user) {
      commit("SET_USER", user);
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
  };
  
  const getters = {
    isAuthenticated: (state) => !!state.accessToken,
    accessToken: (state) => state.accessToken,
    refreshToken: (state) => state.refreshToken,
    currentUser: (state) => state.user,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  