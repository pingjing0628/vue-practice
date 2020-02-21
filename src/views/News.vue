<template>
  <div class="news">
    <h1>News page</h1>
    <div class="box" :class="[div_style, coloring, shape]"></div>
    <hr>
    <h3> 按鍵修飾符 </h3>
    <div><input type="text" value="先點我在按下Ctrl + a" @keyup.ctrl.65="pop"></div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      div_style: 'box',
      coloring: 'red_color',
      shape: 'round'
    }
  },
  methods: { // computed vs methods, computed 只會將有使用到的data資料重新計算，相較於methods較不吃效能
      pop() {
        alert('完成按下Ctrl + a')
      }
    }
}
</script>

<style scoped>
  .box {
    border: 1px solid #cccccc;
    width: 100px;
    height: 100px;
  }
  .red_color {
    background-color: blueviolet;
  }
  .round {
    border-radius: 50%
  }
</style>