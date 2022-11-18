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
          label="广告主系列名称:"
          prop="adv_series_name"
        >
          <el-input
            v-model.trim="state.ruleForm.adv_series_name"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="广告主名称:"
          prop="adv_name"
        >
          <el-select
            v-model="state.ruleForm.adv_id"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.advertiser"
              :key="item.adv_id"
              :label="item.name"
              :value="item.adv_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="描述:"
          prop="descs"
        >
          <el-input
            v-model.trim="state.ruleForm.descs"
            class="form-one"
            placeholder=""
            type="textarea"
          >
          </el-input>
        </el-form-item>
      </div>
      <split-button title="目标与预算"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="营销目标:"
          prop="marbet_target"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.marbet_target">
            <template v-for="item in state.options.marbet_target">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="广告类型:"
          prop="adv_series_type"
        >
          <el-select
            v-model="state.ruleForm.adv_series_type"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.adv_series_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="广告日预算（美元）:"
          prop="adv_series_budget"
        >
          <el-input
            v-model.trim="state.ruleForm.adv_series_budget"
            class="form-one"
            placeholder=""
            type="number"
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
import { ApiAdSeriesCreate, ApiGetAdSeriesOne, ApiAdSeriesEdit } from '@/api/dsp-adcontrol'
import { ApiGetAdvertiserList } from '@/api/dsp-advertiser'
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
import _, { isArguments } from 'lodash'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { useDspStore } from '@/store/dsp'


const topsearchData: any = useDspStore().topsearch
let {adv, date} = topsearchData
const {
  adv_type, 
  ind_cla,
  third_party,
  return_mode,
  time_zone
} = optionsSetting

const { getRouterData, getCommonCountryList, goNewUrl } = useUtils()
let { proxy }: any = getCurrentInstance()

const message = {
  required: '此项必填'
}

let type: any = ref('create')

type ruleFormType =  {
  id: number | undefined
  adv_id: string
  adv_series_name: string
  descs: string
  // 1：再营销；2：拉新
  marbet_target: number
  // 1：动态商品促销；2：固定链接推广
  adv_series_type: number
  // 广告系列预算
  adv_series_budget: number | undefined
  // 1开2关
  status: number
  is_del: number
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  adv_id: adv,
  adv_series_name: '',
  descs: '',
  // 营销目标
  marbet_target: 1,
  // 广告类型
  adv_series_type: 1,
  // 广告日预算
  adv_series_budget: void 0,
  status: 1,
  is_del: 0
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
    adv_series_name: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']}
    ],
    adv_id: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    descs: [
      {validator: validatorStrLenValue, max: 200, trigger: ['blur', 'change']}
    ],
    adv_series_type: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    adv_series_budget: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
  },
  options: {
    adv_type,
    // 广告类型
    adv_series_type: [
      {value: 1, label: '动态商品促销'},
      {value: 2, label: '固定链接推广'},
    ],
    // 营销目标
    marbet_target: [
      {value: 1, label: '再营销'},
      {value: 2, label: '拉新'},
    ],
    advertiser: [
      {
        adv_id: '',
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
const numberKeyArr = ['id', 'adv_series_type', 'adv_series_budget']

// 数组转换为字符串
const arrayKeyArr = []

const setDataFn = async (id) => {
  // 获取单个
  const res = await ApiGetAdSeriesOne(id)
  const {data: result} = res
  state.ruleForm = {
    ...state.ruleForm,
    ...result
  }
  console.log(state.ruleForm)
}

const submitFn = async () => {
  let baseData = toRaw(state.ruleForm)
  let ajaxData: any = baseData
  // 先删除为空的字段
  ajaxData = handleAjaxDataDelNo2KeyFn(ajaxData)
  ajaxData = handleAjaxNumberKeyFn(ajaxData, numberKeyArr)
  // ajaxData = handleAjaxArrayKeyFn(ajaxData, arrayKeyArr)
  console.log(ajaxData)
  // return false
  if (type.value === 'create') {
    delete ajaxData.id
    const res = await ApiAdSeriesCreate(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
  if (type.value === 'edit') {
    const res = await ApiAdSeriesEdit(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
}

const cancelFn = () => {
  let url = '/adcontrol/adseries/list'
  goNewUrl({
    url: url
  })
}

const getConfig = async () => {
  Promise.all([
    ApiGetAdvertiserList({
      limit: 10000,
      page: 1
    })
  ]).then(data => {
    console.log(data)
    let advertiserData = data[0]
    state.options.advertiser = advertiserData.data.data
  })
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
<style scoped>
.avatar-uploader .avatar {
  width: 50px;
  height: 50px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 50px;
  height: 50px;
  text-align: center;
}
</style>
