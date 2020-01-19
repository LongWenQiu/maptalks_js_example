import * as maptalks from '#/maptalks_js/maptalks.es.js'
import utilsBase from './utilsBase'
import Vue from 'vue'
import * as PopupList from '@/components/popup_vue/index'
import router from '@/router'
export default class PopupUtils extends utilsBase {
  constructor (opts) {
    super(opts)
    this.opts = opts
    this.addInfoWindow()
  }
  // 初始化弹窗
  addInfoWindow () {
    let options = {
      dx: 0,
      dy: 0,
      autoPan: true,
      autoOpenOn: true,
      // title: '详情',
      content: '<div id="popup_content" class="msgBox-content"></div>'
    }
    this.infoWindow = new maptalks.ui.InfoWindow(options)
    this.infoWindow.addTo(this.map)
  }
  // 设置偏移量
  setOffse (offset) {
    const dx = offset[0]
    const dy = offset[1]
    this.infoWindow.setOptions({ 'dx': (dx || 0) })
    this.infoWindow.setOptions({ 'dy': (dy || 0) })
  }
  /**
   * 渲染显示弹窗
   * @param {Object} geo
   * @param {Array} offset
   * @param {string} popupType
   */
  show (geo, offset, popupType) {
    const Info = Vue.extend(PopupList[popupType])
    const coord = geo.getCoordinates()
    if (Info) {
      setTimeout(function () {
        new Info({
          propsData: {
            dataInfo: geo.properties
          },
          router
        }).$mount('#popup_content')
      }, 200)
    }
    this.setOffse(offset)
    this.infoWindow.show(coord)
  }
  // 隐藏弹窗
  hide () {
    this.infoWindow.hide()
  }
  // 移除弹窗
  remove () {
    this.infoWindow.remove()
  }
}
