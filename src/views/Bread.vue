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
  </div>
</template>

<script>
import SlotCard from '../components/Slot'

export default {
  name: 'slot',
  components: {
    SlotCard
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