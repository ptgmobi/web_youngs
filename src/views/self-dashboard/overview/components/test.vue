<template>
  <div>
    <span @click="handleClick">test</span>
    {{ props.count }}
  </div>
</template>
<script setup lang="ts">
// import { defineEmits, nextTick } from 'vue'
// import { useStore } from 'vuex'
// import $store from '@/store'
import { useAppStore } from '@/store/app'
await nextTick()
// const store = useStore()
const appStore = useAppStore()
const props = defineProps({
  count: Number
})
const emit = defineEmits(['kk', 'up'])
const handleClick = () => {
  emit('kk', '点了我')
}
</script>
