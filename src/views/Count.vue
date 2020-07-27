<template>
    <div class="container">
        <div class="setNumberArea">
            <span>Set Number：</span>
            <!-- v-model.number can automatically turn input value into number type  -->
            <input type="number" class="form-control" v-model.number="num">
        </div>
        <div class="btn-group" role="group">
            <button class="btn btn-info" @click="setDecrease(num)">－{{ num }}</button>
            <p class="result">Count： <b>{{ count }}</b></p>
            <button class="btn btn-info" @click="setIncrease(num)">＋{{ num }}</button>
            <button class="btn btn-light" @click="setCountReset">Reset</button>
        </div>
    </div>    
</template>

<script>
    // import 提取 getters & actions functions 的方法
    import { mapGetters, mapActions } from 'vuex';

    export default {
        data() {
            return {
                num: 1
            }
        },
        computed: {
            ...mapGetters({
                count: 'getCount'    
            })
        },
        methods: {
            ...mapActions([
                'setIncrease',
                'setDecrease',
                'setCountReset'
            ])
        }
    }
</script>

<style scoped>
    .setNumberArea {
        margin: 1%;
    }

    .setNumberArea input {
        width: 7%;
        margin: 0 auto;
    }

    .result {
        margin: 10px;
    }    

    .result b {
        color: #faa;
    }
</style>