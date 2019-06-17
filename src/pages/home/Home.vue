/* eslint-disable把首页拆成多个组件 */
<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
//引入头部组件Header.vue
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
//使用axios进行ajax发送
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	HomeWeekend
  },
  data () {
  	return {
  		city:'',
  		swiperList:[],
  		iconList:[],
  		recommendList:[],
  		weekendList:[]
  	}
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
  	getHomeInfo() {
  		axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc(res){
  		res=res.data
  		if(res.ret && res.data) {
  			const data=res.data
  			this.city=data.city
  			this.swiperList=data.swiperList
  			this.iconList=data.iconList
  			this.recommendList=data.recommendList
  			this.weekendList=data.weekendList
  		}
  		console.log(res)
  	}
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
//使用ajax获取动态数据
//1：安装axios插件，并引入
//2：利用vue的生命周期钩子mounted使页面加载时发送ajax
//3：在config/index.js中设置proxyTable来处理发送请求的映射，静态json文件在static/mock下
//4：在本页面定义数据，通过组件之间的传值把动态数据传递到各个子模块中使用
</script>
<style type="text/css">

</style>
