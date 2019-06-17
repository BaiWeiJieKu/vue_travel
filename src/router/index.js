import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    //添加一个城市路由
    {
    	path: '/city',
      name: 'City',
      component: City
    }
  ]
})
// 路由文件，根据不同的访问路径显示不同的组件
