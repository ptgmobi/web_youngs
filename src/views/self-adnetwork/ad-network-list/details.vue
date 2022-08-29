<template>
  <div>
    <!-- form -->
    <el-form
      ref="ruleForm"
      enctype="multipart/form-data"
      :rules="data.rules"
      :model="data.ruleForm"
      label-width="240px"
      label-position="right"
    >
      <div class="content-con flex column">
        <!-- AD Network Name -->
        <el-form-item
          label="AD Network Name:"
          prop="name"
        >
          <el-input
            v-model.trim="data.ruleForm.name"
            class="form-one"
            type="text"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- AD Network Short Name -->
        <el-form-item
          label="AD Network Short Name:"
          prop="short_name"
        >
          <el-input
            v-model.trim="data.ruleForm.short_name"
            class="form-one"
            type="text"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- AD Network Description -->
        <el-form-item
          class="mb-30"
          label="AD Network Description:"
          prop="desc"
        >
          <el-input
            v-model.trim="data.ruleForm.desc"
            class="form-one"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 80 }"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- Percent Of Traffic -->
        <el-form-item
          label="Percent Of Traffic:"
          prop="traffic_type"
        >
          <div class="flex jc-start form-one jc-start radio-box">
            <el-radio
              v-model="data.ruleForm.traffic_type"
              :label="1"
            >
              whole traffic
            </el-radio>
            <el-radio
              v-model="data.ruleForm.traffic_type"
              :label="2"
            >
              diversity in platform
            </el-radio>
          </div>
        </el-form-item>
        <!-- All -->
        <el-form-item
          label="all(%)"
          prop="traffic_rate.all"
          v-if="data.ruleForm.traffic_type == 1"
        >
          <el-input
            v-model.trim="data.ruleForm.traffic_rate.all"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- iOS -->
        <el-form-item
          label="iOS(%):"
          prop="traffic_rate.ios"
          v-if="data.ruleForm.traffic_type == 2"
        >
          <el-input
            v-model.trim="data.ruleForm.traffic_rate.ios"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- Android -->
        <el-form-item
          label="Android(%):"
          prop="traffic_rate.android"
          v-if="data.ruleForm.traffic_type == 2"
        >
          <el-input
            v-model.trim="data.ruleForm.traffic_rate.android"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- Percent Of Preclick -->
        <el-form-item
          label="Percent Of Preclick:"
          prop="pre_click_type"
        >
          <div class="flex jc-start form-one jc-start radio-box">
            <el-radio
              v-model="data.ruleForm.pre_click_type"
              :label="1"
            >
              whole preclick
            </el-radio>
            <el-radio
              v-model="data.ruleForm.pre_click_type"
              :label="2"
            >
              diversity in platform
            </el-radio>
          </div>
        </el-form-item>
        <!-- All -->
        <el-form-item
          label="all(%)"
          prop="pre_click_rate.all"
          v-if="data.ruleForm.pre_click_type == 1"
        >
          <el-input
            v-model.trim="data.ruleForm.pre_click_rate.all"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- iOS -->
        <el-form-item
          label="iOS(%):"
          prop="pre_click_rate.ios"
          v-if="data.ruleForm.pre_click_type == 2"
        >
          <el-input
            v-model.trim="data.ruleForm.pre_click_rate.ios"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- Android -->
        <el-form-item
          label="Android(%):"
          prop="pre_click_rate.android"
          v-if="data.ruleForm.pre_click_type == 2"
        >
          <el-input
            v-model.trim="data.ruleForm.pre_click_rate.android"
            class="form-one"
            type="number"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- type -->
        <el-form-item
          label="Type"
          prop="type"
        >
          <div class="flex jc-start form-one jc-start radio-box">
            <el-checkbox-group
              v-model="data.ruleForm.types"
            >
              <el-checkbox
                v-for="item in options.types"
                :key="item.value"
                :label="item.value"
                :disabled="item.require"
              >
                {{ item.label }}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form-item>
        <!-- 广告类型 -->
        <el-form-item
          label="广告类型:"
          prop="channel_content"
        >
          <div class="flex jc-start form-one jc-start radio-box">
            <el-radio
              v-model="data.ruleForm.channel_content"
              :label="1"
            >
              app download
            </el-radio>
            <el-radio
              v-model="data.ruleForm.channel_content"
              :label="2"
            >
              非app download
            </el-radio>
          </div>
        </el-form-item>
        <!-- Channel Type -->
        <el-form-item
          label="Channel Type:"
          prop="channel_type"
        >
          <div class="flex jc-start form-one jc-start radio-box">
            <el-radio
              v-model="data.ruleForm.channel_type"
              label="1"
            >
              代理
            </el-radio>
            <el-radio
              v-model="data.ruleForm.channel_type"
              label="2"
            >
              API
            </el-radio>
            <el-radio
              v-model="data.ruleForm.channel_type"
              label="3"
            >
              直客
            </el-radio>
          </div>
        </el-form-item>
        <!-- Fenix Connected -->
        <el-form-item
          label="Fenix Connected:"
          prop="fenix_connected"
        >
          <div class="flex jc-start form-one jc-start radio-box">
            <el-switch
              v-model="data.ruleForm.fenix_connected"
              :active-value="1"
              :inactive-value="2"
            />
          </div>
        </el-form-item>
        <!-- Adv ID -->
        <el-form-item
          label="Adv ID:"
          prop="adv_id"
        >
          <el-input
            v-model.trim="data.ruleForm.adv_id"
            class="form-one"
            type="text"
            placeholder=""
          ></el-input>
        </el-form-item>
        <!-- Group -->
        <el-form-item
          label="Group:"
          prop="group"
        >
          <el-input
            v-model.trim="data.ruleForm.group"
            class="form-one"
            type="text"
            placeholder=""
          ></el-input>
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
        Save
      </el-button>
    </div>
    <!-- footer -->
  </div>
</template>
<script lang="ts" setup :name="name.value">
import _ from 'lodash'
import { handleAjaxDataObjectFun } from '@/utils/new-format'
import { messageFun } from '@/utils/message'
import { Ref } from 'vue';
import { ApiCreatAdnetwork, ApiEditAdnetwork, ApiGetAdnetworkData } from '@/api/adnetwork'
let { proxy }: any = getCurrentInstance()
const router = useRouter()
const message = {
  required: '此项必填'
}

let options = reactive({
  
  types: [
    { value: '1', label: 'no creatives无素材' },
    { value: '2', label: 'pictures图片广告' },
    { value: '3', label: '原生视频广告' },
    { value: '4', label: 'rewarded video激励视频' },
    { value: '5', label: '敏感频道' },
    { value: '6', label: 'CPS' },
    { value: '7', label: '新banner' },
    { value: '8', label: '新插屏' },
  ]
})

let name: any = ref('')

let pageType: Ref = ref(1)

let data: any = reactive({
  params: '',
  loading: true,
  ruleForm: {
    name: '',
    short_name: '',
    desc: '',
    traffic_type: 1,
    traffic_rate: {
      all: '100',
      ios: '100',
      android: '100'
    },
    pre_click_type: 1,
    pre_click_rate: {
      all: '100',
      ios: '100',
      android: '100'
    },
    types: [],
    channel_content: 1,
    channel_type: '1',
    fenix_connected: 1,
    adv_id: '',
    group: ''
  },
  rules: {
    name: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    short_name: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    desc: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    traffic_type: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    pre_click_type: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    types: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    channel_content: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    channel_type: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    fenix_connected: [{ required: true, message: message.required, trigger: ['blur', 'change'] }],
    
  },
  siteData: []
})

const saveFun = () => {
  submitForm('ruleForm')
}

const submitForm = (formName: string) => {
  proxy.$refs[formName].validate((valid: boolean) => {
    if (valid) {
      submitFormFun()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}


const numberArr = ['traffic_type', 'pre_click_type', 'fenix_connected', 'channel_content']

const submitFormFun = async () => {
  console.log('submit')
  let res: any
  console.log(data.ruleForm)
  let ajaxData: any = {
    ...toRaw(data.ruleForm)
  }
  ajaxData = handleAjaxDataObjectFun(numberArr, ajaxData)
  if (ajaxData.traffic_type === 1) {
    delete ajaxData.traffic_rate.ios
    delete ajaxData.traffic_rate.android
  }
  if (ajaxData.traffic_type === 2) {
    delete ajaxData.traffic_rate.all
  }
  if (ajaxData.pre_click_type === 1) {
    delete ajaxData.pre_click_rate.ios
    delete ajaxData.pre_click_rate.android
  }
  if (ajaxData.pre_click_type === 2) {
    delete ajaxData.pre_click_rate.all
  }
  ajaxData.traffic_rate = JSON.stringify(ajaxData.traffic_rate)
  ajaxData.pre_click_rate = JSON.stringify(ajaxData.pre_click_rate)
  console.log(pageType.value)
  console.log(ajaxData)
  // return false
  // return ajaxData
  if (pageType.value === 1) {
    delete ajaxData['id']
    delete ajaxData['offer_id']
    res = await ApiCreatAdnetwork(ajaxData)
    
  }
  if (pageType.value === 2) {
    res = await ApiEditAdnetwork(ajaxData)
  }
  console.log(res)
  if (messageFun(res)) {
    proxy.$router.push({ path: '/adnetwork/adnetworklist/list' })
    // if (process.env.NODE_ENV !== 'serve-dev') {
    //   window.close()
    // }
  }
}

// edit页面获取offer
const getOfferData = async (id) => {
  const res = await ApiGetAdnetworkData(id)
  console.log(res)
  let { data: result } = res
  result.traffic_rate = JSON.parse(result.traffic_rate)
  result.pre_click_rate = JSON.parse(result.pre_click_rate)
  result.types = JSON.parse(result.type)
  data.ruleForm = {
    ...result
  }
}

onMounted(() => {
  name.value = router.currentRoute.value.name
  console.log(name.value)
  if (name.value === 'ad-network-create') {
    pageType.value = 1
  }
  // 如果是修改，获取当前id的值
  if (name.value === 'ad-network-edit') {
    pageType.value = 2
    const id = router.currentRoute.value.params.id
    console.log(id)
    getOfferData(id)
  }
})
</script>
