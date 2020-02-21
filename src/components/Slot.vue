<template>
  <div class = "slot">
      <div class = "slot_title">
        <slot name="slot_title"></slot>
      </div>
      <div class = "slot_body">
        <p> Slot content below here</p>
        <slot></slot>
        <p> Slot content end up here</p>
        <slot name="slot_footer"></slot>
      </div>
    </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slot {
  width: 600px;
    margin: 10px;
    background: white;
    border: 1px solid #cccccc;
    border-radius: 6px;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);
}

.slot_title {
  padding: 16px;
  border-bottom: 1px solid #cccccc;
  color: black;
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
}

.slot_body {
  padding: 16px;
  color: #555555;
  font-size: 16px;
  line-height: 22px;
}

p {
  margin: 0 0 10px 0;
}
</style>