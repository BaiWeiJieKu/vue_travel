<!--城市选择页面-->
<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>
<script>
	import axios from 'axios'
	import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import CityAlphabet from './components/Alphabet'
	export default{
		name:'City',
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data () {
		    return { 
		      cities: {},
		      hotCities: [],
		      letter: ''
		    }
		  },
		methods: {
			//发送ajax获取城市信息
		    getCityInfo () {
		      axios.get('/api/city.json')
		        .then(this.handleGetCityInfoSucc)
		    },
		    //处理ajax数据
		    handleGetCityInfoSucc (res) {
		      res = res.data
		      if (res.ret && res.data) {
		        const data = res.data
		        this.cities = data.cities
		        this.hotCities = data.hotCities
		      }
		    },
		    //监听来自Alphabet.vue向外触发的事件，获取到被点击的字母
		    handleLetterChange (letter) {
		      this.letter = letter
		    }
		  },
		mounted () {
		    this.getCityInfo()
		  }
	}
</script>

<style>
</style>