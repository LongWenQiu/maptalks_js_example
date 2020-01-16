import * as maptalks from '#/maptalks_js/maptalks.es.js'
import utilsBase from './utilsBase'
export default class LayerUtils extends utilsBase {
  constructor (opts) {
    super(opts)
    this.opts = opts
  }
  getOrCreateLayerById (layerId) {
    let lyr = this.map.getLayer(layerId)
    !lyr && (lyr = new maptalks.VectorLayer(layerId).addTo(this.map))
    return lyr
  }
}
