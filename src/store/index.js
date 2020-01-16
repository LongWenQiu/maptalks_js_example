/*
 * @Description: store入口
 * @version: 0.1.0
 * @Author: wsw
 * @Date: 2018-12-25 22:12:22
 * @LastEditors: wsw
 * @LastEditTime: 2019-01-22 09:11:33
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 变量定义
  state,
  // 变量操作
  getters,
  // 函数
  mutations,
  // 异步的数据操作
  actions,
  strict: true
})
export default store
