<template>
  <div class="container">
    <map-main></map-main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MapMain from '@/gis_com/map-main'
export default {
  name: 'HelloWorld',
  components: {
    MapMain
  },
  computed: {
    ...mapGetters(['config'])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('res', this.config)
  }
}
</script>
<style scoped>
.container{
  height: 100%;
}
</style>
