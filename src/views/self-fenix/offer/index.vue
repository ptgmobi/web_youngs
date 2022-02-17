<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cachedViewsDeep">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup name="fenix-offer" lang="ts">
const $store = useStore()
const cachedViewsDeep = computed(() => {
  return $store.state.app.cachedViewsDeep
})
</script>
