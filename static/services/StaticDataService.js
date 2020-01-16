// 加载静态文件
import request from '@/store/request'
export class StaticDataService {
  constructor (opt) {
    this.opt = opt
  }
  async getStaticData () {
    let urls = [
      './static/config/map_config/map.config.js',
      './static/config/symbol_config/symbol.config.js',
      './static/config/layer_config/layer.tree.config.js'
    ]
    let res = await request.requestAll(urls)
    let obj = {}
    res.forEach((element, index) => {
      /* eslint-disable*/
      let config = eval(element.data)
      switch (index) {
        case 0:
          obj.mapConfig=config
          break
        case 1:
          obj.symbolConfig=config
          break
        case 2:
          obj.layerConfig=config
          break
      }
    })
    return obj
  }
}
