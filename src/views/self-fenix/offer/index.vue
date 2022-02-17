<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cachedViewsDeep">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts" name="fenix-offer">
const $store = useStore()
const cachedViewsDeep = computed(() => {
  return $store.state.app.cachedViewsDeep
})
</script>
