import * as maptalks from '#/maptalks_js/maptalks.es.js'
import common from '@/utils/common.es'
import utilsBase from './utilsBase'
export default class SimpleRenderUtils extends utilsBase {
  constructor (opts) {
    super(opts)
    this.opts = opts
    this.map = opts.map
  }
  // 加点
  addPoints (layerId, dataArr, options) {
    const { id, x, y, symbol, cursor, fitExtent } = { ...{ id: 'id', x: 'x', y: 'y', cursor: 'pointer', fitExtent: false }, ...options }
    let lyr = this.getOrCreateLayerById(layerId)
    let eles = this.creatElements(dataArr, { id, x, y, symbol, cursor })
    lyr.addGeometry(eles, fitExtent)
    lyr.config('cursor', 'default')
  }
  creatElements (data, options) {
    const { id, x, y, symbol, cursor } = { ...{ id: 'id', x: 'x', y: 'y', cursor: 'pointer' }, ...options }
    let eles = []
    let _symbol = symbol
    if (typeof symbol !== 'function') {
      _symbol = function () {
        return symbol
      }
    }
    data.forEach(element => {
      if (!element) return
      let [lng, lat] = this.parseLngLat(element[x], element[y])
      if (isNaN(lng) || isNaN(lat)) {
        return
      }
      element._uuid = element[id] || common.uuid()
      let profile = {
        'feature': {
          'type': 'Feature',
          'id': element._uuid,
          'geometry': { 'type': 'Point', 'coordinates': [lng, lat] },
          'properties': element
        },
        'options': {
          'draggable': false
        },
        'symbol': _symbol(element)
      }
      let ele = maptalks.Geometry.fromJSON(profile)
      ele.config('cursor', cursor)
      eles.push(ele)
    })
    return eles
  }
  parseLngLat (x, y) {
    let lng = parseFloat(x)
    let lat = parseFloat(y)
    return [lng, lat]
  }
}
