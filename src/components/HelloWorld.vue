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
    ...mapGetters(['mapLoaded', 'config', 'map'])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    mapLoaded () {}
  },
  methods: {
    initMap () {}
  },
  mounted () {
    // console.log('res', this.config)
  }
}
</script>
<style scoped>
.container{
  height: 100%;
}
</style>
