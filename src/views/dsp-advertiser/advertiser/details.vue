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
          label="广告主名称:"
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
        <el-form-item
          class="self-el-form-item"
          label="广告主类型:"
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
          label="广告主地址:"
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
        <el-form-item
          class="self-el-form-item"
          label="行业分类:"
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
          label="Logo:"
          prop="flow_source"
        >
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="state.ruleForm.imageUrl" :src="state.ruleForm.imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </div>
      <split-button title="Offer信息"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="选择时区:"
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
          label="转化单价（美元）:"
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
          label="日花费上限（美元）:"
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
          label="强制流量占比%:"
          prop="company"
        >
          <el-input
            v-model.trim="state.ruleForm.company"
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
          label="第三方监测平台:"
          prop="flow_region"
        >
          <el-select
            v-model="state.ruleForm.flow_region_type"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.choice_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          class="self-el-form-item"
          label="点击监测链接:"
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

        <el-form-item
          class="self-el-form-item"
          label="曝光监测链接:"
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
      <split-button title="数据回传"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="回传方式:"
          prop="flow_region"
        >
          <el-select
            v-model="state.ruleForm.flow_region_type"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.choice_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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
import _, { isArguments } from 'lodash'
import type { UploadProps } from 'element-plus'

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

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  state.ruleForm.imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  console.log(rawFile)
  // if (rawFile.type !== 'image/jpeg') {
  //   console.error('Avatar picture must be JPG format!')
  //   return false
  // } else if (rawFile.size / 1024 / 1024 > 2) {
  //   console.error('Avatar picture size can not exceed 2MB!')
  //   return false
  // }
  // return true
  const isJPG = rawFile.type === "image/png"; // 验证图片类型
  const isLt100M = rawFile.size / (1024 * 1024) < 100; // 验证图片大小
  const isSize = new Promise(function (resolve, reject) {
    let width = 100; // 限制上传图片的宽度
    let height = 100; // 限制上传图片的高度
    let URL = window.URL || window.webkitURL;
    let image = new Image();
    image.onload = function () {
      console.log(image)
      let valid = image.width <= width && image.height <= height;
      valid ? resolve(null) : reject();
    };
    image.src = URL.createObjectURL(rawFile);
  }).then(
    () => rawFile,
    () => {
      console.error("图片尺寸过大,请上传100*100尺寸的图片"); // 提示 看需求
      return Promise.reject();
    }
  );

  if (!isJPG) {
    console.error("格式错误，请上传png格式图片"); // 提示 看需求
  }
  if (!isLt100M) {
    console.error("文件过大，文件大小不超过100M"); // 提示 看需求
  }
  return isJPG && isLt100M && isSize;
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
<style scoped>
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
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
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
