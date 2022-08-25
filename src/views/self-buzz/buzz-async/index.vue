<template>
  <router-view v-slot="{ Component }">
    <component
      :is="Component"
    />
  </router-view>
</template>
<script lang="ts" setup name="buzz-async">
onActivated(() => {
  console.log('onActivated')
})
</script>
