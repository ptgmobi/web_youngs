<template>
  <div class="container">
    <!-- form -->
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="rules"
      :model="ruleForm"
      label-width="240px"
      label-position="right"
    >
      <div class="flex jc-start content-li-title">
        <div class="num-circle">1</div>
        <h5>Offer Basic Info</h5>
      </div>
      <div class="content-con flex column">
        <!-- id -->
        <el-form-item
          label="ID:"
          prop="offer_id"
        >
          <div class="flex jc-start form-one radio-box">
            <span v-text="ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <!-- channel -->
        <el-form-item
          label="Channel:"
          prop="channel"
        >
          <el-select
            v-model="ruleForm.channel"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in options.channel"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- copy_offer -->
        <el-form-item
          label="Copy Offer:"
          prop="copy_offer"
        >
          <el-input
            v-model.trim="ruleForm.copy_offer"
            class="form-one copy-btn search-input"
            placeholder=""
          >
            <template #append>
              <el-button
                slot="append"
                type="primary"
                icon="Search"
                @click="copyFun"
              ></el-button>
            </template>
          </el-input>
        </el-form-item>
        <!-- offer_open_type -->
        <el-form-item
          label="Open Type:"
          prop="offer_open_type"
        >
          <el-select
            v-model="ruleForm.offer_open_type"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in data.options.channel"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>











        
      </div>
    </el-form>
    <!-- form -->
    <!-- footer -->
    <div class="w100 flex">
      <el-button
        type="primary"
        @click="saveFun"
      >
        Save
      </el-button>
    </div>
    <!-- footer -->
    <!-- dialog -->
    <!-- device -->
    <el-dialog
      v-model="data.dialogVisibleDevice"
      title="Device"
      width="90%"
    >
      123
      <span
        slot="footer"
        class="dialog-footer"
      >
        <!-- <el-button @click="cancleDevice">取 消</el-button> -->
        <el-button
          type="primary"
          @click="setDevice"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup :name="name.value">
import _ from 'lodash'
import { handleAjaxDataObjectFn } from '@/utils/new-format'
import { messageFun } from '@/utils/message'
import { ElMessage } from 'element-plus'
// import { useRouter } from 'vue-router'
let { proxy }: any = getCurrentInstance()
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
let validatorSpace = (rule, value, callback) => {
  let reg = new RegExp('\\s+', 'g')
  if (reg.test(value)) {
    callback(new Error('链接中有空格'))
  } else {
    callback(undefined)
  }
  callback(undefined)
}
let validatorHttp = (rule, value, callback) => {
  let reg = /^http/
  if (!reg.test(value)) {
    callback(new Error('必须为有效链接'))
  } else {
    callback(undefined)
  }
  callback(undefined)
}
let validatorStr = (rule, value, callback) => {
  if (data.ruleForm.attribute_provider === 'AppsFlyer') {
    const arr = ['af_sub_siteid', 'af_installpostback']
    arr.map(ele => {
      if (value.includes(ele)) {
        callback(new Error(`链接有错误，不能包含${ele}`))
      }
    })
  }
  callback(undefined)
}
let validatorDevice = (rule: any, value: any, callback: (arg0: Error | undefined) => void) => {
  callback(undefined)
}
let validatorSite = (rule: any, value: number, callback: (arg0: Error | undefined) => void) => {
  if (value) {
    if (value === 1) {
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

// tudo 

let ruleForm = reactive({
  offer_id: '',
  channel: '',
  copy_offer: '',
  offer_open_type: ''


})

let rules = reactive({
  channel: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  offer_open_type: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
})

let options = reactive({
  channel: [],
  attribute_provider: ['AppsFlyer', 'Branch', 'Adjust', 'Singular', 'AppMetrica'],
  time: [-1, ...[...new Array(24)].map((ele, index) => index)],
  platform: [
    { value: 1, label: 'Android' },
    { value: 2, label: 'iOS' }
  ],
  country: [],
  site_id: ['0.2', '0.4', '0.6', '1', '2', '4', '8', '24', '72', '168'],
  category: [],
  devices: []
})
















let bus: any = reactive({
  offer: {},
  index: null,
  cacheDevice: {}
})
let name: any = ref('')
// 设备数
let deviceNum = ref(0)
// cutoff滑块
let cutoff = ref([0, 100])
let data: any = reactive({
  dialogVisibleDevice: false,
  dialogVisibleSite: false,
  search: {
    id: '',
    baseDeviceSelect: {},
    deviceData: {
      all: [],
      select: [],
      count: 0
    }
  },
  type: '1',
  params: '',
  loading: true,
  options: {
    channel: [],
    attribute_provider: ['AppsFlyer', 'Branch', 'Adjust', 'Singular', 'AppMetrica'],
    time: [-1, ...[...new Array(24)].map((ele, index) => index)],
    platform: [
      { value: 1, label: 'Android' },
      { value: 2, label: 'iOS' }
    ],
    country: [],
    site_id: ['0.2', '0.4', '0.6', '1', '2', '4', '8', '24', '72', '168'],
    category: [],
    devices: []
  },
  ruleForm: {
    type: '',
    id: '',
    offer_id: undefined,
    operation_type: '',
    channel: '',
    copy_offer: '',
    attribute_provider: 'AppsFlyer',
    title: '',
    // 过滤空格，制表符
    tracking_link: '',
    pid: '',
    pkg_name: '',
    conversion_flow: '',
    event_name: '',
    payout: undefined,
    platform: '',
    country: '',
    max_clk_num: undefined,
    site_clk_limit: undefined,
    site_install_limitation: undefined,
    start_hour: '-1',
    end_hour: '-1',
    device: [],
    cutoff_start: undefined,
    cutoff_end: undefined,
    diy_siteid: '',
    site_id: '',
    hour: undefined,
    clk_id: '',
    site_clk_id: '',
    // category_id: '',
    note: ''
  },
  rules: {
    channel: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    attribute_provider: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    title: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    tracking_link: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorSpace },
      { validator: validatorHttp },
      { validator: validatorStr },
      { validator: validatorPkgName}
    ],
    pkg_name: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorPkgName }
    ],
    conversion_flow: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    event_name: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorConversionFlow }
    ],
    payout: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    platform: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    country: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    max_clk_num: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    device: [{ required: true, validator: validatorDevice, trigger: ['blur', 'change'] }],
    site_id: [{ required: true, validator: validatorSite, trigger: ['blur', 'change'] }],
    clk_id: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    start_hour: [{ required: false, validator: validatorStartHour, trigger: ['blur', 'change'] }],
    end_hour: [{ required: false, validator: validatorEndHour, trigger: ['blur', 'change'] }],
    cutoff_start: [{ required: true, trigger: ['blur', 'change'] }],
    cutoff_end: [{ required: true, trigger: ['blur', 'change'] }]
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
  const siteData = data.ruleForm['diy_siteid']
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
  let res: any
  console.log(data.ruleForm)
  let ajaxData: any = {
    ...data.ruleForm
  }
  ajaxData['clk_id'] = parseFloat(ajaxData['clk_id'])
  ajaxData['conversion_flow'] = parseFloat(ajaxData['conversion_flow'])
  ajaxData['cutoff_end'] = parseFloat(ajaxData['cutoff_end'])
  ajaxData['cutoff_start'] = parseFloat(ajaxData['cutoff_start'])
  ajaxData['end_hour'] = parseFloat(ajaxData['end_hour'])
  ajaxData['start_hour'] = parseFloat(ajaxData['start_hour'])
  ajaxData['hour'] = parseFloat(ajaxData['hour'])
  ajaxData['max_clk_num'] = parseFloat(ajaxData['max_clk_num'])
  ajaxData['payout'] = parseFloat(ajaxData['payout'])
  ajaxData['platform'] = parseFloat(ajaxData['platform'])
  ajaxData['site_clk_id'] = parseFloat(ajaxData['site_clk_id'])
  ajaxData['site_clk_limit'] = parseFloat(ajaxData['site_clk_limit'])
  ajaxData['site_id'] = parseFloat(ajaxData['site_id'])
  ajaxData['site_install_limitation'] = parseFloat(ajaxData['site_install_limitation'])
  ajaxData['diy_siteid'] = JSON.stringify(ajaxData['diy_siteid'])
  ajaxData['device'] = JSON.stringify(ajaxData['device'])
  console.log(ajaxData)
  // return false
  // return ajaxData
  if (data.ruleForm.type === '1') {
    delete ajaxData['id']
    delete ajaxData['offer_id']
    res = await ApiOperationOfferCreate(ajaxData)
  }
  if (data.ruleForm.type === '2') {
    res = await ApiOperationOfferEdit(ajaxData)
  }
  if (messageFun(res)) {
    // proxy.$router.push({ path: '/buzz/old-buzz' })
    if (process.env.NODE_ENV !== 'serve-dev') {
      window.close()
    }
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

// 修改device数据
const saveDevice = (data) => {
  bus.cacheDevice.select = data
}
// 保存提交device数据
const setDevice = () => {
  data.ruleForm.device = bus.cacheDevice.select
  data.dialogVisibleDevice = false
}
const setCutoff = (newVal: Array<number>) => {
  data.ruleForm.cutoff_start = newVal[0] / 100
  data.ruleForm.cutoff_end = newVal[1] / 100
}
watch(
  cutoff,
  (newVal, oldVal) => {
    // console.log(newVal, oldVal)
    setCutoff(newVal)
  },
  { immediate: true }
)
const getConfig = async () => {
  const res = await ApiGetConfig()
  if (res) {
    const { data: configData } = res
    data.options.channel = Object.values(configData.channel)
    data.options.country = Object.values(configData.country)
    data.options.category = Object.values(configData.category)
    return '获取配置成功'
    
  }
  return '获取配置失败'
}
const handleDeviceCount = async (): Promise<void> => {
  console.log('get device num')
  const pkgName = data.ruleForm.pkg_name
  const country = data.ruleForm.country
  const platform = data.ruleForm.platform
  const ajaxData = {
    pkg_name: pkgName,
    country,
    platform
  }
  if (pkgName && country && platform) {
    console.log('获取设备数')
    // const num = await getDeviceCount(ajaxData)
    // deviceNum.value = num
  }
}
const handleDeviceNum = computed(() => {
  const num = deviceNum.value
  const cutoff_start = data.ruleForm.cutoff_start
  const cutoff_end = data.ruleForm.cutoff_end
  const res = {
    judge: ((Number(cutoff_end) - Number(cutoff_start)) * Number(num)).toFixed(0),
    all: Number(num).toFixed(0)
  }
  return res
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

const handleCopyOffer = (result: any, options: any) => {
  // console.log(Object.getOwnPropertyDescriptors(result))
  // 处理复制到的offer
  let resData: any = {}
  console.log(options.type)
  if (result['device']) {
    result.device = JSON.parse(result['device'])
  }
  if (result['diy_siteid']) {
    result.diy_siteid = JSON.parse(result['diy_siteid'])
  }
  if (options.type === '2') {
    resData.id = result['id']
    resData.offer_id = result['offer_id']
  }
  resData = {
    ...result,
    ...options
  }
  if (options.type === '1') {
    delete resData.id
    delete resData.offer_id
  }
  return resData
}
// copy offer
const getCopyOfferData = async (offer_id) => {
  const res = await ApiGetCopyOfferData({
    offer_id
  })
  const { data: result } = res
  const final_offer = handleCopyOffer(result, {
    type: data.ruleForm.type,
    isCopy: true
  })
  data.ruleForm = {
    ...data.ruleForm,
    ...final_offer
  }
}

// edit页面获取offer
const getOfferData = async (id) => {
  const res = await ApiGetOfferData(id)
  const { data: result } = res
  data.ruleForm = handleCopyOffer(result, {
    type: data.ruleForm.type,
    isCopy: false
  })
  bus.offer = result
  // ! 给滑动条赋值
  // ! cutoff.value = [Number(data.ruleForm.cutoff_start) * 100, Number(data.ruleForm.cutoff_end) * 100]
}
const handleEditDeviceFun = async () => {
  console.log('get device')
  const ajaxData = {
    id: data.ruleForm.id,
    platform: data.ruleForm.platform,
    country: data.ruleForm.country
  }
  const { data: deviceData } = await ApiGetOfferDevice(ajaxData)
  bus.cacheDevice.all = deviceData.all
}
const editDeviceFun = () => {
  // 先判断平台和国家
  if (data.ruleForm.platform && data.ruleForm.country) {
    // 模态框
    
    data.dialogVisibleDevice = true
    bus.cacheDevice.select = data.ruleForm.device
    handleEditDeviceFun()
  } else {
    // 给用户提示应该先选择平台和国家
    ElMessage.error('请提前选择平台和国家');
  }
}
const copyFun = () => {
  console.log('copy offer')
  const offer_id = data.ruleForm.copy_offer
  getCopyOfferData(offer_id)
}
const handlePid = computed(() => {
  const url = data.ruleForm.tracking_link
  const ap = data.ruleForm.attribute_provider
  let pid = ''
  if (ap === 'AppsFlyer') {
    const reg = /pid=([\s\S]*)_int/g
    // return reg.exec(url)
    const arr = [...url.matchAll(reg)]
    if (arr.length !== 0) {
      pid = arr[0][1]
      data.ruleForm.pid = pid
      return pid
    }
  }
  if (ap === 'Adjust') {
    const reg = /https:\/\/app.adjust.com\/([\s\S]*)\?/g
    // return reg.exec(url)
    const arr = [...url.matchAll(reg)]
    console.log(arr)
    if (arr.length !== 0) {
      pid = arr[0][1]
      data.ruleForm.pid = pid
      return pid
    }
  }
  data.ruleForm.pid = pid
  return pid
})
const countDevice = computed(() => {
  // data.search.deviceData.count
  let count = 0
  console.log(bus.cacheDevice)
  if (bus.cacheDevice.hasOwnProperty('all') && bus.cacheDevice.hasOwnProperty('select')) {
    let all = bus.cacheDevice.all
    let select = bus.cacheDevice.select
    if (all.length !== 0 && select.length !== 0) {
      all.forEach((ele) => {
        select.forEach((o) => {
          if (ele.source === o.source && ele.label === o.label) {
            count += parseInt(ele.device_count)
          }
        })
      })
    }
    // console.log(count)
    data.search.deviceData.count = count
  }
  return count ?? data.search.deviceData.count
})

const init = () => {
  console.log(router.currentRoute.value)
  name.value = router.currentRoute.value.query.type
  console.log(name.value)
  if (name.value === 'create') {
    data.ruleForm.operation_type = '1'
    data.ruleForm.type = '1'
  }
  // 如果是修改，获取当前id的值
  if (name.value === 'edit') {
    data.ruleForm.operation_type = '2'
    data.ruleForm.type = '2'
    const id = router.currentRoute.value.params.id
    getOfferData(id)
  }
}
onMounted(() => {
  
})
</script>
<style lang="scss">
.num-circle {
  width: 20px;
  height: 20px;
  color: #1a8eff;
  border: 2px solid #1a8eff;
  border-radius: 50%;
  text-align: center;
  line-height: 17px;
  margin-right: 20px;
}
.content-li-title{
  margin: 20px;
}
</style>
