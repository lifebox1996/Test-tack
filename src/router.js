import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/ContactInfo/:id',
      name: 'ContactInfo',
      component: () => import('./views/ContactInfo'),
      props: true
    }
  ]
})
