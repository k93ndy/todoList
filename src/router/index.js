import Vue from 'vue'
import Router from 'vue-router'
import TodoLayout from '@/components/TodoLayout'
import TodoMenu from '@/components/TodoMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoLayout',
      component: TodoLayout,
      children: [{
        path: '/todo/:id',
        name: 'todo',
        component: TodoMenu
      }]
    }
  ]
})
