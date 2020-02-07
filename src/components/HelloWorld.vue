<template>
  <div class="container">
    <map2d></map2d>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Map2d from '@/gis_com/map2d'
import MockyData from '@/utils/MockyData'// 模拟数据接口
export default {
  name: 'HelloWorld',
  components: {
    Map2d
  },
  computed: {
    ...mapGetters(['mapLoaded', 'config', 'map', 'gisFactory'])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    mapLoaded () {
      this.initMap()
    }
  },
  methods: {
    initMap () {
      console.log('GIS工厂类', this.gisFactory)
      this.test()
    },
    test () {
      // 添加模拟数据
      const pointArr = MockyData.mocky_Point([113, 24], 100)
      console.log(pointArr)
      this.gisFactory.SimpleRenderUtils.addPoints('point_layer', pointArr, {x: 'longitude', y: 'latitude'})
      this.gisFactory.SimpleRenderUtils.setMapLinstener({
        id: 'poiClusterLayer',
        type: 'click',
        layerIds: ['point_layer'],
        run: (e) => {
          this.processClick(e)
        }
      })
    },
    processClick (e) {
      const geo = e.geos[0]
      console.log(geo.getContainerExtent())
      this.gisFactory.PopupUtils.show(geo, [-10, -30], 'popupTest')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.container{
  height: 100%;
}
</style>
