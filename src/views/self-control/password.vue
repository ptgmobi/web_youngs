<template>
  <el-form ref="ruleForm" :model="dialogData.data" :rules="dialogData.rules" label-width="150px" label-position="left">
    <!-- <el-form-item label="原密码" prop="oldPass">
      <el-input v-model="ruleForm.oldPass" type="password" autocomplete="off" />
    </el-form-item> -->
    <el-form-item label="新密码" prop="pass">
      <el-input ref="password" v-model="dialogData.data.pass" type="password" autocomplete="off" />
      <!-- <span class="show-pwd" @click="showPwd">
        <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
      </span> -->
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input ref="checkpassword" v-model="dialogData.data.checkPass" type="password" autocomplete="off" />
      <!-- <span class="show-pwd" @click="showPwd">
        <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
      </span> -->
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
export default {
  data() {
    const validatePass = (rule: any, value: string | any[], callback: (arg0: Error | undefined) => void) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        if (this.dialogData.data.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        if (value.length < 8) {
          callback(new Error('密码不小于8位'))
        }
        callback()
      }
    }
    const validatePass2 = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
      if (value === '') {
        callback(new Error('请再次输入新密码'))
      } else if (value !== this.dialogData.data.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 配置项
      passwordType: 'password',
      dialogData: {
        data: {
          email: '',
          username: '',
          rule: '',
          project: '',
          product: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          email: [{ required: true, message: '必填', trigger: ['change', 'blur'] }],
          oldPass: [{ required: true, message: '必填', trigger: 'blur' }],
          pass: [
            { required: true, message: '必填', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '必填', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    }
  },
  methods: {
    // 显示密码
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    }
  }
}
</script>
