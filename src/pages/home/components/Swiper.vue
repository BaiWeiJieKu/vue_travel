<!--轮播图组件-->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		props:{
			list:Array
		},
		data() {
			return {
				swiperOption:{
					pagination: '.swiper-pagination',
					loop: true
				},
				swiperList: [{
				id: '0001',
				imgUrl: 'http://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/161bfb308c31ac5e61afca9b026e7cf4.jpg'
				},{
					id: '0002',
					imgUrl: 'https://img1.qunarzz.com/vc/b8/25/51/f6173dbd12c1a0f783abe73855.jpg'
				}]
			}
			
		},
		computed:{
			showSwiper() {
				return this.list.length
			}
		}
	}
</script>

<style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>