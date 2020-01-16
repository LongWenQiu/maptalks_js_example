import baseFactory from '../factory'
import commonComponents from './index'
export default class factory extends baseFactory {
  constructor (opts) {
    super()
    this.componentClazzes = commonComponents
    this.options = opts
    this.createComponents(opts)
  }
  createComponents (opts) {
    const components = commonComponents
    // 工具基类
    const utilsBase = new components.UtilsBase(opts)
    this.components.utilsBase = utilsBase
    // 图层工具类
    const LayerUtils = new components.LayerUtils(opts)
    this.components.LayerUtils = LayerUtils
    // 渲染器工具类
    const SimpleRenderUtils = new components.SimpleRenderUtils(opts)
    this.components.SimpleRenderUtils = SimpleRenderUtils
  }
}
