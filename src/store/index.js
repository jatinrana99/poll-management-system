import { createStore } from 'vuex'
import user from './modules/user'
import poll from './modules/poll'

export default createStore({
  // state: {
    
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    user,
    poll
  }
})
