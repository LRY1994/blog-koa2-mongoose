import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import WritePost from '@/components/WritePost'
import Posts from '@/components/Posts'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },{
      path: '/WritePost',
      name: 'WritePost',
      component: WritePost
    },{
      path: '/Posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
