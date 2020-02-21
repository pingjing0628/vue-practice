<template>
  <div class="news">
    <h1>News page</h1>
    <div class="box" :class="[div_style, coloring, shape]"></div>
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