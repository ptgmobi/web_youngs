<template>
  site list
  <div>
    <el-button
      class="cp mb-10"
      icon="Tools"
      circle
      @click="editDiySiteListCopyFun"
    ></el-button>
  </div>
  <!-- dialog -->
    <el-dialog
      v-model="dialogVisibleSiteListCopy"
      title="site"
      width="80%"
    >
      <site-list-copy
        :msg="state.ruleForm"
      ></site-list-copy>
    </el-dialog>
</template>
<script lang="ts" setup>
import siteListCopy from './siteListCopy.vue'
let dialogVisibleSiteListCopy = ref(false)
let state = reactive({
  ruleForm: {}
})
const editDiySiteListCopyFun = () => {
  dialogVisibleSiteListCopy.value = true
}
</script>
