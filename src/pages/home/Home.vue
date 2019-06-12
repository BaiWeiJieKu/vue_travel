/* eslint-disable */
<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
	</div>
</template>

<script>
//引入头部组件Header.vue
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
  	HomeHeader,
  	HomeSwiper
  }
}
</script>
<style type="text/css">

</style>
