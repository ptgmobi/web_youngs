<template>
  <div>
    test
  </div>
</template>
<script setup lang="ts">
import * as data from 'vue'
import { useStore } from 'vuex'
console.log(data)
import $store from '@/store'
console.log($store.state.user.email)
const store = useStore()
console.log(store.state.user.email)
</script>