<template>
  <div class="bread">
    <h1>Bread page</h1>
    <SlotCard>
      <div class="content">
        <h2> Slot here </h2>
      </div>
      <template slot="slot_footer">
          <p>多插槽 Slot footer</p>
      </template>
      <template slot="slot_title">
          <h1>多插槽 Slot title</h1>
      </template>
    </SlotCard>

    <h1>Draw</h1>
    <input type="text" v-model.trim.lazy="myname">
    <p>Drawer {{ myname }}</p>
  </div>
</template>

<script>
import SlotCard from '../components/Slot'

export default {
  name: 'slot',
  components: {
    SlotCard
  },
  data() {
      return {
        myname:'Enter real name'
      }
    },
    watch: {
      myname() {
        alert('祝您中獎！')
      }
    }
  
}
</script>

<style>

.content {
  padding: 50px 20px;
  border-radius: 6px;
  background: #a7daed;
  color: #233447;
}
</style>