import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import todoList from './modules/todoList';
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    todoList,
    shop
  }
})
