<template>
	<div id="" class="header">
		<div id="" class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div id="" class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<div id="" class="header-right">
			<span class="iconfont arrow-icon">&#xe64a;</span>
			城市
		</div>
	</div>
</template>

<script>
	//导出头部组件，在home组件中进行引用
	export default {
		name: 'HomeHeader'
	}
</script>

<style lang="stylus" scoped>
/*在build/webpack.base.conf.js里给路径起别名，把一些通用样式可以写在.styl文件中，下面用$引用*/
@import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem

</style>