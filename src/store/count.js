import * as types from './mutations-type';

// state
export const state = {
    count: 0,
    todos: [
        { key: 0, content: 'task_00', done: true },
        { key: 1, content: 'task_01', done: false },
        { key: 2, content: 'task_02', done: false },
        { key: 3, content: 'task_03', done: false },
        { key: 4, content: 'task_04', done: false }
    ]
}


// getters (to get state and provide for components to use)
export const getters = {
    getCount: state => state.count,
    getUndoneTodos: state => state.todos.filter(todo => !todo.done),
    getDoneTodos: state => state.todos.filter(todo => todo.done)
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
    },
    addTodo ({commit}, newTodo){
        commit(types.ADD_TODO, newTodo);
    },
    toggleDone ({commit}, key){
        commit(types.TOGGLE_DONE, key);
    },
    deleteTodo ({commit}, key){
        commit(types.DELETE_TODO, key)
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
    },
    [types.ADD_TODO] (state, newTodo) {
        let todoKey = state.todos.length
        state.todos.push({
            key: todoKey,
            content: newTodo,
            done: false    
        })
        todoKey++;
    },
    [types.TOGGLE_DONE] (state, key) {
        // for(let i in state.todos){
        //     let todo = state.todos[i];
        //     if(todo.key === key){
        //         todo.done = !todo.done;
        //         break;
        //     }
        // }
        let todo = state.todos.find(todo => todo.key === key);
        todo.done = !todo.done;
    },
    [types.DELETE_TODO] (state, key) {
        // for(let i in state.todos){
        //     let todo = state.todos[i];
        //     if(todo.key === key){
        //         state.todos.splice(i, 1);
        //         break;
        //     }
        // }
        let index = state.todos.findIndex(todo => todo.key === key);
        state.todos.splice(index, 1);
    }
}