import * as maptalks from '#/maptalks_js/maptalks.es.js'
export default class UtilsBase {
  constructor (opts) {
    this.opts = opts
    this.map = opts.map
  }
  // 获取图层，没有则创建
  getOrCreateLayerById (layerId) {
    let lyr = this.map.getLayer(layerId)
    !lyr && (lyr = new maptalks.VectorLayer(layerId).addTo(this.map))
    return lyr
  }
  // 清除图层
  clearLayerById (layerId) {
    let lyr = this.map.getLayer(layerId)
    lyr && lyr.clear()
  }
}
