<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cachedViewsDeep">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts" name="fenix-offer">
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
const cachedViewsDeep = computed(() => {
  return appStore.cachedViewsDeep
})
</script>
