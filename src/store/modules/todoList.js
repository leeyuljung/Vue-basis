// mutations-type
const types = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_DONE: 'TOGGLE_DONE',
    DELETE_TODO: 'DELETE_TODO',
    UPDATE_TODO: 'UPDATE_TODO'
}

// state
const state = {
    todos: [
        { key: 0, content: 'task_00', done: false },
        { key: 1, content: 'task_01', done: false },
        { key: 2, content: 'task_02', done: false },
        { key: 3, content: 'task_03', done: false },
        { key: 4, content: 'task_04', done: false }
    ]
}

// getters (to get state and provide for components to use)
const getters = {
    getUndoneTodos: state => state.todos.filter(todo => !todo.done),
    getDoneTodos: state => state.todos.filter(todo => todo.done)
}

// actions
const actions = {
    addTodo ({commit}, newTodo){
        commit(types.ADD_TODO, newTodo);
    },
    toggleDone ({commit}, key){
        commit(types.TOGGLE_DONE, key);
    },
    deleteTodo ({commit}, key){
        commit(types.DELETE_TODO, key)
    },
    updateTodo ({commit}, obj){
        commit(types.UPDATE_TODO, obj)
    }
}

// mutations (only mutations can change state)
const mutations = {
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
        // find which one's key matches the one that we clicked

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
    }, 
    [types.UPDATE_TODO] (state, obj) {
        let todo = state.todos.find(todo => todo.key === obj.key);
        todo.content = obj.change;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}