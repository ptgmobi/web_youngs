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
        <!-- 媒体列表名称 -->
        <el-form-item
          class="self-el-form-item"
          label="媒体列表名称:"
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
      </div>
      <split-button title="选择媒体"></split-button>
      <div class="content-con from-one flex column">
        <!-- 上传文件 -->
        <el-form-item
          class="self-el-form-item"
          label="上传文件:"
          prop="adv_type"
        >
          <div class="form-one flex jc-start">
            <el-upload
              class="form-one"
              name="url"
              action=""
              :limit="1"
              list-type="text"
              v-model:file-list="fileListUrl"
              :on-remove="handleRemove"
              :on-success="handleSuccess"
              :before-upload="beforeUpload"
              :on-exceed="handleExceed"
              :http-request="uploadHttpRequest"
            >
              <el-button type="primary" v-if="fileListUrl.length === 0">上传媒体bundle</el-button>
            </el-upload>
          </div>
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
import selfSetting from '../setting'
import { ApiMediaCustomCreate, ApiGetMediaCustomOne, ApiMediaCustomEdit } from '@/api/dsp-media'
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
  adv_type,
  audience_manage_type,
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
  name: string
  // 描述
  descs: string
  // 媒体数量
  media_num: number | undefined
  // 文件地址
  file_url: string
  // 是否归档:1:正常，2：归档
  is_del: number | undefined
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  name: '',
  descs: '',
  media_num: void 0,
  file_url: '',
  is_del: void 0,
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
    
  },
  options: {
    country: [
      {value: '', label: '', id: ''}
    ],
    advertiser: [
      {
        adv_id: '',
        name: ''
      }
    ],
    adv_type,
    audience_manage_type
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
const numberKeyArr = ['id', 'media_num']

// 数组转换为字符串
const arrayKeyArr = ['country']

const setDataFn = async (id, campaign_type) => {
  const res = await ApiGetMediaCustomOne(id)
  const {data: result} = res
  state.ruleForm = {
    ...state.ruleForm,
    ...result
  }
  if (state.ruleForm.file_url) {
    fileListUrl.value.push({
      name: state.ruleForm.file_url,
      url: state.ruleForm.file_url
    })
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
    const res = await ApiMediaCustomCreate(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
  if (type.value === 'edit') {
    const res = await ApiMediaCustomEdit(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
}

const cancelFn = () => {
  let url = '/media/custom/list'
  goNewUrl({
    url: url
  })
}

// upload
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  // console.log(uploadFile, uploadFiles)
}

const handleSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  let url = response?.data
  state.ruleForm.file_url = url
  fileListUrl.value.splice(0)
  fileListUrl.value.push({
    name: url,
    url: url
  })
}

const handleExceed = (files, uploadFile) => {
  console.log(files, uploadFile)
  ElMessage({
    message: '只能上传一个，请删除后重试',
    type: 'warning',
  })
}

const beforeUpload = async(rawFile) => {
  return true
}


const getConfig = async () => {
  Promise.all([
    getCommonCountryList(),
    ApiGetAdvertiserList({
      limit: 10000,
      page: 1
    })
  ]).then(data => {
    let countryData = data[0]
    state.options.country = countryData
    let advertiserData = data[1]
    state.options.advertiser = advertiserData.data.data
  })
}

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
    const { campaign_type } = query
    setDataFn(id, campaign_type)
  }
}

onMounted(() => {
  init()
})

</script>
<style>
.el-upload-list{
  margin-top: 0 !important;
}
</style>
