<template>
  <router-view v-slot="{ Component }">
    <component
      :is="Component"
    />
  </router-view>
</template>
<script lang="ts" setup name="api-offer-update">
onActivated(() => {
  console.log('onActivated')
})
</script>
