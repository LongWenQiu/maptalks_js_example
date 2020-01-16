<template>
  <div class="container">
    <map2d></map2d>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Map2d from '@/gis_com/map2d'
export default {
  name: 'HelloWorld',
  components: {
    Map2d
  },
  computed: {
    ...mapGetters(['mapLoaded', 'config', 'map', 'gis_factory'])
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
      // console.log('res', this.gis_factory)
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
