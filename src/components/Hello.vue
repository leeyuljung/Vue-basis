<template>
  <div class="container">
    <p>{{ msg }}</p>
    <input type="text" v-model="hello" />
    <input type="checkbox" v-model="toggle" />
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      msg: 'test',
      hello: 'this is test',
      toggle: false
    }
  }
}
</script>

<style>
  .container{
    margin: 1% auto;
  }
</style>
