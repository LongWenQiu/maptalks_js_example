export default class Factory {
    componentClazzes = {};
    components = {};
    options = {};
    constructor (opts) {
      this.options = opts
    }
    getComponent (id) {
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
