import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultHtml from '@/components/system/systems/defaultHtml';// default
import onCampus from '@/components/system/systems/onCampus';// 插件管理
import pluginManagement from '@/components/system/systems/pluginManagement';// 地区管理
import regionalManagement from '@/components/system/systems/regionalManagement';// 院区管理

Vue.use(VueRouter);

var routes = [
  {
    path: '/',
    name: 'default',
    component: defaultHtml
  },
  {
    path: '/onCampus',
    name: '插件管理',
    component: onCampus
  },
  {
    path: '/pluginManagement',
    name: '地区管理',
    component: pluginManagement
  },
  {
    path: '/regionalManagement',
    name: '院区管理',
    component: regionalManagement
  }
];

const router = new VueRouter({
  routes
});
export default router
