<template>
  <div>Dsp Index</div>
</template>
<script lang="ts" setup>
let { proxy }: any = getCurrentInstance()
const index = '/tool/advsetting/list'
proxy.$router.push({
  path: index,
  // query: {
  //   type: 'index'
  // }
})
</script>
