<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data(){
  	return {
  		recommendList:[{
  			id:'0001',
  			imgUrl:'https://imgs.qunarzz.com/p/tts1/1906/53/c550f64a29f93c02.jpg_160x160_7271939b.jpg',
  			title:'蓬莱一日游',
  			desc:'蓬莱阁，八仙过海，海底世界'
  		},{
  			id:'0002',
  			imgUrl:'https://imgs.qunarzz.com/p/tts0/1804/9a/ff8d02ca7eb38802.jpg_160x160_f8ef8090.jpg',
  			title:'蓬莱一日游',
  			desc:'蓬莱阁，八仙过海，海底世界'
  		},{
  			id:'0003',
  			imgUrl:'https://imgs.qunarzz.com/p/tts1/1804/90/2065119665660502.jpg_160x160_9ba7cdb7.jpg',
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
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
