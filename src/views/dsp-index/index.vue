<template>
  <div>Dsp Index</div>
</template>
<script lang="ts" setup>
let { proxy }: any = getCurrentInstance()
const index = '/report'
proxy.$router.push({
  path: index,
  // query: {
  //   type: 'index'
  // }
})
</script>
