<template>
  <!-- form -->
  <el-form enctype="multipart/form-data" ref='ruleForm' :rules='data.rules' :model='data.ruleForm' label-width="240px" label-position="right">
    <div class='content-con flex column'>
      <!-- offer_id -->
      <el-form-item label="Offer ID:" prop="offer_id" v-if='data.type === "2"'>
        <div class='flex flex-start form-one radio-box'>
          <span v-text='data.ruleForm.offer_id'></span>
        </div>
      </el-form-item>
      <!-- channel -->
      <el-form-item label="Channel:" prop="channel">
        <el-select filterable class='form-one' v-model="data.ruleForm.channel" clearable placeholder="">
          <el-option
            v-for="item in data.options.channel"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- copy_offer -->
      <!-- <el-form-item label="Copy Offer:" prop="copy_offer">
        <el-input class='form-one copy-btn search-input' placeholder="" v-model.trim="data.ruleForm.copy_offer">
          <el-button type="primary" slot="append" icon="el-icon-search" @click='copyFun'></el-button>
        </el-input>
      </el-form-item> -->
      <!-- attribute_provider -->
      <el-form-item label="Attribute Provider:" prop="attribute_provider">
        <el-select filterable class='form-one' v-model="data.ruleForm.attribute_provider" clearable placeholder="">
          <el-option
            v-for="item in data.options.attribute_provider"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- title -->
      <el-form-item label="Offer Title:" prop="title">
        <el-input class='form-one' type='text' v-model.trim="data.ruleForm.title" placeholder=''></el-input>
      </el-form-item>
      <!-- tracking_link -->
      <!-- 此处需要去除空格和制表符 -->
      <el-form-item class="mb-30" label="Traking Link:" prop="tracking_link">
        <el-input class='form-one' type="textarea" v-model.trim="data.ruleForm.tracking_link" 
        :autosize="{ minRows: 8, maxRows: 80}"
        placeholder=''></el-input>
      </el-form-item>
      <!-- pkg_name -->
      <el-form-item label="Package Name:" prop="pkg_name">
        <el-input class='form-one' type='text' v-model.trim="data.ruleForm.pkg_name" placeholder=''></el-input>
      </el-form-item>
      <!-- conversion_flow_type -->
      <el-form-item label="Conversion Flow:" prop="conversion_flow">
        <div class='form-one flex jc-start'>
          <el-radio v-model="data.ruleForm.conversion_flow" label="1">CPI</el-radio>
          <el-radio v-model="data.ruleForm.conversion_flow" label="2">CPA</el-radio>
        </div>
      </el-form-item>
      <!-- conversion_flow -->
      <el-form-item label="Event Name:" prop="event_name" v-if="data.ruleForm.conversion_flow === '2'">
        <el-input class='form-one' type='text' v-model.trim="data.ruleForm.event_name" placeholder=''></el-input>
      </el-form-item>
      <!-- payout -->
      <el-form-item label="Payout($):" prop="payout">
        <el-input class='form-one' type='text' v-model.trim="data.ruleForm.payout" placeholder=''></el-input>
      </el-form-item>
      <!-- platform -->
      <el-form-item label="Select Platform:" prop="platform">
        <el-select filterable class='form-one' v-model="data.ruleForm.platform" clearable placeholder="">
          <el-option
            v-for="item in data.options.platform"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- country -->
      <el-form-item label="Targeting Countries:" prop="country">
        <el-select filterable class='form-one' v-model="data.ruleForm.country" clearable placeholder="">
          <el-option
            v-for="item in data.options.country"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- max_clk_num -->
      <el-form-item label="Click Limitation(w):" prop="max_clk_num">
        <el-input class='form-one' type='text' v-model.trim="data.ruleForm.max_clk_num" placeholder=''></el-input>
      </el-form-item>
      <!-- Site Click Limitation -->
      <el-form-item label="Site Click Limitation:" prop="site_clk_limit">
        <el-input class='form-one' type='text' v-model.trim="data.ruleForm.site_clk_limit" placeholder=''></el-input>
      </el-form-item>
      <!-- start_hour -->
      <el-form-item label="Start Hour:" prop="start_hour">
        <el-select filterable class='form-one' v-model="data.ruleForm.start_hour" placeholder="">
          <el-option
            v-for="item in data.options.time"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- end_hour -->
      <el-form-item label="End Hour:" prop="end_hour">
        <el-select filterable class='form-one' v-model="data.ruleForm.end_hour" placeholder="">
          <el-option
            v-for="item in data.options.time"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- site_install_limitation-->
      <!-- <el-form-item label="Site Install Limitation:" prop="site_install_limitation">
        <el-select filterable class='form-one' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">
          <el-option
            v-for="item in 6"
            :key="item"
            :label="item - 1"
            :value="item - 1">
          </el-option>
        </el-select>
      </el-form-item> -->
      <!-- Device Cutoff -->
      <el-form-item label="Device Cutoff:" prop="cutoff_start">
        <div class="flex ai-center">
          %<span v-text="data.ruleForm.cutoff_start"></span>
          <span>-</span>
          %<span v-text="data.ruleForm.cutoff_end"></span>
          （<span>设备数:</span>
            <span v-text="handleDeviceNum"></span>）
        </div>
        <div class='flex flex-start form-one p10 pt-0 pb-0'>
          <el-slider class="w100" v-model="cutoff" range :step="5" :show-stops="true" show-input :min="0" :max="100"> </el-slider>
        </div>
      </el-form-item>
      <!-- diy_siteid -->
      <el-form-item label="Diy SiteID:" prop="site">
        <div class='flex jc-start form-one'>
          <el-button class='cp icon ml-10' type="primary" icon="el-icon-setting" circle @click='editDiySiteFun'></el-button>
        </div>
      </el-form-item>
      <!-- site_id -->
      <el-form-item label="Site ID:" prop="site_id">
        <div class='flex form-one flex-start radio-box'>
          <el-radio v-model="data.ruleForm.site_id" label="1">Slot_ID</el-radio>
          <el-radio v-model="data.ruleForm.site_id" label="2">Update(Hours)</el-radio>
          <el-select filterable class='form-one ml-10' v-model="data.ruleForm.hour" clearable placeholder=""
          :disabled = "data.ruleForm.site_id !== '2'"
          >
            <el-option
              v-for="item in data.options.site_id"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </el-form-item>
      <!-- clk_id -->
      <el-form-item label="Click ID:" prop="clk_id">
        <div class='flex jc-start form-one flex-start radio-box'>
          <el-radio v-model="data.ruleForm.clk_id" label="1">Real</el-radio>
          <el-radio v-model="data.ruleForm.clk_id" label="2">Virtual</el-radio>
        </div>
      </el-form-item>
      <!-- site_clk_id -->
      <!-- <el-form-item label="Site Click ID:" prop="site_clk_id">
        <div class='flex flex-start form-one flex-start radio-box'>
          <el-radio v-model="data.ruleForm.site_clk_id" label="1">ON</el-radio>
          <el-radio v-model="data.ruleForm.site_clk_id" label="2">OFF</el-radio>
        </div>
      </el-form-item> -->
      <!-- category -->
      <!-- <el-form-item label="Category:" prop="category_id">
        <el-select filterable class='form-one' v-model="data.ruleForm.category_id" clearable placeholder="">
          <el-option
            v-for="(value, key) in handleOptionsCategory"
            :key="key"
            :label="value"
            :value="key">
          </el-option>
        </el-select>
      </el-form-item> -->
      <!-- note -->
      <el-form-item label="Note:" prop="note">
        <el-input class='form-one' type="textarea" v-model.trim="data.ruleForm.note" 
        :autosize="{ minRows: 8, maxRows: 80}"
        placeholder=''></el-input>
      </el-form-item>
    </div>
  </el-form>
  <!-- form -->
  <!-- footer -->
  <div class='w100 flex'>
    <el-button type="primary" @click='saveFun'>Save</el-button>
  </div>
  <!-- footer -->
  <el-dialog
    title="diy_siteid"
    v-model="data.dialogVisibleSite"
    >
    <site
      :msg="data.siteData"
      @kk="saveSite"
    ></site>
  </el-dialog>
</template>
<script lang="ts" setup>
import { getCurrentInstance, reactive, watch, watchEffect, onMounted, ref, computed } from 'vue'
import { ApiOperationOffer, ApiGetOfferData, ApiGetConfig, ApiGetDeviceCount } from '@/api/buzz'
import _ from 'lodash'
import site from './site'
import { messageFun } from '@/utils/message'
let { proxy }: any = getCurrentInstance()
import {useRouter } from 'vue-router'
import { DataAnalysis } from '@element-plus/icons'
const router = useRouter()
const message = {
  required: '此项必填'
}
let validatorPkgName = (rule: any, value: any, callback: (arg0: Error | undefined) => void) => {
  if (data.ruleForm.attribute_provider === 'AppsFlyer') {
    if (data.ruleForm.tracking_link.includes(data.ruleForm.pkg_name)) {
      callback(undefined)
    } else {
      callback(new Error('Attribute Provider:为Appsflyer时Package Name的值必须包含在Traking Link中'))
    }
  } else {
    callback(undefined)
  }
}
let validatorTrackingLink = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  let reg = new RegExp('\\s+', 'g')
  let reg1 = /^http/
  if (reg.test(value)) {
    callback(new Error('链接中有空格'))
  } else {
    if (reg1.test(value)) {
      if (data.ruleForm.attribute_provider === 'AppsFlyer') {
        if (value.includes(data.ruleForm.pkg_name)) {
          callback(undefined)
        } else {
          callback(new Error('Attribute Provider:为Appsflyer时Package Name的值必须包含在Traking Link中'))
        }
      } else {
        callback(undefined)
      }
    } else {
      callback(new Error('请以http开头'))
    }
  }
  callback(undefined)
}
let validatorDevice = (rule: any, value: any, callback: (arg0: Error | undefined) => void) => {
  callback(undefined)
}
let validatorSite = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value) {
    if (value === '1') {
      callback(undefined)
    } else {
      if (data.ruleForm.hour) {
        callback(undefined)
      } else {
        callback(new Error('请选择具体数值'))
      }
    }
  } else {
    callback(new Error(message.required))
  }
  
}
let validatorConversionFlow = (rule: any, value: any, callback: (arg0: Error | undefined) => void) => {
  if (data.ruleForm.conversion_flow === '1') {
    callback(undefined)
  } else {
    if (value) {
      callback(undefined)
    } else {
      callback(new Error(message.required))
    }
  }
}
let validatorStartHour = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value !== '') {
    if (data.ruleForm.end_hour === '') {
      callback(new Error(message.required))
    } else {
      callback(undefined)
    }
  }
}
let validatorEndHour = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value !== '') {
    if (data.ruleForm.start_hour === '') {
      callback(new Error(message.required))
    } else {
      callback(undefined)
    }
  }
}
// 设备数
let deviceNum = ref(0)
// cutoff滑块
let cutoff = ref([0, 100])
let data: any = reactive({
  dialogVisible: false,
  dialogVisibleSite: false,
  search: {
    id: '',
    baseDeviceSelect: {},
    deviceData: {
      all: [],
      select: [],
      count: 0,
    }
  },
  type: '1',
  params: '',
  loading: true,
  options: {
    channel: [],
    attribute_provider: [
      'AppsFlyer',
      'Branch',
      'Adjust',
      'Singular',
      'AppMetrica'
    ],
    time: [-1, ...[...new Array(24)].map((ele, index) => index)],
    platform: [
      {value: '1', label: 'Android'},
      {value: '2', label: 'iOS'},
    ],
    country: [],
    site_id: [
      '0.2', '0.4', '0.6', '1', '2', '4', '8', '24', '72', '168'
    ],
    category: [],
    devices: []
  },
  ruleForm: {
    type: '',
    id: '',
    operation_type: '',
    offer_id: '',
    channel: '',
    copy_offer: '',
    attribute_provider: 'AppsFlyer',
    title: '',
    // 过滤空格，制表符
    tracking_link: '',
    pkg_name: '',
    conversion_flow: '',
    event_name: '',
    payout: '',
    platform: '',
    country: '',
    max_clk_num: '',
    site_clk_limit: '0',
    site_install_limitation: '0',
    start_hour: '-1',
    end_hour: '-1',
    device: [],
    cutoff_start: '',
    cutoff_end: '',
    diy_siteid: [],
    site_id: '',
    hour: '',
    clk_id: '',
    site_clk_id: '',
    // category_id: '',
    note: ''
  },
  rules: {
    channel: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    attribute_provider: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    title: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    tracking_link: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorTrackingLink }
    ],
    pkg_name: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorPkgName }
    ],
    conversion_flow: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    event_name: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorConversionFlow }
    ],
    payout: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    platform: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    country: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    max_clk_num: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    device: [
      { required: true, validator: validatorDevice, trigger: ['blur', 'change'] }
    ],
    site_id: [
      { required: true, validator: validatorSite, trigger: ['blur', 'change'] }
    ],
    clk_id: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    start_hour: [
      { required: false, validator: validatorStartHour, trigger: ['blur', 'change'] }
    ],
    end_hour: [
      { required: false, validator: validatorEndHour, trigger: ['blur', 'change'] }
    ],
    cutoff_start: [
      { required: true, trigger: ['blur', 'change'] }
    ],
    cutoff_end: [
      { required: true, trigger: ['blur', 'change'] }
    ],
    // site_clk_id: [
    //   { required: true, message: message.required, trigger: ['blur', 'change'] }
    // ],
    // category_id: [
    //   { required: true, message: message.required, trigger: ['blur', 'change'] }
    // ],
  },
  siteData: []
})

// methods
const editDiySiteFun = () => {
  data.dialogVisibleSite = true
  const siteData = data.ruleForm['diy_siteid'] ? data.ruleForm['diy_siteid'] : []
  data.siteData = siteData
}
const saveFun = () => {
  submitForm('ruleForm')
}

const submitForm = (formName: string) => {
  proxy.$refs[formName].validate((valid: boolean) => {
    if (valid) {
      submitFormFun()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

const submitFormFun = async () => {
  console.log('submit')
  const res = await ApiOperationOffer(data.ruleForm)
  if (messageFun(res)) {
    proxy.$router.push({ path: '/adnetwork/buzz'})
  }
}

interface siteType {
  diy_siteid: string
  weight: string
}

const saveSite = (arr: Array<siteType>) => {
  data.ruleForm.diy_siteid = arr
  data.dialogVisibleSite = false
}
const setCutoff = (newVal: Array<number>) => {
  data.ruleForm.cutoff_start = (newVal[0] / 100).toString()
  data.ruleForm.cutoff_end = (newVal[1] / 100).toString()
}
watch(cutoff, (newVal, oldVal) => {
	// console.log(newVal, oldVal)
  setCutoff(newVal)
  
}, { immediate: true })
const getConfig = async () => {
  const res = await ApiGetConfig()
  const { data: configData } = res
  data.options.channel = Object.values(configData.channel)
  data.options.country = Object.values(configData.country)
  return '获取配置成功'
}
const handleDeviceCount = async () => {
  console.log('get device num')
  const pkgName = data.ruleForm.pkg_name
  const country = data.ruleForm.country
  const platform = data.ruleForm.platform
  const ajaxData = {
    pkg_name: pkgName,
    country,
    platform
  }
  const num = await getDeviceCount(ajaxData)

  deviceNum.value = num
}
const handleDeviceNum = computed(() => {
  const num = deviceNum.value
  const cutoff_start = data.ruleForm.cutoff_start
  const cutoff_end = data.ruleForm.cutoff_end
  const count = (Number(cutoff_end) - Number(cutoff_start)) * Number(num)
  return count.toFixed(0)
})
const getDeviceCount = async (ajaxData: any) => {
  const res = await ApiGetDeviceCount(ajaxData)
  const { data: result } = res
  if (result.length !== 0) {
    return result[0].device_num
  } else {
    return 0
  }
}

watchEffect(() => {
  handleDeviceCount()
})

const handleCopyOffer = (result: any, options : any) => {
  // console.log(Object.getOwnPropertyDescriptors(result))
  // 处理复制到的offer
  let resData: any = {}
  if (options.type === '2') {
    resData.id = result['id']
    resData.offer_id = result['offer_id']
  }
  resData = {
    ...result,
    ...options
  }
  let diy_siteid = (result['diy_siteid'] === null || result['diy_siteid'] === '') ? [] : result['diy_siteid']
  data.siteData = diy_siteid
  return resData
}

const getOfferData = async () => {
  const id = router.currentRoute.value.params.id
  const ajaxData = {
    id
  }
  const res = await ApiGetOfferData(ajaxData)
  const { data: result } = res
  data.ruleForm = handleCopyOffer(result[0], {
    type: data.ruleForm.type,
    isCopy: false
  })
  cutoff.value = [Number(data.ruleForm.cutoff_start) * 100, Number(data.ruleForm.cutoff_end) * 100]
}
onMounted(() => {
  getConfig()
  const name = router.currentRoute.value.name
  if (name === 'create') {
    data.ruleForm.operation_type = '1'
    data.ruleForm.type = '1'
  }
  // 如果是修改，获取当前id的值
  if (name === 'edit') {
    data.ruleForm.operation_type = '2'
    data.ruleForm.type = '2'
    getOfferData()
  }
})
</script>