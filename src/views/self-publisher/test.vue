<template>
  <div>
    <span @click="handleClick">test</span>
    {{ props.count }}
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, nextTick } from 'vue'
import { useStore } from 'vuex'
import $store from '@/store'
await nextTick()
console.log($store.state.user.email)
const store = useStore()
console.log(store.state.user.email)
const props = defineProps({
  count: Number
})
const emit = defineEmits(['kk', 'up'])
const handleClick = () => {
  emit('kk', '点了我')
}
</script>