import Vue from 'vue'
import router from './router'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/** 
 * 1)vue实现前后端的数据交互:官方宣布维护vue-resource,推荐使用axios[需conf/index.js解决跨域问题]
 * 2)vue组件是相互独立的,若想import进来的某一个js可以全局使用，通过挂载到Vue.prototype的方式,避免在需要的vue组件的页面单独import;
 *   挂载成功后,用this访问;
 */
import storage from "@/service/storageService"
import axios from "axios";
Vue.prototype.$storage = storage;
Vue.prototype.$http = axios;
Vue.config.productionTip = false


//引入Ueditor富文本编辑器
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

/**
 * 不采用beforeEach监听,若项目跑8081端口,则没路径,会导致左侧的导航栏没法被选中,故最后是在beforeEach()中监听.
 */
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    storage.removeItem("userLoginInfo");
  }
  if (!storage.getItem("userLoginInfo") && to.path != '/login') {
    next({
      path: '/login'
    });
  } else {
    if (to.path == "/")
      next({
        path: '/home'
      });
    else
      next();
  }
})

import store from "@/store/store.js"
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
