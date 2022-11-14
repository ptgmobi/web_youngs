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
        <!-- 创意名称 -->
        <el-form-item
          class="self-el-form-item"
          label="创意名称:"
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
      <split-button title="创意设计"></split-button>
      <div class="content-con from-one flex column">
        <!-- 创意样式 -->
        <el-form-item
          class="self-el-form-item"
          label="创意样式:"
          prop="type"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.type">
            <template v-for="item in state.options.type">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
        <!-- 上传素材 --- 图片 -->
        <el-form-item
          v-if="state.ruleForm.type === 1"
          class="self-el-form-item"
          label="上传图片素材:"
          prop="url"
        >
          <el-upload
            class="avatar-uploader"
            name="url"
            action=""
            list-type="picture-card"
            v-model:file-list="fileListUrl"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccessForUrl"
            :before-upload="beforeAvatarUploadImage"
            :http-request="uploadHttpRequest"
          >
            <!-- <img v-if="state.ruleForm.url" :src="state.ruleForm.url" :preview-src-list="[state.ruleForm.url]" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
            <el-icon><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <!-- 上传素材 --- 视频 -->
        <el-form-item
          v-if="state.ruleForm.type === 2"
          class="self-el-form-item"
          label="上传视频素材:"
          prop="url"
        >
          <el-upload
            class="avatar-uploader"
            name="url"
            action=""
            :limit="1"
            :show-file-list="false"
            v-model:file-list="fileListVideoUrl"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccessForUrl"
            :before-upload="beforeAvatarUpload"
            :http-request="uploadHttpRequest"
          >
            <video v-if="state.ruleForm.url" :src="state.ruleForm.url" alt="Video" controls></video>
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <!-- 上传封面 -->
        <el-form-item
          v-if="state.ruleForm.type === 2"
          class="self-el-form-item"
          label="上传封面:"
          prop="cover_url"
        >
          <el-upload
            class="avatar-uploader"
            name="cover_url"
            action=""
            list-type="picture-card"
            v-model:file-list="fileListCoverUrl"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccessForCoverUrl"
            :before-upload="beforeAvatarUpload"
            :http-request="uploadHttpRequest"
          >
            <!-- <img v-if="state.ruleForm.url" :src="state.ruleForm.url" :preview-src-list="[state.ruleForm.url]" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
            <el-icon><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <!-- 上传Logo -->
        <el-form-item
          v-if="state.ruleForm.type === 3 || state.ruleForm.type === 2"
          class="self-el-form-item"
          label="上传Logo:"
          prop="url"
        >
          <el-upload
            class="avatar-uploader"
            name="logo_url"
            action=""
            list-type="picture-card"
            v-model:file-list="fileListLogoUrl"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccessForLogoUrl"
            :before-upload="beforeAvatarUploadLogo"
            :http-request="uploadHttpRequest"
          >
            <!-- <img v-if="state.ruleForm.url" :src="state.ruleForm.url" :preview-src-list="[state.ruleForm.url]" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
            <el-icon><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <!-- 标题 -->
        <el-form-item
          v-if="state.ruleForm.type === 3 || state.ruleForm.type === 2"
          class="self-el-form-item"
          label="标题:"
          prop="title"
        >
          <el-input
            v-model.trim="state.ruleForm.title"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <!-- 正文 -->
        <el-form-item
          v-if="state.ruleForm.type === 3 || state.ruleForm.type === 2"
          class="self-el-form-item"
          label="正文:"
          prop="main_body"
        >
          <el-input
            v-model.trim="state.ruleForm.main_body"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <!-- 行动号召 -->
        <el-form-item
          v-if="state.ruleForm.type === 3"
          class="self-el-form-item"
          label="行动号召:"
          prop="actions"
        >
          <el-input
            v-model.trim="state.ruleForm.actions"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <!-- 品牌 -->
        <el-form-item
          v-if="state.ruleForm.type === 3"
          class="self-el-form-item"
          label="品牌:"
          prop="brand"
        >
          <el-input
            v-model.trim="state.ruleForm.brand"
            class="form-one"
            placeholder=""
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
    <!-- 图片预览 -->
    <el-dialog v-model="dialogVisible">
      <div class="flex">
        <img w-full v-if="dialogImageUrlType === 'image'" :src="dialogImageUrl" alt="Preview Image" />
        <video w-full v-if="dialogImageUrlType === 'video'" :src="dialogImageUrl" alt="Preview Video" controls></video>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import optionsSetting from '@/self-options-setting'
import uploadSetting from '@/self-upload-setting'
import { ApiAdSeriesCreate, ApiGetAdSeriesOne, ApiAdSeriesEdit } from '@/api/dsp-adcontrol'
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
import type { UploadProps, UploadUserFile, genFileId } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import uploadFn from '@/utils/upload'
const { validate: validateUpload } = uploadFn

const {
  adv_type, 
  ind_cla,
  third_party,
  return_mode,
  time_zone
} = optionsSetting

const {
  logo_type_reg,
  logo_limit,
  logo_size,
  // image
  image_type_reg,
  image_limit,
  image_size,
  // video
  video_type_reg,
  video_limit,
  video_duration,
  video_size,
} = uploadSetting

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
  name: string
  desc: string
  // 创意样式： 1图片，2视频，3原生
  type: number | undefined
  // 素材
  url: string
  // 审核状态： 1未审核，2审核通过，3审核未通过
  audit_status: number | undefined
  // 尺寸
  size: string
  // 图片大小
  memory_size: string
  // 格式
  format: string
  // 时长
  duration: number | undefined
  // 1开2关
  status: number
  is_del: number | undefined
  // 以下是原生表专属字段
  // 素材logo url
  logo_url: string
  // 标题
  title: string
  // 正文
  main_body: string
  // 行动号召
  actions: string
  // 品牌
  brand: string
  // 封面
  cover_url: string
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  name: '',
  desc: '',
  type: 1,
  url: '',
  audit_status: void 0,
  size: '',
  memory_size: '',
  format: '',
  duration: void 0,
  status: 1,
  is_del: void 0,
  // 以下是原生表专属字段
  logo_url: '',
  title: '',
  main_body: '',
  actions: '',
  brand: '',
  cover_url: ''

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
    desc: [
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
    type: [
      { value: 1, label: '图片' },
      { value: 2, label: '视频' },
      { value: 3, label: '原生' },
    ],
    // 审核状态： 1未审核，2审核通过，3审核未通过
    audit_status: [
      { value: 1, label: '未审核' },
      { value: 2, label: '审核通过' },
      { value: 3, label: '审核未通过' },
    ],
    
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
  
}

// upload
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  // console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  let imgType = ''
  let videoReg = video_type_reg
  let imgReg = image_type_reg
  if (imgReg.test(dialogImageUrl.value)) {
    imgType = 'image'
  }
  if (videoReg.test(dialogImageUrl.value)) {
    imgType = 'video'
  }
  dialogImageUrlType.value = imgType
  dialogVisible.value = true
}

const handleAvatarSuccessForUrl: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  state.ruleForm.url = response?.data
  fileListUrl.value.splice(0)
  fileListUrl.value.push({
    name: '',
    url: response?.data
  })
}

const handleAvatarSuccessForLogoUrl: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  state.ruleForm.url = response?.data
  fileListLogoUrl.value.splice(0)
  fileListLogoUrl.value.push({
    name: '',
    url: response?.data
  })
}

const handleAvatarSuccessForCoverUrl: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  state.ruleForm.cover_url = response?.data
  fileListCoverUrl.value.splice(0)
  fileListCoverUrl.value.push({
    name: '',
    url: response?.data
  })
}

const uploadHttpRequest: UploadProps['httpRequest'] = async(
  param
) => {
  const formData = new FormData()
  formData.append("logo_url", param.file)
  if (process.env.NODE_ENV === 'serve-dev') {
    return void 0
  } else {
    const res = await ApiUploadImg(formData)
    return res
  }
}

const beforeAvatarUploadLogo = async (rawFile) => {
  const res = await validateUpload(rawFile, 'logo')
  console.log(res)
  return res
}

const beforeAvatarUploadImage = async (rawFile) => {
  return validateUpload(rawFile, 'image')
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = async (rawFile) => {
  console.log(rawFile)
  let type = rawFile.type
  const isImage = type.includes('image')
  const isVidel = type.includes('video')
  const isLt100M = rawFile.size / (1024 * 1024) < 100 // 验证图片大小
  const isSize = new Promise(function (resolve, reject) {
    let width = 100 // 限制上传图片的宽度
    let height = 100 // 限制上传图片的高度
    let URL = window.URL || window.webkitURL
    if (isImage) {
      let image = new Image()
      image.onload = function () {
        let valid = image.width !== width && image.height !== height
        valid = true
        valid ? resolve(null) : reject()
      }
      image.src = URL.createObjectURL(rawFile)
    }
    if (isVidel) {
      let valid = true
      let video = URL.createObjectURL(rawFile)
      let videoObj = document.createElement('video')
      videoObj.onloadedmetadata = function (evt) {
        URL.revokeObjectURL(video)
        console.log(videoObj.videoWidth, videoObj.videoHeight)
        let valid = videoObj.videoWidth !== width || videoObj.videoHeight !== height
        valid = true
        valid ? resolve(null) : reject()
      }
      videoObj.src = video
      videoObj.load()
      valid ? resolve(null) : reject()
    }
    
  }).then(
    () => rawFile,
    () => {
      console.error("图片尺寸过大,请上传100*100尺寸的图片"); // 提示 看需求
      return Promise.reject();
    }
  )

  if (!isImage) {
    console.error("格式错误，请上传图片格式"); // 提示 看需求
  }
  if (!isLt100M) {
    console.error("文件过大，文件大小不超过100M"); // 提示 看需求
  }
  
  return isSize
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
  width: 148px;
  height: 148px;
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
  width: 148px;
  height: 148px;
  text-align: center;
}
</style>
