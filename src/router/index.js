import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
