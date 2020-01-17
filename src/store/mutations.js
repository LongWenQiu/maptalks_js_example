export default {
  setConfig (state, data) {
    state.config = Object.assign(state.config, data)
  },
  setConfigLoaded (state, data) {
    state.configLoaded = data
  },
  setMapLoaded (state, data) {
    state.mapLoaded = data
  },
  setMap (state, data) {
    state.map = data
  },
  setGisFactory (state, data) {
    state.gisFactory = Object.assign(state.gisFactory, data)
  }
}
