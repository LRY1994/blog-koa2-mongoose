import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import '@/utils/filter.js';
import '@/assets/style/variable.scss';
Vue.config.productionTip = false

import hljs from 'highlight.js'
// import 'highlight.js/styles/routeros.css'
import 'highlight.js/styles/github.css'


Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
