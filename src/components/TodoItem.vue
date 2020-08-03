<template>
    <li>
        <div v-if="!updateMode" class="updateMode-wrap">
            <label>
                <input type="checkbox" :checked="todo.done" @change="toggleDone(todo.key)"/>
                {{ todo.content }}
            </label>
            <div class="btn-group">
                <button class="btn btn-sm btn-info" @click="showEditMode">EDIT</button>
                <button class="btn btn-sm btn-secondary" @click="deleteTodo(todo.key)">DELETE</button>
            </div>
        </div>

        <div v-if="updateMode">
            <input 
                v-focus="updateMode" 
                :value="todo.content" 
                placeholder="edit todo..." 
                @keyup.enter="actionEdit" 
                @keyup.esc="cancelEdit" 
                @blur="cancelEdit" 
            />
        </div>
    </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        todo: Object
    },
    data() {
        return {
            updateMode: false
        }
    },
    // 自定義
    directives: {
        focus (el, {value}, {context}) {
            if(value) {
                context.$nextTick(() => {
                    el.focus();
                })
            }
        }
    },
    methods: {
        ...mapActions([
          'toggleDone',
          'deleteTodo',
          'updateTodo'  
        ]),
        showEditMode() {
            this.updateMode = true
        },
        actionEdit(e) {
            const newContent = e.target.value.trim();
            this.updateTodo({
                key: this.todo.key,
                change: newContent
            });
            this.updateMode = false;
        },
        cancelEdit(e) {
            e.target.value = this.todo.content;
            this.updateMode = false;
        }
    }
}
</script>

<style scoped>
    li {
        text-align: left;
        border-bottom: 1px solid #ccc;
        margin: 2%;
        padding: 5px 10px;
    }

    label input {
        margin-right: 10px;
    }

    .updateMode-wrap {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
    }
</style>