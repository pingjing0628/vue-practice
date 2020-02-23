<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/card">Card</router-link> |
      <router-link to="/bread">Bread</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/filter">Filter</router-link> | 
      <router-link to="/menu">Menu</router-link>
    </div>
    <Breadcrumb />
    <router-view/>
  </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb'

export default {
  name: 'list',
  components: {
    Breadcrumb
  }
}
</script>

<style scoped>
  #nav {
    background: #254e8d;
    padding: 20px;
    text-align: center;
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
