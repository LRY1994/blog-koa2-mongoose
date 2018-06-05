import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import WritePost from '@/components/WritePost'
import PostList from '@/components/PostList'
import Post from '@/components/Post'




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
      path: '/PostList',
      name: 'PostList',
      component: PostList
    },{
      path: '/Post/:postId',
      name: 'PostGet',
      component: Post
    }
  ]
})
