// import Vue from 'vue';
import * as types from './mutations-type';

// state
export const state = {
    count: 0
}


// getters (to get state and provide for components to use)
// export const getCount = state => {
//     return state.count;
// }
export const getters = {
    getCount: state => state.count
}


// actions
// export const setIncrease = ({commit}) => {
//     commit(types.INCREASE);
// }

// export const setDecrease = ({commit}) => {
//     commit(types.DECREASE);
// }

export const actions = {
    setIncrease ({commit}){
        commit(types.INCREASE);
    },
    setDecrease ({commit}){
        commit(types.DECREASE);
    }
}


// mutations (only mutations can change state)
export const mutations = {
    [types.INCREASE] (state) {
        state.count += 1;
    },
    [types.DECREASE] (state) {
        state.count -= 1;
    }
}