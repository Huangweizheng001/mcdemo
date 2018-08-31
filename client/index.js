import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createRouter from './config/router'
import './assets/styles/global.styl'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()
// const root = document.createElement('div')
// document.body.appendChild(root)

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to, from, next) => {
  console.log('after each invoked')
})
store.watch((state) => state.count + 1, (newCount) => {
  console.log('new count:', newCount)
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
