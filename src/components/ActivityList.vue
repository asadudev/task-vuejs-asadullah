<template>
    <div style="margin-top: 20px;">
      <h2>Activity List</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr style="background-color: #f0f0f0; border-bottom: 1px solid #ccc;">
            <th style="border: 1px solid #ccc; padding: 10px; width: 25%;">ID</th>
            <th style="border: 1px solid #ccc; padding: 10px; width: 25%;">Name</th>
            <th style="border: 1px solid #ccc; padding: 10px; width: 25%;">Completed</th>
            <th style="border: 1px solid #ccc; padding: 10px; width: 25%;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="activity in activities" :key="activity.id" style="border-bottom: 1px solid #ccc;">
            <td style="border: 1px solid #ccc; padding: 10px; width: 25%;">{{ activity.id }}</td>
            <td style="border: 1px solid #ccc; padding: 10px; width: 25%;">{{ activity.name }}</td>
            <td style="border: 1px solid #ccc; padding: 10px; width: 25%;">
                <label class="switch">
                <input type="checkbox" :checked="activity.completed" @change="updateActivity(activity)">
                <span class="slider round"></span>
                </label>
            </td>
            <td style="border: 1px solid #ccc; padding: 10px; width: 25%;">
              <button @click="deleteActivity(activity.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {

    data() {
      return {
        showAddActivityForm: false,
        newActivityName: ''
      }
    },
    computed: {
      activities() {
        return this.$store.state.activities
      }
    },
    methods: {
      addActivity() {
        const newActivity = {
          id: Date.now(),
          name: this.newActivityName,
          completed: false
        }
        this.$store.dispatch('addActivity', newActivity)
        this.newActivityName = ''
        this.showAddActivityForm = false
      },
      updateActivity(activity) {
        this.$store.dispatch('updateActivity', activity)
      },
      deleteActivity(id) {
        this.$store.dispatch('deleteActivity', id)
      }
    }
  }
  </script>
  <style scoped>
  
  h2 {
    margin-top: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  .completed {
    text-decoration: line-through;
  }
  
  button {
    margin-left: 10px;
  }
  .switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

</style>