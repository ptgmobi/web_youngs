<template>
  <div>
    <!-- form -->
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="state.rules"
      :model="state.ruleForm"
      label-width="150px"
      label-position="right"
      class="flex column"
      :disabled="type === 'edit' && state.ruleForm.is_del === 2"
    >
      <split-button title="基础信息"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="名称:"
          prop="name"
        >
          <el-input
            v-model.trim="state.ruleForm.name"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="Email:"
          prop="email"
        >
          <el-input
            v-model.trim="state.ruleForm.email"
            class="form-one"
            placeholder=""
            :disabled="type === 'edit'"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="流量来源:"
          prop="flow_source"
        >
          <el-select
            v-model="state.ruleForm.flow_source"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.flow_source"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="描述:"
          prop="desc"
        >
          <el-input
            v-model.trim="state.ruleForm.desc"
            class="form-one"
            placeholder=""
            type="textarea"
          >
          </el-input>
        </el-form-item>
      </div>
      <split-button title="Offer信息"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="公司全称:"
          prop="company"
        >
          <el-input
            v-model.trim="state.ruleForm.company"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="Domain:"
          prop="domain"
        >
          <el-input
            v-model.trim="state.ruleForm.domain"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="国家/地区:"
          prop="country"
        >
          <el-select
            v-model="state.ruleForm.country"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.country"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="通信地址:"
          prop="address"
        >
          <el-input
            v-model.trim="state.ruleForm.address"
            class="form-one"
            placeholder=""
            type="textarea"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="电话:"
          prop="phone"
        >
          <el-input
            v-model.trim="state.ruleForm.phone"
            class="form-one"
            placeholder=""
            
          >
          </el-input>
        </el-form-item>
        <!-- skype -->
        <el-form-item
          class="self-el-form-item"
          label="Skype:"
          prop="skype"
        >
          <el-input
            v-model.trim="state.ruleForm.skype"
            class="form-one"
            placeholder=""
            
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="微信:"
          prop="wechat"
        >
          <el-input
            v-model.trim="state.ruleForm.wechat"
            class="form-one"
            placeholder=""
            
          >
          </el-input>
        </el-form-item>
      </div>
      <split-button title="追踪信息"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="流量类型:"
          prop="flow_type"
        >
          <el-checkbox-group v-model="state.ruleForm.flow_type">
            <el-checkbox
              v-for="item in state.options.flow_type"
              :label="item.value"
              name="type"
            >{{item.label}}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="广告样式:"
          prop="ad_type"
        >
          <el-checkbox-group v-model="state.ruleForm.ad_type">
            <el-checkbox
              v-for="item in state.options.ad_type"
              :label="item.value"
              name="type"
            >{{item.label}}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item
          label="流量所属地区:"
          prop="flow_region"
        >
          <el-select
            v-model="state.ruleForm.flow_region_type"
            filterable
            placeholder="请选择"
            class="form-one-left"
          >
            <el-option
              v-for="item in state.options.choice_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="state.ruleForm.flow_region"
            filterable
            clearable
            placeholder=""
            multiple
            class="form-one-right"
          >
            <el-option
              v-for="item in state.options.country"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="服务器所在地区:"
          prop="service_region"
        >
          <el-select
            v-model="state.ruleForm.service_region_type"
            filterable
            placeholder="请选择"
            class="form-one-left"
          >
            <el-option
              v-for="item in state.options.choice_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="state.ruleForm.service_region"
            filterable
            clearable
            placeholder=""
            multiple
            class="form-one-right"
          >
            <el-option
              v-for="item in state.options.country"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="竞价协议:"
          prop="bidding_agreement"
        >
          <el-select
            v-model="state.ruleForm.bidding_agreement"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.bidding_agreement"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="竞价类型:"
          prop="bidding_type"
        >
          <el-select
            v-model="state.ruleForm.bidding_type"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.bidding_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="交易货币:"
          prop="currency"
        >
          <el-select
            v-model="state.ruleForm.currency"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.currency"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <split-button title="数据回传"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="底价($):"
          prop="floor_price"
        >
          <el-input
            v-model.trim="state.ruleForm.floor_price"
            class="form-one"
            placeholder="不填表示不限制底价"
            type="number"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="最大QPS:"
          prop="max_qps"
        >
          <el-input
            v-model.trim="state.ruleForm.max_qps"
            class="form-one"
            placeholder="不填表示不限制QPS"
            type="number"
            step="1"
          >
          </el-input>
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
        确认
      </el-button>
      <el-button
        type="primary"
        @click="cancelFn"
      >
        取消
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import optionsSetting from '@/self-options-setting'
import { ApiAdvertiserCreate, ApiGetAdvertiserOne, ApiAdvertiserEdit } from '@/api/dsp-advertiser'
import { messageFun } from '@/utils/message'
import splitButton from '@/components/Self/SplitButton'
import useUtils from '@/hooks/self/useUtils'
import {
  handleAjaxDataDelNo2KeyFn,
  handleAjaxNumberKeyFn,
  handleAjaxArrayKeyFn,
  handleOneDataArrayFn,
  handleAjaxEmptyKeyFn
} from '@/utils/new-format'
import { selfJudgeStringLength, selfValidatorIsInteger } from '@/utils/validate.ts'
import validator from 'validator';
import _ from 'lodash'

const { flow_source, flow_type, ad_type, bidding_agreement, bidding_type, currency, status, choice_type, choice_type_region  } = optionsSetting
const { getRouterData, getCommonCountryList, goNewUrl } = useUtils()
let { proxy }: any = getCurrentInstance()

const message = {
  required: '此项必填'
}

let type: any = ref('create')

const defaultRuleForm: any = {
  id: '',
  name: '',
  email: '',
  flow_source: '',
  desc: '',
  company: '',
  domain: '',
  country: '',
  address: '',
  phone: '',
  skype: '',
  wechat: '',
  flow_type: ['1'],
  ad_type: ['1', '2', '3'],
  flow_region: '',
  flow_region_type: 1,
  service_region: '',
  service_region_type: 1,
  bidding_agreement: 2,
  bidding_type: 1,
  currency: 1,
  floor_price: '',
  max_qps: '',
  demand_limit: [],
  demand_limit_type: 1,
  bd: '',
  am: '',
  password: '',
  salt: '',
  status: '1',
  is_del: '1',
  create_date: '',
  update_date: '',
}

// selfJudgeStringLength
const validatorStrLenValue = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  const { max } = rule
  if (!selfJudgeStringLength(value, max)) {
    callback(new Error('值的长度不能大于${}'))
  } else {
    callback(undefined)
  }
}
const validatorEmail = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (!validator.isEmail(value)) {
    callback(new Error('必须为邮箱格式'))
  } else {
    callback(undefined)
  }
}

const validatorUrl = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value && !validator.isURL(value)) {
    callback(new Error('必须为网址格式'))
  } else {
    callback(undefined)
  }
}

const validatorMaxQps = (rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  if (value && !selfValidatorIsInteger(value)) {
    callback(new Error('必须为整数'))
  } else {
    callback(undefined)
  }
}

const state = reactive({
  ruleForm: defaultRuleForm,
  rules: {
    name: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']}
    ],
    email: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      {validator: validatorEmail, trigger: ['blur']}
    ],
    flow_source: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    desc: [
      {validator: validatorStrLenValue, max: 200, trigger: ['blur', 'change']}
    ],
    company: [
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']}
    ],
    domain: [
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']},
      {validator: validatorUrl, trigger: ['blur', 'change']},
    ],
    address: [
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']}
    ],
    phone: [
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']}
    ],
    skype: [
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']}
    ],
    wechat: [
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']}
    ],
    max_qps: [
      {validator: validatorMaxQps, trigger: ['blur', 'change']}
    ]
  },
  options: {
    flow_source,
    flow_type,
    ad_type,
    bidding_agreement,
    bidding_type,
    currency,
    status,
    choice_type,
    choice_type_region,
    country: [
      {
        id: '0',
        name: 'Unknown',
        short_name: 'UNKNOWN'
      }
    ],
    demand_limit: [
      {
        id: '0',
        name: ''
      }
    ]
  }
})

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

// 为数字的字段
const numberKeyArr = ['id', 'flow_source', 'country', 'flow_region_type', 'service_region_type', 'bidding_agreement', 'bidding_type', 'floor_price', 'max_qps', 'demand_limit_type', 'status', 'is_del', 'currency']

const arrayKeyArr = ['ad_type', 'flow_type', 'flow_region', 'service_region', 'demand_limit']

const arr_1 = [
  'flow_region_type', 'service_region_type', 'demand_limit_type'
]

const setDataFn = async (id) => {
  // 获取单个
  const res = await ApiGetAdvertiserOne(id)
  const {data: result} = res
  result.country = result.country ? result.country.toString() : ''
  state.ruleForm = handleOneDataArrayFn(result, arrayKeyArr)
  console.log(state.ruleForm)
}

const submitFn = async () => {
  let baseData = toRaw(state.ruleForm)
  let ajaxData: any = baseData
  // 先删除为空的字段
  ajaxData = handleAjaxDataDelNo2KeyFn(ajaxData)
  ajaxData = handleAjaxEmptyKeyFn(ajaxData, arr_1)
  ajaxData = handleAjaxNumberKeyFn(ajaxData, numberKeyArr)
  ajaxData = handleAjaxArrayKeyFn(ajaxData, arrayKeyArr)
  console.log(ajaxData)
  // return false
  if (type.value === 'create') {
    delete ajaxData.id
    const res = await ApiAdvertiserCreate(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
  if (type.value === 'edit') {
    const res = await ApiAdvertiserEdit(ajaxData.id, ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
}

const cancelFn = () => {
  let url = './list'
  goNewUrl({
    url: url
  })
}

const getConfig = async () => {
}

const init = () => {
  console.info('init')
  let { query, params } = getRouterData()
  type.value = query.type?.toString() ?? ''
  getConfig()
  if (type.value === 'create') {
    state.ruleForm = _.cloneDeep(defaultRuleForm)
  }
  if (type.value === 'edit') {
    const { id } = params
    setDataFn(id)
  }
}

onMounted(() => {
  init()
})

</script>
<style lang="scss">

</style>
