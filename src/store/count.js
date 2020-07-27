// import Vue from 'vue';
import * as types from './mutations-type';

// state
export const state = {
    count: 0
}


// getters (to get state and provide for components to use)
export const getters = {
    getCount: state => state.count
}


// actions
export const actions = {
    setIncrease ({commit}, num){
        commit(types.INCREASE, num);
    },
    setDecrease ({commit}, num){
        commit(types.DECREASE, num);
    },
    setCountReset ({commit}){
        commit(types.COUNT_RESET);
    }
}


// mutations (only mutations can change state)
export const mutations = {
    [types.INCREASE] (state, num) {
        state.count += num;
    },
    [types.DECREASE] (state, num) {
        state.count -= num;
    },
    [types.COUNT_RESET] (state) {
        state.count = 0;
    }
}