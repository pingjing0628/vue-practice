<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Count game</h3>
    <ul>
      <li>
        <h3>Team Red</h3>
        <button @click="counter1 += 1">plus 1</button>
        <p>Total {{ counter1 }}</p>
      </li>
      <li>
        <h3>Team Blue</h3>
        <button @click="counter2 += 1">plus 1</button>
        <p>Total {{ counter2 }}</p>
      </li>
      <li>
        <h3>Team Yellow</h3>
        <button @click="counter3 += 1">plus 1</button>
        <p>Total {{ counter3 }}</p>
      </li>
    </ul>

    <h3>Event</h3>
    <a href="https://www.google.com.tw/" @click.prevent="prevent">google</a>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      counter1: 0,
      counter2: 0,
      counter3: 0
    }
  },
  methods: {
      prevent() {
        alert('不會觸發連結')
      }
    }
}
</script>