export default class Factory {
    componentClazzes = {};
    components = {};
    componentsID=[];
    options = {};
    constructor (opts) {
      this.options = opts
    }
    getComponent (id) {
      // 如果没有则 new 出这个组件
      if (!this.components[id]) {
        console.debug('component ' + id + 'not found！')
        const components = this.componentClazzes
        const Component = components[id]
        const componentInstance = new Component(this.options)
        this.components[id] = componentInstance
      }
      return this.components[id]
    }
}
