// mutations-type
const types = {
    INCREASE: 'count/INCREASE',
    DECREASE: 'count/DECREASE',
    COUNT_RESET: 'count/COUNT_RESET'
}

// state
const state = {
    count: 0
}

// getters (to get state and provide for components to use)
const getters = {
    getCount: state => state.count
}

// actions
const actions = {
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
const mutations = {
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

export default {
    state,
    getters,
    actions,
    mutations
}