import common from '@/utils/common.es'
import utilsBase from './utilsBase'
export default class EventUtils extends utilsBase {
  constructor (opts) {
    super(opts)
    this.opts = opts
    this.mapMapLinstener = []
  }
  // 添加地图监听事件
  addMapLinstener () {
    this.map.on('click zoomend mousemove', (evt) => {
      switch (evt.type) {
        case 'click':
          // console.log(evt)
          this.ClickLinstener(evt)
          break
        case 'zoomend':
          break
        case 'mousemove':
          break
      }
    })
  }
  // 地图点击监听
  ClickLinstener (e) {
    this.mapMapLinstener.forEach((linstener) => {
      if (linstener.type.split(',').indexOf(e.type) >= 0) {
        let layerIds = linstener.layerIds
        let lyrs = []
        if (layerIds instanceof Array && layerIds.length > 0) {
          layerIds.forEach(lyrId => {
            lyrs.push(this.getOrCreateLayerById(lyrId))
          })
          this.forEachFeatureAtCoordinate(e.coordinate, lyrs).then((geos) => {
            geos.length && linstener.run({ ...e, geos })
          })
        } else {
          linstener.run(e)
        }
      }
    })
  }
  // 注册监听
  setMapLinstener (linstener) {
    if (typeof linstener === 'function') {
      let _linstener = {
        id: common.uuid(),
        type: 'click',
        run: linstener
      }
      this.mapMapLinstener.push(_linstener)
    } else if (linstener instanceof Object && typeof linstener.run === 'function') {
      linstener.type = linstener.type || 'click'
      this.mapMapLinstener.push(linstener)
    } else {
      console.warn('not support event linstener')
    }
  }
  // 通过坐标点识取图层要素
  forEachFeatureAtCoordinate (coordinate, layers) {
    if (!(layers instanceof Array)) {
      layers = [layers]
    }
    return new Promise((resolve) => {
      this.map.identify({
        coordinate: coordinate,
        layers: layers
      }, function (geos) {
        resolve(geos)
      })
    })
  }
  // 移除地图监听事件
  removeMapLinstener (id) {
    this.mapMapLinstener.forEach((v, i) => {
      if (typeof id === 'function' && v.run === id) {
        this.mapMapLinstener.splice(i, 1)
      } else if (typeof (id) === 'string' && v.id === id) {
        this.mapMapLinstener.splice(i, 1)
      } else if (typeof (id) === 'object' && ((!id.type && v.id === id.id && v.run === id.run) || (v.id === id.id && v.type === id.type && v.run === id.run))) {
        this.mapMapLinstener.splice(i, 1)
      }
    })
  }
}
