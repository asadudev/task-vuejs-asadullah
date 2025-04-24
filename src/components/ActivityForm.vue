<template>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="newActivityName" placeholder="Add new activity">
      <button type="submit">Add</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newActivityName: ''
      }
    },
    methods: {
      handleSubmit() {
        const newActivity = {
          id: Date.now(),
          name: this.newActivityName,
          completed: false
        }
        this.$store.dispatch('addActivity', newActivity)
        this.newActivityName = ''
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  input[type="text"] {
    width: 50%;
    height: 30px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    width: 20%;
    height: 52px;
    padding: 7px 12px;
    font-size: 16px;
    background-color: #42b983;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #3e8e41;
  }
  </style>