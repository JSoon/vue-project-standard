// 状态管理器
import Vue from 'vue';
import Vuex from 'vuex';
import common from './modules/common';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({

  }),
  mutations: {
    UPDATE_STATE: (state, newState) => {
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key];
      });
    },
  },
  actions: {

  },
  modules: {
    common,
  },
});
