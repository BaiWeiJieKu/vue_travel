<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data() {
  	return {
  		weekendList:[{
  			id:'0001',
  			imgUrl:'http://img1.qunarzz.com/sight/source/1512/42/2650adfc626066.jpg_r_640x214_4053783f.jpg',
  			title:'蓬莱一日游',
  			desc:'蓬莱阁，八仙过海，海底世界'
  		},{
  			id:'0002',
  			imgUrl:'http://img1.qunarzz.com/sight/source/1512/42/2650adfc626066.jpg_r_640x214_4053783f.jpg',
  			title:'蓬莱一日游',
  			desc:'蓬莱阁，八仙过海，海底世界'
  		},{
  			id:'0003',
  			imgUrl:'http://img1.qunarzz.com/sight/source/1512/42/2650adfc626066.jpg_r_640x214_4053783f.jpg',
  			title:'蓬莱一日游',
  			desc:'蓬莱阁，八仙过海，海底世界'
  		}]
  	}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
