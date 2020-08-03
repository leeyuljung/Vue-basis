import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import todoList from './modules/todoList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    todoList
  }
})
