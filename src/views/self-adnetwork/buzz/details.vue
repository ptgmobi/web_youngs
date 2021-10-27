<template>
  {{router.currentRoute.value.params}}
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
let { proxy }: any = getCurrentInstance()
import {useRouter } from 'vue-router'
const router = useRouter()
console.log(router.currentRoute.value)
</script>