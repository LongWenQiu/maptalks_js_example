<template>
  <div id="map"></div>
</template>

<script>
import * as maptalks from '#/maptalks_js/maptalks.es.js'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['configLoaded', 'config'])
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
      const ops = {
        center: [0, 0],
        zoom: 5,
        minZoom: 1,
        maxZoom: 19,
        zoomInCenter: true,
        attribution: false,
        spatialReference: null,
        zoomControl: false, // 设置倾斜于旋转
        scaleControl: false
      }
      const {
        center,
        zoom,
        minZoom,
        maxZoom,
        zoomInCenter,
        attribution,
        spatialReference,
        zoomControl,
        scaleControl
      } = { ...ops, ...initConfig.mapOptions }
      let myMap = new maptalks.Map('map', {
        center: center,
        zoom: zoom,
        minZoom: minZoom,
        maxZoom: maxZoom,
        zoomInCenter: zoomInCenter,
        attribution: attribution,
        spatialReference: spatialReference,
        zoomControl: { ...zoomControl },
        scaleControl: { ...scaleControl },
        layers: layers,
        dragPitch: false,
        dragRotate: false
      })
      _map = {
        // 地图实例
        getInstance () {
          return myMap
        },
        // 获取底图
        getBaseLayers () {
          return baseLayers
        },
        // 清除图层
        clearLayerById (layerId) {
          let lyr = myMap.getLayer(layerId)
          lyr && lyr.clear()
        },
        // 获取图层，没有则创建
        getOrCreateLayerById (layerId) {
          let lyr = myMap.getLayer(layerId)
          !lyr && (lyr = new maptalks.VectorLayer(layerId).addTo(myMap))
          return lyr
        },
        // 设置图层是否可见
        setLayerVisuableById (layerId, visible) {
          let lyr = myMap.getLayer(layerId)
          lyr && lyr.config('visible', visible)
        },
        clear () {
          this.hideInfoWindow()
          this.getInstance().getLayers(layer => {
            if (layer.getJSONType() !== 'TileLayer' && layer.getId() !== 'boundary_layer' && layer.getId() !== 'label_area') {
              layer.clear()
            }
            return layer.getJSONType() !== 'TileLayer'
          })
        }
      }
      this.$store.commit('setMap', _map)
      this.$store.commit('setMapLoaded', true)
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
let _map = null
</script>
<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
