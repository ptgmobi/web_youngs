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
      <split-button title="基本信息"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="ID:"
          prop="id"
        >
          <span>{{state.ruleForm.id}}</span>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="广告主名称:"
          prop="ad_name"
        >
          <el-input
            v-model.trim="state.ruleForm.ad_name"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="广告主ID:"
          prop="ad_id"
        >
          <el-input
            v-model.trim="state.ruleForm.ad_id"
            class="form-one"
            placeholder=""
          >
          </el-input>
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
      <split-button title="广告主配置"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="强制流量占比(%):"
          prop="flow_rate"
        >
          <el-input
            v-model.trim="state.ruleForm.flow_rate"
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
  import { ApiAdvsettingCreate , ApiAdvsettingEdit, ApiGetAdvsettingData } from '@/api/tool'
import optionsSetting from '@/self-options-setting'
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
import validator from 'validator';
import { selfJudgeStringLength } from '@/utils/validate.ts'
import _ from 'lodash'
const { offer_source, flow_type, ad_type, bidding_agreement, bidding_type, currency, status, choice_type, choice_type_region, method,
    security,
} = optionsSetting
const { getRouterData, getCommonCountryList, goNewUrl } = useUtils()
let { proxy }: any = getCurrentInstance()

const message = {
  required: '此项必填'
}

let type: any = ref('create')

const defaultRuleForm: any = {
  id: '',
  ad_id: '',
  ad_name: '',
  desc: '',
  flow_rate: ''
}

const state = reactive({
  ruleForm: defaultRuleForm,
  rules: {
    ad_name: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    flow_rate: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
  },
  options: {}
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
const numberKeyArr = ['flow_rate']

const arrayKeyArr = []

const emptyArr = []

const setDataFn = async (id) => {
  console.log(id)
  // 获取单个
  const res = await ApiGetAdvsettingData(id)
  const {data: result} = res
  state.ruleForm = handleOneDataArrayFn(result, arrayKeyArr)
}

const submitFn = async () => {
  let baseData = toRaw(state.ruleForm)
  let ajaxData: any = baseData
  ajaxData = handleAjaxDataDelNo2KeyFn(ajaxData)
  ajaxData = handleAjaxNumberKeyFn(ajaxData, numberKeyArr)
  console.log(ajaxData)
  // return false
  // return false
  if (type.value === 'create') {
    delete ajaxData.id
    const res = await ApiAdvsettingCreate(ajaxData)
    if (messageFun(res)) {
      cancelFn()
    }
  }
  if (type.value === 'edit') {
    const res = await ApiAdvsettingEdit(ajaxData)
    if (messageFun(res)) {
      cancelFn()
    }
  }
}

const cancelFn = () => {
  let url = ''
  if (type.value === 'create') {
    url = './list'
  }
  if (type.value === 'edit') {
    url = '../list'
  }
  goNewUrl({
    url: url
  })
}

const getConfig = async () => {}

const init = () => {
  console.info('init')
  let { query, params } = getRouterData()
  console.log(query.type)
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
