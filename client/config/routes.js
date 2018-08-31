// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // component: Todo,
    component: () => import('../views/todo/todo.vue'),
    name: 'app'
  },
  {
    path: '/login',
    // component: Login
    component: () => import('../views/login/login.vue')
  }
]
