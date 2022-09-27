<template>
  <div class="w100 flex jc-between p10-20">
    <div class="mr-10">{{props.title}}</div>
    <div class="split-box"></div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss">
.split-box{
  width: 100%;
  flex: 1;
  height: 1px;
  background-color: #ccc;
}
</style>
