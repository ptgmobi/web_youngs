<template>
  <router-view v-slot="{ Component }">
    <component
      :is="Component"
    />
  </router-view>
</template>
<script lang="ts" setup name="dsp-adcontrol-ad">
onActivated(() => {
  console.log('onActivated')
})
</script>
