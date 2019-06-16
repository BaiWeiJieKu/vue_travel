<!--选项模块-->
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class='icon-img'>
            <img class='icon-img-content' :src='item.imgUrl' />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
	export default {
		name: 'HomeIcons',
		props:{
			list:Array
		},
		data (){
			return {
				iconList:[{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'景点门票'
				},{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
					desc:'长岛'
				},{
					id:'0003',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
					desc:'蓬莱阁'
				},{
					id:'0004',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
					desc:'一日游'
				},{
					id:'0005',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
					desc:'烟台必游'
				},{
					id:'0006',
					imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
					desc:'自然风光'
				},{
					id:'0007',
					imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/14d4b8a11f6b5f42db1b832fde4278e4.png',
					desc:'蓬莱极地'
				},{
					id:'0008',
					imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
					desc:'龙口南山'
				}],
				swiperOption:{
					//轮播图不自动滚动
					autoplay:false
				}
			}
		},
		//计算属性，判断图标个数需要几个页面显示
		computed: {
		    pages () {
		      const pages = []
		      //对数据列表进行循环
		      this.list.forEach((item, index) => {
		      	//判断哪一组数据显示在哪一页中
		        const page = Math.floor(index / 8)
		        //如果数组中第page个页面不存在，则在pages[page]位置开辟一个空数组
		        if (!pages[page]) {
		          pages[page] = []
		        }
		        //把当前数组添加到pages[page]位置
		        pages[page].push(item)
		      })
		      return pages
		    }
		}
	}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>