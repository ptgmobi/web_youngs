<template>
  <div v-loading="loading">
    <!-- form -->
    <el-form enctype="multipart/form-data" ref='ruleForm' :rules='state.rules' :model='state.ruleForm' label-width="240px" label-position="right">
      <div class='content-con flex column'>
        <!-- Offer -->
        <el-form-item label="Offer:" prop="offer">
          <div class='flex jc-start ai-center form-one'>
            <span v-text='state.ruleForm.offer'></span>
          </div>
        </el-form-item>
        <!-- Adv Offer -->
        <el-form-item label="Adv Offer:" prop="adv_offer">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.adv_offer"
              placeholder="Please input"
              class="input-with-select"
            >
              <template #append>
                <el-button type="primary" icon="Search" @click="searchAdvOffer"></el-button>
              </template>
            </el-input>
          </div>
        </el-form-item>
        <!-- Channel -->
        <el-form-item label="Channel:" prop="channel">
          <el-select filterable class='form-one' v-model="state.ruleForm.channel" clearable placeholder="">
            <el-option
              v-for="item in state.options.channel"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Channel Type -->
        <el-form-item label="Channel Type:" prop="channel_type">
          <el-radio-group class='form-one' v-model="state.ruleForm.channel_type">
            <el-radio :label="1">BUZZ</el-radio>
            <el-radio :label="2">SDK</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- Adv Status -->
        <el-form-item label="Adv Status:" prop="adv_status">
          <div class='flex jc-start ai-center form-one'>
            <span v-if='state.ruleForm.adv_status === 1'>开</span>
            <span v-if='state.ruleForm.adv_status === 2'>关</span>
          </div>
        </el-form-item>
        <!-- conversion_flow -->
        <el-form-item label="Conversion Flow:" prop="conversion_flow">
          <el-select filterable class='form-one' v-model="state.ruleForm.conversion_flow" clearable placeholder="">
            <el-option
              v-for="item in state.options.conversion_flow"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Status -->
        <el-form-item label="Status:" prop="status">
          <div class='flex jc-start ai-center form-one'>
            <el-switch
              v-model="state.ruleForm.status"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <!-- Offer Title -->
        <el-form-item label="Offer Title:" prop="title">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.title"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Package Name -->
        <el-form-item label="Package Name:" prop="pkg">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.pkg"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Attribute Provider -->
        <el-form-item label="Attribute Provider:" prop="attribute_provider">
          <el-select filterable class='form-one' v-model="state.ruleForm.attribute_provider" clearable placeholder="">
            <el-option
              v-for="item in state.options.attribute_provider"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Pid -->
        <el-form-item label="Pid:" prop="pid">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.pid"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Platform -->
        <el-form-item label="Platform:" prop="platform">
          <el-select filterable class='form-one' v-model="state.ruleForm.platform" clearable placeholder="">
            <el-option
              v-for="item in state.options.platform"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Country -->
        <el-form-item label="Country:" prop="country">
          <el-select filterable class='form-one' v-model="state.ruleForm.country" multiple clearable placeholder="">
            <el-option
              v-for="item in state.options.country"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Revenue -->
        <el-form-item label="Revenue:" prop="revenue">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.revenue"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Manage Traffic -->
        <el-form-item label="Manage Traffic:" prop="traffic">
          <div class='form-one'>
            <traffic
              :list="state.ruleForm.traffic"
              @kk="saveTraffic"
            ></traffic>
          </div>
        </el-form-item>
        <!-- Adv Tracking Link -->
        <el-form-item label="Adv Tracking Link:" prop="adv_tracking_link">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              :rows="2"
              type="textarea"
              v-model="state.ruleForm.adv_tracking_link"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Target CVR -->
        <el-form-item label="Target CVR:" prop="target_cvr">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.target_cvr"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Site Type -->
        <el-form-item label="Site Type:" prop="site_type">
          <el-select filterable class='form-one' v-model="state.ruleForm.site_type" clearable placeholder="">
            <el-option
              v-for="item in state.options.site_type"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- Site Value -->
        <el-form-item label="Site Value:"
          prop="site_value"
          :rules="judgeSiteType ? state.rules.site_value : state.rules.no_required"
        >
          <div class='flex jc-start ai-center form-one'>
            <el-input
              v-model="state.ruleForm.site_value"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- S2S Async -->
        <el-form-item label="S2S Async:" prop="is_s2s">
          <div class='flex jc-start ai-center form-one'>
            <el-switch
              v-model="state.ruleForm.is_s2s"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <!-- S2S Tracking Link -->
        <el-form-item label="S2S Tracking Link:"
          prop="s2s_tracking_link"
          :rules="state.ruleForm.is_s2s === 1 ? state.rules.s2s_tracking_link : state.rules.no_required"
        >
          <div class='flex jc-start ai-center form-one'>
            <el-input
              :rows="2"
              type="textarea"
              v-model="state.ruleForm.s2s_tracking_link"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Preview URL -->
        <el-form-item label="Preview URL:"
          prop="app_url"
          :rules="state.ruleForm.is_s2s === 1 ? state.rules.app_url : state.rules.no_required"
        >
          <div class='flex jc-start ai-center form-one'>
            <el-input
              :rows="2"
              type="textarea"
              v-model="state.ruleForm.app_url"
              placeholder="Please input"
              class="input-with-select"
            />
          </div>
        </el-form-item>
        <!-- Description -->
        <el-form-item label="Description:" prop="description">
          <div class='flex jc-start ai-center form-one'>
            <el-input
              :rows="2"
              type="textarea"
              v-model="state.ruleForm.description"
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
    <div class='w100 flex'>
      <el-button type="primary" @click='saveFun'>Save</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, reactive, toRef, toRefs, watch, watchEffect, onMounted, ref, computed } from 'vue'
import _ from 'lodash'
import {useRouter } from 'vue-router'
import { ApiGetOfferCreateId, ApiJudgeOffer, ApiGetAdvOfferForDump, ApiGetAdvOfferForBuzzList } from '@/api/fenix'
import traffic from './traffic'
const router = useRouter()
const { proxy }: any = getCurrentInstance()
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
  data.map(ele => {
    for (const key in ele) {
      if (Object.prototype.hasOwnProperty.call(ele, key)) {
        const element = ele[key]
        if (element === '' || element === undefined) {
          flag = false
          break
        }
      }
    }
  })
  return flag
}
let validatorTraffic = (rule: any, value: Array<trafficType>, callback: (arg0: Error | undefined) => void) => {
  if (value.length !== 0) {
    if (!judgeTraffic(value)) {
      callback(new Error('不允许有空值'))
    } else {
      callback(undefined)
    }
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
  offer: number | undefined
  adv_offer: string
  create_type: number
  channel: string
  channel_type: number
  adv_status: number
  conversion_flow: string
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
  target_cvr: string
  cvr_status: number
  is_s2s: number
  s2s_tracking_link: string,
  app_url: string,
  site_type: string,
  site_value: string,
  description: string,
}
const defaultRuleForm: dataType = {
  id: undefined,
  offer: undefined,
  adv_offer: '',
  create_type: 1,
  channel: '',
  channel_type: 1,
  adv_status: 1,
  conversion_flow: '',
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
  target_cvr: '',
  cvr_status: 2,
  is_s2s: 2,
  s2s_tracking_link: '',
  app_url: '',
  site_type: 'rule_value',
  site_value: '',
  description: '',
}
let loading = ref(false)
const state = reactive({
  options: {
    channel: [],
    country: ['a', 'b', 'c'],
    conversion_flow: [
      {
        value: 'cpi',
        label: 'CPI'
      }, {
        value: 'cpa',
        label: 'CPA'
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
        value: 'rule_sdkcvrlist',
        label: '匹配SDK CVR'
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
        value: 'appsflyer',
        label: 'AppsFlyer'
      },
      {
        value: 'branch',
        label: 'Branch'
      },
      {
        value: 'adjust',
        label: 'Adjust'
      },
      {
        value: 'singular',
        label: 'Singular'
      },
      {
        value: 'appmetrica',
        label: 'AppMetrica'
      }
    ]
  },
  rules: {
    no_required: [
      { required: false}
    ],
    channel: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    channel_type: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    status: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    title: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    pkg: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    platform: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    country: [
      { required: true, message: message.required, trigger: ['blur', 'change'] },
      { validator: validatorCountry, trigger: ['blur', 'change'] }
    ],
    revenue: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    traffic: [
      { required: false, validator: validatorTraffic, trigger: ['blur', 'change'] }
    ],
    adv_tracking_link: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    site_type: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    site_value: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    is_s2s: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    s2s_tracking_link: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
    app_url: [
      { required: true, message: message.required, trigger: ['blur', 'change'] }
    ],
  },
  ruleForm: defaultRuleForm,
})
let name: any = ref('')
let id: any = ref('')
const saveFun = () => {
  proxy.$refs['ruleForm'].validate((valid: any) => {
    if (valid) {
      console.log('submit!')
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
    state.ruleForm.offer = offer_id
  } else {
    getOfferIdFn()
  }
}
onMounted(() => {
  name.value = router.currentRoute.value.name
  if (name.value === 'fenix-offer-create') {
    // 进去若是新建会生成offer_id
    getOfferIdFn()
  }
  if (name.value === 'fenix-offer-edit') {
    id.value = router.currentRoute.value.params.id
  }
})
const judgeSiteType = computed(() => {
  if (state.ruleForm.site_type === 'rule_value') {
    return true
  }
  return false
})
watch(() => state.ruleForm.traffic, (newVal, oldVal) => {
  // trafficList.value = newVal
}, {
  immediate: true,
  deep: true
})
const saveTraffic = (data: any) => {
  state.ruleForm.traffic = _.cloneDeep(data)
  return true
}
const searchAdvOffer = async () => {
  console.log('get adv offer')
  // 首先判断是否已存在当前搜索的offer
  await ApiJudgeOffer()
  // 判断是否包含下划线
  const str = state.ruleForm.adv_offer
  if (str && str.includes('_')) {
    console.log('get offer for dump')
    const res = await ApiGetAdvOfferForDump()
  } else {
    console.log('get offer for buzz')
    const res = await ApiGetAdvOfferForBuzzList()
  }
  state.ruleForm.country = ['a', 'c']
}
</script>