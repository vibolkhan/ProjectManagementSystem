
import axios from 'axios'

const URL = 'http://localhost:5000/auth/login'

const state = {
  users: [],
}

const getters = {
  allUser: state => state.users
}

const actions = {
  async login({ commit }, body) {
    const response = await axios.post(URL, body)
    sessionStorage.setItem('token', response.data.token)
    sessionStorage.setItem('userId', response.data.user[0].id)
    commit('login', response)
},
}

const mutations = {
  login: (response) => {
    if (response) {
      window.location.reload()
    } else {
      return false
    }
  },

}

export default {
  state,
  getters,
  actions,
  mutations,
}