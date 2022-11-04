import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'

Vue.use(Vuex)

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    login
  }
});
