<template>
  <div v-loading="loading">
    <!-- form -->
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="state.rules"
      :model="state.ruleForm"
      label-width="240px"
      label-position="right"
    >
      <div class="content-con flex column">
        <!-- Offer -->
        <el-form-item
          label="Offer:"
          prop="offer"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-text="state.ruleForm.offer_id"></span>
          </div>
        </el-form-item>
        <!-- Adv Offer -->
        <el-form-item
          label="Adv Offer:"
          prop="adv_offer"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.search.adv_offer"
              placeholder="Please input"
              class="input-with-select"
              :disabled="type === 'edit'"
            >
              <template
                v-if="type === 'create'"
                #append
              >
                <el-button
                  type="primary"
                  icon="Search"
                  @click="searchAdvOffer"
                ></el-button>
              </template>
            </el-input>
          </div>
        </el-form-item>
        <!-- Channel -->
        <el-form-item
          label="Channel:"
          prop="channel"
        >
          <el-select
            v-model="state.ruleForm.channel"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.channel"
              :key="item.id"
              :label="item.short_name"
              :value="item.short_name"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- Channel Type -->
        <el-form-item
          label="Channel Type:"
          prop="channel_type"
        >
          <el-radio-group
            v-model="state.ruleForm.channel_type"
            class="form-one"
          >
            <el-radio :label="1">
              BUZZ
            </el-radio>
            <el-radio :label="2">
              SDK
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- Adv Status -->
        <el-form-item
          label="Adv Status:"
          prop="adv_status"
        >
          <div class="flex jc-start ai-center form-one">
            <span v-if="state.ruleForm.adv_status === 1">开</span>
            <span v-if="state.ruleForm.adv_status === 2">关</span>
          </div>
        </el-form-item>
        <!-- conversion_flow -->
        <el-form-item
          label="Conversion Flow:"
          prop="conversion_flow"
        >
          <el-select
            v-model="state.ruleForm.conversion_flow"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.conversion_flow"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- Status -->
        <el-form-item
          label="Status:"
          prop="status"
        >
          <div class="flex jc-start ai-center form-one">
            <el-switch
              v-model="state.ruleForm.status"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <!-- Offer Title -->
        <el-form-item
          label="Offer Title:"
          prop="title"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.title"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Package Name -->
        <el-form-item
          label="Package Name:"
          prop="pkg"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.pkg"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Attribute Provider -->
        <el-form-item
          label="Attribute Provider:"
          prop="attribute_provider"
        >
          <el-select
            v-model="state.ruleForm.attribute_provider"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.attribute_provider"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- Pid -->
        <el-form-item
          label="Pid:"
          prop="pid"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.pid"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Platform -->
        <el-form-item
          label="Platform:"
          prop="platform"
        >
          <el-select
            v-model="state.ruleForm.platform"
            filterable
            class="form-one"
            placeholder=""
          >
            <el-option
              v-for="item in state.options.platform"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- Country -->
        <el-form-item
          label="Country:"
          prop="country"
        >
          <el-select
            v-model="state.ruleForm.country"
            filterable
            class="form-one"
            multiple
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.country"
              :key="item.id"
              :label="item.short_name + '-' + item.zh_cn"
              :value="item.short_name"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- Revenue -->
        <el-form-item
          label="Revenue:"
          prop="revenue"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.revenue"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Manage Traffic -->
        <el-form-item
          label="Manage Traffic:"
          prop="traffic"
        >
          <div class="form-one">
            <Traffic
              ref="traffic"
              v-model:list="state.ruleForm.traffic"
              :offer="state.ruleForm.offer_id"
              @kk="saveTraffic"
            ></Traffic>
          </div>
        </el-form-item>
        <!-- Adv Tracking Link -->
        <el-form-item
          label="Adv Tracking Link:"
          prop="adv_tracking_link"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.adv_tracking_link"
              :rows="3"
              type="textarea"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Target CVR -->
        <el-form-item
          label="Target CVR:"
          prop="target_cvr"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.target_cvr"
              type="number"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- CVR Status -->
        <el-form-item
          label="CVR Status:"
          prop="cvr_status"
        >
          <div class="flex jc-start ai-center form-one">
            <el-switch
              v-model="state.ruleForm.cvr_status"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <!-- Site Type -->
        <el-form-item
          label="Site Type:"
          prop="site_type"
        >
          <el-select
            v-model="state.ruleForm.site_type"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.site_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- Site Value -->
        <el-form-item
          label="Site Value:"
          prop="site_value"
          :rules="judgeSiteType ? state.rules.site_value : state.rules.no_required"
        >
          <div class="form-one">
            <div class="flex ai-center jc-start mb-10">
              <el-button
                class="cp mr-10"
                icon="Tools"
                circle
                @click="editDiySiteFun"
              ></el-button>
              <span>
                {{state.ruleForm.site_value.split(',').length}}
              </span>
            </div>
            <div>
              <el-input
                v-model="state.ruleForm.site_value"
                type="textarea"
                autosize
                :rows="4"
                placeholder="Please input"
                class="input-with-select siteValue"
              />
            </div>
          </div>
        </el-form-item>
        <!-- S2S Async -->
        <el-form-item
          label="S2S Async:"
          prop="is_s2s"
        >
          <div class="flex jc-start ai-center form-one">
            <el-switch
              v-model="state.ruleForm.is_s2s"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <!-- S2S Tracking Link -->
        <el-form-item
          label="S2S Tracking Link:"
          prop="s2s_tracking_link"
          :rules="state.ruleForm.is_s2s === 1 ? state.rules.s2s_tracking_link : state.rules.no_required"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.s2s_tracking_link"
              :rows="2"
              type="textarea"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Preview URL -->
        <el-form-item
          label="Preview URL:"
          prop="app_url"
          :rules="state.ruleForm.is_s2s === 1 ? state.rules.app_url : state.rules.no_required"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.app_url"
              :rows="2"
              type="textarea"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Description -->
        <el-form-item
          label="Description:"
          prop="description"
        >
          <div class="flex jc-start ai-center form-one">
            <el-input
              v-model="state.ruleForm.description"
              :rows="2"
              type="textarea"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- end -->
      </div>
    </el-form>
    <!-- form -->
    <!-- footer -->
    <div class="w100 flex">
      <el-button
        type="primary"
        @click.prevent="saveFun"
      >
        Save
      </el-button>
    </div>
    <!-- dialog -->
    <el-dialog
      v-model="dialogVisibleSite"
      title="site"
      width="90%"
    >
      <site
        :msg="state.ruleForm"
        @updateData="updateData"
        v-model:visible="dialogVisibleSite"
      ></site>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import _ from 'lodash'
import { useRouter } from 'vue-router'
import {
  ApiGetOfferCreateId,
  ApiJudgeOffer,
  ApiGetAdvOfferForDump,
  ApiGetAdvOfferForBuzzList,
  ApiGetChannelList,
  ApiGetCountryList,
  ApiCreateOffer,
  ApiEditOffer,
  ApietOfferForOne
} from '@/api/fenix'
import Traffic from './traffic'
import { ElMessage } from 'element-plus'
import { messageFun } from '@/utils/message'
import site from './site.vue'

let { proxy }: any = getCurrentInstance()
const router = useRouter()
const message = {
  required: '此项必填'
}
interface trafficType {
  pub: string
  slotid: string
  payout: string
  cap_daily: string
  pub_status: string
}
const judgeTraffic = (data: Array<any>) => {
  let flag = true
  data.map((ele) => {
    for (const key in ele) {
      if (Object.prototype.hasOwnProperty.call(ele, key)) {
        const element = ele[key]
        if ((element === '' || element === undefined) && element !== 0) {
          flag = false
          break
        }
      }
    }
  })
  return flag
}
const validatorSiteValue = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value) {
    let len = value.split(',').length
    
    if (len > 1000) {
      callback(new Error('site value 的值不可大于1000个'))
    } else {
      callback(undefined)
    }
  } else {
    callback(undefined)
  }
}
let validatorTraffic = (rule: any, value: Array<trafficType>, callback: (arg0: Error | undefined) => void) => {
  if (value.length !== 0) {
    if (!judgeTraffic(value)) {
      callback(new Error('不允许有空值'))
    } else {
      callback(undefined)
    }
  } else {
    callback(undefined)
  }
}
let validatorCountry = (rule: any, value: Array<string>, callback: (arg0: Error | undefined) => void) => {
  if (value.length !== 0) {
    if (value.length > 1) {
      callback(new Error('只能填选一个国家'))
    } else {
      callback(undefined)
    }
  } else {
    callback(new Error(message.required))
  }
}

interface dataType {
  id: number | undefined
  offer_id: string
  adv_offer: string
  create_type: number
  channel: string
  channel_type: number
  adv_status: number
  conversion_flow: number | undefined
  status: number
  title: string
  pkg: string
  attribute_provider: string
  pid: string
  platform: number
  country: Array<string>
  revenue: number | undefined
  traffic: Array<trafficType>
  adtype: number
  update_date: string
  adv_tracking_link: string
  target_cvr: number | undefined
  cvr_status: number
  is_s2s: number
  s2s_tracking_link: string
  app_url: string
  site_type: string
  site_value: string
  description: string
  fenix_site: any
}
const defaultRuleForm: dataType = {
  id: undefined,
  offer_id: '',
  adv_offer: '',
  create_type: 1,
  channel: '',
  channel_type: 1,
  adv_status: 1,
  conversion_flow: undefined,
  status: 1,
  title: '',
  pkg: '',
  attribute_provider: '',
  pid: '',
  platform: 1,
  country: [],
  revenue: undefined,
  traffic: [],
  adtype: 38,
  update_date: '',
  adv_tracking_link: '',
  target_cvr: undefined,
  cvr_status: 2,
  is_s2s: 2,
  s2s_tracking_link: '',
  app_url: '',
  site_type: 'rule_value',
  site_value: '',
  description: '',
  fenix_site: {}
}
let loading = ref(false)
const state = reactive({
  options: {
    channel: [
      {
        id: '',
        short_name: ''
      }
    ],
    country: [
      {
        id: '',
        short_name: '',
        zh_cn: ''
      }
    ],
    conversion_flow: [
      {
        value: 1,
        label: 'CPI'
      },
      {
        value: 2,
        label: 'CPA'
      },
      {
        value: 9,
        label: 'SDK'
      }
    ],
    platform: [
      {
        value: 1,
        label: 'Android'
      },
      {
        value: 2,
        label: 'iOS'
      }
    ],
    site_type: [
      {
        value: 'rule_sdkindex',
        label: '匹配SDK自定义'
      },
      {
        value: 'rule_pubredirect',
        label: '透传渠道ID'
      },
      {
        value: 'rule_slotid',
        label: '渠道slotid'
      },
      {
        value: 'rule_value',
        label: '固定值'
      }
    ],
    attribute_provider: [
      {
        value: 'AppsFlyer',
        label: 'AppsFlyer'
      },
      {
        value: 'Branch',
        label: 'Branch'
      },
      {
        value: 'Adjust',
        label: 'Adjust'
      },
      {
        value: 'Singular',
        label: 'Singular'
      },
      {
        value: 'AppMetrica',
        label: 'AppMetrica'
      }
    ]
  },
  rules: {
    no_required: [{ required: false }],
    channel: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    channel_type: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    status: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    title: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    pkg: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    platform: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    country: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorCountry, trigger: ['blur', 'change'] }
    ],
    revenue: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    traffic: [{ required: false, validator: validatorTraffic, trigger: ['blur', 'change'] }],
    adv_tracking_link: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    site_type: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    site_value: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorSiteValue, trigger: ['blur', 'change'] },
      ],
    is_s2s: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    s2s_tracking_link: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    app_url: [{ required: true, message: message.required, trigger: ['blur', 'change'] }]
  },
  ruleForm: defaultRuleForm,
  search: {
    // adv_offer: 'bz600009'
    adv_offer: ''
  }
})
let name: any = ref('')
let id: any = ref('')
let type: any = ref('')
let dialogVisibleSite: any = ref(false)
const handleTraffic = (arr: Array<any>) => {
  const finalArr: Array<any> = []
  arr.map((ele: any) => {
    let obj: any = { ...ele }
    if (ele.payout) {
      obj['payout'] = Number(ele.payout)
    }
    if (ele.cap_daily) {
      obj['cap_daily'] = Number(ele.cap_daily)
    }
    finalArr.push(obj)
    return ele
  })
  return finalArr
}
const submitFn = async () => {
  loading.value = true
  const baseAjax = _.cloneDeep(state.ruleForm)
  let ajaxData: any = {
    ...baseAjax
  }
  // ajaxData.conversion_flow = getConversionFlowValueToLabel(baseAjax.conversion_flow)
  if (baseAjax.conversion_flow) {
    ajaxData.conversion_flow = baseAjax.conversion_flow
  }
  ajaxData.country = baseAjax.country[0]
  ajaxData.revenue = parseFloat(ajaxData.revenue)
  ajaxData.target_cvr = parseFloat(ajaxData.target_cvr)
  if (ajaxData.fenix_site.day_limit) {
    ajaxData.fenix_site.day_limit = parseFloat(ajaxData.fenix_site.day_limit)
  }
  if (ajaxData.fenix_site.day_limit_value) {
    ajaxData.fenix_site.day_limit_value = parseFloat(ajaxData.fenix_site.day_limit_value)
  } else {
    delete ajaxData.fenix_site.day_limit_value
  }
  if (baseAjax.traffic.length !== 0) {
    const finalTraffic = handleTraffic(baseAjax.traffic)
    ajaxData.traffic = JSON.stringify(finalTraffic)
  } else {
    delete ajaxData.traffic
  }
  // console.log(ajaxData)
  // return ajaxData
  let res: any
  // 创建
  if (type.value === 'create') {
    res = await ApiCreateOffer(ajaxData)
  }
  // 修改
  if (type.value === 'edit') {
    res = await ApiEditOffer(ajaxData)
  }
  loading.value = false
  if (messageFun(res)) {
    // 回到list页面
    // proxy.$router.push({ path: '/fenix/offer/list' })
    window.close()
  }
}
const editDiySiteFun = () => {
  dialogVisibleSite.value = true
}
const getConversionFlowValueToLabel = (n: any) => {
  if (n) {
    const obj = state.options.conversion_flow.find((ele) => {
      return ele.value === n
    })
    return obj?.label
  }
}
const getConversionFlowLabelToValue = (s: any) => {
  if (s) {
    const obj = state.options.conversion_flow.find((ele) => {
      return ele.label === s
    })
    return obj?.value
  }
}
const saveFun = () => {
  proxy.$refs['ruleForm'].validate((valid: boolean) => {
    console.log(valid)
    if (valid) {
      console.log('submit!')
      submitFn()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const getOfferIdFn = async () => {
  const res = await ApiGetOfferCreateId()
  if (res.code === 200) {
    const { offer_id } = res
    state.ruleForm.offer_id = offer_id.toString()
  } else {
    getOfferIdFn()
  }
}
const getConfig = async () => {
  const res = await Promise.all([getChannelList(), getCountryList()])
  return res
}
const getChannelList = async () => {
  const { data: channelList } = await ApiGetChannelList()
  state.options.channel = channelList
  return channelList
}
const getCountryList = async () => {
  const { data: countryList } = await ApiGetCountryList()
  state.options.country = countryList
  return countryList
}
let busOffer: any = reactive({
  ruleForm: defaultRuleForm,
})
onMounted(async () => {
  init()
})
const init = async () => {
  name.value = router.currentRoute.value.name
  id.value = router.currentRoute.value.params.id
  if (name.value === 'fenix-offer-create') {
    // 进去若是新建会生成offer_id
    getOfferIdFn()
    type.value = 'create'
  }
  if (name.value === 'fenix-offer-edit') {
    id.value = router.currentRoute.value.params.id
    type.value = 'edit'
    getOfferForOne()
  }
  await getConfig()
}
const getOfferForOne = async () => {
  const { data: offerData } = await ApietOfferForOne(id.value)
  state.ruleForm = {
    ...offerData
  }
  state.ruleForm.country = [offerData.country]
  state.search.adv_offer = offerData.adv_offer
  state.ruleForm.traffic = offerData.traffic ? JSON.parse(offerData.traffic) : []
  busOffer = toRaw(state.ruleForm)
}
const judgeSiteType = computed(() => {
  if (state.ruleForm.site_type === 'rule_value') {
    return true
  }
  return false
})
watch(
  () => state.ruleForm.traffic,
  (newVal, oldVal) => {
    // trafficList.value = newVal
  },
  {
    immediate: true,
    deep: true
  }
)
watch(
  () => state.ruleForm.adv_offer,
  (newVal, oldVal) => {
    // 导入是2，自建是1
    if (newVal) {
      state.ruleForm.create_type = 2
    } else {
      state.ruleForm.create_type = 1
    }
  },
  {
    immediate: true,
    deep: true
  }
)
// !!! 会陷入死循环，舍弃此用法
const saveTraffic = (data: any) => {
  console.log(data)
  // state.ruleForm.traffic = _.cloneDeep(data)
  // proxy.$refs['ruleForm'].validateField('traffic')
  // return true
}
const searchAdvOffer = async () => {
  if (type.value === 'edit') return false
  console.log('get adv offer')
  state.ruleForm.adv_offer = state.search.adv_offer
  const str = state.ruleForm.adv_offer
  if (!str) return false
  // ! 首先判断是否已存在当前搜索的offer
  // let judgeAjaxData: any = {
  //   adv_offer: str,
  //   channel: state.ruleForm.channel
  // }
  // if (state.ruleForm.country.length !== 0) {
  //   judgeAjaxData.country = state.ruleForm.country[0]
  // }
  // const { data: offerCode } = await ApiJudgeOffer(judgeAjaxData)
  // if (offerCode !== 0 ) {
  //   ElMessage.error('当前offer已存在')
  //   return false
  // }
  // 判断是否包含下划线
  const ajaxData = {
    adv_offer: str,
    platform: state.ruleForm.platform
  }
  if (str && str.includes('_')) {
    console.log('get offer for dump')
    state.ruleForm.channel_type = 2
    state.ruleForm.adtype = 39
    const res = await ApiGetAdvOfferForDump(ajaxData)
    const { data: offerData } = res
    if (res.status === 200) {
      state.ruleForm.adv_status = 1
      setDumpOffer(offerData)
    } else {
      console.log('没有dump offer')
      state.ruleForm.adv_status = 2
    }
  } else {
    console.log('get offer for buzz')
    state.ruleForm.channel_type = 1
    state.ruleForm.adtype = 38
    const { data: offerData } = await ApiGetAdvOfferForBuzzList(ajaxData)
    console.log(offerData)
    state.ruleForm.adv_status = offerData.status
    setBuzzOffer(offerData)
  }
}
const setBuzzOffer = (data: any) => {
  state.ruleForm.channel = data.channel
  state.ruleForm.attribute_provider = data.attribute_provider
  state.ruleForm.conversion_flow = data.conversion_flow
  state.ruleForm.title = data.title
  state.ruleForm.pkg = data.pkg_name
  state.ruleForm.pid = data.pid
  state.ruleForm.platform = data.platform
  state.ruleForm.revenue = data.payout
  state.ruleForm.adv_tracking_link = data.tracking_link
  setCountry(data.country)
}
const setDumpOffer = (data: any) => {
  state.ruleForm.pkg = data.app_pkg_name
  state.ruleForm.channel = data.channel
  state.ruleForm.country = data.country
  const platform = state.options.platform.find((ele) => {
    return ele.label === data.platform
  })?.value
  state.ruleForm.platform = platform ? platform : 1
  state.ruleForm.revenue = data.revenue
  state.ruleForm.title = data.title
  state.ruleForm.adv_tracking_link = data.tracking_link
  state.ruleForm.conversion_flow = 9
}
const setCountry = (data: any) => {
  if (Array.isArray(data)) {
    state.ruleForm.country = data
  } else {
    state.ruleForm.country = [data]
  }
}
const updateData = (data) => {
  console.log('site_value', data.site_value.length)
  state.ruleForm.site_value = data.site_value
  state.ruleForm.fenix_site = toRaw(data)
}
</script>
<style scoped lang="scss">
.siteValue{
  height: auto;
}
</style>
