<template>
  <div class="pass-container">
    <el-form
      ref="ruleFormPass"
      :model="formData"
      :rules="rules"
      label-width="150px"
      label-position="left"
    >
      <el-form-item
        v-if="isChange"
        label="旧密码"
        prop="oldPass"
        autocomplete="off"
      >
        <el-input
          v-model="formData.oldPass"
          placeholder=""
          type="password"
        />
      </el-form-item>
      <el-form-item
        label="新密码"
        prop="pass"
        autocomplete="off"
      >
        <el-input
          v-model="formData.pass"
          placeholder=""
          type="password"
        />
      </el-form-item>
      <el-form-item
        label="再次输入"
        prop="checkPass"
        autocomplete="off"
      >
        <el-input
          v-model="formData.checkPass"
          placeholder=""
          type="password"
        />
      </el-form-item>
    </el-form>
    <div style="text-align: right">
      <el-button
        v-if="isDialog"
        type="danger"
        @click="cancelFun"
      >
        退出
      </el-button>
      <el-button
        type="primary"
        @click="confirmFun('ruleFormPass')"
      >
        提交
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="ChangePass">
const emit = defineEmits(['wwpassCancel', 'wwpassConfirm'])
let { proxy }: any = getCurrentInstance()
const props = defineProps({
  isChange: {
    type: Boolean,
    require: true
  },
  isDialog: {
    type: Boolean,
    require: true
  }
})

let formData = reactive({
  oldPass: '',
  pass: '',
  checkPass: ''
})

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (formData.checkPass !== '') {
      proxy.$refs.ruleFormPass.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== formData.pass) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

let rules = reactive({
  oldPass: [{ required: props.isChange, message: '必填', trigger: 'blur' }],
  pass: [
    { required: true, message: '必填', trigger: 'blur' },
    { validator: validatePass, min: 3 }
  ],
  checkPass: [
    { required: true, message: '必填', trigger: 'blur' },
    { validator: validatePass2, min: 3 }
  ]
})

onMounted(() => {
  proxy.$refs['ruleFormPass'].clearValidate()
})

const cancelFun = () => {
  emit('wwpassCancel', formData)
}
const handleSubmitFn = () => {
  emit('wwpassConfirm', formData)
}
// 提交模态框
const confirmFun = (formName) => {
  proxy.$refs[formName].validate((valid) => {
    if (valid) {
      console.log('submit!')
      handleSubmitFn()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

</script>

<style lang="scss" scoped></style>
