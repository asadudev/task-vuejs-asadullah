<template>
    <li>
      <input type="checkbox" v-model="activity.completed" @change="updateActivity">
      <span :class="{ completed: activity.completed }">{{ activity.name }}</span>
      <button @click="deleteActivity">Delete</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      activity: Object
    },
    methods: {
      updateActivity() {
        this.activity.completed = !this.activity.completed
        this.$store.dispatch('updateActivity', this.activity)
      },
      deleteActivity() {
        this.$store.dispatch('deleteActivity', this.activity.id)
      }
    }
  }
  </script>