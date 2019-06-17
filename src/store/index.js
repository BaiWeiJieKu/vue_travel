import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

//使用插件
Vue.use(Vuex)
//导出仓库
export default new Vuex.Store({
  state,
  mutations
})
