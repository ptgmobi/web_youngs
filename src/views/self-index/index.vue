<template>
  <div>Index</div>
</template>
<script lang="ts" setup>
let { proxy }: any = getCurrentInstance()
const index = '/dashboard/overview'
proxy.$router.push({
  path: index,
  query: {
    type: 'index'
  }
})
</script>
