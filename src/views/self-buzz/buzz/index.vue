<template>
  <router-view v-slot="{ Component }">
    <keep-alive
      :include="cachedInclude"
      :exclude="cachedExclude"
    >
      <component :is="Component" />
    </keep-alive>
    
  </router-view>
</template>
<script lang="ts" setup name="buzz-index">
const store = useStore()
const cachedInclude = computed(() => {
  // store.state.app.cachedInclude = []
  return store.state.app.cachedInclude
})

const cachedExclude = computed(() => {
  // store.state.app.cachedExclude = []
  return store.state.app.cachedExclude
})
</script>
