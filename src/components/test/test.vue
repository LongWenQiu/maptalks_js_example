<template>
<div class="test">
    <popup1></popup1>
    <popup2></popup2>
  </div>
</template>

<script>
import popup1 from '@/components/test/popup1.vue'
import popup2 from '@/components/test/popup2.vue'
export default {
  components: { popup1, popup2 },
  data () {
    return {}
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
.test{
    width: 100%;
    height: 100%;
}
</style>
