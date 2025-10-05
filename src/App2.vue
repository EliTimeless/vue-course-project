<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'pending',
      tasks: ['Task One', 'Task Two', 'Task Three'],
      link: 'https://google.com',
    }
    // onToggle(){

    // }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    },
  },
}
</script>

<template>
  <div class="body">
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>

    <h3>Tasks:</h3>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
    <a :href="link" target="_blank">Click for google</a>

    <br />
    <button v-on:click="toggleStatus">Click to change status</button>
  </div>
</template>

<style scoped>
.body {
  background-color: rgb(94, 83, 83);
  color: antiquewhite;
  width: 800px;
  height: 800px;
  padding: 20px;
  margin: 0 auto;
}
</style>
