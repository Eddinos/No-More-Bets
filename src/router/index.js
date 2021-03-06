import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/pages/Hello'
import Napolitano from '@/components/Napolitano'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Napolitano',
      name: 'Napolitano',
      component: Napolitano
    }
  ],
  mode: 'history'
})
