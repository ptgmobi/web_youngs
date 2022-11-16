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
        <!-- 受众包名称 -->
        <el-form-item
          class="self-el-form-item"
          label="受众包名称:"
          prop="name"
        >
          <el-input
            v-model.trim="state.ruleForm.name"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <!-- 所属广告主 -->
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
      <split-button title="数据源"></split-button>
      <div class="content-con from-one flex column">
        <!-- 广告主类型 -->
        <el-form-item
          class="self-el-form-item"
          label="广告主名称:"
          prop="adv_type"
        >
          <el-select
            v-model="state.ruleForm.adv_type"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.adv_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 国家 -->
        <el-form-item
          label="受众所在国家/地区"
          prop="country"
          class="self-el-form-item"
        >
          <el-select
            v-model="state.ruleForm.country"
            filterable
            clearable
            placeholder=""
            multiple
            class="form-one"
          >
            <el-option
              v-for="item in state.options.country"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 受众包类型 -->
        <el-form-item
          class="self-el-form-item"
          label="受众包类型:"
          prop="type"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.type">
            <template v-for="item in state.options.audience_manage_type">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
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
import { ApiAudienceManageCreate, ApiGetAudienceManageOne, ApiAudienceManageEdit } from '@/api/dsp-audience-manage'
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
import uploadFn from '@/utils/upload'
import { ElMessage } from 'element-plus'
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
const dialogImageUrl = ref('')
const dialogImageUrlType = ref('')
const dialogVisible = ref(false)
const message = {
  required: '此项必填'
}

let type: any = ref('create')

let fileListUrl = ref<UploadUserFile[]>([])
let fileListVideoUrl = ref<UploadUserFile[]>([])
let fileListLogoUrl = ref<UploadUserFile[]>([])
let fileListCoverUrl = ref<UploadUserFile[]>([])

type ruleFormType =  {
  id: number | undefined
  // 受众包名称
  name: string
  // 广告主id
  adv_id: string
  // 描述
  descs: string
  // 广告主类型：1：android,2:ios,3:web
  adv_type: number | undefined
  // 国家ID,多个用逗号隔开
  country: Array<any>
  // 受众包类型：1：rta预定义，2：离线人群包，3：系统自定义
  type: number | undefined
  // 生成状态：1：已生成，2：未生成
  build_status: number | undefined
  // 覆盖人数
  num_people: number | undefined
  // 是否归档:1:正常，2：归档
  is_del: number | undefined
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  name: '',
  adv_id: '',
  descs: '',
  adv_type: void 0,
  country: [],
  type: 1,
  build_status: void 0,
  num_people: void 0,
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
const numberKeyArr = ['id', 'adv_type', 'type', 'build_status', 'num_people']

// 数组转换为字符串
const arrayKeyArr = ['country']

const setDataFn = async (id, campaign_type) => {
  const res = await ApiGetAudienceManageOne(id)
  const {data: result} = res
  result.country = result.country ? result.country.split(',') : []
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
    const res = await ApiAudienceManageCreate(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
  if (type.value === 'edit') {
    const res = await ApiAudienceManageEdit(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
}

const cancelFn = () => {
  let url = '/audienceManage/list'
  goNewUrl({
    url: url
  })
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
<style scoped>
.avatar-uploader .avatar {
  width: 148px;
  height: 148px;
  display: block;
}
.upload-video-control-box{
  width: 148px;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  background-color: #f4f5f5;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 148px;
  height: 148px;
  text-align: center;
}
</style>
