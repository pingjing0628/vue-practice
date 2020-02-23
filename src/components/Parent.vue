<template>
  <div id="app">
    <h1>Parent</h1>
    <child @hungry="hungry" :dinner="dinner" /> <!-- @hungry 為自定義事件 ,綁入dinner資料 -->
  </div>
</template>

<script>
  import child from '../components/Child'
  export default {
    components: {
      child
    },
    data() {
      return {
        dinner:[] // 在data()裡就要有個位置存放dinner資料, 預設沒資料，所以空陣列，要等按按鈕後才給。
      }
    },
    methods: {
      hungry() {
        alert('Here is your dinner!')
        return this.dinner = ['Hamburger','Fries','Fried Chicken','Coke']
      }
    }
  }
</script>

<style>
/* #app {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
} */
</style>