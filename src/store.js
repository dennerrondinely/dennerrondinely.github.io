import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    linguage: 'PT',
  },
  getters: {
    linguage: state => state.linguage,
  },
  mutations: {
    LOADING_LINGUAGE(state, data) {
      state.linguage = data;
    },
  },
  actions: {
    loadingLinguage(context, data) {
      context.commit('LOADING_LINGUAGE', data);
    },
  },
});
