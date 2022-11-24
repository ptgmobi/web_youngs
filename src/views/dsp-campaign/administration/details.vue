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
          v-if="state.ruleForm.type === 1 || state.ruleForm.type === 3"
          class="self-el-form-item"
          label="上传图片素材:"
          prop="url"
        >
          <el-upload
            class="avatar-uploader"
            name="url"
            action=""
            :limit="1"
            list-type="picture-card"
            v-model:file-list="fileListUrl"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccessForUrl"
            :before-upload="beforeUploadImage"
            :on-exceed="handleExceed"
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
            accept=""
            :limit="1"
            list-type="picture-card"
            v-model:file-list="fileListVideoUrl"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccessForVideo"
            :before-upload="beforeUploadVideo"
            :on-exceed="handleExceed"
            :http-request="uploadHttpRequest"
          >
            <template #file="{ file }">
              <div>
                <div v-if="fileListVideoUrl.length !== 0">
                  <video
                    :src="state.ruleForm.video_url"
                    class="avatar video-avatar"
                  >
                    您的浏览器不支持视频播放
                  </video>
                  <div class="upload-video-control-box el-upload-list__item-actions flex">
                    <span
                      class="el-upload-list__item-preview cp"
                      @click="handlePictureCardPreview(file)"
                    >
                      <el-icon><zoom-in /></el-icon>
                    </span>
                    <span
                      class="el-upload-list__item-preview cp"
                      @click="handleRemoveVideo"
                    >
                      <el-icon><Delete /></el-icon>
                    </span>
                  </div>
                </div>
              </div>
            </template>
            <el-icon><Plus /></el-icon>
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
            :limit="1"
            list-type="picture-card"
            v-model:file-list="fileListCoverUrl"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccessForCoverUrl"
            :before-upload="beforeUploadCoverImage"
            :on-exceed="handleExceed"
            :http-request="uploadHttpRequest"
          >
            <!-- <img v-if="fileListCoverUrl.length !== 0" :src="state.ruleForm.cover_url" :preview-src-list="[state.ruleForm.cover_url]" class="avatar" /> -->
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
            :limit="1"
            list-type="picture-card"
            v-model:file-list="fileListLogoUrl"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccessForLogoUrl"
            :before-upload="beforeUploadLogo"
            :on-exceed="handleExceed"
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
        <!-- {{state.ruleForm.raw_file_image}}
        <br>
        {{state.ruleForm.raw_file_video}}
        <br>
        {{fileListVideoUrl}}
        {{fileListUrl}}
        <br>
        {{fileListVideoUrl}}
        <br>
        {{fileListLogoUrl}}
        <br>
        {{fileListCoverUrl}}
        <br> -->
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
import { ApiCampaignCreate, ApiGetCampaignOne, ApiCampaignEdit } from '@/api/dsp-campaign'
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
  // cover_image
  cover_image_type_reg,
  cover_image_limit,
  cover_image_size,
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
  descs: string
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
  cover_url: string,
  // 视频
  video_url: string
  // 素材相关数据
  raw_file_image: any
  raw_file_video: any
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  name: '',
  descs: '',
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
  cover_url: '',
  video_url: '',
  raw_file_image: void 0,
  raw_file_video: void 0

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
    title: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    main_body: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    actions: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    brand: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    url: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    logo_url: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ],
    cover_url: [
      {required: true, message: message.required, trigger: ['blur', 'change']},
    ]
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
  setRawFileToAjaxDataFn(state.ruleForm)
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
const numberKeyArr = ['id', 'adv_series_type', 'adv_series_budget', 'duration']

// 数组转换为字符串
const arrayKeyArr = []

const setDataFn = async (id, campaign_type) => {
  // 获取单个
  let params = new URLSearchParams()
  params.append('type', campaign_type)
  let params_str = `type=${params.get('type')}`
  const res = await ApiGetCampaignOne(id, params_str)
  const {data: result} = res
  state.ruleForm = {
    ...state.ruleForm,
    ...result
  }
  console.log(state.ruleForm)
  // let fileListUrl = ref<UploadUserFile[]>([])
  // let fileListVideoUrl = ref<UploadUserFile[]>([])
  // let fileListLogoUrl = ref<UploadUserFile[]>([])
  // let fileListCoverUrl = ref<UploadUserFile[]>([])
  if (state.ruleForm.type === 1) {
    if (state.ruleForm.url) {
      fileListUrl.value.push({
        name: state.ruleForm.url,
        url: state.ruleForm.url
      })
    }
  }
  if (state.ruleForm.type === 2) {
    if (state.ruleForm.url) {
      fileListVideoUrl.value.push({
        name: state.ruleForm.url,
        url: state.ruleForm.url
      })
      state.ruleForm.video_url = state.ruleForm.url
    }
    
    if (state.ruleForm.logo_url) {
      fileListLogoUrl.value.push({
        name: state.ruleForm.logo_url,
        url: state.ruleForm.logo_url
      })
    }
    if (state.ruleForm.cover_url) {
      fileListCoverUrl.value.push({
        name: state.ruleForm.cover_url,
        url: state.ruleForm.cover_url
      })
    }
  }
  if (state.ruleForm.type === 3) {
    if (state.ruleForm.url) {
      fileListUrl.value.push({
        name: state.ruleForm.url,
        url: state.ruleForm.url
      })
    }
    
    if (state.ruleForm.logo_url) {
      fileListLogoUrl.value.push({
        name: state.ruleForm.logo_url,
        url: state.ruleForm.logo_url
      })
    }
  }
}

const setRawFileToAjaxDataFn = (ajaxData) => {
  let type = ajaxData.type
  if (type === 1 || type === 3) {
    let data = ajaxData.raw_file_image
    if (data) {
      ajaxData.size = `${data.w}*${data.h}`
      ajaxData.memory_size = `${(data.limit / (1024 * 1024)).toFixed(2)}MB`
      ajaxData.format = data.type
      delete ajaxData.duration
    }
    
  }
  if (type === 2) {
    let data = ajaxData.raw_file_video
    if (data) {
      ajaxData.size = `${data.w}*${data.h}`
      ajaxData.memory_size = `${(data.limit / (1024 * 1024)).toFixed(2)}MB`
      ajaxData.format = data.type
      ajaxData.duration = data.duration.toFixed(0)
      ajaxData.url = ajaxData.video_url
    }
  }
  // delete ajaxData.raw_file_image
  // delete ajaxData.raw_file_video
  return ajaxData
}

const submitFn = async () => {
  let baseData = toRaw(state.ruleForm)
  let ajaxData: any = baseData
  let params = new URLSearchParams()
  params.append('type', ajaxData.type)
  let params_str = `type=${params.get('type')}`
  console.log(params, params_str)
  console.log(ajaxData)
  // 先删除为空的字段
  ajaxData = handleAjaxDataDelNo2KeyFn(ajaxData)
  ajaxData = handleAjaxNumberKeyFn(ajaxData, numberKeyArr)
  // ajaxData = handleAjaxArrayKeyFn(ajaxData, arrayKeyArr)
  console.log(type.value, ajaxData)
  // return false
  if (type.value === 'create') {
    delete ajaxData.id
    const res = await ApiCampaignCreate(params_str, ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
  if (type.value === 'edit') {
    const res = await ApiCampaignEdit(params_str, ajaxData)
    if(messageFun(res)) {
      cancelFn()
    }
  }
}

const cancelFn = () => {
  let url = '/campaign/administration/list'
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

const handleRemoveVideo: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  // console.log(uploadFile, uploadFiles)
  fileListVideoUrl.value.splice(0)
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

const handleSuccessForLogoUrl: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  let url = response?.data
  state.ruleForm.logo_url = url
  fileListLogoUrl.value.splice(0)
  fileListLogoUrl.value.push({
    name: url,
    url: url
  })
}

const handleSuccessForUrl: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  let url = response?.data
  state.ruleForm.url = url
  fileListUrl.value.splice(0)
  fileListUrl.value.push({
    name: url,
    url: url
  })
}

const handleSuccessForCoverUrl: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  let url = response?.data
  state.ruleForm.cover_url = url
  fileListCoverUrl.value.splice(0)
  fileListCoverUrl.value.push({
    name: url,
    url: url
  })
}

const handleSuccessForVideo: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  // state.ruleForm.logo = URL.createObjectURL(uploadFile.raw!)
  let url = response?.data
  state.ruleForm.video_url = url
  fileListVideoUrl.value.splice(0)
  fileListVideoUrl.value.push({
    name: url,
    url: url
  })
}

// const {
//   logo_type_reg,
//   logo_limit,
//   logo_size,
//   // image
//   image_type_reg,
//   image_limit,
//   image_size,
//   // video
//   video_type_reg,
//   video_limit,
//   video_duration,
//   video_size,
//   // cover_image
//   cover_image_type_reg,
//   cover_image_limit,
//   cover_image_size,
// } = uploadSetting

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

const beforeUploadLogo = async (rawFile) => {
  const options = {
    type_reg: logo_type_reg,
    limit: logo_limit,
    size: logo_size
  }
  let result = validateUpload(rawFile, 'image', options)
  return result
}

const beforeUploadImage = async(rawFile) => {
  const options = {
    type_reg: image_type_reg,
    limit: image_limit,
    size: image_size
  }
  let result: any = await validateUpload(rawFile, 'image', options)
  console.log(result)
  state.ruleForm.raw_file_image = result.data
  return result
}

const beforeUploadCoverImage = async (rawFile) => {
  const options = {
    type_reg: cover_image_type_reg,
    limit: cover_image_limit,
    size: cover_image_size
  }
  return validateUpload(rawFile, 'image', options)
}

const beforeUploadVideo = async (rawFile) => {
  console.log(rawFile)
  const options = {
    type_reg: video_type_reg,
    limit: video_limit,
    size: video_size,
    duration: video_duration
  }
  let result: any =  await validateUpload(rawFile, 'video', options)
  console.log(result)
  state.ruleForm.raw_file_video = result.data
  return result
}

const handleExceed = (files, uploadFile) => {
  console.log(files, uploadFile)
  ElMessage({
    message: '只能上传一个，请删除后重试',
    type: 'warning',
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
