<template>list</template>
<script lang="ts" setup>
import { serverClickOverallSettingList } from '@/api/serverclick'
const init = () => {
  getList()
}
const getList = async () => {
  const ajaxData = {}
  const res = await serverClickOverallSettingList(ajaxData)
  console.log(res)
}

onMounted(() => {
  init()
})
</script>