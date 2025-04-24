import { createStore } from 'vuex'

const store = createStore({
  state: {
    activities: []
  },
  mutations: {
    addActivity(state, newActivity) {
      state.activities.push(newActivity)
      localStorage.setItem('activities', JSON.stringify(state.activities))
    },
    updateActivity(state, activity) {
      const index = state.activities.findIndex(a => a.id === activity.id)
      if (index !== -1) {
        state.activities.splice(index, 1, activity)
        localStorage.setItem('activities', JSON.stringify(state.activities))
      }
    },
    deleteActivity(state, id) {
      const index = state.activities.findIndex(a => a.id === id)
      if (index !== -1) {
        state.activities.splice(index, 1)
        localStorage.setItem('activities', JSON.stringify(state.activities))
      }
    },
    loadActivities(state) {
      const storedActivities = localStorage.getItem('activities')
      if (storedActivities) {
        state.activities = JSON.parse(storedActivities)
      }
    }
  },
  actions: {
    addActivity({ commit }, newActivity) {
      commit('addActivity', newActivity)
    },
    updateActivity({ commit }, activity) {
      commit('updateActivity', activity)
    },
    deleteActivity({ commit }, id) {
      commit('deleteActivity', id)
    },
    loadActivities({ commit }) {
      commit('loadActivities')
    }
  }
})

export default store