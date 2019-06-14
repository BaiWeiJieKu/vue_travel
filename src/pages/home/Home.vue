/* eslint-disable */
<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
	</div>
</template>

<script>
//引入头部组件Header.vue
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons
  }
}
</script>
<style type="text/css">

</style>
