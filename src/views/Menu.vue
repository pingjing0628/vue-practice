<template>
  <div id="app">
    <nav>
      <a v-for="(item,index) in navList"
        :class="{active:tab === index}" 
        @click="tab = index"
        :key="item"
      >{{ item }}</a> <!-- 綁入class，條件為class name是active，active使用tab資料(在data()中設定為0)，並會等於index(序號)，因此預設的條件結果就是class name綁在第一個選項上-->
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        tab: 0,
        navList: ['本月活動','超值套餐','人氣加點','分店資訊']
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Microsoft JhengHei', 'Apple LiGothic Medium', 'PMingLiU',
    'sans-serif', 'serif';
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
  }
  nav {
    display: inline-block;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
  }
  a {
    display: inline-block;
    padding: 10px 20px;
    color: #474747;
  }
  a:not(:last-child) {
    border-right: 1px solid #aaaaaa;
  }
  a:hover {
    color: #888888;
    cursor: pointer;
    background-color: #dedede;
  }
  .active {
    background-color: #e8792e;
    color: white;
  }
  .active:hover {
    color: white;
    cursor: default;
    background-color: #e8792e;
  }
</style>