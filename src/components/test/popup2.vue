<template>
    <drag :fixed="false" class="detail-position" v-if="show">
        <div class="test_info">

        </div>
    </drag>
</template>

<script>
import Drag from '@/components/common/drag.vue'
export default {
  components: { Drag },
  data () {
    return {
      show: true
    }
  },
  computed: {},
  created () { },
  mounted () {

  },
  watch: {},
  methods: {}
}
</script>

<style scoped>
.detail-position {
   width: 350px;
  height: 200px;
  position: absolute;
  top: 400px;
  left: 300px;
  transform: translateX(-50%);
   background-color: blue;
}
</style>
