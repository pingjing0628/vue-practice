<template>
  <div class="card">
    <h1>Card page</h1>
    <Card :cardData = "cardData" />
    
  </div>
  
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'card',
  components: {
    Card
  },
  data() {
    return {
      cardData : [
        {
          name: 'John Lennard',
          birthday: '1999-01-20',
          mail: 'lennard@aaa.com',
        },
        {
          name: 'Mille',
          birthday: '1999-01-20',
          mail: 'mmeii@ddd.com',
        },
        {
          name: 'Coach Kun',
          birthday: '1999-01-20',
          mail: 'KKcc@bbb.com',
        }
      ]
    }
  }
}
</script>

<style>

/* .content {
  padding: 50px 20px;
  border-radius: 6px;
  background: #a7daed;
  color: #233447;
} */
</style>