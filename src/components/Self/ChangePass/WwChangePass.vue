<template>
  <div class="pass-container">
    <el-form ref="ruleFormPass" :model="formData" :rules="rules" label-width="150px" label-position="left">
      <el-form-item v-if="isChange" label="旧密码" prop="oldPass" autocomplete="off">
        <el-input v-model="formData.oldPass" placeholder="" type="password" />
      </el-form-item>
      <el-form-item label="新密码" prop="pass" autocomplete="off">
        <el-input v-model="formData.pass" placeholder="" type="password" />
      </el-form-item>
      <el-form-item label="再次输入" prop="checkPass" autocomplete="off">
        <el-input v-model="formData.checkPass" placeholder="" type="password" />
      </el-form-item>
    </el-form>
    <div style="text-align: right">
      <el-button v-if="isDialog" type="danger" @click="cancelFun">退出</el-button>
      <el-button type="primary" @click="confirmFun('ruleFormPass')">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePass',
  props: {
    isChange: {
      type: Boolean,
      require: true
    },
    isDialog: {
      type: Boolean,
      require: true
    }
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.formData.checkPass !== '') {
          this.$refs.ruleFormPass.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        oldPass: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        oldPass: [{ required: this.isChange, message: '必填', trigger: 'blur' }],
        pass: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validatePass, min: 3 }
        ],
        checkPass: [
          { required: true, message: '必填', trigger: 'blur' },
          { validator: validatePass2, min: 3 }
        ]
      }
    }
  },
  mounted() {
    this.$refs['ruleFormPass'].clearValidate()
  },
  methods: {
    cancelFun() {
      this.$emit('wwpass-cancel', this.formData)
    },
    handleSubmitFn() {
      this.$emit('wwpass-confirm', this.formData)
    },
    // 提交模态框
    confirmFun(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
          this.handleSubmitFn()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
