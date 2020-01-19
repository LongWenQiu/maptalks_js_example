<template>
  <div class="test_info">

  </div>
</template>

<script>
export default {
  props: ['dataInfo'],
  data () {
    return {}
  },
  computed: {},
  created () { },
  mounted () {
    console.log(this.dataInfo)
  },
  watch: {},
  methods: {},
  components: {}
}
</script>

<style scoped>
.test_info {
  width: 350px;
  height: 200px;
  background-color: white;
  position: relative;
  left: -20px;
}
</style>
