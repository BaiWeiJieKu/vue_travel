import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      //异步加载，进入页面再加载页面数据
      component: () => import('@/pages/home/Home')
    },
    //添加一个城市路由
    {
    	path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
    	path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// 路由文件，根据不同的访问路径显示不同的组件
