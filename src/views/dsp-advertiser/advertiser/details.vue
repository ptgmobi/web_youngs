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
          label="广告主ID:"
          prop="adv_id"
          v-if="type==='edit'"
        >
          <span>{{state.ruleForm.adv_id}}</span>
        </el-form-item>
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
          prop="adv_type"
        >
          <el-select
            v-model="state.ruleForm.adv_type"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.adv_type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="广告主地址:"
          prop="adv_address"
        >
          <el-input
            v-model.trim="state.ruleForm.adv_address"
            class="form-one"
            placeholder=""
            type="textarea"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="行业分类:"
          prop="ind_cla"
        >
          <el-select
            v-model="state.ruleForm.ind_cla"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.ind_cla"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="Logo:"
          prop="logo"
        >
          <el-upload
            class="avatar-uploader"
            name="logo_url"
            :action="uploadImgHref"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :headers="headersObj"
          >
            <img v-if="state.ruleForm.logo" :src="state.ruleForm.logo" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </div>
      <split-button title="Offer信息"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="选择时区:"
          prop="time_zone"
        >
          <el-select
            v-model="state.ruleForm.time_zone"
            filterable
            class="form-one"
            clearable
            placeholder=""
          >
            <el-option
              v-for="item in state.options.time_zone"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item
          class="self-el-form-item"
          label="转化单价（美元）:"
          prop="price"
        >
          <el-input
            v-model.trim="state.ruleForm.price"
            class="form-one"
            placeholder=""
            type="number"
            step="0.001"
          >
          </el-input>
        </el-form-item>

        <el-form-item
          class="self-el-form-item"
          label="日花费上限（美元）:"
          prop="spend_limit"
        >
          <el-input
            v-model.trim="state.ruleForm.spend_limit"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>

        <el-form-item
          class="self-el-form-item"
          label="强制流量占比%:"
          prop="flow_rate"
        >
          <el-input
            v-model.trim="state.ruleForm.flow_rate"
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
          prop="third_party"
        >
          <el-select
            v-model="state.ruleForm.third_party"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.third_party"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          class="self-el-form-item"
          label="点击监测链接:"
          prop="click_url"
        >
          <el-input
            v-model.trim="state.ruleForm.click_url"
            class="form-one"
            placeholder=""
            type="textarea"
          >
          </el-input>
        </el-form-item>

        <el-form-item
          class="self-el-form-item"
          label="曝光监测链接:"
          prop="impression_url"
        >
          <el-input
            v-model.trim="state.ruleForm.impression_url"
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
          prop="return_mode"
        >
          <el-select
            v-model="state.ruleForm.return_mode"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.return_mode"
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
import { getToken, setToken } from '@/utils/auth'
const {
  uploadUrl,
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

let headersObj = {
  token: getToken(),
}

console.log(uploadUrl)

let uploadImgHref = ref(`${uploadUrl}/d/dv/pic`)

let type: any = ref('create')

type ruleFormType =  {
  id: number | undefined
  adv_id: string
  name: string
  desc: string
  adv_type: string
  adv_address: string
  ind_cla: string
  logo: string
  time_zone: string
  price: number | undefined
  spend_limit: number | undefined
  flow_rate: number | undefined
  third_party: string
  click_url: string
  impression_url: string
  return_mode: string
  is_del: number
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  adv_id: '',
  name: '',
  desc: '',
  adv_type: '',
  adv_address: '',
  ind_cla: '',
  logo: '',
  time_zone: '',
  price: void 0,
  spend_limit: void 0,
  flow_rate: void 0,
  third_party: '',
  click_url: '',
  impression_url: '',
  return_mode: '',
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
    name: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
      {validator: validatorStrLenValue, max: 100, trigger: ['blur', 'change']}
    ],
    desc: [
      {validator: validatorStrLenValue, max: 200, trigger: ['blur', 'change']}
    ],
    adv_type: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    adv_address: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    ind_cla: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    price: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    spend_limit: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    third_party: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
  },
  options: {
    adv_type,
    ind_cla,
    time_zone,
    third_party,
    return_mode
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
const numberKeyArr = ['id', 'price', 'spend_limit', 'flow_rate']

// 数组转换为字符串
const arrayKeyArr = []

const setDataFn = async (id) => {
  // 获取单个
  const res = await ApiGetAdvertiserOne(id)
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
  // ajaxData = handleAjaxDataDelNo2KeyFn(ajaxData)
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
    const res = await ApiAdvertiserEdit(ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
}

const cancelFn = () => {
  let url = '/advertiser/list'
  goNewUrl({
    url: url
  })
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  state.ruleForm.logo = response.data
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
      valid = true
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
