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
        <!-- 模板名称 -->
        <el-form-item
          class="self-el-form-item"
          label="模板名称:"
          prop="name"
        >
          <el-input
            v-model.trim="state.ruleForm.name"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <!-- 描述 -->
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
        <!-- 适配尺寸 -->
        <el-form-item
          class="self-el-form-item"
          label="适配尺寸:"
          prop="size"
        >
          <el-select
            v-model="state.ruleForm.size"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.size"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- Feeds个数 -->
        <el-form-item
          class="self-el-form-item"
          label="Feeds个数:"
          prop="feeds_num"
        >
          <el-select
            v-model="state.ruleForm.feeds_num"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.feeds_num"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 适用商品 -->
        <el-form-item
          class="self-el-form-item"
          label="适用商品:"
          prop="dsp_category_id"
        >
          <el-select
            v-model="state.ruleForm.dsp_category_id"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.category"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 创意目标 -->
        <el-form-item
          class="self-el-form-item"
          label="创意目标:"
          prop="creative_goals"
        >
          <el-select
            v-model="state.ruleForm.creative_goals"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.creative_goals"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <split-button title="模板内容"></split-button>
      <div class="content-con from-one flex column">
        <!-- 关联模板ID -->
        <el-form-item
          class="self-el-form-item"
          label="关联模板ID:"
          prop="follow_template_id"
        >
          <el-select
            v-model="state.ruleForm.follow_template_id"
            filterable
            placeholder="请选择"
            class="form-one"
            :disabled="type !== 'create'"
          >
            <el-option
              v-for="item in handleDpaTemplate"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <div class="w100 flex jc-between ai-start">
                <span>{{item.label}}</span>
                <!-- <div class="img-box">
                  <img :src="item.url" alt="">
                </div> -->
              </div>
            </el-option>
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
import selfSetting from './setting'
import {ApiGetCommonCategoryList, ApiGetCommonTemplateSizeList} from '@/api/dsp-common'
import { ApiGetCampaignDpaList, ApiCampaignDpaCreate, ApiGetCampaignDpaOne, ApiCampaignDpaEdit, ApiGetDpaTplList } from '@/api/dsp-campaign'
import { ApiUploadImg } from '@/api/dsp-advertiser'
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
import type { UploadProps, UploadUserFile, genFileId, UploadFile } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import uploadFn from '@/utils/upload'
const { validate: validateUpload, uploadHttpRequest } = uploadFn

const {
  status,
} = optionsSetting

const {
  audit_status,
  feeds_num,
  dsp_category_id,
  creative_goals,
} = selfSetting

const { getRouterData, getCommonCountryList, goNewUrl } = useUtils()
let { proxy }: any = getCurrentInstance()
const message = {
  required: '此项必填'
}

let type: any = ref('create')

let fileListUrl = ref<UploadUserFile[]>([])

type ruleFormType =  {
  id: number | undefined
  // 模板名称
  name: string
  // 描述
  descs: string
  // 适配尺寸
  size: string
  // Feeds个数
  feeds_num: number | undefined
  // 适用商品
  dsp_category_id: number | undefined
  // 创意目标：1：节日，2：常规，3：促销
  creative_goals: string
  // 关联模板ID
  follow_template_id: number | undefined
  // 审核状态： 1未审核，2审核通过，3审核未通过
  audit_status: number | undefined
  // 是否归档:1:正常，2：归档
  is_del: number | undefined
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  name: '',
  descs: '',
  size: '',
  feeds_num: void 0,
  dsp_category_id: void 0,
  creative_goals: '',
  follow_template_id: void 0,
  audit_status: 3,
  is_del: 1,
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
      {required: true, message: message.required, trigger: ['blur', 'change']}
    ],
    size: [
      {required: true, message: message.required, trigger: ['blur', 'change']}
    ],
    feeds_num: [
      {required: true, message: message.required, trigger: ['blur', 'change']}
    ],
    dsp_category_id: [
      {required: true, message: message.required, trigger: ['blur', 'change']}
    ],
    creative_goals: [
      {required: true, message: message.required, trigger: ['blur', 'change']}
    ],
    follow_template_id: [
      {required: true, message: message.required, trigger: ['blur', 'change']}
    ]
  },
  options: {
    audit_status,
    size: [],
    feeds_num,
    category: [],
    creative_goals,
    dpa_tpl: [],
    dpa: []
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
const numberKeyArr = ['id', 'feeds_num', 'dsp_category_id', 'follow_template_id', 'audit_status', 'is_del']

// 数组转换为字符串
const arrayKeyArr = ['country']

const setDataFn = async (id) => {
  const res = await ApiGetCampaignDpaOne(id)
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
  ajaxData = handleAjaxArrayKeyFn(ajaxData, arrayKeyArr)
  console.log(type.value, ajaxData)
  // return false
  if (type.value === 'create') {
    delete ajaxData.id
    const res = await ApiCampaignDpaCreate(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
  if (type.value === 'edit') {
    const res = await ApiCampaignDpaEdit(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
}

const cancelFn = () => {
  let url = '/campaign/dpa/list'
  goNewUrl({
    url: url
  })
}

const getConfig = async () => {
  const ajaxData = {
    limit: 10000,
    page: 1
  }
  Promise.all([
    ApiGetCampaignDpaList(ajaxData),
    ApiGetDpaTplList(),
    ApiGetCommonCategoryList(),
    ApiGetCommonTemplateSizeList()
  ]).then(data => {
    console.log(data)
    // dpalist
    state.options.dpa = data[0].data.data
    // dpatpllist
    let dpa_tpl = data[1].data.data
    state.options.dpa_tpl = dpa_tpl.map(ele => {
      ele.value = ele.id
      ele.label = `${ele.format}_${ele.tpl_type}`
      ele.url = `https://staticdn.cloudmobi.net/dpa/demo/${ele.format}_${ele.tpl_type}_bg.png`
      return ele
    })
    // Category
    let category = data[2].data
    state.options.category = category.map(ele => {
      ele.value = ele.id
      ele.label = `${ele.cn}-${ele.en}`
      return ele
    })
    // size
    let size = data[3].data
    state.options.size = size.map(ele => {
      ele.value = ele.size
      ele.label = ele.size
      return ele
    })
  })
}

const handleDpaTemplate = computed(() => {
  return state.options.dpa_tpl
})

const init = () => {
  console.info('init')
  let { query, params } = getRouterData()
  type.value = query.type?.toString() ?? ''
  console.log(type.value)
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
.el-upload-list{
  margin-top: 0 !important;
}
.img-box{
  width: 100px;
  height: 100%;
  img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
