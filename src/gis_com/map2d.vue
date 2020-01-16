<template>
  <div id="map"></div>
</template>

<script>
import * as maptalks from '#/maptalks_js/maptalks.es.js'
import CommonFactory from '@/gis_tools/map2d/factory'
import { mapGetters } from 'vuex'
let _map = null
export default {
  computed: {
    ...mapGetters(['configLoaded', 'config', 'map'])
  },
  methods: {
    initMap () {
      const initConfig = this.config.mapConfig
      let baseLayers = []
      let layers = []
      // 加载配置的图层
      if (initConfig.layers instanceof Array) {
        let lyrs = initConfig.layers
        if (initConfig.baseLayers instanceof Array) {
          lyrs = initConfig.baseLayers.concat(initConfig.layers)
        }
        lyrs.forEach(element => {
          let lyr = new maptalks[element.layerType](element.id, element)
          if (element.layerType === 'TileLayer') {
            baseLayers.push(lyr)
          } else if (element.layerType === 'HeatLayer') {
            lyr.config(element)
          }
          lyr.config('cursor', 'default')
          layers.push(lyr)
        })
      } else {
        throw new Error('Layer config error')
      }
      const opts = Object.assign({layers: layers}, initConfig.mapOptions)
      let myMap = new maptalks.Map('map', opts)
      _map = {
        // 地图实例
        getInstance () {
          return myMap
        },
        // 获取底图
        getBaseLayers () {
          return baseLayers
        }
      }
      this.$store.commit('setMap', _map)
      this.$store.commit('setMapLoaded', true)
      this.resolve_gis_command()
    },
    resolve_gis_command () {
      const factorySet = new CommonFactory({map: this.map.getInstance()})
      window.factorySet = factorySet
      const ss = factorySet.getComponent('LayerUtils')
      console.log(ss)
    }
  },
  watch: {
    configLoaded () {
      this.configLoaded && this.initMap()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.configLoaded && this.initMap()
    })
  }
}
</script>
<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
