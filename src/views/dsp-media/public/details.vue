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
    >
      <div class="content-con from-one flex column">
        <!-- 媒体bundle -->
        <el-form-item
          class="self-el-form-item"
          label="媒体bundle:"
          prop="descs"
        >
          <el-input
            v-model.trim="state.ruleForm.bundle"
            class="form-one"
            placeholder=""
            type="textarea"
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
const message = {
  required: '此项必填'
}

let type: any = ref('create')


type ruleFormType =  {
  id: number | undefined
  bundle: string
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  bundle: '',
}

const state = reactive({
  ruleForm: defaultRuleForm,
  rules: {}
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
