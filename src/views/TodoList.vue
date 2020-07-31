<template>
    <div class="container">
        <div class="input-group">
            <input type="text" class="form-control" v-model="newTodo" placeholder="Add Todo..." @keyup.enter="addTodo">
            <div class="input-group-append">
                <button class="btn btn-info" @click="addTodo">ADD</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <p>Todo List</p>
                <ul>
                    <!-- <li v-for="todo in todoList" :key="todo.key">
                        <label>
                            <input type="checkbox" :checked="todo.done" @change="toggleDone(todo.key)">
                            {{ todo.content }}
                        </label>
                        <button class="btn btn-secondary btn-sm" @click="deleteTodo(todo.key)">Delete</button>
                    </li> -->
                    <TodoItem v-for="todo in todoList" :key="todo.key" :todo="todo"/>
                </ul>      
            </div>
            <div class="col-md-6">
                <p>Done List</p>
                <ul>
                    <li v-for="todo in doneList" :key="todo.key">
                        <label>
                            <input type="checkbox" :checked="todo.done" @change="toggleDone(todo.key)">
                            {{ todo.content }}
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItem from '@/components/TodoItem.vue';

export default {
    components: {
        TodoItem
    },
    data() {
        return {
            newTodo: ''
        }
    },
    computed: mapGetters({
        todoList: 'getUndoneTodos',
        doneList: 'getDoneTodos'
    }),
    methods: {
        ...mapActions([
            'toggleDone',
            'deleteTodo'
        ]),
        addTodo() {
            // if there are only a few actions -> use dispatch method.
            // if there are many actions -> use mapActions.
            this.$store.dispatch('addTodo', this.newTodo);
            // clear value
            this.newTodo = ''
        }
    }
}
</script>

<style scoped>
    .list-group {
        width: 30%;
        margin: 0 auto;
    }

    li {
        text-align: left;
        border-bottom: 1px solid #ccc;
        margin: 2%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
    }

    label input {
        margin-right: 10px;
    }

    .container {
        width: 60%;
        margin: 1% auto;
    }

    .input-group {
        width: 50%;
        margin: 20px auto;
    }
</style>