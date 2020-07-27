import Vue from 'vue';
import Vuex from 'vuex';
import { state, getters, actions, mutations } from './count';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
