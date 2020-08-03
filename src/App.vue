<template>
  <div id="app">
    <div class="nav justify-content-center">
      <router-link :to="{path: '/Home'}">Home</router-link>
      <router-link :to="{path: '/CtoF'}">CtoF</router-link>
      <router-link :to="{path: '/Count'}">Count</router-link>
      <router-link :to="{path: '/TodoList'}">TodoList</router-link>
      <router-link :to="{path: '/Shop'}">Shop</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Microsoft JhengHei, Avenir, Helvetica, Arial, sans-serif;
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

ul, li{
  list-style: none;
}

.nav{
  background: #abc;
}
</style>
