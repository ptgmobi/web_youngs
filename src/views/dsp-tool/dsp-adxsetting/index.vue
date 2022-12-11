<template>
  <router-view v-slot="{ Component }">
    <keep-alive
      :include="cachedInclude"
    >
      <component :is="Component" />
    </keep-alive>

  </router-view>
</template>
<script lang="ts" setup name="dsp-adxsetting-index">
import { useAppStore } from '@/store/app'
// const store = useStore()
const appStore = useAppStore()
const cachedInclude = computed(() => {
  // store.state.app.cachedInclude = []
  // return store.state.app.cachedInclude
  return appStore.cachedViewsDeep
})
</script>