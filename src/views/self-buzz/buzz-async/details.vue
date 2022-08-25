<template>
  <div>
    <!-- form -->
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="data.rules"
      :model="data.ruleForm"
      label-width="240px"
      label-position="right"
    >
      <div class="content-con flex column">
        <!-- offer_id -->
        <el-form-item
          label="Offer ID:"
          prop="offer_id"
        >
          <div class="flex jc-start form-one radio-box">
            <span v-text="data.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <!-- channel -->
        <el-form-item
          label="Channel:"
          prop="channel"
        >
          <el-select
            v-model="data.ruleForm.channel"
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
        <!-- copy_offer -->
        <el-form-item
          label="Copy Offer:"
          prop="copy_offer"
        >
          <el-input
            v-model.trim="data.ruleForm.copy_offer"
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
        <!-- attribute_provider -->
        <el-form-item
          label="Attribute Provider:"
          prop="attribute_provider"
        >
          <el-select
            v-model="data.ruleForm.attribute_provider"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in data.options.attribute_provider"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- title -->
        <el-form-item
          label="Offer Title:"
          prop="title"
        >
          <el-input
            v-model.trim="data.ruleForm.title"
            class="form-one"
            type="text"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- tracking_link -->
        <!-- 此处需要去除空格和制表符 -->
        <el-form-item
          class="mb-30"
          label="Traking Link:"
          prop="tracking_link"
        >
          <el-input
            v-model.trim="data.ruleForm.tracking_link"
            class="form-one"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 80 }"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- pid -->
        <el-form-item
          label="Pid:"
          prop="pid"
        >
          <div class="form-one flex jc-start">
            <span>{{ handlePid }}</span>
            <!-- <span>{{data.ruleForm.pid}}</span> -->
          </div>
        </el-form-item>
        <!-- pkg_name -->
        <el-form-item
          label="Package Name:"
          prop="pkg_name"
        >
          <el-input
            v-model.trim="data.ruleForm.pkg_name"
            class="form-one"
            type="text"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- conversion_flow_type -->
        <el-form-item
          label="Conversion Flow:"
          prop="conversion_flow"
        >
          <div class="form-one flex jc-start">
            <el-radio
              v-model="data.ruleForm.conversion_flow"
              :label="1"
            >
              CPI
            </el-radio>
            <el-radio
              v-model="data.ruleForm.conversion_flow"
              :label="2"
            >
              CPA
            </el-radio>
          </div>
        </el-form-item>
        <!-- conversion_flow -->
        <el-form-item
          v-if="data.ruleForm.conversion_flow === 2"
          label="Event Name:"
          prop="event_name"
        >
          <el-input
            v-model.trim="data.ruleForm.event_name"
            class="form-one"
            type="text"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- payout -->
        <el-form-item
          label="Payout($):"
          prop="payout"
        >
          <el-input
            v-model.trim="data.ruleForm.payout"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- platform -->
        <el-form-item
          label="Select Platform:"
          prop="platform"
        >
          <el-select
            v-model="data.ruleForm.platform"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in data.options.platform"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- country -->
        <el-form-item
          label="Targeting Countries:"
          prop="country"
        >
          <el-select
            v-model="data.ruleForm.country"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in data.options.country"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- max_clk_num -->
        <el-form-item
          label="Click Limitation:"
          prop="max_clk_num"
        >
          <el-input
            v-model.trim="data.ruleForm.max_clk_num"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- Site Click Limitation -->
        <el-form-item
          label="Site Click Limitation:"
          prop="site_clk_limit"
        >
          <el-input
            v-model.trim="data.ruleForm.site_clk_limit"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- start_hour -->
        <el-form-item
          label="Start Hour:"
          prop="start_hour"
        >
          <el-select
            v-model="data.ruleForm.start_hour"
            filterable
            class="form-one"
            placeholder=""
          >
            <el-option
              v-for="item in data.options.time"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- end_hour -->
        <el-form-item
          label="End Hour:"
          prop="end_hour"
        >
          <el-select
            v-model="data.ruleForm.end_hour"
            filterable
            class="form-one"
            placeholder=""
          >
            <el-option
              v-for="item in data.options.time"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
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
        <!-- Select Device -->
        <el-form-item
          label="Select Device:"
          prop="device"
        >
          <div class="flex jc-start form-one">
            <el-button
              class="cp ml-10"
              type="primary"
              icon="Setting"
              circle
              @click="editDeviceFun"
            ></el-button>
            <!-- <span class="ml-10" v-text='countDevice'></span> -->
          </div>
        </el-form-item>
        <!-- Device Cutoff -->
        <!-- <el-form-item label="Device Cutoff:" prop="cutoff_start">
          <div class="flex ai-center">
            <span v-text="data.ruleForm.cutoff_start * 100"></span>
            %
            <span>-</span>
            <span v-text="data.ruleForm.cutoff_end * 100"></span>
            % （
            <span>总设备数:</span>
            <span v-text="handleDeviceNum.all"></span>
            ） （
            <span>选中设备数:</span>
            <span v-text="handleDeviceNum.judge"></span>
            ）
          </div>
          <div class="flex jc-start form-one p10 pt-0 pb-0">
            <el-slider
              class="w100"
              v-model="cutoff"
              range
              :step="5"
              :show-stops="true"
              show-input
              :min="0"
              :max="100"
            ></el-slider>
          </div>
        </el-form-item> -->
        <!-- diy_siteid -->
        <el-form-item
          label="Diy SiteID:"
          prop="site"
        >
          <div class="flex jc-start form-one">
            <el-button
              class="cp ml-10"
              icon="Tools"
              circle
              @click="editDiySiteFun"
            ></el-button>
          </div>
        </el-form-item>
        <!-- site_id -->
        <el-form-item
          label="Site ID:"
          prop="site_id"
        >
          <div class="flex form-one jc-start radio-box">
            <el-radio
              v-model="data.ruleForm.site_id"
              :label="1"
            >
              Slot_ID
            </el-radio>
            <el-radio
              v-model="data.ruleForm.site_id"
              :label="2"
            >
              Update(Hours)
            </el-radio>
            <el-select
              v-model="data.ruleForm.hour"
              filterable
              class="form-one ml-10"
              clearable
              placeholder=""
              :disabled="data.ruleForm.site_id !== 2"
            >
              <el-option
                v-for="item in data.options.site_id"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </div>
        </el-form-item>
        <!-- clk_id -->
        <el-form-item
          label="Click ID:"
          prop="clk_id"
        >
          <div class="flex jc-start form-one jc-start radio-box">
            <el-radio
              v-model="data.ruleForm.clk_id"
              :label="1"
            >
              Real
            </el-radio>
            <el-radio
              v-model="data.ruleForm.clk_id"
              :label="2"
            >
              Virtual
            </el-radio>
          </div>
        </el-form-item>
        <!-- site_clk_id -->
        <!-- <el-form-item label="Site Click ID:" prop="site_clk_id">
          <div class='flex jc-start form-one jc-start radio-box'>
            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>
            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>
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
        <el-form-item
          label="Note:"
          prop="note"
        >
          <el-input
            v-model.trim="data.ruleForm.note"
            class="form-one"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 80 }"
            placeholder=""
          ></el-input>
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
      <Device
        v-if="data.dialogVisibleDevice"
        v-model:all="bus.cacheDevice.all"
        v-model:select="bus.cacheDevice.select"
        @kk="saveDevice"
      ></Device>
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
    <!-- site -->
    <el-dialog
      v-model="data.dialogVisibleSite"
      title="diy_siteid"
      width="90%"
    >
      <site
        :msg="data.siteData"
        @kk="saveSite"
      ></site>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup :name="name.value">
import { getCurrentInstance, reactive, watch, watchEffect, onMounted, ref, computed, nextTick } from 'vue'
import {
  ApiOperationOfferCreate,
  ApiOperationOfferEdit,
  ApiGetOfferData,
  ApiGetCopyOfferData,
  ApiGetConfig,
  ApiGetDeviceCount,
  ApiGetOfferDevice
} from '@/api/oldbuzz'
import _ from 'lodash'
import site from './site'
import { handleAjaxDataObjectFn } from '@/utils/new-format'
import { messageFun } from '@/utils/message'
import { ElMessage } from 'element-plus'
// import { useRouter } from 'vue-router'
import Device from './device.vue'
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
  } else if (data.ruleForm.attribute_provider === 'Adjust') {
    if (value.includes('install_callback') || value.includes('event_callback')) {
      callback(new Error('链接里不可以包含install_callback和event_callback'))
    } else {
      callback(undefined)
    }
  }
  callback(undefined)
}
let validatorDevice = (rule: any, value: any, callback: (arg0: Error | undefined) => void) => {
  callback(undefined)
}
let validatorSite = (rule: any, value: number, callback: (arg0: Error | undefined) => void) => {
  if (value) {
    if (value.toString() === '1') {
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
    attribute_provider: ['AppsFlyer', 'Branch', 'Adjust', 'Singular', 'AppMetrica', 'Lazada', 'Other'],
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
    campaign_id: '',
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
    // proxy.$router.push({ path: '/buzz/buzz-async' })
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
    }
  }
  if (ap === 'Adjust') {
    const arrObj = new URL(url)
    let pathname = arrObj.pathname
    let pathnameArr: any = pathname.split('/')
    pid = pathnameArr.findLast(ele => ele)
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
onMounted(() => {
  getConfig()
  name.value = router.currentRoute.value.name
  console.log(name.value)
  if (name.value === 'buzz-async-create') {
    data.ruleForm.operation_type = '1'
    data.ruleForm.type = '1'
  }
  // 如果是修改，获取当前id的值
  if (name.value === 'buzz-async-edit') {
    data.ruleForm.operation_type = '2'
    data.ruleForm.type = '2'
    const id = router.currentRoute.value.params.id
    getOfferData(id)
  }
})
</script>
