<template>
  <div class="w100">
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="state.rules"
      :model="state.ruleForm"
      label-width="140px"
      label-position="right"
    >
      <div class="content-con flex column">
        <!-- Offer -->
        <el-form-item
          label="Site:"
          prop="site_list"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.site_list"
              :rows="4"
              type="textarea"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- end -->
      </div>
    </el-form>
    <div class="w100 flex mt-10">
      <el-button type="primary" @click="saveSiteStr">Save</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { analysisExcelFn } from '@/utils/new-format'
const emit = defineEmits(['update:visible', 'uploadData'])
const reg = /^[0-9a-z]{8,8}$/
let validateSiteExcel = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value !== '') {
    const flag = analysisExcelFn(value, 1, reg).type
    if (flag) {
      callback(undefined)
    } else {
      callback(new Error('格式错误！'))
    }
  } else {
    callback(new Error('必填项'))
  }
}
const handleData = computed(() => {
  return analysisExcelFn(state.ruleForm.site_list, 1, reg).data
})
let state = reactive({
  ruleForm: {
    site_list: ''
  },
  rules: {
    site_list: [
      { required: true, message: '必填项', trigger: ['blur', 'change'] },
      { validator: validateSiteExcel, trigger: ['blur', 'change'] }
    ]
  }
})
const saveSiteStr = () => {
  // 关闭当前模态框
  emit('uploadData', handleData.value)
  state.ruleForm.site_list = ''
  emit('update:visible', false)
}
</script>
