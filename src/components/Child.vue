<template>
  <div id="child">
    <h3>Child</h3>
    <button @click="$emit('hungry')">So hungry!!</button> <!-- $emit發起hungry自定義事件 -->
    <ul>
      <li v-for="item in dinner" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: { // 剛有綁dinner資料到子層，那子層就要用props接收
      dinner: {
        type: Array,
        required: true
      }
    }
    // 按下子層components裡的按鈕後，會發起自定義事件hungry用來執行父層頁面的hungry函式，此函式會先跳alert訊息，接著回傳「陣列資料」進components給裡面的<li>使用
  }
</script>

<style scoped>
  #child {
    padding: 20px;
    border: 1px solid #cccccc;
    width: 500px;
  }
  button {
    margin-bottom: 15px;
  }
  ul {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    margin: 10px;
  }
</style>