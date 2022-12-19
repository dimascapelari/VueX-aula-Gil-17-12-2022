import { createStore } from 'vuex'
import user from './users'

const Store = createStore({
  modules: {
    user
  }
})

export default Store
