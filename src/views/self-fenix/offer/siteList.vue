<template>
  <div class="w100">
    <div class="mb-10">
      {{siteLen}}
    </div>
    <!-- 操作 -->
    <div class="control-box flex jc-between ai-start w100">
      <el-input
        v-model="state.ruleForm.site_num"
        placeholder="Please input"
        type="number"
        class="input-with-select search-con"
      >
        <template #append>
          <el-button @click="addRandomFn">增量生成</el-button>
        </template>
      </el-input>
      <el-button
        class="cp mb-10"
        @click="editDiySiteListCopyFun"
        type="primary"
      >批量上传</el-button>
      <el-button
        class="cp mb-10"
        @click="clearSiteList"
        type="primary"
      >清空</el-button>
    </div>
    <!-- table -->
    <div class="body-box mt-10">
      <el-table
        :data="siteList"
        class="w100"
        height="300px"
        border
      >
        <el-table-column
          label="site_id"
          align="center"
        >
          <template #default="scope">
            <div>
              <span>{{ scope.row }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="设置"
          align="center"
        >
          <template #default="scope">
            <div class="flex">
              <el-button
                type="danger"
                icon="Delete"
                circle
                @click="deleteFn(scope)"
              ></el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- dialog -->
    <el-dialog
      v-model="dialogVisibleSiteListCopy"
      title="site"
      width="80%"
    >
      <site-list-copy
        v-model:visible="dialogVisibleSiteListCopy"
        @uploadData = 'uploadData'
      ></site-list-copy>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { handleAjaxDataObjectFn, randomStr } from '@/utils/new-format';
import siteListCopy from './siteListCopy.vue'
const emit = defineEmits(['update:msg'])
const props = defineProps({
  msg: {
    require: true,
    default: () => {
      return ''
    },
    type: String
  }
})
let dialogVisibleSiteListCopy = ref(false)
const handleFn = (data) => {
  const arr = data.split(',')
  return arr
}
let state = reactive({
  ruleForm: {
    site_num: 0,
    site_value: handleFn(props.msg)
  },
  rules: {}
})
const siteList = computed(() => {
  // return props.msg.site_value.split(',')
  return state.ruleForm.site_value
})
const siteLen = computed(() => {
  return state.ruleForm.site_value.length
})
const addRandomFn = () => {
  // 随机生成8位字符串
  if (state.ruleForm.site_num > 0) {
    let num = Math.floor(state.ruleForm.site_num)
    for (let index = 0; index < num; index++) {
      const element = randomStr(8)
      state.ruleForm.site_value.push(element)
    }
  }
  state.ruleForm.site_num = 0
}
const editDiySiteListCopyFun = () => {
  dialogVisibleSiteListCopy.value = true
}
const clearSiteList = () => {
  state.ruleForm.site_value = []
}
const deleteFn = (scope) => {
  const { $index: i, row } = scope
  console.log(i, row)
  state.ruleForm.site_value.splice(i, 1)
}
// excel复制新增
const uploadData = (data) => {
  data.map(ele => {
    state.ruleForm.site_value.push(ele[0])
  })
}
watchEffect(() => {
  const site_value = state.ruleForm.site_value.join(',')
  emit('update:msg', site_value)
})
</script>
<style scoped lang="scss">
.search-con{
  width: 200px;
}
</style>
