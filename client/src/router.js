import Vue from 'vue'
import Router from 'vue-router'
import Trip from '@/views/trip';
import Study from '@/views/study'
import Read from '@/views/read'
import Photograph from '@/views/photograph'

Vue.use(Router)

export default new Router({
  routes: [
    {
      alias: '/',
      path: '/study',
      name: 'study',
      component: Study
    },
    {
      path: '/read',
      name: 'read',
      component: Read
    },{
      path: '/photograph',
      name: 'photograph',
      component: Photograph
    },{
      path:'/trip',
      name:'trip',
      component:Trip
    },
    {
      path:'/about',
      name:'about',
      component:Trip
    },
  ]
})
