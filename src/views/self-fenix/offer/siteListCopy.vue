<template>
  <div class="w100">
    <el-form
      ref="ruleFormRef"
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
      <el-button type="primary" @click="saveSiteStr(ruleFormRef)">Save</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { analysisExcelFn } from '@/utils/new-format'
import type { ElForm } from 'element-plus'
const emit = defineEmits(['update:visible', 'uploadData'])
type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()
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
      { required: true, message: '必填项', trigger: ['blur'] },
      { validator: validateSiteExcel, trigger: ['blur'] }
    ]
  }
})
const saveSiteStr = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      submitFn()
    } else {
      console.log('error submit!')
      return false
    }
  })
  
}
const submitFn = () => {
  // 关闭当前模态框
  emit('uploadData', handleData.value)
  state.ruleForm.site_list = ''
  emit('update:visible', false)
}
</script>
