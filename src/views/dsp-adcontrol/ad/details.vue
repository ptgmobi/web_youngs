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
          label="广告名称:"
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
          label="所属广告组:"
          prop="adv_name"
        >
          <el-select
            v-model="state.ruleForm.ad_group_id"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.ad_group"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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
      <split-button title="广告内容"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="内容分类:"
          prop="category_id"
        >
          <el-select
            v-model="state.ruleForm.category_id"
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
        <el-form-item
          class="self-el-form-item"
          label="广告样式:"
          prop="type"
        >
          <el-select
            v-model="state.ruleForm.type"
            filterable
            placeholder="请选择"
            class="form-one"
          >
            <el-option
              v-for="item in state.options.type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="广告数量:"
          prop="marbet_target"
        >
          <el-radio-group class="form-one" v-model="state.ruleForm.ad_num">
            <template v-for="item in state.options.ad_num">
              <el-radio :label="item.value">{{item.label}}</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>
        <!-- 选择创意 start -->
        <el-form-item
          class="self-el-form-item"
          label="选择创意:"
          prop="campaign"
        >
          <div>
            <div>
              <el-button type="primary" @click="showChoiceCampaign">选择创意</el-button>
            </div>
            <div>
              <el-select
                v-model="state.ruleForm.campaign"
                filterable
                placeholder="请选择"
                class="form-one mt-10"
              >
                <el-option
                  v-for="item in state.options.campaign"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </el-form-item>
        
        <!-- 选择创意 end -->
        <!-- 选择DPA模板 start -->
        <el-form-item
          class="self-el-form-item"
          label="选择DPA模板:"
          prop="campaign"
        >
          <div>
            <div>
              <el-button type="primary">选择DPA模板</el-button>
            </div>
            <div>
              <el-select
                v-model="state.ruleForm.dpa"
                filterable
                placeholder="请选择"
                class="form-one mt-10"
              >
                <el-option
                  v-for="item in state.options.dpa"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </el-form-item>
        <!-- 选择DPA模板 end -->
      </div>
      <split-button title="广告内容"></split-button>
      <div class="content-con from-one flex column">
        <el-form-item
          class="self-el-form-item"
          label="Deeplink:"
          prop="deeplink"
        >
          <el-input
            v-model.trim="state.ruleForm.deeplink"
            class="form-one"
            placeholder=""
          >
          </el-input>
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="落地页跳转方式:"
          prop="marbet_target"
        >
          <el-checkbox
            v-model="state.ruleForm.is_h5"
            true-label="1"
            false-label="2"
            label="通过H5中间页跳转Deeplink"
          />
        </el-form-item>
        <el-form-item
          class="self-el-form-item"
          label="Mobilelink:"
          prop="mobilelink"
        >
          <el-input
            v-model.trim="state.ruleForm.mobilelink"
            class="form-one"
            placeholder=""
          >
          </el-input>
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
      <!-- 选择创意pop -->
      <el-dialog
        v-model="dialogVisibleCampaign"
        title="创意列表"
        width="90%"
      >
        <Campaign
          class="mb-10"
          paga-type="show"
          :choice="handleChoice"
          @kk="updateChoiceCampaign"
        />
        <div class="w100 flex">
          <el-button
            class="cp mr-10"
            type="primary"
            @click="saveChoiceCampaign"
          >保存</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts" setup>
import optionsSetting from '@/self-options-setting'
import { ApiAdSeriesCreate, ApiGetAdSeriesOne, ApiAdSeriesEdit } from '@/api/dsp-adcontrol'
import { ApiGetCampaignList, ApiGetCampaignDpaList } from '@/api/dsp-campaign'
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
import Campaign from '@/views/dsp-campaign/administration/list.vue'
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

let bus: any = reactive({
  campaign: {},
  dpa: {}
})

let type: any = ref('create')

let dialogVisibleCampaign = ref(false)
let dialogVisibleDpa = ref(false)

type ruleFormType =  {
  id: number | undefined
  // 广告id
  ad_id: string
  // 广告名称
  name: string
  // 广告组id
  ad_group_id: string
  // 描述
  descs: string
  // 内容分类
  category_id: number | undefined
  // 广告样式
  type: number | undefined
  // 创意ID
  originality_id: number | undefined
  // 
  deeplink: string
  // 是否通过h5中间页跳转deeplink
  is_h5: number
  // 
  mobilelink: string
  // 点击监测链接
  click_url: string
  // 曝光监测链接
  impression_url: string
  // 1开2关
  status: number
  is_del: number
  campaign: number | undefined
  dpa: number | undefined
}

const defaultRuleForm: ruleFormType = {
  id: void 0,
  ad_id: '',
  name: '',
  ad_group_id: '',
  descs: '',
  category_id: void 0,
  type: void 0,
  originality_id: void 0,
  deeplink: '',
  is_h5: 1,
  mobilelink: '',
  click_url: '',
  impression_url: '',
  campaign: 300000001,
  dpa: void 0,
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
    adv_name: [
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
    adv_name: [],
    ad_num: [
    {value: '1', label: '1个'},
    {value: '2-10', label: '2-10个'},
    ],
    campaign: [],
    dpa: [],
    ad_group: [],
    category: [],
    type: []
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
const numberKeyArr = ['id', 'adv_id', 'adv_series_type', 'adv_series_budget']

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
  const ajaxData = {
    limit: 10000,
    page: 1
  }
  await Promise.all([ApiGetCampaignList(ajaxData), ApiGetCampaignList(ajaxData)]).then(data => {
    // campaign
    let campaignData = data[0].data.data
    state.options.campaign = campaignData.map(ele => {
      ele.value = ele.id
      ele.label = ele.name
      return ele
    })
    console.log(state.options.campaign)
    // dpa
    let dpaData = data[1].data.data
    state.options.dpa = campaignData.map(ele => {
      ele.value = ele.id
      ele.label = ele.name
      return ele
    })
  })
}

const showChoiceCampaign = () => {
  dialogVisibleCampaign.value = true
}

const updateChoiceCampaign = (data) => {
  console.log(data)
  bus.Campaign = data
}

const saveChoiceCampaign = () => {
  state.ruleForm.campaign = bus.Campaign.id
  dialogVisibleCampaign.value = false
}

const init = () => {
  console.info('init')
  let { query, params } = getRouterData()
  type.value = query.type?.toString() ?? ''
  if (type.value === 'create') {
    state.ruleForm = _.cloneDeep(defaultRuleForm)
  }
  if (type.value === 'edit') {
    const { id } = params
    setDataFn(id)
  }
}

const handleChoice = computed(() => {
  return state.ruleForm.campaign
})

onBeforeMount(() => {
  getConfig()
})

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
