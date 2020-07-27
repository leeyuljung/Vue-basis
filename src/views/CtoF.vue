<template>
    <div class="container">
        <!-- to control isCelsius is true or false -->
        <div class="toggle">
            <button class="btn btn-info" @click="isCelsius = !isCelsius">切換</button>
        </div>

        <!-- input temperature -->
        <div class="inputArea">
            <span v-show="isCelsius">攝氏 </span>
            <span v-show="!isCelsius">華氏 </span> 
            <input type="number" v-model="temperatureInput"> 度
        </div>

        <!-- show convert result -->
        <div class="showResult">
            <span v-if="isCelsius">華氏 {{ fahrenheit }} °F</span>
            <span v-if="!isCelsius">攝氏 {{ celsius }} °C</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                temperatureInput: 0,
                isCelsius: true
            }
        },
        computed: {
            celsius() {
                return (this.temperatureInput - 32) * 5 / 9;
            },
            fahrenheit() {
                return this.temperatureInput * 9 / 5 + 32;
            }
        }
    }
</script>

<style scoped>
    .toggle, .inputArea{
        margin-bottom: 1%;
    }
</style>