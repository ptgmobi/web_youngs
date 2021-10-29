<template>
  <el-form enctype="multipart/form-data" ref='siteRuleForm' :rules='data.siteRules' :model='data.siteRuleForm' label-position="right">
    <el-form-item label="diy_siteid:" prop="site">
      <el-input class='w100' type='textarea' v-model="data.siteRuleForm.site" :rows="4" placeholder=''></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addSiteFn">添加</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="data.siteData">
    <el-table-column align="center" property="diy_siteid" label="diy_siteid"></el-table-column>
    <el-table-column align="center" property="weight" label="权重"></el-table-column>
    <el-table-column align="center" label="操作">
      <template #default="scope">
        <el-button type="danger" @click="deleteSite(scope.row, scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <span slot="footer" class="dialog-footer mt-10">
    <!-- <el-button @click="cancleDevice">取 消</el-button> -->
    <el-button type="primary" @click=deleteAllSite>清 空</el-button>
    <el-button type="primary" @click=saveSite>确 定</el-button>
  </span>
</template>
<script lang="ts" setup>
import { getCurrentInstance, reactive, watch, onMounted, defineEmits } from 'vue'
const props = defineProps({
  msg: {
    require: true,
    default: '',
    type: Array
  }
})
const message = {
  required: '此项必填'
}
let validateSiteExcel = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value !== '') {
    const flag = analysisExcelFn(value)
    console.log(flag)
    if (flag) {
      callback(undefined)
    } else {
      callback(new Error('格式错误！'))
    }
  } else {
    callback(new Error(message.required))
  }
}
// 验证excel
const analysisExcelFn = (str: string) => {
  // 此处解析复制的excel数据
  let reg = new RegExp(/\n+/)
  let reg1 = new RegExp(/\s+/)
  let reg2 = new RegExp(/[\S]+/)
  let arr = str.split(reg)
  let flag = true
  let newArr: { diy_siteid: any; weight: any }[] = []
  arr.forEach((ele: string, index: any) => {
    if (ele && reg2.test(ele)) {
      let arr = ele.trim().split(/\s+/)
      if (arr.length === 2) {
        let obj = {
          diy_siteid: arr[0],
          weight: arr[1]
        }
        newArr.push(obj)
      } else {
        flag = false
      }
    } else {
      flag = false
    }
  })
  if (flag) {
    return newArr
  }
  return []
}
let data = reactive({
  siteData: props.msg,
  siteRules: {
    site: [
      { required: true, validator: validateSiteExcel, trigger: 'blur' }
    ]
  },
  siteRuleForm: {
    site: ''
  }
})
const addSiteFn = () => {
  data.siteData = [...analysisExcelFn(data.siteRuleForm.site)]
}
const deleteSite = (row: any, index: number) => {
  data.siteData.splice(index, 1)
}
const deleteAllSite = () => {
  data.siteData = []
}
const emit = defineEmits(['kk', 'up'])
const saveSite = () => {
  emit('kk', data.siteData)
}
onMounted(() => {
  console.log(props.msg)
})
</script>