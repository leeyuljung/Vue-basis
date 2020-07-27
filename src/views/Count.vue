<template>
    <div class="container">
        <div class="btn-group" role="group">
            <button class="btn btn-secondary" @click="setDecrease">－</button>
            <p class="result">Count： <b>{{ count }}</b></p>
            <button class="btn btn-secondary" @click="setIncrease">＋</button>
        </div>
    </div>    
</template>

<script>
    // import 提取 getters & actions functions 的方法
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                count: 'getCount'    
            })
        },
        methods: {
            ...mapActions([
                'setIncrease',
                'setDecrease'
            ])
        }
    }
</script>

<style scoped>
    .result {
        margin: 10px;
    }    

    .result b {
        color: #faa;
    }
</style>