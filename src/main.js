import Vue from 'vue'
import router from './router'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


// vue-cli中使用axios的教程比较多,vue-resource先放弃
// import vueResource from "vue-resource"
// Vue.use(vueResource);
/**
 * 因为vue组件是相互独立的,所以若想import进来的axios可以全局使用,则可以采取挂载到Vue.prototype上去,然后通过this来访问哟~
 * Vue.prototype.$axios = axios;
 * 这里需要先去conf/index.js中解决跨域问题;
 * 
 * 
 * vue官方已经宣布维护vue-resource,推荐使用axios.
 */

/**
 * 全局变量的定义及使用: 挂载到prototype中去
 * 比如storage.js, 需要用到localStorage的地方,就不需要单独导入,然后再使用了,==全局的优势.
 */

import storage from "@/service/storageService"
import axios from "axios";
Vue.prototype.$storage = storage;
Vue.prototype.$http = axios;
Vue.config.productionTip = false


//引入Ueditor富文本编辑器
//不引人页面会报错哟
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

/**
 * 不采用beforeEach监听,若直接项目跑8081,没路径,会导致左侧的导航栏没法被选中,故最后是在beforeEach()中监听.
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
