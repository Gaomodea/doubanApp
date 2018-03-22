import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
// Vue.http.options.root = 'http://vue.studyit.io' 

// // 按需导入mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);


// 导入mui样式
import './lib/mui/css/mui.css'
// 扩展字体样式
import './lib/mui/css/icons-extra.css'

// import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})





