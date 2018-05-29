import Vue from 'vue'
import vueRouter from "vue-router"
Vue.use(vueRouter);

import login from "@/components/login"
import mainPage from "@/components/mainPage"
import home from "@/components/home"
import log from "@/components/log"
import func from "@/components/func"

import note from "@/components/note"
import shoppingCart from "@/components/shoppingCart"
import qrcode from "@/components/qrcode"
import echarts from "@/components/echarts"
import element from "@/components/element"
import element_comp from "@/components/element_comp"
/**
 * This dependency was not found: To install it, you can run: npm install --save @components/echarts.
 * 解决: 路径引入时，@后缺少/,导致被认为是模块,在node_modules找不到,提示安装.
 */
import ueditor_using from "@/components/ueditor_using"
const routesArr = [{
  path: '/login',
  name: 'Login',
  component: login
}, {
  path: '/',
  component: mainPage,
  children: [{
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/log',
    name: 'log',
    component: log
  }, {
    path: '/func',
    component: func,
    children: [{
      path: 'element',
      name: 'element',
      component: element
    }, {
      path: 'element_comp',
      name: 'element_comp',
      component: element_comp
    }, {
      path: 'note',
      name: 'note',
      component: note
    }, {
      path: 'shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    }, {
      path: 'qrcode',
      name: 'qrcode',
      component: qrcode
    }, {
      path: 'echarts',
      name: 'echarts',
      component: echarts
    }, {
      path: 'ueditor',
      name: 'ueditor',
      component: ueditor_using
    }]
  }]
}];

const routes = new vueRouter({
  mode: 'history',
  routes: routesArr
});
export default routes;
