<template>
  <div id="app">
    <router-link :to="{path: '/Home'}">Home</router-link>
    <router-link :to="{path: '/CtoF'}">CtoF</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app a{
  margin: 1%;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}
</style>
